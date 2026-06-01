import type { Team, Player, Match, GroupStanding, TeamSimStats, SimulationSummary } from '../types';

// Baseline goals expected in a football match (avg 1.35 goals per team = 2.7 total)
const BASELINE_GOAL_EXP = 1.35;
// Sensitivity multiplier for strength differences (every 100 rating diff changes goal expectation by ~15%)
const SENSITIVITY = 1.15;

/**
 * Calculates a team's dynamic strength rating based on baseline Elo and player squad quality (SQI).
 * SQI is computed as the average rating of uninjured and unsuspended players.
 */
export const calculateTeamStrength = (team: Team, squad: Player[]): number => {
  const activePlayers = squad.filter(p => !p.injured && !p.suspended);
  
  // Default to baseline rating if squad is empty
  if (activePlayers.length === 0) {
    return team.elo * 0.7 + (50 * 14) * 0.3;
  }
  
  // Calculate Squad Quality Index (SQI) - average rating of squad
  const totalRating = activePlayers.reduce((sum, p) => sum + p.rating * p.form, 0);
  const sqi = totalRating / activePlayers.length;
  
  // Combine Elo and SQI. We scale SQI by 14 so it resides on a similar numeric scale as Elo.
  // Strength = Elo * 0.70 + (SQI * 14) * 0.30
  const strength = (team.elo * 0.7) + (sqi * 14 * 0.3);
  return strength;
};

/**
 * Knuth algorithm for Poisson random variable generation.
 */
const poissonRandom = (lambda: number): number => {
  const L = Math.exp(-lambda);
  let k = 0;
  let p = 1.0;
  do {
    k++;
    p *= Math.random();
  } while (p > L);
  return k - 1;
};

/**
 * Simulates a single match scoreline using a Poisson model based on team strengths.
 */
