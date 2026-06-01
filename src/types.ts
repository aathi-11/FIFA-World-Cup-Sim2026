export interface Team {
  id: string; // e.g. "ARG", "BRA"
  name: string;
  group: string; // 'A' through 'L'
  elo: number;
  baselineElo: number; // backup baseline Elo for Bayesian resets
  fifaRank: number;
  sqi: number; // Squad Quality Index, calculated dynamically based on player ratings
  flag: string; // Flag emoji or URL
  recentForm: string[]; // e.g. ['W', 'D', 'W', 'W', 'L']
  stars: number; // visual rating 1-5
  matchesPlayed?: number; // to track tournament progression for fatigue
  manager?: string; // Team manager name
}

export type PlayerPosition = 'GK' | 'DEF' | 'MID' | 'FWD';

export interface Player {
  id: string;
  name: string;
  age: number;
  position: PlayerPosition;
  rating: number; // 0-100 player skill rating
  form: number; // form multiplier, e.g. 0.8 to 1.2
  injured: boolean;
  suspended: boolean;
  suspensionRoundsRemaining?: number; // matches remaining for suspension
  club: string;
  goalsScored?: number; // for tracking tournament stats
  assists?: number;
}

export type MatchStage = 'GROUP' | 'R32' | 'R16' | 'QF' | 'SF' | 'FINAL' | 'THIRD_PLACE';

export interface Match {
  id: string;
  homeTeamId: string;
  awayTeamId: string;
  stage: MatchStage;
  goalsHome: number | null;
  goalsAway: number | null;
  shootoutGoalsHome: number | null;
  shootoutGoalsAway: number | null;
  winnerId: string | null;
  isSimulated: boolean;
  groupLetter: string | null; // e.g. 'A' for group matches, null for knockouts
  locked?: boolean; // scenario lock
  realPlayed?: boolean; // real-world match completed
  matchNumber?: number; // ordering index
  date?: string; // Date of the match (e.g. "June 11, 2026")
  stadium?: string; // Venue of the match
  kickoffTime?: string; // Kickoff time of the match
}

export interface GroupStanding {
  teamId: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}

export interface TournamentState {
  stage: 'NOT_STARTED' | 'GROUP_STAGE' | 'ROUND_OF_32' | 'ROUND_OF_16' | 'QUARTER_FINALS' | 'SEMI_FINALS' | 'FINALS' | 'COMPLETED';
  matches: Match[];
  groupStandings: Record<string, GroupStanding[]>; // Group letter ('A'-'L') to standings
  thirdPlaceStandings: GroupStanding[]; // Ranked third-placed teams
  qualifiedKnockoutTeams: string[]; // List of 32 team IDs playing in Round of 32
  currentMatchIndex: number;
}

export interface TeamSimStats {
  teamId: string;
  championCount: number;
  runnerUpCount: number;
  semiFinalCount: number;
  quarterFinalCount: number;
  roundOf16Count: number;
  roundOf32Count: number;
  groupStageExitCount: number;
}

export interface SimulationSummary {
  simulationsRun: number;
  stats: Record<string, TeamSimStats>; // teamId to stats
}

export interface GoldenBootPlayer {
  playerId: string;
  name: string;
  teamId: string;
  teamName: string;
  teamFlag: string;
  goals: number; // accumulated total goals across all simulations
  avgGoals: number; // average goals per simulation
}
