import type { Team, Player, Match, GroupStanding, TeamSimStats, SimulationSummary } from '../types';

// Baseline goals expected in a football match (avg 1.35 goals per team = 2.7 total)
const BASELINE_GOAL_EXP = 1.35;
// Sensitivity multiplier for strength differences (every 100 rating diff changes goal expectation by ~15%)
const SENSITIVITY = 1.15;
// Host countries
const HOSTS = ["USA", "CAN", "MEX"];
// Dixon-Coles low-score correction parameter
const RHO = -0.06;

// Historical head-to-head records database (bias adjustments)
const H2H_BIASES: Record<string, number> = {
  "ARG_BRA": 0.03,  // Argentina vs Brazil: Argentina gets +3%
  "BRA_ARG": -0.03, // Brazil vs Argentina: Argentina gets +3% (Brazil -3%)
  "ENG_GER": -0.03, // England vs Germany: Germany gets +3%
  "GER_ENG": 0.03,  // Germany vs England: Germany gets +3%
  "USA_MEX": 0.03,  // USA vs Mexico: USA gets +3%
  "MEX_USA": -0.03,
  "FRA_ESP": 0.03,  // France vs Spain: France gets +3%
  "ESP_FRA": -0.03,
  "POR_ESP": -0.03, // Portugal vs Spain: Spain gets +3%
  "ESP_POR": 0.03,
  "NED_GER": -0.03, // Netherlands vs Germany: Germany gets +3%
  "GER_NED": 0.03
};

/**
 * Calculates a team's dynamic strength rating based on baseline Elo, form, fatigue, and SQI.
 */
export const calculateTeamStrength = (
  team: Team, 
  squad: Player[], 
  isKnockout: boolean = false,
  matchNumber: number = 0
): number => {
  const activePlayers = squad.filter(p => !p.injured && !p.suspended);
  
  // 1. Calculate Squad Quality Index (SQI)
  let sqi = 50;
  if (activePlayers.length > 0) {
    const totalRating = activePlayers.reduce((sum, p) => sum + p.rating * p.form, 0);
    sqi = totalRating / activePlayers.length;
  }
  
  // 2. Base Elo with Host country advantage
  let elo = team.elo;
  if (HOSTS.includes(team.id)) {
    elo += isKnockout ? 40 : 80;
  }
  
  // 3. Form Multiplier
  let formMultiplier = 1.0;
  if (team.recentForm && team.recentForm.length > 0) {
    const points = team.recentForm.reduce((sum, res) => {
      if (res === 'W') return sum + 1.0;
      if (res === 'D') return sum + 0.5;
      return sum;
    }, 0);
    const avgForm = points / team.recentForm.length;
    formMultiplier = 1.0 + (avgForm - 0.5) * 0.1; // ±5%
  }
  
  // 4. Fatigue Model
  // Reduce strength by 2% per match played beyond the group stage (i.e. played > 3 matches)
  const matchesPlayed = team.matchesPlayed || 0;
  const gamesBeyondGroup = Math.max(0, matchesPlayed - 3);
  let fatigueFactor = 1.0 - gamesBeyondGroup * 0.02;
  
  // Short rest turnaround penalty (-3%) if playing an even match index in knockouts
  if (isKnockout && matchNumber % 2 === 0) {
    fatigueFactor -= 0.03;
  }
  
  // Combine Elo and SQI
  const baseStrength = (elo * 0.7) + (sqi * 14 * 0.3);
  
  return baseStrength * formMultiplier * fatigueFactor;
};

/**
 * Returns positional SQIs for offensive (FWD+MID) and defensive (GK+DEF) splits.
 */
export const getPositionalSQI = (squad: Player[]): { offSQI: number; defSQI: number } => {
  const active = squad.filter(p => !p.injured && !p.suspended);
  if (active.length === 0) return { offSQI: 50, defSQI: 50 };
  
  const offPlayers = active.filter(p => p.position === 'MID' || p.position === 'FWD');
  const defPlayers = active.filter(p => p.position === 'GK' || p.position === 'DEF');
  
  const offSQI = offPlayers.length > 0
    ? offPlayers.reduce((sum, p) => sum + p.rating * p.form, 0) / offPlayers.length
    : 50;
    
  const defSQI = defPlayers.length > 0
    ? defPlayers.reduce((sum, p) => sum + p.rating * p.form, 0) / defPlayers.length
    : 50;
    
  return { offSQI, defSQI };
};