export const simulateMatch = (
  matchId: string,
  homeTeam: Team,
  homeSquad: Player[],
  awayTeam: Team,
  awaySquad: Player[],
  stage: Match['stage'],
  groupLetter: string | null = null,
  matchNumber: number = 0
): Match => {
  const homeStrength = calculateTeamStrength(homeTeam, homeSquad);
  const awayStrength = calculateTeamStrength(awayTeam, awaySquad);
  
  // Strength difference (scaled per 100 points)
  const diff = (homeStrength - awayStrength) / 100;
  
  // Compute expected goal values (lambdas)
  const lambdaHome = BASELINE_GOAL_EXP * Math.pow(SENSITIVITY, diff);
  const lambdaAway = BASELINE_GOAL_EXP * Math.pow(SENSITIVITY, -diff);
  
  // Simulate goals
  let goalsHome = poissonRandom(lambdaHome);
  let goalsAway = poissonRandom(lambdaAway);
  
  let shootoutGoalsHome: number | null = null;
  let shootoutGoalsAway: number | null = null;
  let winnerId: string | null = null;
  
  // Handle knockout ties
  if (stage !== 'GROUP' && goalsHome === goalsAway) {
    // 1. Simulate Extra Time (30% scale of full match goal expectations)
    const extraTimeGoalsHome = poissonRandom(lambdaHome * 0.3);
    const extraTimeGoalsAway = poissonRandom(lambdaAway * 0.3);
    
    goalsHome += extraTimeGoalsHome;
    goalsAway += extraTimeGoalsAway;
    
    // 2. If still tied, simulate Penalty Shootout
    if (goalsHome === goalsAway) {
      // Penalty shootout probability influenced by goalkeeper ratings and average squad shooting skill
      const homeGK = homeSquad.find(p => p.position === 'GK' && !p.injured && !p.suspended)?.rating || 75;
      const awayGK = awaySquad.find(p => p.position === 'GK' && !p.injured && !p.suspended)?.rating || 75;
      
      const homeFWDRating = homeSquad.filter(p => p.position === 'FWD' && !p.injured && !p.suspended).reduce((sum, p) => sum + p.rating, 0) / 4 || 75;
      const awayFWDRating = awaySquad.filter(p => p.position === 'FWD' && !p.injured && !p.suspended).reduce((sum, p) => sum + p.rating, 0) / 4 || 75;
      
      // Calculate kick conversion success rates (base 75% + forward skill factor - goalie skill factor)
      const homeConvRate = 0.75 + (homeFWDRating - awayGK) / 300;
      const awayConvRate = 0.75 + (awayFWDRating - homeGK) / 300;
      
      // Simulate standard 5 kicks + sudden death
      let homePens = 0;
      let awayPens = 0;
      
      // First 5 rounds
      for (let round = 0; round < 5; round++) {
        if (Math.random() < homeConvRate) homePens++;
        if (Math.random() < awayConvRate) awayPens++;
      }
      
      // Sudden death rounds
      let rounds = 5;
      while (homePens === awayPens && rounds < 15) {
        if (Math.random() < homeConvRate) homePens++;
        if (Math.random() < awayConvRate) awayPens++;
        rounds++;
      }
      
      // Ensure there is a winner
      if (homePens === awayPens) {
        if (Math.random() > 0.5) homePens++;
        else awayPens++;
      }
      
      shootoutGoalsHome = homePens;
      shootoutGoalsAway = awayPens;
      winnerId = homePens > awayPens ? homeTeam.id : awayTeam.id;
    } else {
      winnerId = goalsHome > goalsAway ? homeTeam.id : awayTeam.id;
    }
  } else {
    // Standard match winner resolution
    if (goalsHome > goalsAway) {
      winnerId = homeTeam.id;
    } else if (goalsAway > goalsHome) {
      winnerId = awayTeam.id;
    } else {
      winnerId = null; // Draw (only possible in group stage)
    }
  }
  
  // Update goalscorer stats for players in this simulation (simplistic selection)
  if (goalsHome > 0) {
    const homeFWDs = homeSquad.filter(p => p.position === 'FWD' && !p.injured && !p.suspended);
    const scorer = homeFWDs.length > 0 ? homeFWDs[Math.floor(Math.random() * homeFWDs.length)] : homeSquad[0];
    if (scorer) {
      scorer.goalsScored = (scorer.goalsScored || 0) + goalsHome;
    }
  }
  
  if (goalsAway > 0) {
    const awayFWDs = awaySquad.filter(p => p.position === 'FWD' && !p.injured && !p.suspended);
    const scorer = awayFWDs.length > 0 ? awayFWDs[Math.floor(Math.random() * awayFWDs.length)] : awaySquad[0];
    if (scorer) {
      scorer.goalsScored = (scorer.goalsScored || 0) + goalsAway;
    }
  }
  
  return {
    id: matchId,
    homeTeamId: homeTeam.id,
    awayTeamId: awayTeam.id,
    stage,
    goalsHome,
    goalsAway,
    shootoutGoalsHome,
    shootoutGoalsAway,
    winnerId,
    isSimulated: true,
    groupLetter,
    matchNumber
  };
};

/**
 * Computes group standings based on group matches.
 */
