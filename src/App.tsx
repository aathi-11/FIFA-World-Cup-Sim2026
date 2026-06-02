import { useState, useEffect } from 'react';
import type { Team, Player, Match } from './types';
import { teamsData } from './data/teamsData';
import { initializeAllPlayers } from './data/playersData';
import type { LiveSyncType } from './components/LiveSync';
import LiveSync from './components/LiveSync';
import { applyLiveResultsToLocks } from './data/liveUpdates';
import type { PlayerPerformance, EloUpdate, LiveInjuries } from './data/liveUpdates';
import { getEnsembleProbabilities } from './utils/simulation';
import { supabase } from './utils/supabaseClient';

// Components
import { Dashboard } from './components/Dashboard';
import { TournamentSimulator } from './components/TournamentSimulator';
import { SquadManager } from './components/SquadManager';
import { MatchPredictor } from './components/MatchPredictor';
import { ModelExplanation } from './components/ModelExplanation';
import { FixturesAndStandings } from './components/FixturesAndStandings';

// Icons
import { Trophy, Users, Sparkles, HelpCircle, Activity, LayoutDashboard, Calendar } from 'lucide-react';

// Analytics
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [teams, setTeams] = useState<Team[]>([]);
  const [playersDb, setPlayersDb] = useState<Record<string, Player[]>>({});
  const [lockedMatches, setLockedMatches] = useState<Record<string, Match>>({});

  // ── Live Data State (populated by LiveSync via Groq) ──────────────────
  const [liveMatchResults, setLiveMatchResults] = useState<unknown[]>([]);
  const [livePerformances, setLivePerformances] = useState<PlayerPerformance[]>([]);
  const [liveElo, setLiveElo] = useState<EloUpdate>({});
  const [liveInjuries, setLiveInjuries] = useState<LiveInjuries>({ injuries: [], suspensions: [] });
  const [customPerformances, setCustomPerformances] = useState<PlayerPerformance[]>([]);

  const hasLiveData =
    liveMatchResults.length > 0 ||
    livePerformances.length > 0 ||
    Object.keys(liveElo).length > 0 ||
    liveInjuries.injuries.length > 0 ||
    liveInjuries.suspensions.length > 0;

  // ── Live Update Handler ────────────────────────────────────────────────
  const handleLiveUpdate = (type: LiveSyncType, data: unknown) => {
    if (type === 'results') {
      const d = data as { matches?: unknown[] };
      const results = (d.matches ?? (Array.isArray(data) ? data : [])) as Parameters<typeof applyLiveResultsToLocks>[1];
      setLiveMatchResults(results);
      
      // Merge real results with pre-match prediction values!
      setLockedMatches(prev => {
        const next = { ...prev };
        results.forEach(res => {
          const matchId = res.matchId;
          const existingMatch = prev[matchId];
          let homeTeamId = existingMatch?.homeTeamId || '';
          let awayTeamId = existingMatch?.awayTeamId || '';
          
          if (!homeTeamId || !awayTeamId) {
            const parts = matchId.split('_');
            if (parts[0] === 'G' && parts.length >= 4) {
              homeTeamId = parts[2];
              awayTeamId = parts.slice(3).join('_');
            }
          }
          if (!homeTeamId || !awayTeamId) return;

          const homeTeam = teams.find(t => t.id === homeTeamId);
          const awayTeam = teams.find(t => t.id === awayTeamId);
          const homeSquad = playersDb[homeTeamId] || [];
          const awaySquad = playersDb[awayTeamId] || [];
          
          let probs = { homeWin: 0.35, awayWin: 0.35, draw: 0.30 };
          let predictedWinner = 'DRAW';
          if (homeTeam && awayTeam) {
            probs = getEnsembleProbabilities(homeTeam, homeSquad, awayTeam, awaySquad, !matchId.startsWith('G_'), 0);
            let maxProb = probs.draw;
            if (probs.homeWin > maxProb) {
              predictedWinner = homeTeamId;
              maxProb = probs.homeWin;
            }
            if (probs.awayWin > probs.homeWin && probs.awayWin > probs.draw) {
              predictedWinner = awayTeamId;
              maxProb = probs.awayWin;
            }
          }

          let winnerId: string | null = null;
          if (res.homeGoals > res.awayGoals) winnerId = homeTeamId;
          else if (res.awayGoals > res.homeGoals) winnerId = awayTeamId;
          else if (res.shootoutHome !== null && res.shootoutAway !== null && res.shootoutHome !== undefined && res.shootoutAway !== undefined) {
            winnerId = res.shootoutHome > res.shootoutAway ? homeTeamId : awayTeamId;
          }

          next[matchId] = {
            id: matchId,
            homeTeamId,
            awayTeamId,
            stage: matchId.startsWith('G_') ? 'GROUP' : 'FINAL',
            goalsHome: res.homeGoals,
            goalsAway: res.awayGoals,
            shootoutGoalsHome: res.shootoutHome ?? null,
            shootoutGoalsAway: res.shootoutAway ?? null,
            winnerId,
            isSimulated: true,
            groupLetter: matchId.startsWith('G_') ? matchId.split('_')[1] : null,
            locked: false,
            realPlayed: true,
            preMatchProbHome: probs.homeWin,
            preMatchProbAway: probs.awayWin,
            preMatchProbDraw: probs.draw,
            preMatchPredictedWinner: predictedWinner
          };
        });
        return next;
      });

      // Batch upsert live match results to Supabase
      const matchInserts: any[] = [];
      results.forEach(res => {
        const matchId = res.matchId;
        const existingMatch = lockedMatches[matchId];
        let homeTeamId = existingMatch?.homeTeamId || '';
        let awayTeamId = existingMatch?.awayTeamId || '';
        
        if (!homeTeamId || !awayTeamId) {
          const parts = matchId.split('_');
          if (parts[0] === 'G' && parts.length >= 4) {
            homeTeamId = parts[2];
            awayTeamId = parts.slice(3).join('_');
          }
        }
        if (!homeTeamId || !awayTeamId) return;

        const homeTeam = teams.find(t => t.id === homeTeamId);
        const awayTeam = teams.find(t => t.id === awayTeamId);
        const homeSquad = playersDb[homeTeamId] || [];
        const awaySquad = playersDb[awayTeamId] || [];
        
        let probs = { homeWin: 0.35, awayWin: 0.35, draw: 0.30 };
        let predictedWinner = 'DRAW';
        if (homeTeam && awayTeam) {
          probs = getEnsembleProbabilities(homeTeam, homeSquad, awayTeam, awaySquad, !matchId.startsWith('G_'), 0);
          let maxProb = probs.draw;
          if (probs.homeWin > maxProb) {
            predictedWinner = homeTeamId;
            maxProb = probs.homeWin;
          }
          if (probs.awayWin > probs.homeWin && probs.awayWin > probs.draw) {
            predictedWinner = awayTeamId;
            maxProb = probs.awayWin;
          }
        }

        let winnerId: string | null = null;
        if (res.homeGoals > res.awayGoals) winnerId = homeTeamId;
        else if (res.awayGoals > res.homeGoals) winnerId = awayTeamId;
        else if (res.shootoutHome !== null && res.shootoutAway !== null && res.shootoutHome !== undefined && res.shootoutAway !== undefined) {
          winnerId = res.shootoutHome > res.shootoutAway ? homeTeamId : awayTeamId;
        }

        matchInserts.push({
          match_id: matchId,
          home_team_id: homeTeamId,
          away_team_id: awayTeamId,
          goals_home: res.homeGoals,
          goals_away: res.awayGoals,
          shootout_goals_home: res.shootoutHome ?? null,
          shootout_goals_away: res.shootoutAway ?? null,
          winner_id: winnerId,
          real_played: true,
          pre_match_prob_home: probs.homeWin,
          pre_match_prob_away: probs.awayWin,
          pre_match_prob_draw: probs.draw,
          pre_match_predicted_winner: predictedWinner
        });
      });

      if (matchInserts.length > 0) {
        supabase.from('match_results').upsert(matchInserts).then(({ error }) => {
          if (error) console.error('Error batch upserting live match results to Supabase:', error.message);
          else console.log(`Successfully synced ${matchInserts.length} match results to Supabase.`);
        });
      }
    }
    if (type === 'performances') {
      const d = data as { performances?: PlayerPerformance[] };
      const perfs = d.performances ?? (Array.isArray(data) ? data as PlayerPerformance[] : []);
      setLivePerformances(perfs);

      // 1. Calculate player states and database upserts
      const playerUpserts: any[] = [];
      const nextDb = { ...playersDb };
      
      perfs.forEach(pPerf => {
        const teamId = pPerf.team;
        const squad = nextDb[teamId];
        if (squad) {
          nextDb[teamId] = squad.map(player => {
            if (player.name.toLowerCase() === pPerf.playerName.toLowerCase()) {
              let ratingDelta = 0;
              if (pPerf.formMultiplier >= 1.25) ratingDelta = 2;
              else if (pPerf.formMultiplier >= 1.1) ratingDelta = 1;
              else if (pPerf.formMultiplier <= 0.75) ratingDelta = -2;
              else if (pPerf.formMultiplier <= 0.88) ratingDelta = -1;

              if (pPerf.goals > 0) ratingDelta += pPerf.goals;
              if (pPerf.assists > 0) ratingDelta += Math.round(pPerf.assists * 0.5);

              const nextRating = Math.max(45, Math.min(98, player.rating + ratingDelta));
              const newGoals = (player.goalsScored || 0) + pPerf.goals;
              const newAssists = (player.assists || 0) + pPerf.assists;
              const newCleanSheets = (player.cleanSheets || 0) + (player.position === 'GK' && pPerf.goals === 0 ? 1 : 0);
              const newSaves = (player.saves || 0) + (player.position === 'GK' ? 3 : 0);

              playerUpserts.push({
                player_id: player.id,
                team_id: teamId,
                player_name: player.name,
                rating: nextRating,
                form: pPerf.formMultiplier,
                injured: pPerf.injured ?? player.injured,
                suspended: pPerf.redCard ?? player.suspended,
                goals_scored: newGoals,
                assists: newAssists,
                clean_sheets: newCleanSheets,
                saves: newSaves
              });

              return {
                ...player,
                rating: nextRating,
                injured: pPerf.injured ?? player.injured,
                suspended: pPerf.redCard ?? player.suspended,
                form: pPerf.formMultiplier,
                goalsScored: newGoals,
                assists: newAssists,
                cleanSheets: newCleanSheets,
                saves: newSaves
              };
            }
            return player;
          });
        }
      });

      // 2. Set React state
      setPlayersDb(nextDb);

      // 3. Upsert to Supabase outside of state updater
      if (playerUpserts.length > 0) {
        supabase.from('player_states').upsert(playerUpserts, { onConflict: 'player_id' }).then(({ error }) => {
          if (error) console.error('Error batch upserting player states to Supabase:', error.message);
          else console.log(`Successfully synced ${playerUpserts.length} player states to Supabase.`);
        });
      }
    }
    if (type === 'elo') {
      const d = data as { updatedElo?: EloUpdate };
      const newElos = d.updatedElo ?? (typeof data === 'object' && data !== null ? data as EloUpdate : {});
      setLiveElo(newElos);

      // 1. Calculate database upserts and updated teams
      const teamUpserts: any[] = [];
      const nextTeams = teams.map(t => {
        if (newElos[t.id]) {
          const nextElo = newElos[t.id];
          teamUpserts.push({
            team_id: t.id,
            elo: nextElo,
            recent_form: t.recentForm
          });
          return {
            ...t,
            elo: nextElo,
            baselineElo: nextElo
          };
        }
        return t;
      });

      // 2. Set React state
      setTeams(nextTeams);

      // 3. Upsert to Supabase
      if (teamUpserts.length > 0) {
        supabase.from('team_states').upsert(teamUpserts, { onConflict: 'team_id' }).then(({ error }) => {
          if (error) console.error('Error batch upserting team Elos to Supabase:', error.message);
          else console.log(`Successfully synced ${teamUpserts.length} team Elo ratings to Supabase.`);
        });
      }
    }
    if (type === 'injuries') {
      const d = data as Partial<LiveInjuries>;
      const injuries = d.injuries ?? [];
      const suspensions = d.suspensions ?? [];
      setLiveInjuries({ injuries, suspensions });

      // 1. Calculate database upserts and updated player states
      const playerUpserts: any[] = [];
      const nextDb = { ...playersDb };
      
      // Reset all player injuries/suspensions first for full sync reliability
      Object.keys(nextDb).forEach(teamId => {
        nextDb[teamId] = nextDb[teamId].map(p => ({
          ...p,
          injured: false,
          suspended: false,
          suspensionRoundsRemaining: 0,
          form: 1.0
        }));
      });

      injuries.forEach(inj => {
        const teamId = inj.team;
        const squad = nextDb[teamId];
        if (squad) {
          nextDb[teamId] = squad.map(p => {
            if (p.name.toLowerCase() === inj.playerName.toLowerCase()) {
              const nextP = { ...p, injured: true, form: 0.0 };
              playerUpserts.push({
                player_id: nextP.id,
                team_id: teamId,
                player_name: nextP.name,
                rating: nextP.rating,
                form: nextP.form,
                injured: nextP.injured,
                suspended: nextP.suspended,
                goals_scored: nextP.goalsScored || 0,
                assists: nextP.assists || 0,
                clean_sheets: nextP.cleanSheets || 0,
                saves: nextP.saves || 0
              });
              return nextP;
            }
            return p;
          });
        }
      });

      suspensions.forEach(susp => {
        const teamId = susp.team;
        const squad = nextDb[teamId];
        if (squad) {
          nextDb[teamId] = squad.map(p => {
            if (p.name.toLowerCase() === susp.playerName.toLowerCase()) {
              const nextP = { 
                ...p, 
                suspended: true, 
                suspensionRoundsRemaining: susp.matchesMissed, 
                form: 0.0 
              };
              playerUpserts.push({
                player_id: nextP.id,
                team_id: teamId,
                player_name: nextP.name,
                rating: nextP.rating,
                form: nextP.form,
                injured: nextP.injured,
                suspended: nextP.suspended,
                goals_scored: nextP.goalsScored || 0,
                assists: nextP.assists || 0,
                clean_sheets: nextP.cleanSheets || 0,
                saves: nextP.saves || 0
              });
              return nextP;
            }
            return p;
          });
        }
      });

      // 2. Set React state
      setPlayersDb(nextDb);

      // 3. Upsert to Supabase
      if (playerUpserts.length > 0) {
        supabase.from('player_states').upsert(playerUpserts, { onConflict: 'player_id' }).then(({ error }) => {
          if (error) console.error('Error batch upserting injury player states to Supabase:', error.message);
          else console.log(`Successfully synced ${playerUpserts.length} injury/suspension player states to Supabase.`);
        });
      }
    }
    if (type === 'form') {
      const d = data as { forms?: Record<string, string[]> };
      const forms = d.forms ?? (typeof data === 'object' && data !== null ? data as Record<string, string[]> : {});
      
      // 1. Calculate database upserts and updated teams
      const teamUpserts: any[] = [];
      const nextTeams = teams.map(t => {
        if (forms[t.id]) {
          const nextForm = forms[t.id];
          teamUpserts.push({
            team_id: t.id,
            elo: t.elo,
            recent_form: nextForm
          });
          return {
            ...t,
            recentForm: nextForm
          };
        }
        return t;
      });

      // 2. Set React state
      setTeams(nextTeams);

      // 3. Upsert to Supabase
      if (teamUpserts.length > 0) {
        supabase.from('team_states').upsert(teamUpserts, { onConflict: 'team_id' }).then(({ error }) => {
          if (error) console.error('Error batch upserting team forms to Supabase:', error.message);
          else console.log(`Successfully synced ${teamUpserts.length} team recent forms to Supabase.`);
        });
      }
    }
  };

  const handleToggleLockMatch = (
    matchId: string, 
    homeTeamId: string, 
    awayTeamId: string, 
    goalsHome: number, 
    goalsAway: number, 
    stage: Match['stage'] = 'GROUP', 
    realPlayed: boolean = false,
    shootoutGoalsHome: number | null = null,
    shootoutGoalsAway: number | null = null
  ) => {
    setLockedMatches(prev => {
      const next = { ...prev };
      if (next[matchId] && next[matchId].realPlayed === realPlayed) {
        delete next[matchId];
        // Delete match result from Supabase in background
        supabase.from('match_results').delete().eq('match_id', matchId).then(({ error }) => {
          if (error) console.error('Error deleting match from Supabase:', error.message);
        });
      } else {
        let winnerId: string | null = null;
        if (goalsHome > goalsAway) winnerId = homeTeamId;
        else if (goalsAway > goalsHome) winnerId = awayTeamId;
        else if (shootoutGoalsHome !== null && shootoutGoalsAway !== null) {
          winnerId = shootoutGoalsHome > shootoutGoalsAway ? homeTeamId : awayTeamId;
        }

        // Calculate pre-match ensemble prediction probabilities right now
        const homeTeamObj = teams.find(t => t.id === homeTeamId);
        const awayTeamObj = teams.find(t => t.id === awayTeamId);
        const homeSquad = playersDb[homeTeamId] || [];
        const awaySquad = playersDb[awayTeamId] || [];
        
        let probs = { homeWin: 0.35, awayWin: 0.35, draw: 0.30 };
        let predictedWinner = 'DRAW';
        if (homeTeamObj && awayTeamObj) {
          probs = getEnsembleProbabilities(homeTeamObj, homeSquad, awayTeamObj, awaySquad, stage !== 'GROUP', 0);
          let maxProb = probs.draw;
          if (probs.homeWin > maxProb) {
            predictedWinner = homeTeamId;
            maxProb = probs.homeWin;
          }
          if (probs.awayWin > probs.homeWin && probs.awayWin > probs.draw) {
            predictedWinner = awayTeamId;
            maxProb = probs.awayWin;
          }
        }

        next[matchId] = {
          id: matchId,
          homeTeamId,
          awayTeamId,
          stage,
          goalsHome,
          goalsAway,
          shootoutGoalsHome,
          shootoutGoalsAway,
          winnerId,
          isSimulated: true,
          groupLetter: matchId.startsWith('G_') ? matchId.split('_')[1] : null,
          locked: !realPlayed,
          realPlayed: realPlayed,
          preMatchProbHome: probs.homeWin,
          preMatchProbAway: probs.awayWin,
          preMatchProbDraw: probs.draw,
          preMatchPredictedWinner: predictedWinner
        };

        // Upsert match result to Supabase in background
        supabase.from('match_results').upsert({
          match_id: matchId,
          home_team_id: homeTeamId,
          away_team_id: awayTeamId,
          goals_home: goalsHome,
          goals_away: goalsAway,
          shootout_goals_home: shootoutGoalsHome,
          shootout_goals_away: shootoutGoalsAway,
          winner_id: winnerId,
          real_played: realPlayed,
          pre_match_prob_home: probs.homeWin,
          pre_match_prob_away: probs.awayWin,
          pre_match_prob_draw: probs.draw,
          pre_match_predicted_winner: predictedWinner
        }, { onConflict: 'match_id' }).then(({ error }) => {
          if (error) console.error('Error upserting match to Supabase:', error.message);
        });
      }
      return next;
    });
  };

  const handleSaveMatchPerformances = (matchId: string, perfs: PlayerPerformance[]) => {
    // 1. Update customPerformances state
    setCustomPerformances(prev => {
      const filtered = prev.filter(p => p.matchId !== matchId);
      return [...filtered, ...perfs];
    });

    // 2. Permanently update player ratings in playersDb based on scorer inputs
    setPlayersDb(prevDb => {
      const nextDb = { ...prevDb };
      perfs.forEach(pPerf => {
        const teamId = pPerf.team;
        const squad = nextDb[teamId];
        if (squad) {
          nextDb[teamId] = squad.map(player => {
            if (player.name.toLowerCase() === pPerf.playerName.toLowerCase()) {
              let ratingDelta = 0;
              if (pPerf.formMultiplier >= 1.25) ratingDelta = 2;
              else if (pPerf.formMultiplier >= 1.1) ratingDelta = 1;
              else if (pPerf.formMultiplier <= 0.75) ratingDelta = -2;
              else if (pPerf.formMultiplier <= 0.88) ratingDelta = -1;

              // Goal & Assist bonus
              if (pPerf.goals > 0) ratingDelta += pPerf.goals;
              if (pPerf.assists > 0) ratingDelta += Math.round(pPerf.assists * 0.5);

              // GK bonus: clean sheet and saves
              if (player.position === 'GK' && pPerf.cleanSheet) ratingDelta += 2;
              if (player.position === 'GK' && (pPerf.saves || 0) >= 5) ratingDelta += 1;

              const nextRating = Math.max(45, Math.min(98, player.rating + ratingDelta));
              const newGoals = (player.goalsScored || 0) + pPerf.goals;
              const newAssists = (player.assists || 0) + pPerf.assists;
              const newCleanSheets = (player.cleanSheets || 0) + (pPerf.cleanSheet ? 1 : 0);
              const newSaves = (player.saves || 0) + (pPerf.saves || 0);
              
              // Write updated player state to Supabase
              supabase.from('player_states').upsert({
                player_id: player.id,
                team_id: teamId,
                player_name: player.name,
                rating: nextRating,
                form: pPerf.formMultiplier,
                injured: pPerf.injured,
                suspended: pPerf.redCard,
                goals_scored: newGoals,
                assists: newAssists,
                clean_sheets: newCleanSheets,
                saves: newSaves
              }, { onConflict: 'player_id' }).then(({ error }) => {
                if (error) console.error('Error upserting player state to Supabase:', error.message);
                else console.log(`✅ Saved ${player.name} stats to Supabase`);
              });

              return {
                ...player,
                rating: nextRating,
                injured: pPerf.injured,
                suspended: pPerf.redCard,
                form: pPerf.formMultiplier,
                goalsScored: newGoals,
                assists: newAssists,
                cleanSheets: newCleanSheets,
                saves: newSaves
              };
            }
            return player;
          });
        }
      });
      return nextDb;
    });

  };

  // Initialize data on mount
  useEffect(() => {
    // 1. Initialize teams
    const initialTeams: Team[] = teamsData.map(team => ({
      ...team,
      baselineElo: team.elo
    }));
    
    // 2. Initialize players database (procedural + preloaded)
    const initialPlayersDb = initializeAllPlayers(initialTeams);
    
    // 3. Compute dynamic team strength metrics on load
    const updatedTeams = initialTeams.map(team => {
      const squad = initialPlayersDb[team.id] || [];
      
      // Calculate SQI
      const active = squad.filter(p => !p.injured && !p.suspended);
      const sqi = active.length > 0 
        ? Math.round(active.reduce((sum, p) => sum + p.rating, 0) / active.length) 
        : 50;

      return {
        ...team,
        sqi
      };
    });

    setTeams(updatedTeams);
    setPlayersDb(initialPlayersDb);

    // Sync from Supabase DB in the background
    const syncFromSupabase = async () => {
      try {
        // 1. Fetch match results
        const { data: dbMatches, error: matchesError } = await supabase
          .from('match_results')
          .select('*');

        if (matchesError) {
          console.warn('Could not load matches from Supabase:', matchesError.message);
        } else if (dbMatches && dbMatches.length > 0) {
          const loadedLocks: Record<string, Match> = {};
          dbMatches.forEach((dbM: any) => {
            loadedLocks[dbM.match_id] = {
              id: dbM.match_id,
              homeTeamId: dbM.home_team_id,
              awayTeamId: dbM.away_team_id,
              stage: dbM.match_id.startsWith('G_') ? 'GROUP' : 'FINAL',
              goalsHome: dbM.goals_home,
              goalsAway: dbM.goals_away,
              shootoutGoalsHome: dbM.shootout_goals_home,
              shootoutGoalsAway: dbM.shootout_goals_away,
              winnerId: dbM.winner_id,
              isSimulated: false,
              groupLetter: dbM.match_id.startsWith('G_') ? dbM.match_id.split('_')[1] : null,
              locked: !dbM.real_played,
              realPlayed: dbM.real_played,
              preMatchProbHome: dbM.pre_match_prob_home ? parseFloat(dbM.pre_match_prob_home) : undefined,
              preMatchProbAway: dbM.pre_match_prob_away ? parseFloat(dbM.pre_match_prob_away) : undefined,
              preMatchProbDraw: dbM.pre_match_prob_draw ? parseFloat(dbM.pre_match_prob_draw) : undefined,
              preMatchPredictedWinner: dbM.pre_match_predicted_winner || undefined
            };
          });
          setLockedMatches(loadedLocks);
        }

        // 2. Fetch player states overrides
        const { data: dbPlayers, error: playersError } = await supabase
          .from('player_states')
          .select('*');

        if (playersError) {
          console.warn('Could not load player states from Supabase:', playersError.message);
        } else if (dbPlayers && dbPlayers.length > 0) {
          setPlayersDb(prevDb => {
            const nextDb = { ...prevDb };
            dbPlayers.forEach((dbP: any) => {
              const teamId = dbP.team_id;
              const squad = nextDb[teamId];
              if (squad) {
                nextDb[teamId] = squad.map(p => {
                  if (p.id === dbP.player_id) {
                    return {
                      ...p,
                      rating: dbP.rating,
                      form: parseFloat(dbP.form),
                      injured: dbP.injured,
                      suspended: dbP.suspended,
                      goalsScored: dbP.goals_scored,
                      assists: dbP.assists,
                      cleanSheets: dbP.clean_sheets || 0,
                      saves: dbP.saves || 0
                    };
                  }
                  return p;
                });
              }
            });

            // Recalculate SQIs after merging player states
            setTeams(prevTeams => {
              return prevTeams.map(t => {
                const sq = nextDb[t.id] || [];
                const act = sq.filter(pl => !pl.injured && !pl.suspended);
                const s = act.length > 0 ? Math.round(act.reduce((sum, pl) => sum + pl.rating, 0) / act.length) : 50;
                return { ...t, sqi: s };
              });
            });

            return nextDb;
          });
        }

        // 3. Fetch team states overrides
        const { data: dbTeams, error: teamsError } = await supabase
          .from('team_states')
          .select('*');

        if (teamsError) {
          console.warn('Could not load team states from Supabase:', teamsError.message);
        } else if (dbTeams && dbTeams.length > 0) {
          setTeams(prevTeams => {
            return prevTeams.map(t => {
              const dbT = dbTeams.find((x: any) => x.team_id === t.id);
              if (dbT) {
                return {
                  ...t,
                  elo: dbT.elo ?? t.elo,
                  baselineElo: dbT.elo ?? t.baselineElo,
                  recentForm: dbT.recent_form ?? t.recentForm
                };
              }
              return t;
            });
          });
        }
      } catch (err) {
        console.error('Failed to sync with Supabase on mount:', err);
      }
    };

    syncFromSupabase();
  }, []);

  // Handler to update a player's details (rating, injury, suspension)
  const handleUpdatePlayer = (teamId: string, playerId: string, updates: Partial<Player>) => {
    setPlayersDb(prevDb => {
      const currentSquad = prevDb[teamId] || [];
      const updatedSquad = currentSquad.map(p => {
        if (p.id === playerId) {
          // If marking injured or suspended, we adjust form multiplier for extra realism
          const formValue = updates.injured || updates.suspended ? 0.0 : 1.0;
          return {
            ...p,
            ...updates,
            form: updates.form !== undefined ? updates.form : formValue
          };
        }
        return p;
      });

      // Recalculate team strength and update the team state
      setTeams(prevTeams => {
        return prevTeams.map(t => {
          if (t.id === teamId) {
            // Calculate new SQI
            const active = updatedSquad.filter(p => !p.injured && !p.suspended);
            const sqi = active.length > 0 
              ? Math.round(active.reduce((sum, p) => sum + p.rating, 0) / active.length) 
              : 0;
            
            return {
              ...t,
              sqi
            };
          }
          return t;
        });
      });

      return {
        ...prevDb,
        [teamId]: updatedSquad
      };
    });
  };

  const renderActiveTabContent = () => {
    if (teams.length === 0) {
      return (
        <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
          <Activity className="animate-pulse" style={{ color: 'var(--accent-gold)', width: '48px', height: '48px', margin: '0 auto 1rem auto' }} />
          <h3>Loading Tournament Database...</h3>
        </div>
      );
    }

    switch (activeTab) {
      case 'dashboard':
        return <Dashboard teams={teams} onSelectTab={setActiveTab} />;
      case 'fixtures':
        return (
          <FixturesAndStandings
            teams={teams}
            lockedMatches={lockedMatches}
            onToggleLockMatch={handleToggleLockMatch}
            onClearLocks={() => setLockedMatches({})}
          />
        );
      case 'simulator':
        return (
          <TournamentSimulator 
            teams={teams} 
            playersDb={playersDb} 
            lockedMatches={lockedMatches} 
            onToggleLockMatch={handleToggleLockMatch}
            onClearLocks={() => setLockedMatches({})}
            liveElo={liveElo}
            livePerformances={[...livePerformances, ...customPerformances]}
            onUpdatePlayer={handleUpdatePlayer}
            onSaveMatchPerformances={handleSaveMatchPerformances}
          />
        );
      case 'squad':
        return <SquadManager teams={teams} playersDb={playersDb} onUpdatePlayer={handleUpdatePlayer} />;
      case 'predictor':
        return <MatchPredictor teams={teams} playersDb={playersDb} />;
      case 'info':
        return <ModelExplanation />;
      default:
        return <Dashboard teams={teams} onSelectTab={setActiveTab} />;
    }
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="brand" onClick={() => setActiveTab('dashboard')} style={{ cursor: 'pointer' }}>
          <Trophy style={{ color: 'var(--accent-gold)', width: '32px', height: '32px' }} />
          <div>
            <div className="brand-logo">MUNDIAL <span>2026</span></div>
            <div className="brand-subtitle">Prediction Console</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="nav-menu">
          <button 
            className={`nav-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <LayoutDashboard style={{ width: '16px', height: '16px' }} />
            Dashboard
          </button>
          <button 
            className={`nav-btn ${activeTab === 'fixtures' ? 'active' : ''}`}
            onClick={() => setActiveTab('fixtures')}
          >
            <Calendar style={{ width: '16px', height: '16px' }} />
            Fixtures & Standings
          </button>
          <button 
            className={`nav-btn ${activeTab === 'simulator' ? 'active' : ''}`}
            onClick={() => setActiveTab('simulator')}
          >
            <Trophy style={{ width: '16px', height: '16px' }} />
            Tournament Simulator
          </button>
          <button 
            className={`nav-btn ${activeTab === 'squad' ? 'active' : ''}`}
            onClick={() => setActiveTab('squad')}
          >
            <Users style={{ width: '16px', height: '16px' }} />
            Squad Manager
          </button>
          <button 
            className={`nav-btn ${activeTab === 'predictor' ? 'active' : ''}`}
            onClick={() => setActiveTab('predictor')}
          >
            <Sparkles style={{ width: '16px', height: '16px' }} />
            Match Predictor
          </button>
          <button 
            className={`nav-btn ${activeTab === 'info' ? 'active' : ''}`}
            onClick={() => setActiveTab('info')}
          >
            <HelpCircle style={{ width: '16px', height: '16px' }} />
            Model Math
          </button>
        </nav>

        {/* Live Sync Panel */}
        <LiveSync onUpdate={handleLiveUpdate} hasLiveData={hasLiveData} />
      </header>

      {/* Main Content Area */}
      <main className="tabs-content">
        {renderActiveTabContent()}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Antigravity FIFA World Cup Predictor. Running on React + TypeScript.</p>
        <p style={{ marginTop: '6px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          Simulation Engine calibrated at &ge;20% match classification error rate to respect football entropy (upset factor).
        </p>
      </footer>
      
      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
}

export default App;