/**
 * Historical H2H weight calculation.
 */
export const getH2HBias = (teamAId: string, teamBId: string): number => {
  const key = `${teamAId}_${teamBId}`;
  return 1.0 + (H2H_BIASES[key] || 0.0);
};

/**
 * Sigmoidal Logistic model for match probabilities.
 */
export const getLogisticProbabilities = (
  strengthHome: number,
  strengthAway: number,
  h2hBias: number
): { homeWin: number; draw: number; awayWin: number } => {
  // Margin adjusted by historical H2H win rate (bias represents a shift in strength)
  const margin = strengthHome * h2hBias - strengthAway;
  
  // Calibrated for margin = 0 (Home Win = 38%, Away Win = 38%, Draw = 24%)
  const pHome = 1 / (1 + Math.exp(-(-0.49 + 0.006 * margin)));
  const pAway = 1 / (1 + Math.exp(-(-0.49 - 0.006 * margin)));
  const pDraw = Math.max(0.01, 1.0 - pHome - pAway);
  
  const sum = pHome + pAway + pDraw;
  return {
    homeWin: pHome / sum,
    draw: pDraw / sum,
    awayWin: pAway / sum
  };
};

/**
 * Dixon-Coles Tau correction factor for low scores.
 */
export const getDixonColesTau = (x: number, y: number, l1: number, l2: number, rho: number = RHO): number => {
  if (x === 0 && y === 0) return 1 - rho * l1 * l2;
  if (x === 1 && y === 0) return 1 + rho * l2;
  if (x === 0 && y === 1) return 1 + rho * l1;
  if (x === 1 && y === 1) return 1 - rho;
  return 1;
};

/**
 * Calculates Poisson probability for a specific number of goals.
 */
const poissonProbability = (k: number, lambda: number): number => {
  let factorial = 1;
  for (let i = 1; i <= k; i++) factorial *= i;
  return (Math.pow(lambda, k) * Math.exp(-lambda)) / factorial;
};

/**
 * Solves the exact Poisson match outcomes by generating a 7x7 score grid.
 */
export const getPoissonGridProbabilities = (
  lambdaHome: number,
  lambdaAway: number
): {
  homeWin: number;
  draw: number;
  awayWin: number;
  grid: number[][]; // 7x7 grid
} => {
  const grid: number[][] = Array.from({ length: 7 }, () => Array(7).fill(0));
  let gridSum = 0;
  
  for (let x = 0; x < 7; x++) {
    for (let y = 0; y < 7; y++) {
      const pX = poissonProbability(x, lambdaHome);
      const pY = poissonProbability(y, lambdaAway);
      const tau = getDixonColesTau(x, y, lambdaHome, lambdaAway);
      
      const prob = pX * pY * Math.max(0, tau);
      grid[x][y] = prob;
      gridSum += prob;
    }
  }
  
  // Normalize grid
  let homeWin = 0;
  let draw = 0;
  let awayWin = 0;
  
  for (let x = 0; x < 7; x++) {
    for (let y = 0; y < 7; y++) {
      grid[x][y] /= gridSum;
      if (x > y) homeWin += grid[x][y];
      else if (x === y) draw += grid[x][y];
      else awayWin += grid[x][y];
    }
  }
  
  return { homeWin, draw, awayWin, grid };
};

/**
 * Simulates goals using the Dixon-Coles normalized joint probability grid.
 */
const simulateDixonColesMatchScore = (lambdaHome: number, lambdaAway: number): { goalsHome: number; goalsAway: number } => {
  const { grid } = getPoissonGridProbabilities(lambdaHome, lambdaAway);
  
  const r = Math.random();
  let cumulative = 0;
  
  for (let x = 0; x < 7; x++) {
    for (let y = 0; y < 7; y++) {
      cumulative += grid[x][y];
      if (r <= cumulative) {
        return { goalsHome: x, goalsAway: y };
      }
    }
  }
  
  return { goalsHome: 1, goalsAway: 1 };
};

/**
 * Runs the combined Ensemble Model (60% Poisson, 40% Logistic) for win probabilities.
 */
