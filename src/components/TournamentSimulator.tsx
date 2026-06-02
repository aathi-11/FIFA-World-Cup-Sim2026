import React, { useState, useEffect, useRef, useMemo } from 'react';
import type { Team, Player, Match, GroupStanding, SimulationSummary, TeamSimStats, GoldenBootPlayer, GoldenGlovePlayer } from '../types';
import { Flag } from './Flag';
import type { PlayerPerformance, EloUpdate } from '../data/liveUpdates';
import { Play, RotateCcw, BarChart3, Trophy, Layers, Lock, Zap, TrendingUp, TrendingDown, Sparkles } from 'lucide-react';
import { runFullTournamentSimulation, runMonteCarloSimulation, applyLiveElo, getEnsembleProbabilities } from '../utils/simulation';
import { modelWeightSummary } from '../utils/ensemble';
import { supabase } from '../utils/supabaseClient';

// ChartJS registration
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const STADIUMS = [
  "Estadio Azteca, Mexico City",
  "MetLife Stadium, New York/New Jersey",
  "Hard Rock Stadium, Miami",
  "Mercedes-Benz Stadium, Atlanta",
  "AT&T Stadium, Dallas",
  "Gillette Stadium, Boston",
  "SoFi Stadium, Los Angeles",
  "Arrowhead Stadium, Kansas City",
  "BMO Field, Toronto",
  "Estadio Akron, Guadalajara",
  "Lincoln Financial Field, Philadelphia",
  "Lumen Field, Seattle",
  "Levi's Stadium, San Francisco Bay Area",
  "NRG Stadium, Houston",
  "BC Place, Vancouver",
  "Estadio BBVA, Monterrey"
];

interface TournamentSimulatorProps {
  teams: Team[];
  playersDb: Record<string, Player[]>;
  lockedMatches?: Record<string, Match>;
  onToggleLockMatch?: (
    matchId: string, 
    homeTeamId: string, 
    awayTeamId: string, 
    goalsHome: number, 
    goalsAway: number,
    stage?: Match['stage'],
    realPlayed?: boolean,
    shootoutGoalsHome?: number | null,
    shootoutGoalsAway?: number | null
  ) => void;
  onClearLocks?: () => void;
  /** Live Elo ratings fetched from Groq — overrides baseline Elo in MC runs */
  liveElo?: EloUpdate;
  /** Live player performances fetched from Groq — overrides static form multipliers */
  livePerformances?: PlayerPerformance[];
  onUpdatePlayer?: (teamId: string, playerId: string, updates: Partial<Player>) => void;
  onSaveMatchPerformances?: (matchId: string, perfs: PlayerPerformance[]) => void;
}

