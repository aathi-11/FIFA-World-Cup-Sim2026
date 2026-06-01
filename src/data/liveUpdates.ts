/**
 * liveUpdates.ts
 * ──────────────────────────────────────────────────────────────────────────
 * Single source-of-truth for all real-world World Cup 2026 data.
 * Groq fills these arrays; the simulation engine reads them.
 *
 * How to use:
 *   1. Click "Fetch Results" in the LiveSync panel → populates `matchResults`
 *   2. Click "Fetch Performances" → populates `playerPerformances`
 *   3. Click "Fetch Elo" → populates `updatedElo`
 *   4. Click "Fetch Injuries" → populates `liveInjuries`
 *   5. Run Monte Carlo — real results are locked, future matches use updated Elo
 * ──────────────────────────────────────────────────────────────────────────
 */

import type { Match } from '../types';

// ── Interface Definitions ─────────────────────────────────────────────────

export interface MatchResult {
  /** Matches the deterministic match ID used in simulation.ts, e.g. "G_A_USA_MEX" */
  matchId: string;
  homeGoals: number;
  awayGoals: number;
  /** Penalty shootout goals (null if not required) */
  shootoutHome?: number | null;
  shootoutAway?: number | null;
  played: true;
  scorers?: { player: string; team: string; minute: number }[];
  yellowCards?: string[];
  redCards?: string[];
  injuries?: string[];
}

export interface PlayerPerformance {
  playerName: string;
  team: string;
  matchId: string;
  minutesPlayed: number;
  goals: number;
  assists: number;
  yellowCard: boolean;
  redCard: boolean;
  injured: boolean;
  /** Multiplier applied to player.form: 0.7 = poor, 1.0 = normal, 1.3 = outstanding */
  formMultiplier: number;
}

export interface InjuryUpdate {
  playerName: string;
  team: string;
  type: 'injury' | 'suspension';
  /** Number of matches the player is unavailable for */
  matchesMissed: number;
  reason?: string;
}

export interface LiveInjuries {
  injuries: InjuryUpdate[];
  suspensions: InjuryUpdate[];
}

/** teamCode (e.g. "ARG") → new Elo rating */
export type EloUpdate = Record<string, number>;

// ── Runtime State Containers ──────────────────────────────────────────────
// These are populated by the LiveSync panel and read by the simulation engine.

export const matchResults: MatchResult[] = [
  // Groq fills this after each match day. Example:
  // { matchId: "G_A_USA_MEX", homeGoals: 2, awayGoals: 1, played: true, scorers: [...] }
];

export const playerPerformances: PlayerPerformance[] = [
  // Groq fills this with per-player stats per match.
];

export const liveInjuries: LiveInjuries = {
  injuries: [],
  suspensions: []
};

export const updatedElo: EloUpdate = {
  // Groq fills this. Example:
  // ARG: 2158, BRA: 2095, FRA: 2122
};

/**
 * Parses a group match ID like "G_A_MEX_POL" into its parts.
 * Returns null for knockout match IDs like "R32_1", "FINAL_MATCH" etc.
 */
function parseGroupMatchId(matchId: string): { group: string; homeId: string; awayId: string } | null {
  const parts = matchId.split('_');
  // Group format: G_{LETTER}_{HOME}_{AWAY}  (min 4 parts)
  if (parts[0] === 'G' && parts.length >= 4) {
    return { group: parts[1], homeId: parts[2], awayId: parts.slice(3).join('_') };
  }
  return null;
}

/**
 * Infers the match stage from the matchId prefix.
 */
function inferStageFromId(matchId: string): Match['stage'] {
  if (matchId.startsWith('G_')) return 'GROUP';
  if (matchId.startsWith('R32_')) return 'R32';
  if (matchId.startsWith('R16_')) return 'R16';
  if (matchId.startsWith('QF_')) return 'QF';
  if (matchId.startsWith('SF_')) return 'SF';
  if (matchId === 'FINAL_MATCH') return 'FINAL';
  if (matchId === 'TP_MATCH') return 'THIRD_PLACE';
  return 'GROUP';
}

/**
 * Merges real-world match results into the lockedMatches dictionary.
 * Group matchIds encode team codes (e.g. "G_A_MEX_POL") so homeTeamId / awayTeamId
 * are extracted directly. Knockout matchIds (R32_1 etc.) leave teamIds blank —
 * the simulation engine resolves them from the bracket at run-time.
 */
export function applyLiveResultsToLocks(
  currentLocked: Record<string, Match>,
  results: MatchResult[]
): Record<string, Match> {
  const next = { ...currentLocked };

  results.forEach(r => {
    const homeGoals = r.homeGoals;
    const awayGoals = r.awayGoals;
    const shootoutHome = r.shootoutHome ?? null;
    const shootoutAway = r.shootoutAway ?? null;

    const parsed = parseGroupMatchId(r.matchId);
    const homeTeamId = parsed ? parsed.homeId : '';
    const awayTeamId = parsed ? parsed.awayId : '';
    const stage = inferStageFromId(r.matchId);
    const groupLetter = parsed ? parsed.group : null;

    // Determine winner (full-time result, then shootout if draw)
    let winnerId: string | null = null;
    if (homeGoals > awayGoals) {
      winnerId = homeTeamId || null;
    } else if (awayGoals > homeGoals) {
      winnerId = awayTeamId || null;
    } else if (shootoutHome !== null && shootoutAway !== null) {
      if (shootoutHome > shootoutAway) winnerId = homeTeamId || null;
      else if (shootoutAway > shootoutHome) winnerId = awayTeamId || null;
    }

    next[r.matchId] = {
      id: r.matchId,
      homeTeamId,
      awayTeamId,
      stage,
      goalsHome: homeGoals,
      goalsAway: awayGoals,
      shootoutGoalsHome: shootoutHome,
      shootoutGoalsAway: shootoutAway,
      winnerId,
      isSimulated: false,
      groupLetter,
      locked: false,
      realPlayed: true,
    };
  });

  return next;
}


/**
 * Returns the most recent PlayerPerformance entry for a given player name.
 * Used by the simulation engine to get the latest form multiplier.
 */
export function getLatestPerformance(
  playerName: string,
  performances: PlayerPerformance[]
): PlayerPerformance | undefined {
  const matches = performances
    .filter(p => p.playerName === playerName)
    .sort((a, b) => b.matchId.localeCompare(a.matchId));
  return matches[0];
}

/**
 * Returns updated Elo for a team, falling back to the baseline if not in live data.
 */
export function getLiveElo(teamCode: string, elo: EloUpdate, baseline: number): number {
  return elo[teamCode] ?? baseline;
}