export const getEnsembleProbabilities = (
  homeTeam: Team,
  homeSquad: Player[],
  awayTeam: Team,
  awaySquad: Player[],
  isKnockout: boolean = false,
  matchNumber: number = 0
): {
  homeWin: number;
  draw: number;
  awayWin: number;
  poisson: { homeWin: number; draw: number; awayWin: number };
  logistic: { homeWin: number; draw: number; awayWin: number };
} => {
  const homeStrength = calculateTeamStrength(homeTeam, homeSquad, isKnockout, matchNumber);
  const awayStrength = calculateTeamStrength(awayTeam, awaySquad, isKnockout, matchNumber);
  
  // 1. Calculate Poisson Lambdas with Positional SQI Splits
  const diff = (homeStrength - awayStrength) / 100;
  const lambdaHomeBase = BASELINE_GOAL_EXP * Math.pow(SENSITIVITY, diff);
  const lambdaAwayBase = BASELINE_GOAL_EXP * Math.pow(SENSITIVITY, -diff);
  
  const { offSQI: homeOff, defSQI: homeDef } = getPositionalSQI(homeSquad);
  const { offSQI: awayOff, defSQI: awayDef } = getPositionalSQI(awaySquad);
  
  const homeOffFactor = 1.0 + (homeOff - 70) / 200;
  const homeDefFactor = 1.0 - (homeDef - 70) / 200;
  const awayOffFactor = 1.0 + (awayOff - 70) / 200;
  const awayDefFactor = 1.0 - (awayDef - 70) / 200;
  
  const homeBias = getH2HBias(homeTeam.id, awayTeam.id);
  const lambdaHome = lambdaHomeBase * homeOffFactor * awayDefFactor * homeBias;
  const lambdaAway = lambdaAwayBase * awayOffFactor * homeDefFactor * (1.0 / homeBias);
  
  // 2. Solve Poisson Win/Draw/Loss exact rates
  const pPoisson = getPoissonGridProbabilities(lambdaHome, lambdaAway);
  
  // 3. Solve Logistic rates
  const pLogistic = getLogisticProbabilities(homeStrength, awayStrength, homeBias);
  
  // 4. Ensemble
  const homeWin = 0.6 * pPoisson.homeWin + 0.4 * pLogistic.homeWin;
  const draw = 0.6 * pPoisson.draw + 0.4 * pLogistic.draw;
  const awayWin = 0.6 * pPoisson.awayWin + 0.4 * pLogistic.awayWin;
  
  return {
    homeWin,
    draw,
    awayWin,
    poisson: { homeWin: pPoisson.homeWin, draw: pPoisson.draw, awayWin: pPoisson.awayWin },
    logistic: pLogistic
  };
};