export const TournamentSimulator: React.FC<TournamentSimulatorProps> = ({ 
  teams, 
  playersDb,
  lockedMatches = {},
  onToggleLockMatch,
  onClearLocks,
  liveElo = {},
  livePerformances = [],
  onSaveMatchPerformances
}) => {
  // ── Probability Delta Tracking ─────────────────────────────────────────────
  // Stores the previous run's champion % per team to compute deltas after each new MC run
  const prevProbabilities = useRef<Record<string, number>>({});
  const [simMode, setSimMode] = useState<'SINGLE' | 'MONTE_CARLO'>('SINGLE');
  const [isSimulating, setIsSimulating] = useState(false);
  const [progress, setProgress] = useState(0);
  
  // Local temporary inputs for locks
  const [lockScores, setLockScores] = useState<Record<string, { goalsHome: number; goalsAway: number }>>({});

  // Single Run States
  const [singleResult, setSingleResult] = useState<{
    matches: Match[];
    groupStandings: Record<string, GroupStanding[]>;
    thirdPlaceStandings: GroupStanding[];
    qualifiedKnockoutTeams: string[];
    simulated: boolean;
  }>({
    matches: [],
    groupStandings: {},
    thirdPlaceStandings: [],
    qualifiedKnockoutTeams: [],
    simulated: false
  });

  // Monte Carlo States
  const [mcResult, setMcResult] = useState<{
    summary: SimulationSummary | null;
    sortedStats: TeamSimStats[];
    simulated: boolean;
  }>({
    summary: null,
    sortedStats: [],
    simulated: false
  });

  const [startFromCurrent, setStartFromCurrent] = useState(false);

  // Sub-tabs in SINGLE simulation mode
  const [subTab, setSubTab] = useState<'BRACKET' | 'SCHEDULE'>('BRACKET');
  
  // Sub-tabs in MONTE_CARLO simulation mode
  const [mcSubTab, setMcSubTab] = useState<'PROBABILITIES' | 'INTELLIGENCE'>('PROBABILITIES');
  const [autoRunMC, setAutoRunMC] = useState(true);
  
  // Schedule filters
  const [scheduleSearch, setScheduleSearch] = useState('');
  const [scheduleStageFilter, setScheduleStageFilter] = useState<'ALL' | Match['stage']>('ALL');
  const [scheduleStadiumFilter, setScheduleStadiumFilter] = useState('ALL');
  const [scheduleStatusFilter, setScheduleStatusFilter] = useState<'ALL' | 'LOCKED' | 'UNLOCKED'>('ALL');

  // Side-effect-free simulation run on mount (and on dependency change) to populate matches initially
  useEffect(() => {
    if (teams.length > 0 && Object.keys(playersDb).length > 0) {
      const teamsWithLiveElo = applyLiveElo(teams, liveElo);
      const clonedTeams = JSON.parse(JSON.stringify(teamsWithLiveElo)) as Team[];
      const clonedPlayersDb = JSON.parse(JSON.stringify(playersDb)) as Record<string, Player[]>;
      const res = runFullTournamentSimulation(clonedTeams, clonedPlayersDb, lockedMatches, startFromCurrent);
      setSingleResult(prev => ({
        ...res,
        simulated: prev.simulated // Maintain whatever simulation status (true/false) was there!
      }));
    }
  }, [teams, playersDb, lockedMatches, startFromCurrent, liveElo]);

  // ── Auto-run Monte Carlo when lockedMatches count changes
  const prevLockedCount = useRef(Object.keys(lockedMatches).length);
  useEffect(() => {
    const currentCount = Object.keys(lockedMatches).length;
    if (currentCount !== prevLockedCount.current) {
      prevLockedCount.current = currentCount;
      if (autoRunMC && teams.length > 0 && Object.keys(playersDb).length > 0) {
        // Auto-run 1,000 runs to update champion probabilities instantly on live scores or edits!
        handleMonteCarloSimulation(1000);
      }
    }
  }, [lockedMatches, autoRunMC, teams, playersDb]);

  const getTeam = (id: string): Team => {
    const teamsWithLiveElo = applyLiveElo(teams, liveElo);
    return teamsWithLiveElo.find(t => t.id === id) || {
      id, name: id, group: 'A', elo: 1500, baselineElo: 1500, fifaRank: 100, sqi: 50, flag: '❓', recentForm: [], stars: 1
    };
  };

  const handleSingleSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => {
      const teamsWithLiveElo = applyLiveElo(teams, liveElo);
      const res = runFullTournamentSimulation(teamsWithLiveElo, playersDb, lockedMatches, startFromCurrent);
      setSingleResult({
        ...res,
        simulated: true
      });
      setIsSimulating(false);
    }, 400);
  };

  const handleMonteCarloSimulation = (runs: number) => {
    setIsSimulating(true);
    setProgress(0);
    
    // Reset goalsScored accumulation before Monte Carlo starts if fresh
    if (!startFromCurrent) {
      Object.values(playersDb).forEach(squad => {
        squad.forEach(p => { p.goalsScored = 0; });
      });
    }
    
    setTimeout(() => {
      const summary = runMonteCarloSimulation(
        teams, 
        playersDb, 
        runs, 
        lockedMatches, 
        (pct) => setProgress(pct),
        startFromCurrent,
        liveElo,
        livePerformances
      );
      // Sort stats by champion count
      const sortedStats = Object.values(summary.stats).sort((a, b) => b.championCount - a.championCount);

      // ── Save previous probabilities before overwriting for delta display
      const newProbs: Record<string, number> = {};
      sortedStats.forEach(s => {
        newProbs[s.teamId] = (s.championCount / summary.simulationsRun) * 100;
      });
      prevProbabilities.current = mcResult.simulated
        ? Object.fromEntries(
            Object.values(mcResult.summary?.stats ?? {}).map(s => [
              s.teamId,
              (s.championCount / (mcResult.summary?.simulationsRun || 1)) * 100
            ])
          )
        : {};
      
      setMcResult({
        summary,
        sortedStats,
        simulated: true
      });

      // ── Save history of probabilities keyed by number of locked matches
      const lockedCount = Object.keys(lockedMatches).length;
      try {
        const historyRaw = localStorage.getItem('wc2026_probability_history') || '{}';
        const history = JSON.parse(historyRaw) as Record<string, Record<string, number>>;
        history[lockedCount.toString()] = newProbs;
        localStorage.setItem('wc2026_probability_history', JSON.stringify(history));
      } catch (err) {
        console.error('Failed to save probability history:', err);
      }

      // Log Monte Carlo simulation probabilities to Supabase user_simulations table in the background
      supabase.from('user_simulations').insert({
        champion_probabilities: newProbs,
        locked_matches_count: lockedCount,
        simulation_runs: runs
      }).then(({ error }) => {
        if (error) console.error('Error logging simulation run to Supabase:', error.message);
        else console.log('Successfully saved Monte Carlo results to Supabase!');
      });

      setIsSimulating(false);
    }, 100);
  };

  const resetSimulations = () => {
    setSingleResult({
      matches: [],
      groupStandings: {},
      thirdPlaceStandings: [],
      qualifiedKnockoutTeams: [],
      simulated: false
    });
    setMcResult({
      summary: null,
      sortedStats: [],
      simulated: false
    });
    setProgress(0);
  };

  const getMatchesForStage = (stage: Match['stage']) => {
    return singleResult.matches.filter(m => m.stage === stage);
  };

  // Local helper to change inputs before locking
  const handleInputChange = (matchId: string, side: 'home' | 'away', val: number) => {
    setLockScores(prev => {
      const current = prev[matchId] || { goalsHome: 0, goalsAway: 0 };
      return {
        ...prev,
        [matchId]: {
          ...current,
          goalsHome: side === 'home' ? val : current.goalsHome,
          goalsAway: side === 'away' ? val : current.goalsAway
        }
      };
    });
  };

  // Top 10 goalscorers: real match goals first, then simulation averages
  const getGoldenBootLeaderboard = (): GoldenBootPlayer[] => {
    const allPlayers: GoldenBootPlayer[] = [];
    Object.keys(playersDb).forEach(teamId => {
      const team = getTeam(teamId);
      playersDb[teamId].forEach(p => {
        // Simulated goals from Monte Carlo (goalsScored holds avg per run after MC)
        const simAvgGoals = (mcResult.simulated && mcResult.summary && p.goalsScored && p.goalsScored > 0)
          ? p.goalsScored
          : 0;
        // Only show players with real goals OR meaningful sim goals
        const totalRealGoals = p.goalsScored || 0;
        if (totalRealGoals > 0 || simAvgGoals > 0) {
          allPlayers.push({
            playerId: p.id,
            name: p.name,
            teamId: team.id,
            teamName: team.name,
            teamFlag: team.flag,
            goals: mcResult.simulated && mcResult.summary
              ? Math.round(simAvgGoals * mcResult.summary.simulationsRun)
              : totalRealGoals,
            avgGoals: simAvgGoals > 0 ? simAvgGoals : totalRealGoals,
            realGoals: totalRealGoals
          });
        }
      });
    });

    return allPlayers
      .sort((a, b) => {
        // Sort by real goals first, then by avgGoals from simulation
        if ((b.realGoals || 0) !== (a.realGoals || 0)) return (b.realGoals || 0) - (a.realGoals || 0);
        return b.avgGoals - a.avgGoals;
      })
      .slice(0, 15);
  };

  // Top 10 GKs ranked by clean sheets and saves (from real match scorer panel entries)
  const getGoldenGloveLeaderboard = (): GoldenGlovePlayer[] => {
    const allGKs: GoldenGlovePlayer[] = [];
    Object.keys(playersDb).forEach(teamId => {
      const team = getTeam(teamId);
      playersDb[teamId].forEach(p => {
        if (p.position === 'GK') {
          const cs = p.cleanSheets || 0;
          const sv = p.saves || 0;
          if (cs > 0 || sv > 0) {
            allGKs.push({
              playerId: p.id,
              name: p.name,
              teamId: team.id,
              teamName: team.name,
              teamFlag: team.flag,
              cleanSheets: cs,
              saves: sv,
              rating: p.rating
            });
          }
        }
      });
    });
    return allGKs
      .sort((a, b) => b.cleanSheets !== a.cleanSheets ? b.cleanSheets - a.cleanSheets : b.saves - a.saves)
      .slice(0, 10);
  };

  const topScorers = getGoldenBootLeaderboard();
  const topGKs = getGoldenGloveLeaderboard();

  // Filtered and sorted matches for the schedule table
  const filteredMatches = (singleResult.matches || [])
    .filter((m: Match) => {
      // 1. Search filter (team name)
      if (scheduleSearch.trim()) {
        const query = scheduleSearch.toLowerCase();
        const homeName = getTeam(m.homeTeamId).name.toLowerCase();
        const awayName = getTeam(m.awayTeamId).name.toLowerCase();
        if (!homeName.includes(query) && !awayName.includes(query)) {
          return false;
        }
      }

      // 2. Stage filter
      if (scheduleStageFilter !== 'ALL' && m.stage !== scheduleStageFilter) {
        return false;
      }

      // 3. Stadium filter
      if (scheduleStadiumFilter !== 'ALL' && m.stadium !== scheduleStadiumFilter) {
        return false;
      }

      // 4. Status filter
      if (scheduleStatusFilter !== 'ALL') {
        const lockMatch = lockedMatches[m.id];
        const isLockedOrReal = !!lockMatch && (lockMatch.locked || lockMatch.realPlayed);
        if (scheduleStatusFilter === 'LOCKED' && !isLockedOrReal) return false;
        if (scheduleStatusFilter === 'UNLOCKED' && isLockedOrReal) return false;
      }

      return true;
    })
    .sort((a: Match, b: Match) => (a.matchNumber || 0) - (b.matchNumber || 0));

  // ChartJS Data setup
  const chartData = {
    labels: mcResult.sortedStats.slice(0, 12).map(s => getTeam(s.teamId).name),
    datasets: [
      {
        label: 'Win Probability (%)',
        data: mcResult.sortedStats.slice(0, 12).map(s => (s.championCount / mcResult.summary!.simulationsRun) * 100),
        backgroundColor: mcResult.sortedStats.slice(0, 12).map((_, idx) => {
          if (idx === 0) return 'rgba(212, 175, 55, 0.85)'; // Champion Gold
          if (idx === 1) return 'rgba(0, 242, 254, 0.75)'; // Cyan
          return 'rgba(79, 172, 254, 0.55)'; // Soft blue
        }),
        borderColor: mcResult.sortedStats.slice(0, 12).map((_, idx) => {
          if (idx === 0) return '#d4af37';
          if (idx === 1) return '#00f2fe';
          return '#4facfe';
        }),
        borderWidth: 1.5,
        borderRadius: 6,
        barThickness: 14
      }
    ]
  };

  // Probability deltas vs. previous MC run
  const probabilityDeltas = mcResult.sortedStats.reduce((acc, s) => {
    const current = (s.championCount / mcResult.summary!.simulationsRun) * 100;
    const previous = prevProbabilities.current[s.teamId];
    acc[s.teamId] = previous !== undefined ? current - previous : 0;
    return acc;
  }, {} as Record<string, number>);

  const chartOptions = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(18, 22, 44, 0.95)',
        titleColor: '#fff',
        bodyColor: '#ffe885',
        borderColor: 'rgba(255,255,255,0.08)',
        borderWidth: 1,
        callbacks: {
          label: (context: any) => ` Champion Probability: ${context.parsed.x.toFixed(1)}%`
        }
      }
    },
    scales: {
      x: {
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: { color: '#a1a8c3', font: { family: 'Inter' } }
      },
      y: {
        grid: { display: false },
        ticks: { color: '#f3f4f6', font: { family: 'Outfit', weight: 600 } }
      }
    }
  };

  // ── Phase 3: Model Intelligence calculations
  const getModelIntelligenceStats = useMemo(() => {
    // Filter locked matches to only real played ones
    const realMatches = Object.values(lockedMatches).filter(m => m.realPlayed);
    
    if (realMatches.length === 0) {
      return {
        accuracy: 0,
        correctCount: 0,
        totalCount: 0,
        roundStats: {} as Record<Match['stage'], { correct: number; total: number }>,
        upsets: [] as { match: Match; home: Team; away: Team; upsetProb: number; predictedWinner: string; actualWinner: string }[],
        matchReports: [] as { match: Match; home: Team; away: Team; correct: boolean; probs: { homeWin: number; awayWin: number; draw: number }; predictedWinner: string; actualWinner: string }[]
      };
    }

    let correctCount = 0;
    const roundStats: Record<string, { correct: number; total: number }> = {};
    const upsets: { match: Match; home: Team; away: Team; upsetProb: number; predictedWinner: string; actualWinner: string }[] = [];
    const matchReports: { match: Match; home: Team; away: Team; correct: boolean; probs: { homeWin: number; awayWin: number; draw: number }; predictedWinner: string; actualWinner: string }[] = [];

    realMatches.forEach(m => {
      const home = getTeam(m.homeTeamId);
      const away = getTeam(m.awayTeamId);
      const homeSquad = playersDb[m.homeTeamId] || [];
      const awaySquad = playersDb[m.awayTeamId] || [];
      
      // Use stored pre-match prediction if available, else fallback to on-the-fly
      let probs = {
        homeWin: m.preMatchProbHome !== undefined ? m.preMatchProbHome : 0,
        awayWin: m.preMatchProbAway !== undefined ? m.preMatchProbAway : 0,
        draw: m.preMatchProbDraw !== undefined ? m.preMatchProbDraw : 0
      };
      
      let predictedWinner = m.preMatchPredictedWinner || 'DRAW';
      
      if (m.preMatchProbHome === undefined) {
        const calculated = getEnsembleProbabilities(home, homeSquad, away, awaySquad, m.stage !== 'GROUP', m.matchNumber || 0);
        probs = {
          homeWin: calculated.homeWin,
          awayWin: calculated.awayWin,
          draw: calculated.draw
        };
        
        let maxProb = probs.draw;
        predictedWinner = 'DRAW';
        if (probs.homeWin > maxProb) {
          predictedWinner = m.homeTeamId;
          maxProb = probs.homeWin;
        }
        if (probs.awayWin > probs.homeWin && probs.awayWin > probs.draw) {
          predictedWinner = m.awayTeamId;
          maxProb = probs.awayWin;
        }
      }

      // Actual Outcome
      let actualWinner = 'DRAW';
      if (m.goalsHome !== null && m.goalsAway !== null) {
        if (m.goalsHome > m.goalsAway) actualWinner = m.homeTeamId;
        else if (m.goalsAway > m.goalsHome) actualWinner = m.awayTeamId;
        else if (m.shootoutGoalsHome !== null && m.shootoutGoalsAway !== null) {
          actualWinner = m.shootoutGoalsHome > m.shootoutGoalsAway ? m.homeTeamId : m.awayTeamId;
        }
      }

      // Is prediction correct?
      const isCorrect = predictedWinner === actualWinner;
      if (isCorrect) correctCount++;

      // Track per-round stats
      if (!roundStats[m.stage]) {
        roundStats[m.stage] = { correct: 0, total: 0 };
      }
      roundStats[m.stage].total++;
      if (isCorrect) roundStats[m.stage].correct++;

      // Upset probability calculation (Upset Index = 1 - winner probability)
      let actualProb = probs.draw;
      if (actualWinner === m.homeTeamId) actualProb = probs.homeWin;
      else if (actualWinner === m.awayTeamId) actualProb = probs.awayWin;
      
      const upsetProb = 1 - actualProb;

      upsets.push({
        match: m,
        home,
        away,
        upsetProb,
        predictedWinner,
        actualWinner
      });

      matchReports.push({
        match: m,
        home,
        away,
        correct: isCorrect,
        probs,
        predictedWinner,
        actualWinner
      });
    });

    // Sort upsets descending by upsetProb
    upsets.sort((a, b) => b.upsetProb - a.upsetProb);

    return {
      accuracy: Math.round((correctCount / realMatches.length) * 100),
      correctCount,
      totalCount: realMatches.length,
      roundStats,
      upsets: upsets.slice(0, 5), // Top 5 upsets
      matchReports: matchReports.sort((a, b) => (b.match.matchNumber || 0) - (a.match.matchNumber || 0)) // Sorted by match number descending
    };
  }, [lockedMatches, playersDb]);

  const locksCount = Object.keys(lockedMatches).length;

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* Simulation Selector Bar */}
      <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-glass)', padding: '4px', borderRadius: '25px', gap: '4px' }}>
          <button 
            className={`btn ${simMode === 'SINGLE' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => { setSimMode('SINGLE'); resetSimulations(); }}
            style={{ padding: '8px 18px', fontSize: '0.85rem', borderRadius: '20px' }}
            disabled={isSimulating}
          >
            <Layers style={{ width: '14px', height: '14px' }} />
            Single Run Visualizer
          </button>
          <button 
            className={`btn ${simMode === 'MONTE_CARLO' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => { setSimMode('MONTE_CARLO'); resetSimulations(); }}
            style={{ padding: '8px 18px', fontSize: '0.85rem', borderRadius: '20px' }}
            disabled={isSimulating}
          >
            <BarChart3 style={{ width: '14px', height: '14px' }} />
            Monte Carlo Simulator
          </button>
        </div>

        {/* Locked indicators */}
        {locksCount > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--accent-cyan)', background: 'rgba(0, 242, 254, 0.05)', padding: '6px 12px', borderRadius: '15px', border: '1px solid rgba(0, 242, 254, 0.15)' }}>
            <Lock style={{ width: '12px', height: '12px' }} />
            <span>{locksCount} Scenario Results Locked</span>
            {onClearLocks && (
              <button 
                onClick={onClearLocks} 
                style={{ background: 'transparent', border: 'none', color: 'var(--accent-error)', cursor: 'pointer', fontWeight: 'bold', marginLeft: '6px' }}
                disabled={isSimulating}
              >
                Clear
              </button>
            )}
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.02)', padding: '6px 12px', borderRadius: '20px', border: '1px solid var(--border-glass)' }}>
            <input 
              type="checkbox" 
              id="startFromCurrentCheckbox"
              checked={startFromCurrent}
              onChange={(e) => setStartFromCurrent(e.target.checked)}
              style={{ width: '16px', height: '16px', accentColor: 'var(--accent-gold)', cursor: 'pointer' }}
              disabled={isSimulating}
            />
            <label htmlFor="startFromCurrentCheckbox" style={{ fontSize: '0.85rem', cursor: 'pointer', fontWeight: '500', color: 'var(--text-primary)' }} title="Preserves current player injuries, custom scores, and Elo ratings to predict the rest of the World Cup.">
              Predict from Current State (starts June 12)
            </label>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.02)', padding: '6px 12px', borderRadius: '20px', border: '1px solid var(--border-glass)' }}>
            <input 
              type="checkbox" 
              id="autoRunMCCheckbox"
              checked={autoRunMC}
              onChange={(e) => setAutoRunMC(e.target.checked)}
              style={{ width: '16px', height: '16px', accentColor: 'var(--accent-cyan)', cursor: 'pointer' }}
              disabled={isSimulating}
            />
            <label htmlFor="autoRunMCCheckbox" style={{ fontSize: '0.85rem', cursor: 'pointer', fontWeight: '500', color: 'var(--text-primary)' }} title="Automatically trigger a 1,000-run Monte Carlo simulation when synced results or scenario locks change.">
              Auto-run MC on Live Updates
            </label>
          </div>

          <div className="sim-controls" style={{ margin: 0 }}>
            {simMode === 'SINGLE' ? (
              <button 
                className="btn btn-primary"
                onClick={handleSingleSimulation}
                disabled={isSimulating}
              >
                <Play style={{ width: '16px', height: '16px' }} />
                {isSimulating ? 'Simulating...' : startFromCurrent ? 'Predict Remaining' : 'Run Simulation'}
              </button>
            ) : (
              <div style={{ display: 'flex', gap: '8px' }}>
                <button 
                  className="btn btn-primary"
                  onClick={() => handleMonteCarloSimulation(1000)}
                  disabled={isSimulating}
                >
                  <Play style={{ width: '16px', height: '16px' }} />
                  {startFromCurrent ? 'Predict 1,000 Runs' : 'Run 1,000 Sims'}
                </button>
                <button 
                  className="btn btn-primary"
                  onClick={() => handleMonteCarloSimulation(10000)}
                  disabled={isSimulating}
                  style={{ background: 'linear-gradient(135deg, var(--accent-cyan) 0%, var(--accent-blue) 100%)', color: '#000', boxShadow: '0 4px 15px rgba(0, 242, 254, 0.25)' }}
                >
                  <Play style={{ width: '16px', height: '16px' }} />
                  {startFromCurrent ? 'Predict 10,000 Runs' : 'Run 10,000 Sims (Fast)'}
                </button>
              </div>
            )}

            {(singleResult.simulated || mcResult.simulated) && (
              <button className="btn btn-secondary" onClick={resetSimulations} disabled={isSimulating}>
                <RotateCcw style={{ width: '16px', height: '16px' }} />
                Reset
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Loading Indicator */}
      {isSimulating && (
        <div className="card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
          <div className="sim-progress-bar-container">
            <div className="sim-progress-bar" style={{ width: `${progress || 30}%` }}></div>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            {simMode === 'SINGLE' ? 'Simulating matches, compiling goal Poisson distributions...' : `Simulating tournaments: ${progress}% completed...`}
          </p>
        </div>
      )}

      {/* SINGLE TOURNAMENT RENDER */}
      {simMode === 'SINGLE' && !isSimulating && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Sub-tab Switcher */}
          <div style={{ display: 'flex', borderBottom: '1px solid var(--border-glass)', gap: '2rem', marginBottom: '0.5rem' }}>
            <button
              onClick={() => setSubTab('BRACKET')}
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: subTab === 'BRACKET' ? '2px solid var(--accent-cyan)' : '2px solid transparent',
                color: subTab === 'BRACKET' ? 'var(--text-primary)' : 'var(--text-secondary)',
                padding: '10px 0',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '1rem',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Trophy style={{ width: '16px', height: '16px', color: subTab === 'BRACKET' ? 'var(--accent-cyan)' : 'inherit' }} />
              Knockout Bracket & Groups
            </button>
            <button
              onClick={() => setSubTab('SCHEDULE')}
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: subTab === 'SCHEDULE' ? '2px solid var(--accent-cyan)' : '2px solid transparent',
                color: subTab === 'SCHEDULE' ? 'var(--text-primary)' : 'var(--text-secondary)',
                padding: '10px 0',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '1rem',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Play style={{ width: '16px', height: '16px', color: subTab === 'SCHEDULE' ? 'var(--accent-cyan)' : 'inherit' }} />
              Match Schedule & Results
            </button>
          </div>

          {subTab === 'BRACKET' ? (
            singleResult.simulated ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                {/* Champion Banner */}
                {(() => {
                  const final = singleResult.matches.find(m => m.stage === 'FINAL')!;
                  const winner = getTeam(final.winnerId!);
                  return (
                    <div className="card highlight" style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.12) 0%, rgba(9,10,15,0.9) 100%)', textAlign: 'center', padding: '2.5rem' }}>
                      <Trophy style={{ color: 'var(--accent-gold)', width: '60px', height: '60px', margin: '0 auto 16px auto', filter: 'drop-shadow(0 0 10px rgba(212,175,55,0.4))' }} />
                      <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', marginBottom: '8px' }}>World Cup 2026 Champions</h2>
                      <div style={{ fontSize: '3rem', margin: '12px 0' }}><Flag teamId={winner.id} style={{ width: '80px', height: '55px', fontSize: '3rem' }} /></div>
                      <h1 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--accent-gold)' }}>{winner.name}</h1>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '10px' }}>
                        Defeated {getTeam(final.winnerId === final.homeTeamId ? final.awayTeamId : final.homeTeamId).name} {final.goalsHome}-{final.goalsAway} 
                        {final.shootoutGoalsHome !== null && ` (Pens: ${final.shootoutGoalsHome}-${final.shootoutGoalsAway})`} in the Final!
                      </p>
                    </div>
                  );
                })()}

                {/* Interactive Bracket Visualizer */}
                <div className="card">
                  <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Knockout Stage Bracket</h2>
                  <div className="bracket-viewport">
                    <div className="bracket-container">
                      {/* ROUND OF 32 */}
                      <div className="bracket-round">
                        <div className="bracket-round-title">Round of 32</div>
                        {getMatchesForStage('R32').map((m) => (
                          <BracketMatchCard 
                            key={m.id} 
                            match={m} 
                            getTeam={getTeam} 
                            onToggleLockMatch={onToggleLockMatch}
                            lockedMatches={lockedMatches}
                          />
                        ))}
                      </div>

                      {/* ROUND OF 16 */}
                      <div className="bracket-round">
                        <div className="bracket-round-title">Round of 16</div>
                        {getMatchesForStage('R16').map((m) => (
                          <BracketMatchCard 
                            key={m.id} 
                            match={m} 
                            getTeam={getTeam} 
                            onToggleLockMatch={onToggleLockMatch}
                            lockedMatches={lockedMatches}
                          />
                        ))}
                      </div>

                      {/* QUARTER-FINALS */}
                      <div className="bracket-round">
                        <div className="bracket-round-title">Quarter-Finals</div>
                        {getMatchesForStage('QF').map((m) => (
                          <BracketMatchCard 
                            key={m.id} 
                            match={m} 
                            getTeam={getTeam} 
                            onToggleLockMatch={onToggleLockMatch}
                            lockedMatches={lockedMatches}
                          />
                        ))}
                      </div>

                      {/* SEMI-FINALS */}
                      <div className="bracket-round">
                        <div className="bracket-round-title">Semi-Finals</div>
                        {getMatchesForStage('SF').map((m) => (
                          <BracketMatchCard 
                            key={m.id} 
                            match={m} 
                            getTeam={getTeam} 
                            onToggleLockMatch={onToggleLockMatch}
                            lockedMatches={lockedMatches}
                          />
                        ))}
                      </div>

                      {/* FINALS */}
                      <div className="bracket-round">
                        <div className="bracket-round-title">Finals</div>
                        <BracketMatchCard 
                          match={singleResult.matches.find(m => m.stage === 'FINAL')!} 
                          getTeam={getTeam} 
                          onToggleLockMatch={onToggleLockMatch}
                          lockedMatches={lockedMatches}
                        />
                        
                        <div className="bracket-round-title" style={{ marginTop: '2rem', color: 'var(--accent-gold)' }}>3rd Place Match</div>
                        <BracketMatchCard 
                          match={singleResult.matches.find(m => m.stage === 'THIRD_PLACE')!} 
                          getTeam={getTeam} 
                          onToggleLockMatch={onToggleLockMatch}
                          lockedMatches={lockedMatches}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Group Standings & Scenario Locks */}
                <div className="card">
                  <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Group Stage Standings</h2>
                  <div className="groups-container">
                    {Object.entries(singleResult.groupStandings).map(([letter, standings]) => {
                      const groupTeams = teams.filter(t => t.group === letter);
                      
                      // Deterministic pairings
                      const matchPairings = [
                        [0, 1], [2, 3],
                        [0, 2], [1, 3],
                        [0, 3], [1, 2]
                      ];

                      return (
                        <div key={letter} className="card" style={{ background: 'rgba(0,0,0,0.15)', border: '1px solid rgba(255,255,255,0.03)', padding: '12px' }}>
                          <h3 style={{ fontSize: '1.1rem', marginBottom: '10px', color: 'var(--accent-cyan)', borderBottom: '1px solid var(--border-glass)', paddingBottom: '4px' }}>
                            Group {letter}
                          </h3>
                          
                          <table className="group-table" style={{ marginBottom: '12px' }}>
                            <thead>
                              <tr>
                                <th className="left">Team</th>
                                <th>P</th>
                                <th>Pts</th>
                                <th>GD</th>
                              </tr>
                            </thead>
                            <tbody>
                              {standings.map((teamStanding, idx) => {
                                const t = getTeam(teamStanding.teamId);
                                const isTop2 = idx < 2;
                                const isThirdQualify = idx === 2 && singleResult.qualifiedKnockoutTeams.includes(teamStanding.teamId);
                                
                                let trClass = '';
                                if (isTop2) trClass = 'qualify-direct';
                                else if (isThirdQualify) trClass = 'qualify-3rd';
                                
                                return (
                                  <tr key={t.id} className={trClass}>
                                    <td className="left" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: (isTop2 || isThirdQualify) ? '600' : 'normal' }}>
                                      <Flag teamId={t.id} />
                                      <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '80px' }}>{t.name}</span>
                                    </td>
                                    <td>{teamStanding.played}</td>
                                    <td style={{ color: (isTop2 || isThirdQualify) ? '#fff' : 'var(--text-secondary)', fontWeight: 'bold' }}>{teamStanding.points}</td>
                                    <td style={{ color: teamStanding.goalDifference > 0 ? 'var(--accent-success)' : teamStanding.goalDifference < 0 ? 'var(--accent-error)' : 'var(--text-muted)' }}>
                                      {teamStanding.goalDifference > 0 ? `+${teamStanding.goalDifference}` : teamStanding.goalDifference}
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>

                          {/* Group Fixtures (Scenario editor locks) */}
                          <div style={{ borderTop: '1px dashed rgba(255,255,255,0.06)', paddingTop: '8px' }}>
                            <h4 style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px' }}>Lock Fixtures</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                              {matchPairings.map(([idxHome, idxAway]) => {
                                const home = groupTeams[idxHome];
                                const away = groupTeams[idxAway];
                                const matchId = `G_${letter}_${home.id}_${away.id}`;
                                
                                const lockMatch = lockedMatches[matchId];
                                const isLocked = !!lockMatch && !lockMatch.realPlayed;
                                const isReal = !!lockMatch && !!lockMatch.realPlayed;
                                const localState = lockScores[matchId] || { goalsHome: 0, goalsAway: 0 };
                                
                                const currentGoalsHome = lockMatch ? lockMatch.goalsHome! : localState.goalsHome;
                                const currentGoalsAway = lockMatch ? lockMatch.goalsAway! : localState.goalsAway;
                                
                                return (
                                  <div 
                                    key={matchId} 
                                    style={{ 
                                      display: 'flex', 
                                      alignItems: 'center', 
                                      justifyContent: 'space-between', 
                                      background: isReal ? 'rgba(16, 185, 129, 0.04)' : isLocked ? 'rgba(0, 242, 254, 0.02)' : 'rgba(255,255,255,0.01)', 
                                      padding: '6px 8px', 
                                      borderRadius: '8px', 
                                      fontSize: '0.75rem',
                                      border: isReal ? '1px solid rgba(16, 185, 129, 0.15)' : isLocked ? '1px solid rgba(0, 242, 254, 0.15)' : '1px solid transparent',
                                      marginBottom: '4px'
                                    }}
                                  >
                                    <span style={{ width: '96px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }} title={home.name}>
                                      <Flag teamId={home.id} /> {home.name}
                                    </span>
                                    
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                      <input 
                                        type="number"
                                        min="0"
                                        max="9"
                                        value={currentGoalsHome}
                                        onChange={(e) => handleInputChange(matchId, 'home', Math.max(0, parseInt(e.target.value) || 0))}
                                        disabled={(isLocked || isReal) || isSimulating}
                                        style={{ width: '34px', height: '26px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-glass)', borderRadius: '4px', color: '#fff', textAlign: 'center', fontSize: '0.85rem', padding: '2px' }}
                                      />
                                      <span style={{ color: 'var(--text-muted)' }}>-</span>
                                      <input 
                                        type="number"
                                        min="0"
                                        max="9"
                                        value={currentGoalsAway}
                                        onChange={(e) => handleInputChange(matchId, 'away', Math.max(0, parseInt(e.target.value) || 0))}
                                        disabled={(isLocked || isReal) || isSimulating}
                                        style={{ width: '34px', height: '26px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-glass)', borderRadius: '4px', color: '#fff', textAlign: 'center', fontSize: '0.85rem', padding: '2px' }}
                                      />
                                    </div>

                                    <span style={{ width: '96px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', textAlign: 'right' }} title={away.name}>
                                      {away.name} <Flag teamId={away.id} style={{ marginRight: 0, marginLeft: '0.2em' }} />
                                    </span>

                                    <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                                      {/* Prediction Lock Button */}
                                      <button 
                                        onClick={() => onToggleLockMatch?.(matchId, home.id, away.id, currentGoalsHome, currentGoalsAway, 'GROUP', false)}
                                        disabled={isSimulating}
                                        style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '2px', display: 'flex', alignItems: 'center' }}
                                        title={isLocked ? "Unlock Scoreline" : "Lock as hypothetical prediction"}
                                      >
                                        <Lock style={{ width: '12px', height: '12px', color: isLocked ? 'var(--accent-cyan)' : 'var(--text-muted)' }} />
                                      </button>

                                      {/* Real Result Button */}
                                      <button 
                                        onClick={() => onToggleLockMatch?.(matchId, home.id, away.id, currentGoalsHome, currentGoalsAway, 'GROUP', true)}
                                        disabled={isSimulating}
                                        style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '2px', display: 'flex', alignItems: 'center' }}
                                        title={isReal ? "Unlock Scoreline" : "Mark as real-life completed result"}
                                      >
                                        <Zap style={{ width: '12px', height: '12px', color: isReal ? 'var(--accent-success)' : 'var(--text-muted)' }} />
                                      </button>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              /* Ready for Prediction display */
              <div className="card" style={{ textAlign: 'center', padding: '5rem 2rem' }}>
                <Trophy style={{ width: '64px', height: '64px', color: 'var(--text-muted)', margin: '0 auto 1.5rem auto' }} />
                <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', marginBottom: '10px' }}>Ready for Prediction</h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '450px', margin: '0 auto 2rem auto', fontSize: '0.95rem', lineHeight: '1.5' }}>
                  Select either the visualizer mode to watch a single bracket play out, or the Monte Carlo simulator to run thousands of trials and verify overall victory percentages.
                </p>
                <button className="btn btn-primary" onClick={handleSingleSimulation}>
                  <Play style={{ width: '16px', height: '16px' }} />
                  {startFromCurrent ? 'Predict Remaining Matches' : 'Simulate 2026 World Cup'}
                </button>
              </div>
            )
          ) : (
            /* Match Schedule sub-tab */
            <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Search & Filter Controls */}
              <div className="card" style={{ padding: '1.25rem' }}>
                <div className="schedule-filters-grid">
                  <input
                    type="text"
                    placeholder="Search by team name..."
                    className="filter-input"
                    value={scheduleSearch}
                    onChange={(e) => setScheduleSearch(e.target.value)}
                  />
                  <select
                    className="filter-select"
                    value={scheduleStageFilter}
                    onChange={(e) => setScheduleStageFilter(e.target.value as any)}
                  >
                    <option value="ALL">All Stages</option>
                    <option value="GROUP">Group Stage</option>
                    <option value="R32">Round of 32</option>
                    <option value="R16">Round of 16</option>
                    <option value="QF">Quarter-finals</option>
                    <option value="SF">Semi-finals</option>
                    <option value="THIRD_PLACE">Third place play-off</option>
                    <option value="FINAL">Final</option>
                  </select>
                  <select
                    className="filter-select"
                    value={scheduleStadiumFilter}
                    onChange={(e) => setScheduleStadiumFilter(e.target.value)}
                  >
                    <option value="ALL">All Stadiums</option>
                    {STADIUMS.map(stadium => (
                      <option key={stadium} value={stadium}>{stadium.split(',')[0]}</option>
                    ))}
                  </select>
                  <select
                    className="filter-select"
                    value={scheduleStatusFilter}
                    onChange={(e) => setScheduleStatusFilter(e.target.value as any)}
                  >
                    <option value="ALL">All Statuses</option>
                    <option value="LOCKED">Locked / Real-world</option>
                    <option value="UNLOCKED">Unlocked / Simulated</option>
                  </select>
                </div>
              </div>

              {/* Table rendering */}
              <div className="schedule-container">
                <table className="schedule-table">
                  <thead>
                    <tr>
                      <th style={{ width: '80px' }}>Match</th>
                      <th style={{ width: '180px' }}>Date & Time</th>
                      <th style={{ width: '130px' }}>Stage</th>
                      <th style={{ textAlign: 'center' }}>Matchup & Score</th>
                      <th>Venue</th>
                      <th style={{ width: '160px' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMatches.length > 0 ? (
                      filteredMatches.map(m => (
                        <ScheduleMatchRow
                          key={m.id}
                          match={m}
                          getTeam={getTeam}
                          onToggleLockMatch={onToggleLockMatch}
                          lockedMatches={lockedMatches}
                          playersDb={playersDb}
                          onSaveMatchPerformances={onSaveMatchPerformances}
                        />
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
                          No matches found matching the criteria.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* MONTE CARLO RENDER */}
      {simMode === 'MONTE_CARLO' && mcResult.simulated && !isSimulating && mcResult.summary && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Sub-tabs switch inside MONTE CARLO */}
          <div style={{ display: 'flex', borderBottom: '1px solid var(--border-glass)', gap: '2rem', marginBottom: '0.5rem' }}>
            <button
              onClick={() => setMcSubTab('PROBABILITIES')}
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: mcSubTab === 'PROBABILITIES' ? '2px solid var(--accent-cyan)' : '2px solid transparent',
                color: mcSubTab === 'PROBABILITIES' ? 'var(--text-primary)' : 'var(--text-secondary)',
                padding: '10px 0',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '1rem',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <BarChart3 style={{ width: '16px', height: '16px', color: mcSubTab === 'PROBABILITIES' ? 'var(--accent-cyan)' : 'inherit' }} />
              Win Probabilities & Shifts
            </button>
            <button
              onClick={() => setMcSubTab('INTELLIGENCE')}
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: mcSubTab === 'INTELLIGENCE' ? '2px solid var(--accent-cyan)' : '2px solid transparent',
                color: mcSubTab === 'INTELLIGENCE' ? 'var(--text-primary)' : 'var(--text-secondary)',
                padding: '10px 0',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '1rem',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Zap style={{ width: '16px', height: '16px', color: mcSubTab === 'INTELLIGENCE' ? 'var(--accent-cyan)' : 'inherit' }} />
              Model Intelligence & Upsets
            </button>
          </div>

          {/* TAB 1: PROBABILITIES */}
          {mcSubTab === 'PROBABILITIES' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '2rem' }}>
          
              {/* Left Column: Horizontal Bar Chart */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BarChart3 style={{ color: 'var(--accent-cyan)' }} />
              Win Probabilities Distribution
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              Calculated victory shares over <strong>{mcResult.summary.simulationsRun.toLocaleString()}</strong> full tournament runs:
            </p>

            {/* Horizontal Bar Chart Container */}
            <div style={{ position: 'relative', height: '420px', width: '100%', marginTop: '1rem' }}>
              <Bar data={chartData} options={chartOptions} />
            </div>

            <div style={{ marginTop: '1rem', padding: '12px', background: 'rgba(0, 242, 254, 0.02)', border: '1px solid rgba(0, 242, 254, 0.1)', borderRadius: '8px', color: 'var(--text-muted)', fontSize: '0.75rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Zap style={{ width: '16px', height: '16px', color: 'var(--accent-cyan)', flexShrink: 0 }} />
                <span>
                  <strong>4-Model Ensemble:</strong> {modelWeightSummary()} — Probabilities shift dynamically when you lock real results or fetch live Elo via Groq.
                </span>
              </div>
              {/* Probability Delta Table — shown after a second MC run */}
              {Object.values(probabilityDeltas).some(d => d !== 0) && (
                <div style={{ marginTop: '4px' }}>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.7rem', marginBottom: '6px' }}>Probability shift vs. previous run:</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {mcResult.sortedStats.slice(0, 12).map(s => {
                      const team = getTeam(s.teamId);
                      const delta = probabilityDeltas[s.teamId] ?? 0;
                      if (Math.abs(delta) < 0.05) return null;
                      return (
                        <span
                          key={s.teamId}
                          className={delta > 0 ? 'prob-delta-up' : 'prob-delta-down'}
                          title={`${team.name}: ${delta > 0 ? '+' : ''}${delta.toFixed(1)}%`}
                        >
                          <Flag teamId={team.id} /> {delta > 0 ? <TrendingUp style={{ width: '10px', height: '10px' }} /> : <TrendingDown style={{ width: '10px', height: '10px' }} />}
                          {delta > 0 ? '+' : ''}{delta.toFixed(1)}%
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Probability Shifts + Golden Boot */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Day-to-day Championship Probability timeline / shifts card */}
            <div className="card highlight" style={{ borderColor: 'rgba(0, 242, 254, 0.15)' }}>
              <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <TrendingUp style={{ color: 'var(--accent-cyan)', width: '18px', height: '18px' }} />
                Championship Prob Shifts
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', marginBottom: '1.25rem', lineHeight: '1.4' }}>
                Championship probability progression tracked day-to-day (since pre-tournament):
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {(() => {
                  const getProbabilityHistory = (): { lockedCount: number; probs: Record<string, number> }[] => {
                    try {
                      const historyRaw = localStorage.getItem('wc2026_probability_history') || '{}';
                      const history = JSON.parse(historyRaw) as Record<string, Record<string, number>>;
                      return Object.entries(history)
                        .map(([k, v]) => ({ lockedCount: parseInt(k), probs: v }))
                        .sort((a, b) => a.lockedCount - b.lockedCount);
                    } catch {
                      return [];
                    }
                  };
                  const probHistory = getProbabilityHistory();

                  return mcResult.sortedStats.slice(0, 5).map(s => {
                    const team = getTeam(s.teamId);
                    const currentProb = (s.championCount / mcResult.summary!.simulationsRun) * 100;
                    
                    // Get starting prob (lowest lockedCount entry)
                    let startingProb = currentProb;
                    if (probHistory.length > 0) {
                      const startEntry = probHistory[0];
                      if (startEntry && startEntry.probs[s.teamId] !== undefined) {
                        startingProb = startEntry.probs[s.teamId];
                      }
                    }
                    
                    const totalDelta = currentProb - startingProb;
                    const isUp = totalDelta >= 0;

                    return (
                      <div key={s.teamId} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.01)', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-glass)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <Flag teamId={team.id} style={{ fontSize: '1.3rem' }} />
                          <div>
                            <div style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>{team.name}</div>
                            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                              Start: {startingProb.toFixed(1)}%
                            </div>
                          </div>
                        </div>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                          <div style={{ fontSize: '0.95rem', fontWeight: '800', color: '#fff' }}>
                            {currentProb.toFixed(1)}%
                          </div>
                          {totalDelta !== 0 && (
                            <div style={{ 
                              fontSize: '0.72rem', 
                              fontWeight: 'bold', 
                              color: isUp ? 'var(--accent-success)' : 'var(--accent-error)',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '2px',
                              marginTop: '2px'
                            }}>
                              {isUp ? '+' : ''}{totalDelta.toFixed(1)}% {isUp ? '📈' : '📉'}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  });
                })()}
              </div>
            </div>

            {/* Predictive Narrative Summary Prose Card */}
            {mcResult.sortedStats && mcResult.sortedStats.length > 0 && (
              <div className="card highlight" style={{ borderColor: 'rgba(0, 242, 254, 0.1)', background: 'rgba(0, 242, 254, 0.01)', marginTop: '0px' }}>
                <h4 style={{ fontSize: '0.95rem', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '6px', margin: 0, color: 'var(--accent-cyan)' }}>
                  <Sparkles style={{ width: '16px', height: '16px' }} />
                  Predictive Narrative Summary
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-primary)', lineHeight: '1.5', margin: '8px 0 0 0' }}>
                  {(() => {
                    const probHistory = (() => {
                      try {
                        const historyRaw = localStorage.getItem('wc2026_probability_history') || '{}';
                        const history = JSON.parse(historyRaw) as Record<string, Record<string, number>>;
                        return Object.entries(history)
                          .map(([k, v]) => ({ lockedCount: parseInt(k), probs: v }))
                          .sort((a, b) => a.lockedCount - b.lockedCount);
                      } catch {
                        return [];
                      }
                    })();

                    const currentStats = mcResult.sortedStats.slice(0, 6).map(s => {
                      const team = getTeam(s.teamId);
                      const current = (s.championCount / mcResult.summary!.simulationsRun) * 100;
                      
                      let start = current;
                      if (probHistory.length > 0 && probHistory[0].probs[s.teamId] !== undefined) {
                        start = probHistory[0].probs[s.teamId];
                      }
                      return { name: team.name, current, start, delta: current - start };
                    });

                    const biggestRiser = [...currentStats].sort((a, b) => b.delta - a.delta)[0];
                    const biggestSinker = [...currentStats].sort((a, b) => a.delta - b.delta)[0];
                    const leader = currentStats[0];

                    let prose = "";
                    if (leader && leader.current > 1.0) {
                      prose += `🏆 **Tournament Favourite:** **${leader.name}** is currently estimated by our 4-model ensemble to have the strongest chance of lifting the trophy, sitting at a **${leader.current.toFixed(1)}%** victory share. `;
                    }
                    if (biggestRiser && biggestRiser.delta > 0.05) {
                      prose += `📈 **Rising Contender:** **${biggestRiser.name}** has emerged as the tournament's biggest riser! Their championship chances have surged by **+${biggestRiser.delta.toFixed(1)}%** (now at **${biggestRiser.current.toFixed(1)}%** up from **${biggestRiser.start.toFixed(1)}%**) following locked results and positive squad form updates. `;
                    }
                    if (biggestSinker && biggestSinker.delta < -0.05 && biggestSinker.name !== biggestRiser.name) {
                      prose += `📉 **Struggling Giants:** On the other hand, **${biggestSinker.name}** has seen their chances drop by **${biggestSinker.delta.toFixed(1)}%** (now at **${biggestSinker.current.toFixed(1)}%**), indicating unexpected setbacks or roster form adjustments in their locked fixtures. `;
                    }
                    if (!prose || currentStats.every(s => Math.abs(s.delta) < 0.01)) {
                      prose = "⚽ **Pre-tournament Outlook:** Roster strengths and ELO ranks are aligned. Run Monte Carlo simulations and enter scenario scores or live sync day updates to watch the narrative unfold in real time!";
                    }
                    return prose;
                  })()}
                </p>
              </div>
            )}

            {/* Golden Boot Leaderboard */}
            <div className="card highlight" style={{ borderColor: 'var(--border-glass-active)', height: 'fit-content' }}>
              <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Trophy style={{ color: 'var(--accent-gold)' }} />
                Golden Boot Leaderboard
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', marginBottom: '1rem', lineHeight: '1.4' }}>
                Top scorers from real matches (entered via Rate Players) and simulation averages:
              </p>

              <table className="group-table" style={{ fontSize: '0.80rem' }}>
                <thead>
                  <tr>
                    <th style={{ width: '30px' }}>Rank</th>
                    <th className="left">Player</th>
                    <th title="Real goals entered via scorer panel">⚽ Real</th>
                    <th title="Avg goals per simulation run">📊 Sim</th>
                  </tr>
                </thead>
                <tbody>
                  {topScorers.map((p, idx) => (
                    <tr key={p.playerId} style={{ borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                      <td>
                        <strong style={{ color: idx === 0 ? 'var(--accent-gold)' : 'var(--text-primary)' }}>
                          #{idx + 1}
                        </strong>
                      </td>
                      <td className="left">
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <strong>{p.name}</strong>
                          <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                            <Flag teamId={p.teamId} /> {p.teamName}
                          </span>
                        </div>
                      </td>
                      <td style={{ fontWeight: '700', color: (p.realGoals || 0) > 0 ? 'var(--accent-gold)' : 'var(--text-muted)' }}>
                        {p.realGoals || 0}
                      </td>
                      <td style={{ color: 'var(--text-secondary)' }}>
                        {p.avgGoals > 0 ? p.avgGoals.toFixed(2) : '—'}
                      </td>
                    </tr>
                  ))}
                  {topScorers.length === 0 && (
                    <tr>
                      <td colSpan={4} style={{ textAlign: 'center', padding: '20px', color: 'var(--text-muted)' }}>
                        No goals recorded yet. Use 🏆 Rate Players after marking matches as Real!
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

            </div>

            {/* Golden Glove Leaderboard */}
            <div className="card highlight" style={{ borderColor: 'rgba(99, 179, 237, 0.3)', height: 'fit-content' }}>
              <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.3rem' }}>🧤</span>
                Golden Glove Leaderboard
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', marginBottom: '1rem', lineHeight: '1.4' }}>
                Best goalkeepers ranked by clean sheets & saves (real match data):
              </p>

              <table className="group-table" style={{ fontSize: '0.80rem' }}>
                <thead>
                  <tr>
                    <th style={{ width: '30px' }}>Rank</th>
                    <th className="left">Goalkeeper</th>
                    <th>🧱 CS</th>
                    <th>🧤 Saves</th>
                    <th>OVR</th>
                  </tr>
                </thead>
                <tbody>
                  {topGKs.map((gk, idx) => (
                    <tr key={gk.playerId} style={{ borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                      <td>
                        <strong style={{ color: idx === 0 ? '#63b3ed' : 'var(--text-primary)' }}>
                          #{idx + 1}
                        </strong>
                      </td>
                      <td className="left">
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <strong>{gk.name}</strong>
                          <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                            <Flag teamId={gk.teamId} /> {gk.teamName}
                          </span>
                        </div>
                      </td>
                      <td style={{ fontWeight: '700', color: '#10b981' }}>
                        {gk.cleanSheets}
                      </td>
                      <td style={{ color: 'var(--text-secondary)' }}>
                        {gk.saves}
                      </td>
                      <td style={{ color: 'var(--accent-gold)', fontWeight: '600' }}>
                        {gk.rating}
                      </td>
                    </tr>
                  ))}
                  {topGKs.length === 0 && (
                    <tr>
                      <td colSpan={5} style={{ textAlign: 'center', padding: '20px', color: 'var(--text-muted)' }}>
                        No GK data yet. Use the 🏆 Rate Players panel after marking matches as Real!
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

          </div>

        </div>
      )}

      {/* TAB 2: INTELLIGENCE & ACCURACY */}
      {mcSubTab === 'INTELLIGENCE' && (
        <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Empty State when no real matches are synced */}
          {getModelIntelligenceStats.totalCount === 0 ? (
            <div className="card" style={{ textAlign: 'center', padding: '5rem 2rem' }}>
              <Zap className="animate-pulse" style={{ width: '48px', height: '48px', color: 'var(--text-muted)', margin: '0 auto 1.5rem auto' }} />
              <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', marginBottom: '8px' }}>No Real-World Results Synced</h3>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto', fontSize: '0.88rem', lineHeight: '1.5' }}>
                Model intelligence tracks the predictive accuracy of the 4-Model Ensemble against real-world scores. Use the **Live Sync** panel in the header to fetch live results, or mark scorelines as **Real** in the Fixtures tab to activate accuracy analytics!
              </p>
            </div>
          ) : (
            /* Intelligence Dashboard */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* Summary Metric Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                
                {/* Accuracy Card */}
                <div className="card" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(9, 10, 15, 0.8) 100%)', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600 }}>Model Win Accuracy</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--accent-success)', fontFamily: 'var(--font-heading)', margin: '8px 0' }}>
                    {getModelIntelligenceStats.accuracy}%
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                    Correctly predicted <strong>{getModelIntelligenceStats.correctCount}</strong> of <strong>{getModelIntelligenceStats.totalCount}</strong> matches.
                  </div>
                  <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', marginTop: '12px', overflow: 'hidden' }}>
                    <div style={{ width: `${getModelIntelligenceStats.accuracy}%`, height: '100%', background: 'var(--accent-success)' }}></div>
                  </div>
                </div>

                {/* Matches Tracked Card */}
                <div className="card">
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600 }}>Matches Evaluated</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#fff', fontFamily: 'var(--font-heading)', margin: '8px 0' }}>
                    {getModelIntelligenceStats.totalCount}
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                    Includes group stage fixtures and completed knockout rounds.
                  </div>
                </div>

                {/* Biggest Upset Card */}
                <div className="card" style={{ background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, rgba(9, 10, 15, 0.8) 100%)' }}>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600 }}>Biggest Synced Upset</div>
                  {getModelIntelligenceStats.upsets.length > 0 ? (
                    <div>
                      <div style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--accent-gold)', fontFamily: 'var(--font-heading)', margin: '12px 0 6px 0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Flag teamId={getModelIntelligenceStats.upsets[0].home.id} style={{ fontSize: '1.25rem' }} />
                        <span>vs</span>
                        <Flag teamId={getModelIntelligenceStats.upsets[0].away.id} style={{ fontSize: '1.25rem' }} />
                      </div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                        Upset index: <strong>{(getModelIntelligenceStats.upsets[0].upsetProb * 100).toFixed(0)}%</strong>. 
                        Predicted winner: {getModelIntelligenceStats.upsets[0].predictedWinner === 'DRAW' ? 'Draw' : getTeam(getModelIntelligenceStats.upsets[0].predictedWinner).name}.
                      </div>
                    </div>
                  ) : (
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '12px' }}>No upsets recorded yet.</div>
                  )}
                </div>

              </div>

              {/* Two column detail analytics */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '2rem' }}>
                
                {/* Left Column: Round accuracy breakdown */}
                <div className="card">
                  <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', marginBottom: '1.25rem' }}>Per-Round Model Performance Report</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {['GROUP', 'R32', 'R16', 'QF', 'SF', 'FINAL'].map((stage: any) => {
                      const stat = (getModelIntelligenceStats.roundStats as any)[stage] || { correct: 0, total: 0 };
                      if (stat.total === 0) return null;
                      const pct = Math.round((stat.correct / stat.total) * 100);
                      
                      const labelMap: Record<string, string> = {
                        GROUP: 'Group Stage',
                        R32: 'Round of 32',
                        R16: 'Round of 16',
                        QF: 'Quarter-Finals',
                        SF: 'Semi-Finals',
                        FINAL: 'Finals & 3rd Place'
                      };

                      return (
                        <div key={stage} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 600 }}>
                            <span style={{ color: '#fff' }}>{labelMap[stage]}</span>
                            <span style={{ color: 'var(--accent-cyan)' }}>{pct}% ({stat.correct}/{stat.total} correct)</span>
                          </div>
                          <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.03)', borderRadius: '4px', overflow: 'hidden', border: '1px solid var(--border-glass)' }}>
                            <div style={{ width: `${pct}%`, height: '100%', background: 'linear-gradient(90deg, var(--accent-blue) 0%, var(--accent-cyan) 100%)' }}></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Column: Top Tournament Upsets */}
                <div className="card highlight" style={{ borderColor: 'rgba(212,175,55,0.2)' }}>
                  <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Trophy style={{ color: 'var(--accent-gold)', width: '18px', height: '18px' }} />
                    Top Synced Upsets
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {getModelIntelligenceStats.upsets.map((u: any, idx: number) => {
                      const actual = getTeam(u.actualWinner);
                      const predicted = u.predictedWinner === 'DRAW' ? { name: 'Draw' } : getTeam(u.predictedWinner);
                      return (
                        <div key={u.match.id} style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '10px', background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border-glass)', borderRadius: '8px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                            <span>#{idx + 1} Upset • {u.match.stage}</span>
                            <span style={{ color: 'var(--accent-gold)', fontWeight: 'bold' }}>{(u.upsetProb * 100).toFixed(0)}% Upset Index</span>
                          </div>
                          <div style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#fff', margin: '4px 0' }}>
                            <Flag teamId={u.home.id} /> {u.home.name} {u.match.goalsHome}-{u.match.goalsAway} {u.away.name} <Flag teamId={u.away.id} style={{ marginRight: 0, marginLeft: '0.2em' }} />
                          </div>
                          <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                            Winner: <strong>{actual.name || 'Draw'}</strong> (predicted: {predicted.name || 'Draw'})
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Bottom Panel: Predictions Ledger Log */}
              <div className="card">
                <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', marginBottom: '1.25rem' }}>Predictions Ledger & Scorecard</h3>
                <div style={{ overflowX: 'auto' }}>
                  <table className="roster-table" style={{ width: '100%' }}>
                    <thead>
                      <tr>
                        <th style={{ width: '80px' }}>Match</th>
                        <th style={{ width: '100px' }}>Stage</th>
                        <th style={{ textAlign: 'center' }}>Matchup & Score</th>
                        <th style={{ textAlign: 'center' }}>Model Prediction</th>
                        <th style={{ textAlign: 'center' }}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getModelIntelligenceStats.matchReports.map((r) => {
                        const predLabel = r.predictedWinner === 'DRAW' ? 'Draw' : getTeam(r.predictedWinner).name;
                        const predFlag = r.predictedWinner === 'DRAW' ? '🤝' : <Flag teamId={r.predictedWinner} style={{ marginRight: 0 }} />;
                        
                        let predProb = r.probs.draw * 100;
                        if (r.predictedWinner === r.match.homeTeamId) predProb = r.probs.homeWin * 100;
                        else if (r.predictedWinner === r.match.awayTeamId) predProb = r.probs.awayWin * 100;

                        return (
                          <tr key={r.match.id} className="player-row">
                            <td style={{ fontWeight: 'bold', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                              #{r.match.matchNumber}
                            </td>
                            <td>
                              <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', fontWeight: 600, color: 'var(--accent-cyan)' }}>{r.match.stage}</span>
                            </td>
                            <td style={{ textAlign: 'center' }}>
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.85rem' }}>
                                <span style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}><Flag teamId={r.home.id} /> {r.home.name}</span>
                                <span style={{ padding: '2px 8px', background: 'rgba(0,0,0,0.3)', borderRadius: '4px', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>
                                  {r.match.goalsHome}-{r.match.goalsAway}
                                  {r.match.shootoutGoalsHome !== null && ` (${r.match.shootoutGoalsHome}-${r.match.shootoutGoalsAway})`}
                                </span>
                                <span style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}>{r.away.name} <Flag teamId={r.away.id} style={{ marginRight: 0 }} /></span>
                              </div>
                            </td>
                            <td style={{ textAlign: 'center' }}>
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.8rem' }}>
                                <span>{predFlag}</span>
                                <strong>{predLabel}</strong>
                                <span style={{ color: 'var(--text-secondary)' }}>({predProb.toFixed(0)}%)</span>
                              </div>
                            </td>
                            <td style={{ textAlign: 'center' }}>
                              <span style={{
                                padding: '3px 8px',
                                borderRadius: '12px',
                                fontSize: '0.7rem',
                                fontWeight: 'bold',
                                background: r.correct ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                                color: r.correct ? 'var(--accent-success)' : 'var(--accent-error)',
                                border: r.correct ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(239, 68, 68, 0.3)'
                              }}>
                                {r.correct ? '✓ Correct' : '✗ Wrong'}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
      )}
        </div>
      )}
        </div>
      )}
      {/* Default display before simulation (Monte Carlo Mode only) */}
      {simMode === 'MONTE_CARLO' && !mcResult.simulated && !isSimulating && (
        <div className="card" style={{ textAlign: 'center', padding: '5rem 2rem' }}>
          <Trophy style={{ width: '64px', height: '64px', color: 'var(--text-muted)', margin: '0 auto 1.5rem auto' }} />
          <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', marginBottom: '10px' }}>Ready for Prediction</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '450px', margin: '0 auto 2rem auto', fontSize: '0.95rem', lineHeight: '1.5' }}>
            Select either the visualizer mode to watch a single bracket play out, or the Monte Carlo simulator to run thousands of trials and verify overall victory percentages.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <button className="btn btn-primary" onClick={() => handleMonteCarloSimulation(1000)}>
              <Play style={{ width: '16px', height: '16px' }} />
              Simulate 1,000 Tournaments
            </button>
            <button 
              className="btn btn-primary" 
              onClick={() => handleMonteCarloSimulation(10000)}
              style={{ background: 'linear-gradient(135deg, var(--accent-cyan) 0%, var(--accent-blue) 100%)', color: '#000', boxShadow: '0 4px 15px rgba(0, 242, 254, 0.25)' }}
            >
              <Play style={{ width: '16px', height: '16px' }} />
              Simulate 10,000 Tournaments (Fast)
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

// Bracket Card Component Helper
const BracketMatchCard: React.FC<{
  match: Match;
  getTeam: (id: string) => Team;
  onToggleLockMatch?: (
    matchId: string, 
    homeTeamId: string, 
    awayTeamId: string, 
    goalsHome: number, 
    goalsAway: number,
    stage: Match['stage'],
    realPlayed: boolean,
    shootoutGoalsHome?: number | null,
    shootoutGoalsAway?: number | null
  ) => void;
  lockedMatches?: Record<string, Match>;
}> = ({ match, getTeam, onToggleLockMatch, lockedMatches }) => {
  const home = getTeam(match.homeTeamId);
  const away = getTeam(match.awayTeamId);

  const lockMatch = lockedMatches ? lockedMatches[match.id] : null;
  const isLocked = !!lockMatch && !lockMatch.realPlayed;
  const isReal = !!lockMatch && !!lockMatch.realPlayed;

  // Local editable state for when the match is NOT locked/real
  const [editScoreHome, setScoreHome] = useState(match.goalsHome ?? 0);
  const [editScoreAway, setScoreAway] = useState(match.goalsAway ?? 0);
  const [editSoHome, setSoHome] = useState(match.shootoutGoalsHome ?? 0);
  const [editSoAway, setSoAway] = useState(match.shootoutGoalsAway ?? 0);

  // Derive displayed scores: if locked/real use lock values, otherwise use local editable state
  const scoreHome = lockMatch ? (lockMatch.goalsHome ?? 0) : editScoreHome;
  const scoreAway = lockMatch ? (lockMatch.goalsAway ?? 0) : editScoreAway;
  const soHome = lockMatch ? (lockMatch.shootoutGoalsHome ?? 0) : editSoHome;
  const soAway = lockMatch ? (lockMatch.shootoutGoalsAway ?? 0) : editSoAway;

  const homeWon = match.winnerId === match.homeTeamId;
  const awayWon = match.winnerId === match.awayTeamId;

  return (
    <div className={`bracket-matchup ${isReal ? 'real-played' : isLocked ? 'scenario-locked' : ''}`} style={{
      border: isReal ? '1px solid var(--accent-success)' : isLocked ? '1px solid var(--accent-cyan)' : '1px solid var(--border-glass)',
      background: isReal ? 'rgba(16, 185, 129, 0.04)' : isLocked ? 'rgba(0, 242, 254, 0.02)' : 'rgba(255,255,255,0.01)',
      borderRadius: '8px',
      padding: '8px',
      margin: '6px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }}>
      {/* Home Row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
          <Flag teamId={home.id} />
          <span style={{ fontSize: '0.8rem', fontWeight: homeWon ? 'bold' : 'normal', color: homeWon ? '#fff' : 'var(--text-secondary)' }} title={home.name}>{home.name}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {(isLocked || isReal) ? (
            <span style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>{scoreHome}</span>
          ) : (
            <input 
              type="number"
              min="0"
              max="9"
              value={scoreHome}
              onChange={(e) => setScoreHome(Math.max(0, parseInt(e.target.value) || 0))}
              style={{ width: '24px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-glass)', borderRadius: '4px', color: '#fff', textAlign: 'center', fontSize: '0.75rem', padding: '1px' }}
            />
          )}
          {scoreHome === scoreAway && (
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.65rem', color: 'var(--accent-gold)' }}>
              <span>(P:</span>
              {(isLocked || isReal) ? (
                <span style={{ fontWeight: 'bold', marginLeft: '2px' }}>{soHome}</span>
              ) : (
                <input 
                  type="number"
                  min="0"
                  max="15"
                  value={soHome}
                  onChange={(e) => setSoHome(Math.max(0, parseInt(e.target.value) || 0))}
                  style={{ width: '20px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-glass)', borderRadius: '4px', color: 'var(--accent-gold)', textAlign: 'center', fontSize: '0.65rem', padding: '0px', marginLeft: '2px' }}
                />
              )}
              <span>)</span>
            </div>
          )}
        </div>
      </div>

      {/* Away Row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
        <Flag teamId={away.id} />
        <span style={{ fontSize: '0.8rem', fontWeight: awayWon ? 'bold' : 'normal', color: awayWon ? '#fff' : 'var(--text-secondary)' }} title={away.name}>{away.name}</span>
      </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {(isLocked || isReal) ? (
            <span style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>{scoreAway}</span>
          ) : (
            <input 
              type="number"
              min="0"
              max="9"
              value={scoreAway}
              onChange={(e) => setScoreAway(Math.max(0, parseInt(e.target.value) || 0))}
              style={{ width: '24px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-glass)', borderRadius: '4px', color: '#fff', textAlign: 'center', fontSize: '0.75rem', padding: '1px' }}
            />
          )}
          {scoreHome === scoreAway && (
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.65rem', color: 'var(--accent-gold)' }}>
              <span>(P:</span>
              {(isLocked || isReal) ? (
                <span style={{ fontWeight: 'bold', marginLeft: '2px' }}>{soAway}</span>
              ) : (
                <input 
                  type="number"
                  min="0"
                  max="15"
                  value={soAway}
                  onChange={(e) => setSoAway(Math.max(0, parseInt(e.target.value) || 0))}
                  style={{ width: '20px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-glass)', borderRadius: '4px', color: 'var(--accent-gold)', textAlign: 'center', fontSize: '0.65rem', padding: '0px', marginLeft: '2px' }}
                />
              )}
              <span>)</span>
            </div>
          )}
        </div>
      </div>

      {/* Control buttons inside card */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '6px', marginTop: '4px', borderTop: '1px solid rgba(255,255,255,0.03)', paddingTop: '4px' }}>
        <button
          onClick={() => onToggleLockMatch?.(match.id, home.id, away.id, scoreHome, scoreAway, match.stage, false, scoreHome === scoreAway ? soHome : null, scoreHome === scoreAway ? soAway : null)}
          style={{
            fontSize: '0.65rem',
            padding: '2px 6px',
            borderRadius: '4px',
            border: '1px solid rgba(0, 242, 254, 0.3)',
            background: isLocked ? 'rgba(0, 242, 254, 0.2)' : 'transparent',
            color: isLocked ? '#fff' : 'var(--accent-cyan)',
            cursor: 'pointer'
          }}
          title="Lock as prediction scenario"
        >
          Lock
        </button>
        <button
          onClick={() => onToggleLockMatch?.(match.id, home.id, away.id, scoreHome, scoreAway, match.stage, true, scoreHome === scoreAway ? soHome : null, scoreHome === scoreAway ? soAway : null)}
          style={{
            fontSize: '0.65rem',
            padding: '2px 6px',
            borderRadius: '4px',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            background: isReal ? 'rgba(16, 185, 129, 0.2)' : 'transparent',
            color: isReal ? '#fff' : 'var(--accent-success)',
            cursor: 'pointer'
          }}
          title="Mark as real-world result"
        >
          Real
        </button>
      </div>
    </div>
  );
};

const ScheduleMatchRow: React.FC<{
  match: Match;
  getTeam: (id: string) => Team;
  onToggleLockMatch?: (
    matchId: string,
    homeTeamId: string,
    awayTeamId: string,
    goalsHome: number,
    goalsAway: number,
    stage: Match['stage'],
    realPlayed: boolean,
    shootoutGoalsHome?: number | null,
    shootoutGoalsAway?: number | null
  ) => void;
  lockedMatches: Record<string, Match>;
  playersDb?: Record<string, Player[]>;
  onSaveMatchPerformances?: (matchId: string, perfs: PlayerPerformance[]) => void;
}> = ({ match, getTeam, onToggleLockMatch, lockedMatches, playersDb, onSaveMatchPerformances }) => {
  const [isScorerOpen, setIsScorerOpen] = useState(false);
  const [ratings, setRatings] = useState<Record<string, { rating: number; goals: number; assists: number; injured: boolean; redCard: boolean; saves: number; cleanSheet: boolean }>>({});

  const home = getTeam(match.homeTeamId);
  const away = getTeam(match.awayTeamId);

  const homeSquad = playersDb?.[home.id] || [];
  const awaySquad = playersDb?.[away.id] || [];

  const handleOpenScorer = () => {
    const initialRatings: typeof ratings = {};
    [...homeSquad, ...awaySquad].forEach(p => {
      initialRatings[p.id] = {
        rating: 6.0,
        goals: 0,
        assists: 0,
        injured: p.injured || false,
        redCard: p.suspended || false,
        saves: 0,
        cleanSheet: false
      };
    });
    setRatings(initialRatings);
    setIsScorerOpen(true);
  };

  const handleSavePerformances = () => {
    const perfs: PlayerPerformance[] = [];
    
    homeSquad.forEach(p => {
      const r = ratings[p.id] || { rating: 6.0, goals: 0, assists: 0, injured: false, redCard: false, saves: 0, cleanSheet: false };
      
      const formMultiplier = r.rating >= 9.0 ? 1.3
        : r.rating >= 7.5 ? 1.15
        : r.rating >= 6.0 ? 1.0
        : r.rating >= 4.5 ? 0.85
        : 0.7;

      perfs.push({
        playerName: p.name,
        team: home.id,
        matchId: match.id,
        minutesPlayed: 90,
        goals: r.goals,
        assists: r.assists,
        yellowCard: false,
        redCard: r.redCard,
        injured: r.injured,
        formMultiplier,
        cleanSheet: p.position === 'GK' ? r.cleanSheet : undefined,
        saves: p.position === 'GK' ? r.saves : undefined
      });
    });

    awaySquad.forEach(p => {
      const r = ratings[p.id] || { rating: 6.0, goals: 0, assists: 0, injured: false, redCard: false, saves: 0, cleanSheet: false };
      
      const formMultiplier = r.rating >= 9.0 ? 1.3
        : r.rating >= 7.5 ? 1.15
        : r.rating >= 6.0 ? 1.0
        : r.rating >= 4.5 ? 0.85
        : 0.7;

      perfs.push({
        playerName: p.name,
        team: away.id,
        matchId: match.id,
        minutesPlayed: 90,
        goals: r.goals,
        assists: r.assists,
        yellowCard: false,
        redCard: r.redCard,
        injured: r.injured,
        formMultiplier,
        cleanSheet: p.position === 'GK' ? r.cleanSheet : undefined,
        saves: p.position === 'GK' ? r.saves : undefined
      });
    });

    onSaveMatchPerformances?.(match.id, perfs);
    setIsScorerOpen(false);
  };

  const lockMatch = lockedMatches[match.id] || null;
  const isLocked = !!lockMatch && !lockMatch.realPlayed;
  const isReal = !!lockMatch && !!lockMatch.realPlayed;

  // Editable score inputs — only used when the match is NOT locked/real
  const [editScoreHome, setEditScoreHome] = useState<number | ''>('');
  const [editScoreAway, setEditScoreAway] = useState<number | ''>('');
  const [editSoHome, setEditSoHome] = useState<number | ''>('');
  const [editSoAway, setEditSoAway] = useState<number | ''>('');

  // Derive final displayed values: if locked/real, use the lock values; otherwise use editable state or simulated score
  const scoreHome = lockMatch ? (lockMatch.goalsHome ?? 0) : (editScoreHome !== '' ? editScoreHome : (match.goalsHome ?? ''));
  const scoreAway = lockMatch ? (lockMatch.goalsAway ?? 0) : (editScoreAway !== '' ? editScoreAway : (match.goalsAway ?? ''));
  const soHome = lockMatch ? (lockMatch.shootoutGoalsHome ?? '') : (editSoHome !== '' ? editSoHome : (match.shootoutGoalsHome ?? ''));
  const soAway = lockMatch ? (lockMatch.shootoutGoalsAway ?? '') : (editSoAway !== '' ? editSoAway : (match.shootoutGoalsAway ?? ''));



  const getStageClass = (stage: Match['stage']) => {
    switch (stage) {
      case 'GROUP': return 'group';
      case 'R32': return 'r32';
      case 'R16': return 'r16';
      case 'QF': return 'qf';
      case 'SF': return 'sf';
      case 'THIRD_PLACE': return 'third_place';
      case 'FINAL': return 'final';
      default: return 'group';
    }
  };

  const getStageLabel = (stage: Match['stage'], groupLetter: string | null) => {
    switch (stage) {
      case 'GROUP': return `Group ${groupLetter || ''}`;
      case 'R32': return 'Round of 32';
      case 'R16': return 'Round of 16';
      case 'QF': return 'Quarter-Final';
      case 'SF': return 'Semi-Final';
      case 'THIRD_PLACE': return '3rd Place';
      case 'FINAL': return 'Final';
      default: return stage;
    }
  };

  // Determine whether a score exists to display (simulated or locked)
  const hasSimulatedScore = match.goalsHome !== null && match.goalsAway !== null;
  const displayHome = lockMatch ? (lockMatch.goalsHome ?? 0) : (hasSimulatedScore ? match.goalsHome! : null);
  const displayAway = lockMatch ? (lockMatch.goalsAway ?? 0) : (hasSimulatedScore ? match.goalsAway! : null);
  const displaySoHome = lockMatch ? lockMatch.shootoutGoalsHome : match.shootoutGoalsHome;
  const displaySoAway = lockMatch ? lockMatch.shootoutGoalsAway : match.shootoutGoalsAway;

  // Winner display
  const winnerId = lockMatch ? lockMatch.winnerId : match.winnerId;

  const getPositionOrder = (pos: Player['position']) => {
    switch (pos) {
      case 'GK': return 1;
      case 'DEF': return 2;
      case 'MID': return 3;
      case 'FWD': return 4;
      default: return 5;
    }
  };

  const getPositionColor = (pos: Player['position']) => {
    switch (pos) {
      case 'GK': return '#fbbf24'; // amber
      case 'DEF': return '#34d399'; // emerald
      case 'MID': return '#60a5fa'; // blue
      case 'FWD': return '#f87171'; // red
      default: return '#9ca3af'; // gray
    }
  };

  const renderRosterList = (squad: Player[]) => {
    const sorted = [...squad].sort((a, b) => {
      const posA = getPositionOrder(a.position);
      const posB = getPositionOrder(b.position);
      if (posA !== posB) return posA - posB;
      return b.rating - a.rating;
    });

    if (sorted.length === 0) {
      return (
        <div style={{ padding: '1rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
          No squad data available.
        </div>
      );
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {sorted.map(player => {
          const r = ratings[player.id] || { rating: 6.0, goals: 0, assists: 0, injured: false, redCard: false, saves: 0, cleanSheet: false };
          const ratingVal = r.rating;

          const ratingColor = ratingVal >= 9.0 ? '#d4af37'   // Gold
            : ratingVal >= 7.5 ? '#10b981'                    // Green
            : ratingVal >= 6.0 ? '#06b6d4'                    // Cyan
            : ratingVal >= 4.5 ? '#f59e0b'                    // Amber
            : '#ef4444';                                       // Red

          const formMultiplier = ratingVal >= 9.0 ? '1.30x'
            : ratingVal >= 7.5 ? '1.15x'
            : ratingVal >= 6.0 ? '1.00x'
            : ratingVal >= 4.5 ? '0.85x'
            : '0.70x';

          return (
            <div
              key={player.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.04)',
                borderRadius: '8px',
                padding: '8px 12px',
                gap: '8px'
              }}
            >
              {/* Row 1: Player Info & Slider */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: '150px' }}>
                  <span style={{
                    fontSize: '0.65rem',
                    fontWeight: '800',
                    color: '#000',
                    background: getPositionColor(player.position),
                    padding: '2px 4px',
                    borderRadius: '3px',
                    minWidth: '28px',
                    textAlign: 'center'
                  }}>
                    {player.position}
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: '600', color: '#f8fafc' }}>
                      {player.name}
                    </span>
                    <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                      Age {player.age} • OVR {player.rating} • {player.club}
                    </span>
                  </div>
                </div>

                {/* Rating Slider & Badge */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input
                    type="range"
                    min="1.0"
                    max="10.0"
                    step="0.5"
                    value={ratingVal}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value);
                      setRatings(prev => ({
                        ...prev,
                        [player.id]: {
                          ...prev[player.id] || { rating: 6.0, goals: 0, assists: 0, injured: false, redCard: false, saves: 0, cleanSheet: false },
                          rating: val
                        }
                      }));
                    }}
                    style={{
                      width: '90px',
                      height: '4px',
                      borderRadius: '2px',
                      accentColor: ratingColor,
                      cursor: 'pointer'
                    }}
                  />
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minWidth: '54px'
                  }}>
                    <span style={{
                      fontSize: '0.85rem',
                      fontWeight: '800',
                      color: ratingColor,
                      fontFamily: 'var(--font-heading)'
                    }}>
                      {ratingVal.toFixed(1)}
                    </span>
                    <span style={{
                      fontSize: '0.6rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      fontWeight: '700'
                    }}>
                      {formMultiplier}
                    </span>
                  </div>
                </div>
              </div>

              {/* Row 2: Stats & Toggles */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '6px',
                borderTop: '1px solid rgba(255, 255, 255, 0.03)',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                {/* Goals & Assists */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span title="Goals" style={{ fontSize: '0.85rem' }}>⚽</span>
                    <input
                      type="number"
                      min="0"
                      max="10"
                      value={r.goals}
                      onChange={(e) => {
                        const val = parseInt(e.target.value) || 0;
                        setRatings(prev => ({
                          ...prev,
                          [player.id]: {
                            ...prev[player.id] || { rating: 6.0, goals: 0, assists: 0, injured: false, redCard: false, saves: 0, cleanSheet: false },
                            goals: Math.max(0, val)
                          }
                        }));
                      }}
                      style={{
                        width: '36px',
                        height: '22px',
                        background: 'rgba(0,0,0,0.3)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '4px',
                        color: '#fff',
                        textAlign: 'center',
                        fontSize: '0.78rem'
                      }}
                    />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span title="Assists" style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--accent-cyan)' }}>A</span>
                    <input
                      type="number"
                      min="0"
                      max="10"
                      value={r.assists}
                      onChange={(e) => {
                        const val = parseInt(e.target.value) || 0;
                        setRatings(prev => ({
                          ...prev,
                          [player.id]: {
                            ...prev[player.id] || { rating: 6.0, goals: 0, assists: 0, injured: false, redCard: false, saves: 0, cleanSheet: false },
                            assists: Math.max(0, val)
                          }
                        }));
                      }}
                      style={{
                        width: '36px',
                        height: '22px',
                        background: 'rgba(0,0,0,0.3)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '4px',
                        color: '#fff',
                        textAlign: 'center',
                        fontSize: '0.78rem'
                      }}
                    />
                  </div>
                  {/* GK-Specific: Saves & Clean Sheet */}
                  {player.position === 'GK' && (
                    <>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span title="Saves" style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#fbbf24' }}>🧤</span>
                        <input
                          type="number"
                          min="0"
                          max="20"
                          value={r.saves ?? 0}
                          onChange={(e) => {
                            const val = parseInt(e.target.value) || 0;
                            setRatings(prev => ({
                              ...prev,
                              [player.id]: {
                                ...prev[player.id] || { rating: 6.0, goals: 0, assists: 0, injured: false, redCard: false, saves: 0, cleanSheet: false },
                                saves: Math.max(0, val)
                              }
                            }));
                          }}
                          style={{
                            width: '36px',
                            height: '22px',
                            background: 'rgba(0,0,0,0.3)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '4px',
                            color: '#fff',
                            textAlign: 'center',
                            fontSize: '0.78rem'
                          }}
                        />
                      </div>
                      <button
                        onClick={() => {
                          setRatings(prev => ({
                            ...prev,
                            [player.id]: {
                              ...prev[player.id] || { rating: 6.0, goals: 0, assists: 0, injured: false, redCard: false, saves: 0, cleanSheet: false },
                              cleanSheet: !r.cleanSheet
                            }
                          }));
                        }}
                        style={{
                          background: r.cleanSheet ? 'rgba(16, 185, 129, 0.25)' : 'rgba(0,0,0,0.2)',
                          border: r.cleanSheet ? '1px solid #10b981' : '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '4px',
                          padding: '2px 8px',
                          cursor: 'pointer',
                          color: r.cleanSheet ? '#6ee7b7' : 'var(--text-muted)',
                          fontSize: '0.7rem',
                          fontWeight: '700',
                          transition: 'all 0.2s'
                        }}
                      >
                        🧱 {r.cleanSheet ? 'Clean Sheet' : 'CS'}
                      </button>
                    </>
                  )}
                </div>

                {/* Injury & Red Card toggles */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {/* Red Card Toggle */}
                  <button
                    onClick={() => {
                      setRatings(prev => ({
                        ...prev,
                        [player.id]: {
                          ...prev[player.id] || { rating: 6.0, goals: 0, assists: 0, injured: false, redCard: false, saves: 0, cleanSheet: false },
                          redCard: !r.redCard
                        }
                      }));
                    }}
                    style={{
                      background: r.redCard ? 'rgba(239, 68, 68, 0.25)' : 'rgba(0,0,0,0.2)',
                      border: r.redCard ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '4px',
                      padding: '2px 8px',
                      cursor: 'pointer',
                      color: r.redCard ? '#fca5a5' : 'var(--text-muted)',
                      fontSize: '0.7rem',
                      fontWeight: '700',
                      transition: 'all 0.2s'
                    }}
                  >
                    🟥 {r.redCard ? 'Sent Off' : 'Red Card'}
                  </button>

                  {/* Injury Toggle */}
                  <button
                    onClick={() => {
                      setRatings(prev => ({
                        ...prev,
                        [player.id]: {
                          ...prev[player.id] || { rating: 6.0, goals: 0, assists: 0, injured: false, redCard: false, saves: 0, cleanSheet: false },
                          injured: !r.injured
                        }
                      }));
                    }}
                    style={{
                      background: r.injured ? 'rgba(234, 179, 8, 0.25)' : 'rgba(0,0,0,0.2)',
                      border: r.injured ? '1px solid #eab308' : '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '4px',
                      padding: '2px 8px',
                      cursor: 'pointer',
                      color: r.injured ? '#fef08a' : 'var(--text-muted)',
                      fontSize: '0.7rem',
                      fontWeight: '700',
                      transition: 'all 0.2s'
                    }}
                  >
                    🤕 {r.injured ? 'Injured' : 'Injury'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <tr className={`schedule-row ${isReal ? 'real-played' : isLocked ? 'scenario-locked' : ''}`}>
        {/* Match Number */}
        <td style={{ fontWeight: '600', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
          #{match.matchNumber || match.id}
        </td>

        {/* Date & Time */}
        <td>
          <div style={{ fontWeight: '500', fontSize: '0.82rem' }}>{match.date}</div>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{match.kickoffTime}</div>
        </td>

        {/* Stage */}
        <td>
          <span className={`stage-badge ${getStageClass(match.stage)}`}>
            {getStageLabel(match.stage, match.groupLetter)}
          </span>
        </td>

        {/* Matchup & Score */}
        <td>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>

            {/* Home Team */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', width: '160px', justifyContent: 'flex-end' }}>
              <span style={{
                fontSize: '0.82rem',
                fontWeight: winnerId === home.id ? '700' : 'normal',
                color: winnerId === home.id ? '#fff' : 'var(--text-secondary)'
              }}>
                {home.name}
              </span>
              <Flag teamId={home.id} style={{ fontSize: '1.1rem', marginRight: 0 }} />
            </div>

            {/* Score Display */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', minWidth: '90px' }}>
              {/* Status Badge */}
              {isReal && (
                <span className="match-status-badge match-status-ft">FT</span>
              )}
              {isLocked && !isReal && (
                <span className="match-status-badge match-status-pred">PRED</span>
              )}
              {!isReal && !isLocked && hasSimulatedScore && (
                <span className="match-status-badge match-status-sim">SIM</span>
              )}

              {/* Score Numbers */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                {displayHome !== null ? (
                  /* Show score boldly */
                  <span style={{
                    fontSize: '1.25rem',
                    fontWeight: '800',
                    color: isReal ? 'var(--accent-success)' : isLocked ? 'var(--accent-cyan)' : '#e2e8f0',
                    minWidth: '24px',
                    textAlign: 'center',
                    fontFamily: 'var(--font-heading)',
                    textShadow: isReal ? '0 0 8px rgba(16,185,129,0.4)' : isLocked ? '0 0 8px rgba(0,242,254,0.4)' : 'none'
                  }}>
                    {displayHome}
                  </span>
                ) : (
                  <input
                    type="number"
                    min="0"
                    max="9"
                    placeholder="-"
                    value={scoreHome}
                    onChange={(e) => {
                      const val = e.target.value;
                      setEditScoreHome(val === '' ? '' : Math.max(0, parseInt(val) || 0));
                    }}
                    style={{ width: '32px', height: '28px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-glass)', borderRadius: '4px', color: '#fff', textAlign: 'center', fontSize: '0.85rem' }}
                  />
                )}

                <span style={{ color: 'var(--text-muted)', fontWeight: '700' }}>–</span>

                {displayAway !== null ? (
                  <span style={{
                    fontSize: '1.25rem',
                    fontWeight: '800',
                    color: isReal ? 'var(--accent-success)' : isLocked ? 'var(--accent-cyan)' : '#e2e8f0',
                    minWidth: '24px',
                    textAlign: 'center',
                    fontFamily: 'var(--font-heading)',
                    textShadow: isReal ? '0 0 8px rgba(16,185,129,0.4)' : isLocked ? '0 0 8px rgba(0,242,254,0.4)' : 'none'
                  }}>
                    {displayAway}
                  </span>
                ) : (
                  <input
                    type="number"
                    min="0"
                    max="9"
                    placeholder="-"
                    value={scoreAway}
                    onChange={(e) => {
                      const val = e.target.value;
                      setEditScoreAway(val === '' ? '' : Math.max(0, parseInt(val) || 0));
                    }}
                    style={{ width: '32px', height: '28px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-glass)', borderRadius: '4px', color: '#fff', textAlign: 'center', fontSize: '0.85rem' }}
                  />
                )}
              </div>

              {/* Shootout Score */}
              {match.stage !== 'GROUP' && displaySoHome !== null && displaySoAway !== null && displaySoHome !== undefined && displaySoAway !== undefined && (
                <div style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', fontWeight: '600' }}>
                  ({displaySoHome} – {displaySoAway}) pens
                </div>
              )}
              {/* Shootout input when score is tied and unlocked */}
              {match.stage !== 'GROUP' && displayHome === null && scoreHome !== '' && scoreAway !== '' && scoreHome === scoreAway && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '2px', fontSize: '0.75rem', color: 'var(--accent-gold)' }}>
                  <span>(</span>
                  <input
                    type="number" min="0" max="15" placeholder="P"
                    value={soHome}
                    onChange={(e) => { const v = e.target.value; setEditSoHome(v === '' ? '' : Math.max(0, parseInt(v) || 0)); }}
                    style={{ width: '24px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-glass)', borderRadius: '4px', color: 'var(--accent-gold)', textAlign: 'center', fontSize: '0.75rem', padding: '1px' }}
                  />
                  <span>-</span>
                  <input
                    type="number" min="0" max="15" placeholder="P"
                    value={soAway}
                    onChange={(e) => { const v = e.target.value; setEditSoAway(v === '' ? '' : Math.max(0, parseInt(v) || 0)); }}
                    style={{ width: '24px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-glass)', borderRadius: '4px', color: 'var(--accent-gold)', textAlign: 'center', fontSize: '0.75rem', padding: '1px' }}
                  />
                  <span>)</span>
                </div>
              )}
            </div>

            {/* Away Team */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', width: '160px', justifyContent: 'flex-start' }}>
              <Flag teamId={away.id} style={{ fontSize: '1.1rem', marginRight: 0 }} />
              <span style={{
                fontSize: '0.82rem',
                fontWeight: winnerId === away.id ? '700' : 'normal',
                color: winnerId === away.id ? '#fff' : 'var(--text-secondary)'
              }}>
                {away.name}
              </span>
            </div>
          </div>
        </td>

        {/* Stadium */}
        <td style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', maxWidth: '160px' }}>
          {match.stadium}
        </td>

        {/* Actions */}
        <td>
          <div style={{ display: 'flex', gap: '6px', flexDirection: 'column' }}>
            {/* Lock (Prediction) button */}
            {!isReal && (
              <button
                onClick={() => {
                  if (isLocked) {
                    onToggleLockMatch?.(match.id, home.id, away.id, 0, 0, match.stage, false);
                  } else {
                    const h = displayHome !== null ? displayHome : (scoreHome === '' ? 0 : scoreHome as number);
                    const a = displayAway !== null ? displayAway : (scoreAway === '' ? 0 : scoreAway as number);
                    const sh = soHome === '' ? null : soHome as number;
                    const sa = soAway === '' ? null : soAway as number;
                    onToggleLockMatch?.(match.id, home.id, away.id, h, a, match.stage, false, sh, sa);
                  }
                }}
                style={{
                  fontSize: '0.7rem', padding: '3px 8px', borderRadius: '5px',
                  border: '1px solid rgba(0, 242, 254, 0.3)',
                  background: isLocked ? 'rgba(0, 242, 254, 0.2)' : 'transparent',
                  color: isLocked ? '#fff' : 'var(--accent-cyan)',
                  cursor: 'pointer', fontWeight: '600', whiteSpace: 'nowrap'
                }}
                title={isLocked ? "Unlock prediction" : "Lock as prediction scenario"}
              >
                {isLocked ? '🔒 Locked' : '🔐 Lock'}
              </button>
            )}

            {/* Real Result button */}
            <button
              onClick={() => {
                if (isReal) {
                  onToggleLockMatch?.(match.id, home.id, away.id, 0, 0, match.stage, true);
                } else {
                  const h = displayHome !== null ? displayHome : (scoreHome === '' ? 0 : scoreHome as number);
                  const a = displayAway !== null ? displayAway : (scoreAway === '' ? 0 : scoreAway as number);
                  const sh = soHome === '' ? null : soHome as number;
                  const sa = soAway === '' ? null : soAway as number;
                  onToggleLockMatch?.(match.id, home.id, away.id, h, a, match.stage, true, sh, sa);
                }
              }}
              style={{
                fontSize: '0.7rem', padding: '3px 8px', borderRadius: '5px',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                background: isReal ? 'rgba(16, 185, 129, 0.2)' : 'transparent',
                color: isReal ? '#fff' : 'var(--accent-success)',
                cursor: 'pointer', fontWeight: '600', whiteSpace: 'nowrap'
              }}
              title={isReal ? "Unlock real result" : "Mark as official real-world result"}
            >
              {isReal ? '✅ Real FT' : '⚡ Set Real'}
            </button>

            {isReal && (
              <button
                onClick={() => isScorerOpen ? setIsScorerOpen(false) : handleOpenScorer()}
                style={{
                  fontSize: '0.7rem', padding: '3px 8px', borderRadius: '5px',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  background: isScorerOpen ? 'rgba(212, 175, 55, 0.2)' : 'transparent',
                  color: isScorerOpen ? '#fff' : 'var(--accent-gold)',
                  cursor: 'pointer', fontWeight: '600', whiteSpace: 'nowrap',
                  marginTop: '4px'
                }}
                title="Rate players' performance in this match"
              >
                {isScorerOpen ? '❌ Close Scorer' : '🏆 Rate Players'}
              </button>
            )}
          </div>
        </td>
      </tr>
      {isScorerOpen && (
        <tr className="player-scorer-row" style={{ backgroundColor: 'rgba(15, 23, 42, 0.65)' }}>
          <td colSpan={6} style={{ padding: '1.25rem', borderBottom: '1px solid rgba(212, 175, 55, 0.15)' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(20, 20, 35, 0.95), rgba(10, 10, 20, 0.98))',
              borderRadius: '12px',
              padding: '1.25rem',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(12px)'
            }}>
              {/* Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                paddingBottom: '0.75rem'
              }}>
                <div>
                  <h4 style={{
                    margin: 0,
                    fontSize: '1.1rem',
                    color: 'var(--accent-gold)',
                    fontWeight: '700',
                    fontFamily: 'var(--font-heading)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    🏆 Player Performance Scorer
                  </h4>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Set custom match ratings and attributes for players in this match. Ratings will dynamically adjust player form multipliers and baseline skills.
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={handleSavePerformances}
                    style={{
                      background: 'linear-gradient(90deg, #d4af37, #f3e5ab)',
                      color: '#000',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '6px 14px',
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      boxShadow: '0 2px 8px rgba(212, 175, 55, 0.3)',
                      transition: 'transform 0.2s, box-shadow 0.2s'
                    }}
                  >
                    💾 Save Ratings
                  </button>
                  <button
                    onClick={() => setIsScorerOpen(false)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'var(--text-secondary)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '6px',
                      padding: '6px 12px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>

              {/* Grid of rosters */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.5rem',
                maxHeight: '450px',
                overflowY: 'auto',
                paddingRight: '4px'
              }}>
                {/* Home Team Column */}
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '0.75rem',
                    padding: '6px 12px',
                    background: 'rgba(212, 175, 55, 0.08)',
                    borderRadius: '6px',
                    borderLeft: '4px solid var(--accent-gold)'
                  }}>
                    <Flag teamId={home.id} style={{ fontSize: '1.2rem', margin: 0 }} />
                    <span style={{ fontWeight: '700', fontSize: '0.9rem', color: '#fff' }}>
                      {home.name} Squad
                    </span>
                  </div>
                  {renderRosterList(homeSquad)}
                </div>

                {/* Away Team Column */}
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '0.75rem',
                    padding: '6px 12px',
                    background: 'rgba(0, 242, 254, 0.08)',
                    borderRadius: '6px',
                    borderLeft: '4px solid var(--accent-cyan)'
                  }}>
                    <Flag teamId={away.id} style={{ fontSize: '1.2rem', margin: 0 }} />
                    <span style={{ fontWeight: '700', fontSize: '0.9rem', color: '#fff' }}>
                      {away.name} Squad
                    </span>
                  </div>
                  {renderRosterList(awaySquad)}
                </div>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};
