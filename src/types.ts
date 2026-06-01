export interface Team {
  id: string; // e.g. "ARG", "BRA"
  name: string;
  group: string; // 'A' through 'L'
  elo: number;
  fifaRank: number;
  sqi: number; // Squad Quality Index, calculated dynamically based on player ratings
  flag: string; // Flag emoji or URL
  recentForm: string[]; // e.g. ['W', 'D', 'W', 'W', 'L']
  stars: number; // visual rating 1-5
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
  matchNumber?: number; // ordering index
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