/**
 * Simulates a single match scoreline, incorporating forms, fatigue, positional SQIs,
 * Dixon-Coles bivariate grid scoring, dynamic injuries, and red-card suspensions.
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
  const isKnockout = stage !== 'GROUP';
  
  // Calculate dynamic strengths (incorporating hosts, form, fatigue)
  const homeStrength = calculateTeamStrength(homeTeam, homeSquad, isKnockout, matchNumber);
  const awayStrength = calculateTeamStrength(awayTeam, awaySquad, isKnockout, matchNumber);
  
  // Positional SQI split lambdas
  const diff = (homeStrength - awayStrength) / 100;
  const lambdaHomeBase = BASELINE_GOAL_EXP * Math.pow(SENSITIVITY, diff);
  const lambdaAwayBase = BASELINE_GOAL_EXP * Math.pow(SENSITIVITY, -diff);
  
  const { offSQI: homeOff, defSQI: homeDef } = getPositionalSQI(homeSquad);
  const { offSQI: awayOff, defSQI: awayDef } = getPositionalSQI(awaySquad);
  
  const homeOffFactor = 1.0 + (homeOff - 70) / 200;
  const homeDefFactor = 1.0 - (homeDef - 70) / 200;
  const awayOffFactor = 1.0 + (awayOff - 70) / 200;
  const awayDefFactor = 1.0 - (awayDef - 70) / 200;
  
  // Apply head-to-head bias multiplier directly to expected goals
  const h2hBias = getH2HBias(homeTeam.id, awayTeam.id);
  const lambdaHome = lambdaHomeBase * homeOffFactor * awayDefFactor * h2hBias;
  const lambdaAway = lambdaAwayBase * awayOffFactor * homeDefFactor * (1.0 / h2hBias);
  
  // Simulate goals using Dixon-Coles Bivariate joint probability grid
  let { goalsHome, goalsAway } = simulateDixonColesMatchScore(lambdaHome, lambdaAway);
  
  let shootoutGoalsHome: number | null = null;
  let shootoutGoalsAway: number | null = null;
  let winnerId: string | null = null;
  
  // Extra Time goals scaling factor (30% goals expected)
  if (isKnockout && goalsHome === goalsAway) {
    const etHome = simulateDixonColesMatchScore(lambdaHome * 0.3, lambdaAway * 0.3);
    goalsHome += etHome.goalsHome;
    goalsAway += etHome.goalsAway;
    
    // Penalty Shootout
    if (goalsHome === goalsAway) {
      const homeGK = homeSquad.find(p => p.position === 'GK' && !p.injured && !p.suspended)?.rating || 75;
      const awayGK = awaySquad.find(p => p.position === 'GK' && !p.injured && !p.suspended)?.rating || 75;
      const homeFWD = homeSquad.filter(p => p.position === 'FWD' && !p.injured && !p.suspended).reduce((sum, p) => sum + p.rating, 0) / 4 || 75;
      const awayFWD = awaySquad.filter(p => p.position === 'FWD' && !p.injured && !p.suspended).reduce((sum, p) => sum + p.rating, 0) / 4 || 75;
      
      const homeConv = 0.75 + (homeFWD - awayGK) / 300;
      const awayConv = 0.75 + (awayFWD - homeGK) / 300;
      
      let homePens = 0;
      let awayPens = 0;
      
      for (let r = 0; r < 5; r++) {
        if (Math.random() < homeConv) homePens++;
        if (Math.random() < awayConv) awayPens++;
      }
      
      let rounds = 5;
      while (homePens === awayPens && rounds < 15) {
        if (Math.random() < homeConv) homePens++;
        if (Math.random() < awayConv) awayPens++;
        rounds++;
      }
      
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
    if (goalsHome > goalsAway) winnerId = homeTeam.id;
    else if (goalsAway > goalsHome) winnerId = awayTeam.id;
    else winnerId = null; // Draw
  }
  
  // --- DYNAMIC INJURY & SUSPENSION EVENTS ---
  // Injury chance: 3% per player in the match lineup (starting 11 players of each team)
  const homeLineup = homeSquad.filter(p => !p.injured && !p.suspended).slice(0, 11);
  const awayLineup = awaySquad.filter(p => !p.injured && !p.suspended).slice(0, 11);
  
  homeLineup.forEach(p => {
    if (Math.random() < 0.03) {
      p.injured = true;
    } else if (Math.random() < 0.015) {
      p.suspended = true;
      p.suspensionRoundsRemaining = 1;
    }
  });
  
  awayLineup.forEach(p => {
    if (Math.random() < 0.03) {
      p.injured = true;
    } else if (Math.random() < 0.015) {
      p.suspended = true;
      p.suspensionRoundsRemaining = 1;
    }
  });
  
  // Track goalscorers
  if (goalsHome > 0) {
    const scorers = homeLineup.filter(p => p.position === 'FWD' || p.position === 'MID');
    const scorer = scorers.length > 0 ? scorers[Math.floor(Math.random() * scorers.length)] : homeSquad[0];
    if (scorer) scorer.goalsScored = (scorer.goalsScored || 0) + goalsHome;
  }
  
  if (goalsAway > 0) {
    const scorers = awayLineup.filter(p => p.position === 'FWD' || p.position === 'MID');
    const scorer = scorers.length > 0 ? scorers[Math.floor(Math.random() * scorers.length)] : awaySquad[0];
    if (scorer) scorer.goalsScored = (scorer.goalsScored || 0) + goalsAway;
  }
  
  // Record matches played for fatigue tracking
  homeTeam.matchesPlayed = (homeTeam.matchesPlayed || 0) + 1;
  awayTeam.matchesPlayed = (awayTeam.matchesPlayed || 0) + 1;
  
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
  
  return Object.values(standings).sort((x, y) => {
    if (x.points !== y.points) return y.points - x.points;
    if (x.goalDifference !== y.goalDifference) return y.goalDifference - x.goalDifference;
    if (x.goalsFor !== y.goalsFor) return y.goalsFor - x.goalsFor;
    return Math.random() - 0.5;
  });
};

/**
 * Updates team Elo ratings based on match results using a Bayesian model.
 */
