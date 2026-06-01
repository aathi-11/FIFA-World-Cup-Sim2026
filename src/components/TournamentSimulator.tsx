import React, { useState } from 'react';
import type { Team, Player, Match, GroupStanding, SimulationSummary, TeamSimStats, GoldenBootPlayer } from '../types';
import { Play, RotateCcw, BarChart3, Trophy, Layers, Lock, Unlock, Zap } from 'lucide-react';
import { runFullTournamentSimulation, runMonteCarloSimulation } from '../utils/simulation';

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

interface TournamentSimulatorProps {
  teams: Team[];
  playersDb: Record<string, Player[]>;
  lockedMatches?: Record<string, Match>;
  onToggleLockMatch?: (matchId: string, homeTeamId: string, awayTeamId: string, goalsHome: number, goalsAway: number) => void;
  onClearLocks?: () => void;
}

export const TournamentSimulator: React.FC<TournamentSimulatorProps> = ({ 
  teams, 
  playersDb,
  lockedMatches = {},
  onToggleLockMatch,
  onClearLocks
}) => {
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

  const getTeam = (id: string): Team => teams.find(t => t.id === id) || {
    id, name: id, group: 'A', elo: 1500, baselineElo: 1500, fifaRank: 100, sqi: 50, flag: '❓', recentForm: [], stars: 1
  };

  const handleSingleSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => {
      const res = runFullTournamentSimulation(teams, playersDb, lockedMatches);
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
    
    // Reset goalsScored accumulation before Monte Carlo starts
    Object.values(playersDb).forEach(squad => {
      squad.forEach(p => { p.goalsScored = 0; });
    });

    setTimeout(() => {
      const summary = runMonteCarloSimulation(teams, playersDb, runs, lockedMatches, (pct) => {
        setProgress(pct);
      });
      
      const sortedStats = Object.values(summary.stats).sort((a, b) => b.championCount - a.championCount);
      
      setMcResult({
        summary,
        sortedStats,
        simulated: true
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

  // Top 10 goalscorers compiled across Monte Carlo runs
  const getGoldenBootLeaderboard = (): GoldenBootPlayer[] => {
    if (!mcResult.simulated || !mcResult.summary) return [];
    
    const allPlayers: GoldenBootPlayer[] = [];
    Object.keys(playersDb).forEach(teamId => {
      const team = getTeam(teamId);
      playersDb[teamId].forEach(p => {
        if (p.goalsScored && p.goalsScored > 0) {
          allPlayers.push({
            playerId: p.id,
            name: p.name,
            teamId: team.id,
            teamName: team.name,
            teamFlag: team.flag,
            goals: Math.round(p.goalsScored * mcResult.summary!.simulationsRun),
            avgGoals: p.goalsScored
          });
        }
      });
    });

    return allPlayers
      .sort((a, b) => b.avgGoals - a.avgGoals)
      .slice(0, 10);
  };

  const topScorers = getGoldenBootLeaderboard();

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

        <div className="sim-controls" style={{ margin: 0 }}>
          {simMode === 'SINGLE' ? (
            <button 
              className="btn btn-primary"
              onClick={handleSingleSimulation}
              disabled={isSimulating}
            >
              <Play style={{ width: '16px', height: '16px' }} />
              {isSimulating ? 'Simulating...' : 'Run Simulation'}
            </button>
          ) : (
            <div style={{ display: 'flex', gap: '8px' }}>
              <button 
                className="btn btn-primary"
                onClick={() => handleMonteCarloSimulation(1000)}
                disabled={isSimulating}
              >
                <Play style={{ width: '16px', height: '16px' }} />
                Run 1,000 Sims
              </button>
              <button 
                className="btn btn-primary"
                onClick={() => handleMonteCarloSimulation(10000)}
                disabled={isSimulating}
                style={{ background: 'linear-gradient(135deg, var(--accent-cyan) 0%, var(--accent-blue) 100%)', color: '#000', boxShadow: '0 4px 15px rgba(0, 242, 254, 0.25)' }}
              >
                <Play style={{ width: '16px', height: '16px' }} />
                Run 10,000 Sims (Fast)
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
      {simMode === 'SINGLE' && singleResult.simulated && !isSimulating && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          {/* Champion Banner */}
          {(() => {
            const final = singleResult.matches.find(m => m.stage === 'FINAL')!;
            const winner = getTeam(final.winnerId!);
            return (
              <div className="card highlight" style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.12) 0%, rgba(9,10,15,0.9) 100%)', textAlign: 'center', padding: '2.5rem' }}>
                <Trophy style={{ color: 'var(--accent-gold)', width: '60px', height: '60px', margin: '0 auto 16px auto', filter: 'drop-shadow(0 0 10px rgba(212,175,55,0.4))' }} />
                <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', marginBottom: '8px' }}>World Cup 2026 Champions</h2>
                <div style={{ fontSize: '3rem', margin: '12px 0' }}>{winner.flag}</div>
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
                    <BracketMatchCard key={m.id} match={m} getTeam={getTeam} />
                  ))}
                </div>

                {/* ROUND OF 16 */}
                <div className="bracket-round">
                  <div className="bracket-round-title">Round of 16</div>
                  {getMatchesForStage('R16').map((m) => (
                    <BracketMatchCard key={m.id} match={m} getTeam={getTeam} />
                  ))}
                </div>

                {/* QUARTER-FINALS */}
                <div className="bracket-round">
                  <div className="bracket-round-title">Quarter-Finals</div>
                  {getMatchesForStage('QF').map((m) => (
                    <BracketMatchCard key={m.id} match={m} getTeam={getTeam} />
                  ))}
                </div>

                {/* SEMI-FINALS */}
                <div className="bracket-round">
                  <div className="bracket-round-title">Semi-Finals</div>
                  {getMatchesForStage('SF').map((m) => (
                    <BracketMatchCard key={m.id} match={m} getTeam={getTeam} />
                  ))}
                </div>

                {/* FINALS */}
                <div className="bracket-round">
                  <div className="bracket-round-title">Finals</div>
                  <BracketMatchCard match={singleResult.matches.find(m => m.stage === 'FINAL')!} getTeam={getTeam} />
                  
                  <div className="bracket-round-title" style={{ marginTop: '2rem', color: 'var(--accent-gold)' }}>3rd Place Match</div>
                  <BracketMatchCard match={singleResult.matches.find(m => m.stage === 'THIRD_PLACE')!} getTeam={getTeam} />
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
                                <span>{t.flag}</span>
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
                          
                          const isLocked = !!lockedMatches[matchId];
                          const lockGoals = lockedMatches[matchId];
                          const localState = lockScores[matchId] || { goalsHome: 0, goalsAway: 0 };
                          
                          return (
                            <div key={matchId} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,255,255,0.01)', padding: '4px 6px', borderRadius: '6px', fontSize: '0.75rem' }}>
                              <span style={{ width: '80px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }} title={home.name}>
                                {home.flag} {home.name}
                              </span>
                              
                              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <input 
                                  type="number"
                                  min="0"
                                  max="9"
                                  value={isLocked ? lockGoals.goalsHome! : localState.goalsHome}
                                  onChange={(e) => handleInputChange(matchId, 'home', Math.max(0, parseInt(e.target.value) || 0))}
                                  disabled={isLocked || isSimulating}
                                  style={{ width: '28px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-glass)', borderRadius: '4px', color: '#fff', textAlign: 'center', fontSize: '0.75rem', padding: '2px' }}
                                />
                                <span style={{ color: 'var(--text-muted)' }}>-</span>
                                <input 
                                  type="number"
                                  min="0"
                                  max="9"
                                  value={isLocked ? lockGoals.goalsAway! : localState.goalsAway}
                                  onChange={(e) => handleInputChange(matchId, 'away', Math.max(0, parseInt(e.target.value) || 0))}
                                  disabled={isLocked || isSimulating}
                                  style={{ width: '28px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-glass)', borderRadius: '4px', color: '#fff', textAlign: 'center', fontSize: '0.75rem', padding: '2px' }}
                                />
                              </div>

                              <span style={{ width: '80px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', textAlign: 'right' }} title={away.name}>
                                {away.name} {away.flag}
                              </span>

                              <button 
                                onClick={() => onToggleLockMatch?.(matchId, home.id, away.id, isLocked ? 0 : localState.goalsHome, isLocked ? 0 : localState.goalsAway)}
                                disabled={isSimulating}
                                style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '2px', display: 'flex', alignItems: 'center' }}
                                title={isLocked ? "Unlock Scoreline" : "Lock Scoreline"}
                              >
                                {isLocked ? (
                                  <Lock style={{ width: '12px', height: '12px', color: 'var(--accent-cyan)' }} />
                                ) : (
                                  <Unlock style={{ width: '12px', height: '12px', color: 'var(--text-muted)' }} />
                                )}
                              </button>
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
      )}

      {/* MONTE CARLO RENDER */}
      {simMode === 'MONTE_CARLO' && mcResult.simulated && !isSimulating && mcResult.summary && (
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

            <div style={{ marginTop: '1rem', padding: '12px', background: 'rgba(0, 242, 254, 0.02)', border: '1px solid rgba(0, 242, 254, 0.1)', borderRadius: '8px', color: 'var(--text-muted)', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Zap style={{ width: '16px', height: '16px', color: 'var(--accent-cyan)', flexShrink: 0 }} />
              <span>
                <strong>Bayesian Ratings & Rest:</strong> Winning chances decay dynamically if teams suffer injuries, pick up suspensions, or accumulate match fatigue!
              </span>
            </div>
          </div>

          {/* Right Column: Golden Boot Leaderboard */}
          <div className="card highlight" style={{ borderColor: 'var(--border-glass-active)', height: 'fit-content' }}>
            <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Trophy style={{ color: 'var(--accent-gold)' }} />
              Golden Boot Leaderboard
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', marginBottom: '1rem', lineHeight: '1.4' }}>
              Top scorers averaged across all simulated tournament runs:
            </p>

            <table className="group-table" style={{ fontSize: '0.80rem' }}>
              <thead>
                <tr>
                  <th style={{ width: '30px' }}>Rank</th>
                  <th className="left">Player</th>
                  <th>Avg G</th>
                  <th>Total</th>
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
                          {p.teamFlag} {p.teamName}
                        </span>
                      </div>
                    </td>
                    <td style={{ fontWeight: '700', color: 'var(--accent-gold)' }}>
                      {p.avgGoals.toFixed(2)}
                    </td>
                    <td style={{ color: 'var(--text-secondary)' }}>
                      {p.goals}
                    </td>
                  </tr>
                ))}
                {topScorers.length === 0 && (
                  <tr>
                    <td colSpan={4} style={{ textAlign: 'center', padding: '20px', color: 'var(--text-muted)' }}>
                      No goals simulated yet. Run a simulation to populate!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>
      )}

      {/* Default display before simulation */}
      {!singleResult.simulated && !mcResult.simulated && !isSimulating && (
        <div className="card" style={{ textAlign: 'center', padding: '5rem 2rem' }}>
          <Trophy style={{ width: '64px', height: '64px', color: 'var(--text-muted)', margin: '0 auto 1.5rem auto' }} />
          <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', marginBottom: '10px' }}>Ready for Prediction</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '450px', margin: '0 auto 2rem auto', fontSize: '0.95rem', lineHeight: '1.5' }}>
            Select either the visualizer mode to watch a single bracket play out, or the Monte Carlo simulator to run thousands of trials and verify overall victory percentages.
          </p>
          {simMode === 'SINGLE' ? (
            <button className="btn btn-primary" onClick={handleSingleSimulation}>
              <Play style={{ width: '16px', height: '16px' }} />
              Simulate 2026 World Cup
            </button>
          ) : (
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
          )}
        </div>
      )}

    </div>
  );
};

// Bracket Card Component Helper
interface BracketMatchCardProps {
  match: Match;
  getTeam: (id: string) => Team;
}

const BracketMatchCard: React.FC<BracketMatchCardProps> = ({ match, getTeam }) => {
  const home = getTeam(match.homeTeamId);
  const away = getTeam(match.awayTeamId);

  const homeWon = match.winnerId === match.homeTeamId;
  const awayWon = match.winnerId === match.awayTeamId;

  return (
    <div className="bracket-matchup">
      <div className={`bracket-team-row ${homeWon ? 'winner' : ''}`}>
        <div className="bracket-team-info">
          <span className="flag-icon">{home.flag}</span>
          <span className="bracket-team-name" title={home.name}>{home.name}</span>
        </div>
        <span className="bracket-score">
          {match.goalsHome !== null ? match.goalsHome : '-'}
          {match.shootoutGoalsHome !== null && (
            <span className="bracket-penalty">({match.shootoutGoalsHome})</span>
          )}
        </span>
      </div>
      
      <div className={`bracket-team-row ${awayWon ? 'winner' : ''}`}>
        <div className="bracket-team-info">
          <span className="flag-icon">{away.flag}</span>
          <span className="bracket-team-name" title={away.name}>{away.name}</span>
        </div>
        <span className="bracket-score">
          {match.goalsAway !== null ? match.goalsAway : '-'}
          {match.shootoutGoalsAway !== null && (
            <span className="bracket-penalty">({match.shootoutGoalsAway})</span>
          )}
        </span>
      </div>
    </div>
  );
};
