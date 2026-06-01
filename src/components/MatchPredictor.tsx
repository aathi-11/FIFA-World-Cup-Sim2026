import React, { useState, useEffect } from 'react';
import type { Team, Player } from '../types';
import { Percent, Star, Sparkles } from 'lucide-react';
import { simulateMatch, calculateTeamStrength } from '../utils/simulation';

interface MatchPredictorProps {
  teams: Team[];
  playersDb: Record<string, Player[]>;
}

interface ScorelineOdds {
  score: string;
  count: number;
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
    simulated: boolean;
  }>({
    homeWinPct: 0,
    drawPct: 0,
    awayWinPct: 0,
    scorelines: [],
    simulated: false
  });

  const homeTeam = teams.find(t => t.id === homeId) || teams[0];
  const awayTeam = teams.find(t => t.id === awayId) || teams[1];

  const homeSquad = playersDb[homeTeam.id] || [];
  const awaySquad = playersDb[awayTeam.id] || [];

  const homeStrength = Math.round(calculateTeamStrength(homeTeam, homeSquad));
  const awayStrength = Math.round(calculateTeamStrength(awayTeam, awaySquad));

  const getSquadSQI = (squad: Player[]) => {
    const active = squad.filter(p => !p.injured && !p.suspended);
    if (active.length === 0) return 50;
    return Math.round(active.reduce((sum, p) => sum + p.rating, 0) / active.length);
  };

  const homeSQI = getSquadSQI(homeSquad);
  const awaySQI = getSquadSQI(awaySquad);

  const getStarPlayer = (squad: Player[]) => {
    const active = squad.filter(p => !p.injured && !p.suspended);
    if (active.length === 0) return null;
    return [...active].sort((a, b) => b.rating - a.rating)[0];
  };

  const homeStar = getStarPlayer(homeSquad);
  const awayStar = getStarPlayer(awaySquad);

  // Trigger simulation whenever teams or their strengths change
  const runPrediction = () => {
    let homeWins = 0;
    let draws = 0;
    let awayWins = 0;
    const scoreCounts: Record<string, number> = {};

    const runs = 1000;
    for (let i = 0; i < runs; i++) {
      const match = simulateMatch(
        `pred_${i}`,
        homeTeam,
        homeSquad,
        awayTeam,
        awaySquad,
        'GROUP', // draw allowed
        null,
        i
      );

      if (match.winnerId === homeTeam.id) {
        homeWins++;
      } else if (match.winnerId === awayTeam.id) {
        awayWins++;
      } else {
        draws++;
      }

      const scoreKey = `${match.goalsHome}-${match.goalsAway}`;
      scoreCounts[scoreKey] = (scoreCounts[scoreKey] || 0) + 1;
    }

    const homeWinPct = Math.round((homeWins / runs) * 100);
    const drawPct = Math.round((draws / runs) * 100);
    const awayWinPct = 100 - homeWinPct - drawPct; // Ensure totals sum to 100%

    // Calculate scoreline probabilities
    const sortedScores = Object.entries(scoreCounts)
      .map(([score, count]) => ({
        score,
        count,
        pct: Math.round((count / runs) * 1000) / 10 // 1 decimal point accuracy
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    setResults({
      homeWinPct,
      drawPct,
      awayWinPct,
      scorelines: sortedScores,
      simulated: true
    });
  };

  // Run automatically when selections change
  useEffect(() => {
    runPrediction();
  }, [homeId, awayId, homeStrength, awayStrength]); // Refreshes on squad rating edits too!

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
                // Prevent duplicate selections
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
                // Prevent duplicate selections
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
      <div className="grid-main" style={{ gridTemplateColumns: '1fr 350px' }}>
        
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
                  <td className="h2h-comp-label">Squad Quality (SQI)</td>
                  <td className="h2h-comp-val">{awaySQI}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pitch Visualization */}
          <div className="pitch-container">
            <div className="pitch-center-circle"></div>
            
            {/* Home Side Lineup Info */}
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

            {/* Away Side Lineup Info */}
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
          <div className="card highlight" style={{ borderColor: 'var(--border-glass-active)', height: '100%' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles style={{ color: 'var(--accent-gold)' }} />
              Win Probabilities
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', lineHeight: '1.4' }}>
              Based on 1,000 simulated matches accounting for current squad lists, ratings, and fitness settings:
            </p>

            {results.simulated && (
              <>
                {/* Prob bar */}
                <div className="prob-bar-container">
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
                <div className="prob-legend" style={{ marginBottom: '2rem' }}>
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

                {/* Scoreline Odds */}
                <h4 style={{ fontSize: '0.9rem', marginBottom: '10px', fontFamily: 'var(--font-heading)', color: '#fff' }}>Most Probable Scorelines</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {results.scorelines.map((score, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', borderRadius: '8px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.03)' }}>
                      <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>{score.score}</span>
                      <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Percent style={{ width: '12px', height: '12px' }} />
                        {score.pct}%
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}

            <div style={{ marginTop: '2rem', background: 'rgba(0, 242, 254, 0.02)', border: '1px solid rgba(0, 242, 254, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
              ℹ️ <strong>Interactive:</strong> Go to the <strong>Squad Manager</strong> tab and mark players injured or adjust their ratings. The match simulator will dynamically update these percentages in real-time!
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
