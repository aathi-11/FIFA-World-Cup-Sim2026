import React, { useState, useEffect } from 'react';
import type { Team, Player } from '../types';
import { Percent, Star, Sparkles } from 'lucide-react';
import { 
  calculateTeamStrength, 
  getPositionalSQI, 
  getEnsembleProbabilities, 
  getPoissonGridProbabilities 
} from '../utils/simulation';

interface MatchPredictorProps {
  teams: Team[];
  playersDb: Record<string, Player[]>;
}

interface ScorelineOdds {
  score: string;
  pct: number;
}

export const MatchPredictor: React.FC<MatchPredictorProps> = ({ teams, playersDb }) => {
  const [homeId, setHomeId] = useState('ARG');
  const [awayId, setAwayId] = useState('BRA');
  
  const [results, setResults] = useState<{
    homeWinPct: number;
    drawPct: number;
    awayWinPct: number;
    scorelines: ScorelineOdds[];
    poisson: { homeWin: number; draw: number; awayWin: number };
    logistic: { homeWin: number; draw: number; awayWin: number };
    simulated: boolean;
  }>({
    homeWinPct: 0,
    drawPct: 0,
    awayWinPct: 0,
    scorelines: [],
    poisson: { homeWin: 0, draw: 0, awayWin: 0 },
    logistic: { homeWin: 0, draw: 0, awayWin: 0 },
    simulated: false
  });

  const homeTeam = teams.find(t => t.id === homeId) || teams[0];
  const awayTeam = teams.find(t => t.id === awayId) || teams[1];

  const homeSquad = playersDb[homeTeam.id] || [];
  const awaySquad = playersDb[awayTeam.id] || [];

  const homeStrength = Math.round(calculateTeamStrength(homeTeam, homeSquad));
  const awayStrength = Math.round(calculateTeamStrength(awayTeam, awaySquad));

  // Overall SQI
  const getSquadSQI = (squad: Player[]) => {
    const active = squad.filter(p => !p.injured && !p.suspended);
    if (active.length === 0) return 50;
    return Math.round(active.reduce((sum, p) => sum + p.rating, 0) / active.length);
  };

  const homeSQI = getSquadSQI(homeSquad);
  const awaySQI = getSquadSQI(awaySquad);

  // Split SQIs
  const { offSQI: homeOff, defSQI: homeDef } = getPositionalSQI(homeSquad);
  const { offSQI: awayOff, defSQI: awayDef } = getPositionalSQI(awaySquad);

  const getStarPlayer = (squad: Player[]) => {
    const active = squad.filter(p => !p.injured && !p.suspended);
    if (active.length === 0) return null;
    return [...active].sort((a, b) => b.rating - a.rating)[0];
  };

  const homeStar = getStarPlayer(homeSquad);
  const awayStar = getStarPlayer(awaySquad);

  // Trigger exact calculation whenever teams or their strengths change
  const runPrediction = () => {
    // 1. Solve ensemble probabilities (instantly and exactly via backend math)
    const ensemble = getEnsembleProbabilities(homeTeam, homeSquad, awayTeam, awaySquad);
    
    // 2. Solve scoreline probabilities exactly using the Dixon-Coles Poisson grid
    const diff = (homeStrength - awayStrength) / 100;
    const lambdaHomeBase = 1.35 * Math.pow(1.15, diff);
    const lambdaAwayBase = 1.35 * Math.pow(1.15, -diff);
    
    const homeOffFactor = 1.0 + (homeOff - 70) / 200;
    const homeDefFactor = 1.0 - (homeDef - 70) / 200;
    const awayOffFactor = 1.0 + (awayOff - 70) / 200;
    const awayDefFactor = 1.0 - (awayDef - 70) / 200;
    
    const lambdaHome = lambdaHomeBase * homeOffFactor * awayDefFactor;
    const lambdaAway = lambdaAwayBase * awayOffFactor * homeDefFactor;
    
    const { grid } = getPoissonGridProbabilities(lambdaHome, lambdaAway);
    
    const scoreList: ScorelineOdds[] = [];
    for (let x = 0; x < 7; x++) {
      for (let y = 0; y < 7; y++) {
        scoreList.push({
          score: `${x}-${y}`,
          pct: Math.round(grid[x][y] * 1000) / 10 // 1 decimal point accuracy
        });
      }
    }
    
    const sortedScores = scoreList
      .sort((a, b) => b.pct - a.pct)
      .slice(0, 5);

    setResults({
      homeWinPct: Math.round(ensemble.homeWin * 100),
      drawPct: Math.round(ensemble.draw * 100),
      awayWinPct: Math.round(ensemble.awayWin * 100),
      poisson: {
        homeWin: Math.round(ensemble.poisson.homeWin * 100),
        draw: Math.round(ensemble.poisson.draw * 100),
        awayWin: Math.round(ensemble.poisson.awayWin * 100)
      },
      logistic: {
        homeWin: Math.round(ensemble.logistic.homeWin * 100),
        draw: Math.round(ensemble.logistic.draw * 100),
        awayWin: Math.round(ensemble.logistic.awayWin * 100)
      },
      scorelines: sortedScores,
      simulated: true
    });
  };

  useEffect(() => {
    runPrediction();
  }, [homeId, awayId, homeStrength, awayStrength]);

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* Team Selection Bar */}
      <div className="h2h-selector">
        <div className="h2h-select-team">
          <span style={{ fontSize: '2.5rem' }}>{homeTeam.flag}</span>
          <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Select Home Team</label>
          <select 
            value={homeId} 
            onChange={(e) => {
              setHomeId(e.target.value);
              if (e.target.value === awayId) {
                setAwayId(teams.find(t => t.id !== e.target.value)?.id || '');
              }
            }}
            className="h2h-dropdown"
          >
            {teams.map(t => (
              <option key={t.id} value={t.id}>{t.name} (Elo: {t.elo})</option>
            ))}
          </select>
        </div>

        <div className="vs-badge">VS</div>

        <div className="h2h-select-team">
          <span style={{ fontSize: '2.5rem' }}>{awayTeam.flag}</span>
          <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Select Away Team</label>
          <select 
            value={awayId} 
            onChange={(e) => {
              setAwayId(e.target.value);
              if (e.target.value === homeId) {
                setHomeId(teams.find(t => t.id !== e.target.value)?.id || '');
              }
            }}
            className="h2h-dropdown"
          >
            {teams.map(t => (
              <option key={t.id} value={t.id}>{t.name} (Elo: {t.elo})</option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Grid: Comparison & Results */}
      <div className="grid-main" style={{ gridTemplateColumns: '1fr 360px' }}>
        
        {/* Left Hand: Stats Comparison & Pitch Visualizer */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Comparison Stats Table */}
          <div className="card">
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Team Comparison</h3>
            <table className="h2h-comparison-table">
              <tbody>
                <tr>
                  <td className="h2h-comp-val" style={{ color: 'var(--accent-blue)' }}>{homeTeam.elo}</td>
                  <td className="h2h-comp-label">Baseline Elo</td>
                  <td className="h2h-comp-val" style={{ color: 'var(--accent-gold)' }}>{awayTeam.elo}</td>
                </tr>
                <tr>
                  <td className="h2h-comp-val" style={{ color: 'var(--accent-blue)' }}>{homeStrength}</td>
                  <td className="h2h-comp-label">Dynamic Strength</td>
                  <td className="h2h-comp-val" style={{ color: 'var(--accent-gold)' }}>{awayStrength}</td>
                </tr>
                <tr>
                  <td className="h2h-comp-val">#{homeTeam.fifaRank}</td>
                  <td className="h2h-comp-label">FIFA Rank</td>
                  <td className="h2h-comp-val">#{awayTeam.fifaRank}</td>
                </tr>
                <tr>
                  <td className="h2h-comp-val">{homeSQI}</td>
                  <td className="h2h-comp-label">Overall SQI</td>
                  <td className="h2h-comp-val">{awaySQI}</td>
                </tr>
                <tr>
                  <td className="h2h-comp-val" style={{ color: 'var(--accent-success)' }}>{Math.round(homeOff)}</td>
                  <td className="h2h-comp-label">Offensive Power (SQI)</td>
                  <td className="h2h-comp-val" style={{ color: 'var(--accent-success)' }}>{Math.round(awayOff)}</td>
                </tr>
                <tr>
                  <td className="h2h-comp-val" style={{ color: 'var(--accent-blue)' }}>{Math.round(homeDef)}</td>
                  <td className="h2h-comp-label">Defensive Stability (SQI)</td>
                  <td className="h2h-comp-val" style={{ color: 'var(--accent-blue)' }}>{Math.round(awayDef)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pitch Visualization */}
          <div className="pitch-container">
            <div className="pitch-center-circle"></div>
            
            <div className="pitch-side-lineup">
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Home Key Player</span>
              {homeStar ? (
                <div className="pitch-star-player">
                  <Star className="star-icon" style={{ width: '14px', height: '14px', fill: 'var(--accent-gold)' }} />
                  <div>
                    <strong>{homeStar.name}</strong>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>Rating: {homeStar.rating} • {homeStar.club}</div>
                  </div>
                </div>
              ) : (
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>No uninjured players</div>
              )}
            </div>

            <div className="pitch-side-lineup">
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Away Key Player</span>
              {awayStar ? (
                <div className="pitch-star-player away">
                  <Star className="star-icon away" style={{ width: '14px', height: '14px', fill: 'var(--accent-cyan)' }} />
                  <div>
                    <strong>{awayStar.name}</strong>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>Rating: {awayStar.rating} • {awayStar.club}</div>
                  </div>
                </div>
              ) : (
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>No uninjured players</div>
              )}
            </div>
          </div>
        </div>

        {/* Right Hand: Match Simulation Results */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="card highlight" style={{ borderColor: 'var(--border-glass-active)' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles style={{ color: 'var(--accent-gold)' }} />
              Ensemble Model Odds
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', lineHeight: '1.4', marginBottom: '1rem' }}>
              Weighted prediction: <strong>60% Poisson Bivariate + 40% Logistic Regression</strong>.
            </p>

            {results.simulated && (
              <>
                {/* Ensemble Prob bar */}
                <div className="prob-bar-container" style={{ height: '32px' }}>
                  {results.homeWinPct > 0 && (
                    <div className="prob-bar home" style={{ width: `${results.homeWinPct}%` }}>
                      {results.homeWinPct}%
                    </div>
                  )}
                  {results.drawPct > 0 && (
                    <div className="prob-bar draw" style={{ width: `${results.drawPct}%` }}>
                      {results.drawPct}%
                    </div>
                  )}
                  {results.awayWinPct > 0 && (
                    <div className="prob-bar away" style={{ width: `${results.awayWinPct}%` }}>
                      {results.awayWinPct}%
                    </div>
                  )}
                </div>

                {/* Legend */}
                <div className="prob-legend" style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-blue)' }}></span>
                    <span>{homeTeam.name} Win</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', background: '#334155' }}></span>
                    <span>Draw</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-gold)' }}></span>
                    <span>{awayTeam.name} Win</span>
                  </div>
                </div>

                {/* Individual Model Breakdown */}
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '12px', borderRadius: '10px', marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '0.85rem', color: '#fff', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>Submodel Comparison</h4>
                  
                  {/* Poisson Row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '6px' }}>
                    <span style={{ color: 'var(--accent-cyan)' }}>Poisson (Goals)</span>
                    <span style={{ color: 'var(--text-secondary)' }}>
                      Win: {results.poisson.homeWin}% | Draw: {results.poisson.draw}% | Loss: {results.poisson.awayWin}%
                    </span>
                  </div>
                  
                  {/* Logistic Row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                    <span style={{ color: 'var(--accent-gold)' }}>Logistic (Sigmoid)</span>
                    <span style={{ color: 'var(--text-secondary)' }}>
                      Win: {results.logistic.homeWin}% | Draw: {results.logistic.draw}% | Loss: {results.logistic.awayWin}%
                    </span>
                  </div>
                </div>

                {/* Scoreline Odds */}
                <h4 style={{ fontSize: '0.9rem', marginBottom: '8px', fontFamily: 'var(--font-heading)', color: '#fff' }}>Most Probable Scorelines</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {results.scorelines.map((score, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', borderRadius: '8px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.03)' }}>
                      <span style={{ fontSize: '0.95rem', fontWeight: 'bold' }}>{score.score}</span>
                      <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Percent style={{ width: '10px', height: '10px' }} />
                        {score.pct}%
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}

            <div style={{ marginTop: '1.5rem', background: 'rgba(0, 242, 254, 0.02)', border: '1px solid rgba(0, 242, 254, 0.1)', padding: '10px', borderRadius: '8px', fontSize: '0.7rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
              ℹ️ <strong>Rivalries & Hosts:</strong> Adjusting host teams or rival pairs dynamically scales expected goal ratios and Sigmoid margins!
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
