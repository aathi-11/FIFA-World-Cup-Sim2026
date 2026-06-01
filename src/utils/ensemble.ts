/**
 * ensemble.ts
 * ──────────────────────────────────────────────────────────────────────────
 * Single-place configuration for the 4-model ensemble weights.
 * Adjust these values to tune prediction bias without touching simulation logic.
 *
 * Model overview:
 *   - Elo/Logistic (0.35): Sigmoidal model on Elo strength difference. Backbone.
 *   - Dixon-Coles (0.30): Poisson grid + low-score τ correction. Best for scorelines.
 *   - Bradley-Terry (0.20): Exponential strength ratio. Better transitivity in short tournaments.
 *   - Bivariate Poisson (0.15): Adds λ₃ covariance for open-play goal correlation.
 * ──────────────────────────────────────────────────────────────────────────
 */

export const MODEL_WEIGHTS = {
  /** Elo-Logistic backbone: global team strength difference */
  elo: 0.35,
  /** Dixon-Coles: Poisson grid with low-score correction (0-0, 1-0, 0-1, 1-1) */
  dixonColes: 0.30,
  /** Bradley-Terry: exponential win probability with transitivity correction */
  bradleyTerry: 0.20,
  /** Bivariate Poisson: captures positive goal correlation between both teams */
  bivariatePoisson: 0.15,
} as const;

/**
 * Combines win probabilities from all 4 models into a single weighted estimate.
 * Returns the home-team win probability.
 * Inputs are assumed to each be valid [0, 1] probabilities.
 */
export function ensembleWinProb(
  eloProb: number,
  dcProb: number,
  btProb: number,
  bpProb: number
): number {
  return (
    eloProb * MODEL_WEIGHTS.elo +
    dcProb * MODEL_WEIGHTS.dixonColes +
    btProb * MODEL_WEIGHTS.bradleyTerry +
    bpProb * MODEL_WEIGHTS.bivariatePoisson
  );
}

/**
 * Full win/draw/loss ensemble combining all 4 models.
 * Each model provides { homeWin, draw, awayWin } and weights are applied uniformly.
 */
export function ensembleFullProbs(
  elo: { homeWin: number; draw: number; awayWin: number },
  dc: { homeWin: number; draw: number; awayWin: number },
  bt: { homeWin: number; draw: number; awayWin: number },
  bp: { homeWin: number; draw: number; awayWin: number }
): { homeWin: number; draw: number; awayWin: number } {
  const w = MODEL_WEIGHTS;
  const homeWin = w.elo * elo.homeWin + w.dixonColes * dc.homeWin + w.bradleyTerry * bt.homeWin + w.bivariatePoisson * bp.homeWin;
  const draw    = w.elo * elo.draw    + w.dixonColes * dc.draw    + w.bradleyTerry * bt.draw    + w.bivariatePoisson * bp.draw;
  const awayWin = w.elo * elo.awayWin + w.dixonColes * dc.awayWin + w.bradleyTerry * bt.awayWin + w.bivariatePoisson * bp.awayWin;
  const total = homeWin + draw + awayWin;
  return {
    homeWin: homeWin / total,
    draw: draw / total,
    awayWin: awayWin / total,
  };
}

/**
 * Returns a human-readable model weight summary string for display in the UI.
 */
export function modelWeightSummary(): string {
  const w = MODEL_WEIGHTS;
  return `Elo ${(w.elo * 100).toFixed(0)}% · DC ${(w.dixonColes * 100).toFixed(0)}% · BT ${(w.bradleyTerry * 100).toFixed(0)}% · BP ${(w.bivariatePoisson * 100).toFixed(0)}%`;
}