export const updateBayesianElo = (teamA: Team, teamB: Team, match: Match) => {
  if (match.goalsHome === null || match.goalsAway === null) return;
  
  // Expected outcome for Team A (Elo basis)
  const expA = 1 / (1 + Math.pow(10, (teamB.elo - teamA.elo) / 400));
  const expB = 1 - expA;
  
  // Match outcome: 1 for Win, 0.5 for Draw, 0 for Loss (based on full time goals)
  let outA = 0.5;
  let outB = 0.5;
  if (match.goalsHome > match.goalsAway) {
    outA = 1.0;
    outB = 0.0;
  } else if (match.goalsAway > match.goalsHome) {
    outA = 0.0;
    outB = 1.0;
  }
  
  // K-factor: 20 for group stages, 30 for knockout rounds
  const k = match.stage === 'GROUP' ? 20 : 30;
  
  teamA.elo = Math.round(teamA.elo + k * (outA - expA));
  teamB.elo = Math.round(teamB.elo + k * (outB - expB));
};

/**
 * Ticks suspension rounds remaining for all players in the tournament.
 */
const tickSuspensions = (squads: Record<string, Player[]>) => {
  Object.values(squads).forEach(squad => {
    squad.forEach(p => {
      if (p.suspended && p.suspensionRoundsRemaining !== undefined) {
        p.suspensionRoundsRemaining--;
        if (p.suspensionRoundsRemaining <= 0) {
          p.suspended = false;
        }
      }
    });
  });
};

/**
 * Runs a single full tournament simulation.
 */