export const calculateGroupStandings = (
  teamIds: string[],
  groupMatches: Match[]
): GroupStanding[] => {
  const standings: Record<string, GroupStanding> = {};
  
  teamIds.forEach(teamId => {
    standings[teamId] = {
      teamId,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
      points: 0
    };
  });
  
  groupMatches.forEach(m => {
    if (!m.isSimulated || m.goalsHome === null || m.goalsAway === null) return;
    
    const h = standings[m.homeTeamId];
    const a = standings[m.awayTeamId];
    
    if (!h || !a) return;
    
    h.played++;
    a.played++;
    
    h.goalsFor += m.goalsHome;
    h.goalsAgainst += m.goalsAway;
    a.goalsFor += m.goalsAway;
    a.goalsAgainst += m.goalsHome;
    
    h.goalDifference = h.goalsFor - h.goalsAgainst;
    a.goalDifference = a.goalsFor - a.goalsAgainst;
    
    if (m.goalsHome > m.goalsAway) {
      h.won++;
      h.points += 3;
      a.lost++;
    } else if (m.goalsAway > m.goalsHome) {
      a.won++;
      a.points += 3;
      h.lost++;
    } else {
      h.drawn++;
      a.drawn++;
      h.points += 1;
      a.points += 1;
    }
  });
  
  // Sort standings: Points -> Goal Difference -> Goals For -> Head-to-Head (approximated here by baseline Elo for simplicity) -> Random
  return Object.values(standings).sort((x, y) => {
    if (x.points !== y.points) return y.points - x.points;
    if (x.goalDifference !== y.goalDifference) return y.goalDifference - x.goalDifference;
    if (x.goalsFor !== y.goalsFor) return y.goalsFor - x.goalsFor;
    return Math.random() - 0.5; // fallback random
  });
};

/**
 * Runs a single full tournament simulation.
 */
