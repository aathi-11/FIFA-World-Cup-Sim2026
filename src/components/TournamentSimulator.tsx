import React, { useState } from 'react';
import type { Team, Player, Match, GroupStanding, SimulationSummary, TeamSimStats } from '../types';
import { Play, RotateCcw, BarChart3, HelpCircle, Trophy, Layers } from 'lucide-react';
import { runFullTournamentSimulation, runMonteCarloSimulation } from '../utils/simulation';

interface TournamentSimulatorProps {
  teams: Team[];
  playersDb: Record<string, Player[]>;
}

export const TournamentSimulator: React.FC<TournamentSimulatorProps> = ({ teams, playersDb }) => {
  const [simMode, setSimMode] = useState<'SINGLE' | 'MONTE_CARLO'>('SINGLE');
  const [isSimulating, setIsSimulating] = useState(false);
  const [progress, setProgress] = useState(0);
  
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
    id, name: id, group: 'A', elo: 1500, fifaRank: 100, sqi: 50, flag: '❓', recentForm: [], stars: 1
  };

  const handleSingleSimulation = () => {
    setIsSimulating(true);
    // Simulate a brief delay for suspense
    setTimeout(() => {
      const res = runFullTournamentSimulation(teams, playersDb);
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
    
    // Break up execution using setTimeout to let the UI render the progress bar
    setTimeout(() => {
      const summary = runMonteCarloSimulation(teams, playersDb, runs, (pct) => {
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

  // Helper to extract matches for a specific stage
  const getMatchesForStage = (stage: Match['stage']) => {
    return singleResult.matches.filter(m => m.stage === stage);
  };

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

          {/* Group Standings */}
          <div className="card">
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Group Stage Standings</h2>
            <div className="groups-container">
              {Object.entries(singleResult.groupStandings).map(([letter, standings]) => (
                <div key={letter} className="card" style={{ background: 'rgba(0,0,0,0.15)', border: '1px solid rgba(255,255,255,0.03)', padding: '12px' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '10px', color: 'var(--accent-cyan)', borderBottom: '1px solid var(--border-glass)', paddingBottom: '4px' }}>
                    Group {letter}
                  </h3>
                  <table className="group-table">
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
                        // Row styling indicating advancement
                        // Top 2: direct qualification. 3rd: qualified if in top 8 third-places
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
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MONTE CARLO RENDER */}
      {simMode === 'MONTE_CARLO' && mcResult.simulated && !isSimulating && mcResult.summary && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div className="card">
            <h2 style={{ fontSize: '1.5rem', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>Monte Carlo Odds Summary</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Winning probabilities accumulated over <strong>{mcResult.summary.simulationsRun.toLocaleString()}</strong> full tournament runs:
            </p>

            <div className="monte-carlo-chart">
              {mcResult.sortedStats.slice(0, 15).map((stat, idx) => {
                const team = getTeam(stat.teamId);
                const winPct = (stat.championCount / mcResult.summary!.simulationsRun) * 100;
                const finalPct = ((stat.championCount + stat.runnerUpCount) / mcResult.summary!.simulationsRun) * 100;
                const semisPct = (stat.semiFinalCount / mcResult.summary!.simulationsRun) * 100;
                
                return (
                  <div key={stat.teamId} className="chart-row">
                    <div className="chart-team-label">
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', width: '18px' }}>#{idx + 1}</span>
                      <span>{team.flag}</span>
                      <strong style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100px' }}>{team.name}</strong>
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <div className="chart-bar-bg" title={`Champion: ${winPct.toFixed(1)}% | Finalist: ${finalPct.toFixed(1)}% | Semis: ${semisPct.toFixed(1)}%`}>
                        <div className="chart-bar-fill" style={{ width: `${Math.max(1, winPct * 5)}%` }}></div>
                      </div>
                      
                      {/* Sub stats row */}
                      <div style={{ display: 'flex', gap: '12px', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                        <span>Finals: {finalPct.toFixed(1)}%</span>
                        <span>Semis: {semisPct.toFixed(1)}%</span>
                        <span>Group Stage Exit: {((stat.groupStageExitCount / mcResult.summary!.simulationsRun) * 100).toFixed(1)}%</span>
                      </div>
                    </div>

                    <div className="chart-value-label">
                      {winPct.toFixed(1)}%
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: '2rem', padding: '12px', borderTop: '1px solid var(--border-glass)', color: 'var(--text-muted)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <HelpCircle style={{ width: '16px', height: '16px', color: 'var(--accent-cyan)' }} />
              <span>
                Want to change these odds? Go to the <strong>Squad Manager</strong>, reduce key players' ratings (e.g. simulate a French squad with Kylian Mbappé injured) and re-run the simulation. You will see their chances drop!
              </span>
            </div>
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
  getTeam: (id: string) => { name: string; flag: string; elo: number };
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