export const runFullTournamentSimulation = (
  teams: Team[],
  playersDb: Record<string, Player[]>,
  lockedMatches: Record<string, Match> = {}
): {
  matches: Match[];
  groupStandings: Record<string, GroupStanding[]>;
  thirdPlaceStandings: GroupStanding[];
  qualifiedKnockoutTeams: string[];
} => {
  // Clear player goals and clear injury states before simulation for fresh run
  Object.values(playersDb).forEach(squad => {
    squad.forEach(p => {
      p.goalsScored = 0;
      p.injured = false; // Reset injuries per run!
      p.suspended = false; // Reset suspensions per run!
      p.suspensionRoundsRemaining = 0;
    });
  });

  // Reset Elos to baseline and clear matchesPlayed for fatigue
  teams.forEach(t => {
    t.elo = t.baselineElo;
    t.matchesPlayed = 0;
  });

  const matches: Match[] = [];
  const groupStandings: Record<string, GroupStanding[]> = {};
  
  // Group letters A through L
  const groupLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
  let matchCounter = 1;

  // Helper to execute a match (respecting scenario locks and updating Bayesian Elo)
  const executeMatchWithLogic = (
    matchId: string,
    home: Team,
    away: Team,
    stage: Match['stage'],
    groupLetter: string | null = null
  ): Match => {
    let m: Match;
    // Check if match is locked in the scenario editor
    if (lockedMatches[matchId] && lockedMatches[matchId].goalsHome !== null && lockedMatches[matchId].goalsAway !== null) {
      const lock = lockedMatches[matchId];
      m = {
        id: matchId,
        homeTeamId: home.id,
        awayTeamId: away.id,
        stage,
        goalsHome: lock.goalsHome,
        goalsAway: lock.goalsAway,
        shootoutGoalsHome: null,
        shootoutGoalsAway: null,
        winnerId: lock.goalsHome! > lock.goalsAway! ? home.id : lock.goalsAway! > lock.goalsHome! ? away.id : null,
        isSimulated: true,
        groupLetter,
        matchNumber: matchCounter++,
        locked: true
      };
      
      // Update matches played
      home.matchesPlayed = (home.matchesPlayed || 0) + 1;
      away.matchesPlayed = (away.matchesPlayed || 0) + 1;
    } else {
      m = simulateMatch(
        matchId,
        home,
        playersDb[home.id] || [],
        away,
        playersDb[away.id] || [],
        stage,
        groupLetter,
        matchCounter++
      );
    }
    
    // Update Bayesian Elo ratings based on match result
    updateBayesianElo(home, away, m);
    return m;
  };
  
  // 1. Simulate Group Stage
  groupLetters.forEach(letter => {
    const groupTeams = teams.filter(t => t.group === letter);
    const groupMatches: Match[] = [];
    
    // Deterministic match pairing indices (6 matches)
    const matchPairings = [
      [0, 1], [2, 3],
      [0, 2], [1, 3],
      [0, 3], [1, 2]
    ];
    
    matchPairings.forEach(([idxHome, idxAway]) => {
      const home = groupTeams[idxHome];
      const away = groupTeams[idxAway];
      const matchId = `G_${letter}_${home.id}_${away.id}`; // deterministic ID matching Scenario Editor!
      const m = executeMatchWithLogic(matchId, home, away, 'GROUP', letter);
      groupMatches.push(m);
      matches.push(m);
    });
    
    // Clear suspensions after this group round matches
    tickSuspensions(playersDb);
    
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
      thirdPlaceTeams.push(standings[2]);
    }
  });
  
  thirdPlaceTeams.sort((x, y) => {
    if (x.points !== y.points) return y.points - x.points;
    if (x.goalDifference !== y.goalDifference) return y.goalDifference - x.goalDifference;
    if (x.goalsFor !== y.goalsFor) return y.goalsFor - x.goalsFor;
    return Math.random() - 0.5;
  });
  
  const qualifiedThirdPlaces = thirdPlaceTeams.slice(0, 8);
  
  // 3. Assemble Qualified Teams list
  const top2Teams: string[] = [];
  groupLetters.forEach(letter => {
    const standings = groupStandings[letter];
    if (standings) {
      top2Teams.push(standings[0].teamId);
      top2Teams.push(standings[1].teamId);
    }
  });
  
  const qualifiedKnockoutIds = [...top2Teams, ...qualifiedThirdPlaces.map(t => t.teamId)];
  
  const getTeam = (id: string) => teams.find(t => t.id === id)!;
  
  // 4. Round of 32 Pairing
  const w: Record<string, string> = {};
  const r: Record<string, string> = {};
  groupLetters.forEach(letter => {
    const st = groupStandings[letter];
    w[letter] = st[0].teamId;
    r[letter] = st[1].teamId;
  });
  const t = qualifiedThirdPlaces.map(item => item.teamId);
  
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
    const m = executeMatchWithLogic(`R32_${idx + 1}`, getTeam(teamA), getTeam(teamB), 'R32');
    r32Matches.push(m);
    matches.push(m);
  });
  
  tickSuspensions(playersDb);
  
  // 5. Round of 16 (8 Matches)
  const r16Matches: Match[] = [];
  for (let i = 0; i < 8; i++) {
    const teamA = r32Matches[2 * i].winnerId!;
    const teamB = r32Matches[2 * i + 1].winnerId!;
    const m = executeMatchWithLogic(`R16_${i + 1}`, getTeam(teamA), getTeam(teamB), 'R16');
    r16Matches.push(m);
    matches.push(m);
  }
  
  tickSuspensions(playersDb);
  
  // 6. Quarter-finals (4 Matches)
  const qfMatches: Match[] = [];
  for (let i = 0; i < 4; i++) {
    const teamA = r16Matches[2 * i].winnerId!;
    const teamB = r16Matches[2 * i + 1].winnerId!;
    const m = executeMatchWithLogic(`QF_${i + 1}`, getTeam(teamA), getTeam(teamB), 'QF');
    qfMatches.push(m);
    matches.push(m);
  }
  
  tickSuspensions(playersDb);
  
  // 7. Semi-finals (2 Matches)
  const sfMatches: Match[] = [];
  for (let i = 0; i < 2; i++) {
    const teamA = qfMatches[2 * i].winnerId!;
    const teamB = qfMatches[2 * i + 1].winnerId!;
    const m = executeMatchWithLogic(`SF_${i + 1}`, getTeam(teamA), getTeam(teamB), 'SF');
    sfMatches.push(m);
    matches.push(m);
  }
  
  tickSuspensions(playersDb);
  
  // 8. Third-place and Final Matches
  const sf1Home = sfMatches[0].homeTeamId;
  const sf1Away = sfMatches[0].awayTeamId;
  const sf1Winner = sfMatches[0].winnerId!;
  const sf1Loser = sf1Winner === sf1Home ? sf1Away : sf1Home;
  
  const sf2Home = sfMatches[1].homeTeamId;
  const sf2Away = sfMatches[1].awayTeamId;
  const sf2Winner = sfMatches[1].winnerId!;
  const sf2Loser = sf2Winner === sf2Home ? sf2Away : sf2Home;
  
  const thirdPlaceMatch = executeMatchWithLogic('TP_MATCH', getTeam(sf1Loser), getTeam(sf2Loser), 'THIRD_PLACE');
  matches.push(thirdPlaceMatch);
  
  const finalMatch = executeMatchWithLogic('FINAL_MATCH', getTeam(sf1Winner), getTeam(sf2Winner), 'FINAL');
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
  lockedMatches: Record<string, Match> = {},
  onProgress?: (pct: number) => void
): SimulationSummary => {
  const stats: Record<string, TeamSimStats> = {};
  
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
  
  // Reset Elos of original array too, so they reflect correctly
  teams.forEach(t => {
    t.elo = t.baselineElo;
  });

  const playersDbClone: Record<string, Player[]> = {};
  Object.keys(playersDb).forEach(k => {
    playersDbClone[k] = playersDb[k].map(p => ({ ...p, goalsScored: 0 }));
  });
  
  const chunk = Math.max(1, Math.round(runs / 10));
  for (let run = 0; run < runs; run++) {
    // Run simulation passing scenario locks
    const result = runFullTournamentSimulation(teams, playersDbClone, lockedMatches);
    
    const final = result.matches.find(m => m.stage === 'FINAL')!;
    const sfMatches = result.matches.filter(m => m.stage === 'SF');
    const qfMatches = result.matches.filter(m => m.stage === 'QF');
    const r16Matches = result.matches.filter(m => m.stage === 'R16');
    const r32Matches = result.matches.filter(m => m.stage === 'R32');
    
    const champ = final.winnerId!;
    const runnerUp = final.winnerId === final.homeTeamId ? final.awayTeamId : final.homeTeamId;
    
    stats[champ].championCount++;
    stats[runnerUp].runnerUpCount++;
    
    sfMatches.forEach(m => {
      stats[m.homeTeamId].semiFinalCount++;
      stats[m.awayTeamId].semiFinalCount++;
    });
    
    qfMatches.forEach(m => {
      stats[m.homeTeamId].quarterFinalCount++;
      stats[m.awayTeamId].quarterFinalCount++;
    });
    
    r16Matches.forEach(m => {
      stats[m.homeTeamId].roundOf16Count++;
      stats[m.awayTeamId].roundOf16Count++;
    });
    
    r32Matches.forEach(m => {
      stats[m.homeTeamId].roundOf32Count++;
      stats[m.awayTeamId].roundOf32Count++;
    });
    
    const knockoutTeams = new Set(result.qualifiedKnockoutTeams);
    teams.forEach(t => {
      if (!knockoutTeams.has(t.id)) {
        stats[t.id].groupStageExitCount++;
      }
    });
    
    // Accumulate player goals back to the main clone so we can average them later
    Object.keys(playersDbClone).forEach(teamId => {
      const cloneSquad = playersDbClone[teamId];
      const mainSquad = playersDb[teamId];
      cloneSquad.forEach((p, idx) => {
        if (p.goalsScored && p.goalsScored > 0) {
          mainSquad[idx].goalsScored = (mainSquad[idx].goalsScored || 0) + p.goalsScored;
        }
      });
    });
    
    if (onProgress && run % chunk === 0) {
      onProgress(Math.round((run / runs) * 100));
    }
  }
  
  // Set average goals per tournament for each player in playersDb
  Object.keys(playersDb).forEach(teamId => {
    playersDb[teamId].forEach(p => {
      if (p.goalsScored) {
        p.goalsScored = p.goalsScored / runs;
      }
    });
  });

  if (onProgress) onProgress(100);
  
  return {
    simulationsRun: runs,
    stats
  };
};