export const runFullTournamentSimulation = (
  teams: Team[],
  playersDb: Record<string, Player[]>
): {
  matches: Match[];
  groupStandings: Record<string, GroupStanding[]>;
  thirdPlaceStandings: GroupStanding[];
  qualifiedKnockoutTeams: string[];
} => {
  // Clear player goals before simulation
  Object.values(playersDb).forEach(squad => {
    squad.forEach(p => { p.goalsScored = 0; });
  });

  const matches: Match[] = [];
  const groupStandings: Record<string, GroupStanding[]> = {};
  
  // Group letters A through L
  const groupLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
  let matchCounter = 1;
  
  // 1. Simulate Group Stage
  groupLetters.forEach(letter => {
    const groupTeams = teams.filter(t => t.group === letter);
    const groupMatches: Match[] = [];
    
    // Round-robin inside the group (6 matches)
    for (let i = 0; i < groupTeams.length; i++) {
      for (let j = i + 1; j < groupTeams.length; j++) {
        const home = groupTeams[i];
        const away = groupTeams[j];
        const m = simulateMatch(
          `G_${letter}_${matchCounter}`,
          home,
          playersDb[home.id] || [],
          away,
          playersDb[away.id] || [],
          'GROUP',
          letter,
          matchCounter++
        );
        groupMatches.push(m);
        matches.push(m);
      }
    }
    
    groupStandings[letter] = calculateGroupStandings(
      groupTeams.map(t => t.id),
      groupMatches
    );
  });
  
  // 2. Select third placed teams
  const thirdPlaceTeams: GroupStanding[] = [];
  groupLetters.forEach(letter => {
    const standings = groupStandings[letter];
    if (standings && standings.length >= 3) {
      thirdPlaceTeams.push(standings[2]); // index 2 is the 3rd placed team
    }
  });
  
  // Rank third placed teams: Points -> Goal Difference -> Goals For -> Random
  thirdPlaceTeams.sort((x, y) => {
    if (x.points !== y.points) return y.points - x.points;
    if (x.goalDifference !== y.goalDifference) return y.goalDifference - x.goalDifference;
    if (x.goalsFor !== y.goalsFor) return y.goalsFor - x.goalsFor;
    return Math.random() - 0.5;
  });
  
  const qualifiedThirdPlaces = thirdPlaceTeams.slice(0, 8);
  
  // 3. Assemble Qualified Teams list (Top 2 from each group + top 8 3rd places)
  const top2Teams: string[] = [];
  groupLetters.forEach(letter => {
    const standings = groupStandings[letter];
    if (standings) {
      top2Teams.push(standings[0].teamId);
      top2Teams.push(standings[1].teamId);
    }
  });
  
  const qualifiedKnockoutIds = [...top2Teams, ...qualifiedThirdPlaces.map(t => t.teamId)];
  
  // Helpers to fetch team data
  const getTeam = (id: string) => teams.find(t => t.id === id)!;
  const getSquad = (id: string) => playersDb[id] || [];
  
  // 4. Round of 32 Pairing
  // Map Group Winners (W), Runners-up (R), and Third-Places (T)
  const w: Record<string, string> = {};
  const r: Record<string, string> = {};
  groupLetters.forEach(letter => {
    const st = groupStandings[letter];
    w[letter] = st[0].teamId;
    r[letter] = st[1].teamId;
  });
  const t = qualifiedThirdPlaces.map(item => item.teamId);
  
  // 16 Matchups for R32
  const r32Pairings: [string, string][] = [
    [w["A"], r["B"]],
    [w["C"], t[0]],
    [w["D"], r["C"]],
    [w["E"], t[1]],
    [w["F"], r["E"]],
    [w["G"], t[2]],
    [w["H"], r["F"]],
    [w["I"], t[3]],
    [w["J"], r["H"]],
    [w["K"], t[4]],
    [w["L"], r["J"]],
    [w["B"], t[5]],
    [r["A"], t[6]],
    [r["D"], t[7]],
    [r["G"], r["I"]],
    [r["K"], r["L"]]
  ];
  
  const r32Matches: Match[] = [];
  r32Pairings.forEach(([teamA, teamB], idx) => {
    const m = simulateMatch(
      `R32_${idx + 1}`,
      getTeam(teamA),
      getSquad(teamA),
      getTeam(teamB),
      getSquad(teamB),
      'R32',
      null,
      matchCounter++
    );
    r32Matches.push(m);
    matches.push(m);
  });
  
  // 5. Round of 16 (8 Matches)
  const r16Matches: Match[] = [];
  for (let i = 0; i < 8; i++) {
    const teamA = r32Matches[2 * i].winnerId!;
    const teamB = r32Matches[2 * i + 1].winnerId!;
    const m = simulateMatch(
      `R16_${i + 1}`,
      getTeam(teamA),
      getSquad(teamA),
      getTeam(teamB),
      getSquad(teamB),
      'R16',
      null,
      matchCounter++
    );
    r16Matches.push(m);
    matches.push(m);
  }
  
  // 6. Quarter-finals (4 Matches)
  const qfMatches: Match[] = [];
  for (let i = 0; i < 4; i++) {
    const teamA = r16Matches[2 * i].winnerId!;
    const teamB = r16Matches[2 * i + 1].winnerId!;
    const m = simulateMatch(
      `QF_${i + 1}`,
      getTeam(teamA),
      getSquad(teamA),
      getTeam(teamB),
      getSquad(teamB),
      'QF',
      null,
      matchCounter++
    );
    qfMatches.push(m);
    matches.push(m);
  }
  
  // 7. Semi-finals (2 Matches)
  const sfMatches: Match[] = [];
  for (let i = 0; i < 2; i++) {
    const teamA = qfMatches[2 * i].winnerId!;
    const teamB = qfMatches[2 * i + 1].winnerId!;
    const m = simulateMatch(
      `SF_${i + 1}`,
      getTeam(teamA),
      getSquad(teamA),
      getTeam(teamB),
      getSquad(teamB),
      'SF',
      null,
      matchCounter++
    );
    sfMatches.push(m);
    matches.push(m);
  }
  
  // 8. Third-place and Final Matches
  const sf1Home = sfMatches[0].homeTeamId;
  const sf1Away = sfMatches[0].awayTeamId;
  const sf1Winner = sfMatches[0].winnerId!;
  const sf1Loser = sf1Winner === sf1Home ? sf1Away : sf1Home;
  
  const sf2Home = sfMatches[1].homeTeamId;
  const sf2Away = sfMatches[1].awayTeamId;
  const sf2Winner = sfMatches[1].winnerId!;
  const sf2Loser = sf2Winner === sf2Home ? sf2Away : sf2Home;
  
  // Third-place
  const thirdPlaceMatch = simulateMatch(
    'TP_MATCH',
    getTeam(sf1Loser),
    getSquad(sf1Loser),
    getTeam(sf2Loser),
    getSquad(sf2Loser),
    'THIRD_PLACE',
    null,
    matchCounter++
  );
  matches.push(thirdPlaceMatch);
  
  // Final
  const finalMatch = simulateMatch(
    'FINAL_MATCH',
    getTeam(sf1Winner),
    getSquad(sf1Winner),
    getTeam(sf2Winner),
    getSquad(sf2Winner),
    'FINAL',
    null,
    matchCounter++
  );
  matches.push(finalMatch);
  
  return {
    matches,
    groupStandings,
    thirdPlaceStandings: thirdPlaceTeams,
    qualifiedKnockoutTeams: qualifiedKnockoutIds
  };
};

/**
 * Runs a Monte Carlo simulation of the tournament N times.
 * This runs fully in-memory and compiles probabilities.
 */
export const runMonteCarloSimulation = (
  teams: Team[],
  playersDb: Record<string, Player[]>,
  runs: number = 1000,
  onProgress?: (pct: number) => void
): SimulationSummary => {
  const stats: Record<string, TeamSimStats> = {};
  
  // Initialize stats dictionary
  teams.forEach(t => {
    stats[t.id] = {
      teamId: t.id,
      championCount: 0,
      runnerUpCount: 0,
      semiFinalCount: 0,
      quarterFinalCount: 0,
      roundOf16Count: 0,
      roundOf32Count: 0,
      groupStageExitCount: 0
    };
  });
  
  // Clone playersDb to avoid mutating the main application state player records
  const playersDbClone: Record<string, Player[]> = {};
  Object.keys(playersDb).forEach(k => {
    playersDbClone[k] = playersDb[k].map(p => ({ ...p }));
  });
  
  // Run loop
  const chunk = Math.max(1, Math.round(runs / 10));
  for (let run = 0; run < runs; run++) {
    // Run simulation
    const result = runFullTournamentSimulation(teams, playersDbClone);
    
    // Analyze matches to track who made what round
    const final = result.matches.find(m => m.stage === 'FINAL')!;
    const sfMatches = result.matches.filter(m => m.stage === 'SF');
    const qfMatches = result.matches.filter(m => m.stage === 'QF');
    const r16Matches = result.matches.filter(m => m.stage === 'R16');
    const r32Matches = result.matches.filter(m => m.stage === 'R32');
    
    const champ = final.winnerId!;
    const runnerUp = final.winnerId === final.homeTeamId ? final.awayTeamId : final.homeTeamId;
    
    stats[champ].championCount++;
    stats[runnerUp].runnerUpCount++;
    
    // Semifinalists
    sfMatches.forEach(m => {
      stats[m.homeTeamId].semiFinalCount++;
      stats[m.awayTeamId].semiFinalCount++;
    });
    
    // Quarterfinalists
    qfMatches.forEach(m => {
      stats[m.homeTeamId].quarterFinalCount++;
      stats[m.awayTeamId].quarterFinalCount++;
    });
    
    // Round of 16
    r16Matches.forEach(m => {
      stats[m.homeTeamId].roundOf16Count++;
      stats[m.awayTeamId].roundOf16Count++;
    });
    
    // Round of 32
    r32Matches.forEach(m => {
      stats[m.homeTeamId].roundOf32Count++;
      stats[m.awayTeamId].roundOf32Count++;
    });
    
    // Group stage exits
    const knockoutTeams = new Set(result.qualifiedKnockoutTeams);
    teams.forEach(t => {
      if (!knockoutTeams.has(t.id)) {
        stats[t.id].groupStageExitCount++;
      }
    });
    
    if (onProgress && run % chunk === 0) {
      onProgress(Math.round((run / runs) * 100));
    }
  }
  
  if (onProgress) onProgress(100);
  
  return {
    simulationsRun: runs,
    stats
  };
};
