import React, { useState, useEffect, useRef } from 'react';
import type { Team, Player, Match, GroupStanding, SimulationSummary, TeamSimStats, GoldenBootPlayer } from '../types';
import type { PlayerPerformance, EloUpdate } from '../data/liveUpdates';
import { Play, RotateCcw, BarChart3, Trophy, Layers, Lock, Zap, TrendingUp, TrendingDown } from 'lucide-react';
import { runFullTournamentSimulation, runMonteCarloSimulation } from '../utils/simulation';
import { modelWeightSummary } from '../utils/ensemble';

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

const STADIUMS = [
  "Estadio Azteca, Mexico City",
  "MetLife Stadium, New York/New Jersey",
  "Hard Rock Stadium, Miami",
  "Mercedes-Benz Stadium, Atlanta",
  "AT&T Stadium, Dallas",
  "Gillette Stadium, Boston",
  "SoFi Stadium, Los Angeles",
  "Arrowhead Stadium, Kansas City",
  "BMO Field, Toronto",
  "Estadio Akron, Guadalajara",
  "Lincoln Financial Field, Philadelphia",
  "Lumen Field, Seattle",
  "Levi's Stadium, San Francisco Bay Area",
  "NRG Stadium, Houston",
  "BC Place, Vancouver",
  "Estadio BBVA, Monterrey"
];

interface TournamentSimulatorProps {
  teams: Team[];
  playersDb: Record<string, Player[]>;
  lockedMatches?: Record<string, Match>;
  onToggleLockMatch?: (
    matchId: string, 
    homeTeamId: string, 
    awayTeamId: string, 
    goalsHome: number, 
    goalsAway: number,
    stage?: Match['stage'],
    realPlayed?: boolean,
    shootoutGoalsHome?: number | null,
    shootoutGoalsAway?: number | null
  ) => void;
  onClearLocks?: () => void;
  /** Live Elo ratings fetched from Groq — overrides baseline Elo in MC runs */
  liveElo?: EloUpdate;
  /** Live player performances fetched from Groq — overrides static form multipliers */
  livePerformances?: PlayerPerformance[];
}

export const TournamentSimulator: React.FC<TournamentSimulatorProps> = ({ 
  teams, 
  playersDb,
  lockedMatches = {},
  onToggleLockMatch,
  onClearLocks,
  liveElo = {},
  livePerformances = []
}) => {
  // ── Probability Delta Tracking ─────────────────────────────────────────────
  // Stores the previous run's champion % per team to compute deltas after each new MC run
  const prevProbabilities = useRef<Record<string, number>>({});
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

  const [startFromCurrent, setStartFromCurrent] = useState(false);

  // Sub-tabs in SINGLE simulation mode
  const [subTab, setSubTab] = useState<'BRACKET' | 'SCHEDULE'>('BRACKET');
  
  // Schedule filters
  const [scheduleSearch, setScheduleSearch] = useState('');
  const [scheduleStageFilter, setScheduleStageFilter] = useState<'ALL' | Match['stage']>('ALL');
  const [scheduleStadiumFilter, setScheduleStadiumFilter] = useState('ALL');
  const [scheduleStatusFilter, setScheduleStatusFilter] = useState<'ALL' | 'LOCKED' | 'UNLOCKED'>('ALL');

  // Side-effect-free simulation run on mount (and on dependency change) to populate matches initially
  useEffect(() => {
    if (teams.length > 0 && Object.keys(playersDb).length > 0) {
      const clonedTeams = JSON.parse(JSON.stringify(teams)) as Team[];
      const clonedPlayersDb = JSON.parse(JSON.stringify(playersDb)) as Record<string, Player[]>;
      const res = runFullTournamentSimulation(clonedTeams, clonedPlayersDb, lockedMatches, startFromCurrent);
      setSingleResult(prev => ({
        ...res,
        simulated: prev.simulated // Maintain whatever simulation status (true/false) was there!
      }));
    }
  }, [teams, playersDb, lockedMatches, startFromCurrent]);

  const getTeam = (id: string): Team => teams.find(t => t.id === id) || {
    id, name: id, group: 'A', elo: 1500, baselineElo: 1500, fifaRank: 100, sqi: 50, flag: '❓', recentForm: [], stars: 1
  };

  const handleSingleSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => {
      const res = runFullTournamentSimulation(teams, playersDb, lockedMatches, startFromCurrent);
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
    
    // Reset goalsScored accumulation before Monte Carlo starts if fresh
    if (!startFromCurrent) {
      Object.values(playersDb).forEach(squad => {
        squad.forEach(p => { p.goalsScored = 0; });
      });
    }
    
    setTimeout(() => {
      const summary = runMonteCarloSimulation(
        teams, 
        playersDb, 
        runs, 
        lockedMatches, 
        (pct) => setProgress(pct),
        startFromCurrent,
        liveElo,
        livePerformances
      );
      // Sort stats by champion count
      const sortedStats = Object.values(summary.stats).sort((a, b) => b.championCount - a.championCount);

      // ── Save previous probabilities before overwriting for delta display
      const newProbs: Record<string, number> = {};
      sortedStats.forEach(s => {
        newProbs[s.teamId] = (s.championCount / summary.simulationsRun) * 100;
      });
      prevProbabilities.current = mcResult.simulated
        ? Object.fromEntries(
            Object.values(mcResult.summary?.stats ?? {}).map(s => [
              s.teamId,
              (s.championCount / (mcResult.summary?.simulationsRun || 1)) * 100
            ])
          )
        : {};
      
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

  // Filtered and sorted matches for the schedule table
  const filteredMatches = (singleResult.matches || [])
    .filter((m: Match) => {
      // 1. Search filter (team name)
      if (scheduleSearch.trim()) {
        const query = scheduleSearch.toLowerCase();
        const homeName = getTeam(m.homeTeamId).name.toLowerCase();
        const awayName = getTeam(m.awayTeamId).name.toLowerCase();
        if (!homeName.includes(query) && !awayName.includes(query)) {
          return false;
        }
      }

      // 2. Stage filter
      if (scheduleStageFilter !== 'ALL' && m.stage !== scheduleStageFilter) {
        return false;
      }

      // 3. Stadium filter
      if (scheduleStadiumFilter !== 'ALL' && m.stadium !== scheduleStadiumFilter) {
        return false;
      }

      // 4. Status filter
      if (scheduleStatusFilter !== 'ALL') {
        const lockMatch = lockedMatches[m.id];
        const isLockedOrReal = !!lockMatch && (lockMatch.locked || lockMatch.realPlayed);
        if (scheduleStatusFilter === 'LOCKED' && !isLockedOrReal) return false;
        if (scheduleStatusFilter === 'UNLOCKED' && isLockedOrReal) return false;
      }

      return true;
    })
    .sort((a: Match, b: Match) => (a.matchNumber || 0) - (b.matchNumber || 0));

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

  // Probability deltas vs. previous MC run
  const probabilityDeltas = mcResult.sortedStats.reduce((acc, s) => {
    const current = (s.championCount / mcResult.summary!.simulationsRun) * 100;
    const previous = prevProbabilities.current[s.teamId];
    acc[s.teamId] = previous !== undefined ? current - previous : 0;
    return acc;
  }, {} as Record<string, number>);

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

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.02)', padding: '6px 12px', borderRadius: '20px', border: '1px solid var(--border-glass)' }}>
            <input 
              type="checkbox" 
              id="startFromCurrentCheckbox"
              checked={startFromCurrent}
              onChange={(e) => setStartFromCurrent(e.target.checked)}
              style={{ width: '16px', height: '16px', accentColor: 'var(--accent-gold)', cursor: 'pointer' }}
              disabled={isSimulating}
            />
            <label htmlFor="startFromCurrentCheckbox" style={{ fontSize: '0.85rem', cursor: 'pointer', fontWeight: '500', color: 'var(--text-primary)' }} title="Preserves current player injuries, custom scores, and Elo ratings to predict the rest of the World Cup.">
              Predict from Current State (starts June 12)
            </label>
          </div>

          <div className="sim-controls" style={{ margin: 0 }}>
            {simMode === 'SINGLE' ? (
              <button 
                className="btn btn-primary"
                onClick={handleSingleSimulation}
                disabled={isSimulating}
              >
                <Play style={{ width: '16px', height: '16px' }} />
                {isSimulating ? 'Simulating...' : startFromCurrent ? 'Predict Remaining' : 'Run Simulation'}
              </button>
            ) : (
              <div style={{ display: 'flex', gap: '8px' }}>
                <button 
                  className="btn btn-primary"
                  onClick={() => handleMonteCarloSimulation(1000)}
                  disabled={isSimulating}
                >
                  <Play style={{ width: '16px', height: '16px' }} />
                  {startFromCurrent ? 'Predict 1,000 Runs' : 'Run 1,000 Sims'}
                </button>
                <button 
                  className="btn btn-primary"
                  onClick={() => handleMonteCarloSimulation(10000)}
                  disabled={isSimulating}
                  style={{ background: 'linear-gradient(135deg, var(--accent-cyan) 0%, var(--accent-blue) 100%)', color: '#000', boxShadow: '0 4px 15px rgba(0, 242, 254, 0.25)' }}
                >
                  <Play style={{ width: '16px', height: '16px' }} />
                  {startFromCurrent ? 'Predict 10,000 Runs' : 'Run 10,000 Sims (Fast)'}
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
      {simMode === 'SINGLE' && !isSimulating && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Sub-tab Switcher */}
          <div style={{ display: 'flex', borderBottom: '1px solid var(--border-glass)', gap: '2rem', marginBottom: '0.5rem' }}>
            <button
              onClick={() => setSubTab('BRACKET')}
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: subTab === 'BRACKET' ? '2px solid var(--accent-cyan)' : '2px solid transparent',
                color: subTab === 'BRACKET' ? 'var(--text-primary)' : 'var(--text-secondary)',
                padding: '10px 0',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '1rem',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Trophy style={{ width: '16px', height: '16px', color: subTab === 'BRACKET' ? 'var(--accent-cyan)' : 'inherit' }} />
              Knockout Bracket & Groups
            </button>
            <button
              onClick={() => setSubTab('SCHEDULE')}
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: subTab === 'SCHEDULE' ? '2px solid var(--accent-cyan)' : '2px solid transparent',
                color: subTab === 'SCHEDULE' ? 'var(--text-primary)' : 'var(--text-secondary)',
                padding: '10px 0',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '1rem',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Play style={{ width: '16px', height: '16px', color: subTab === 'SCHEDULE' ? 'var(--accent-cyan)' : 'inherit' }} />
              Match Schedule & Results
            </button>
          </div>

          {subTab === 'BRACKET' ? (
            singleResult.simulated ? (
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
                          <BracketMatchCard 
                            key={m.id} 
                            match={m} 
                            getTeam={getTeam} 
                            onToggleLockMatch={onToggleLockMatch}
                            lockedMatches={lockedMatches}
                          />
                        ))}
                      </div>

                      {/* ROUND OF 16 */}
                      <div className="bracket-round">
                        <div className="bracket-round-title">Round of 16</div>
                        {getMatchesForStage('R16').map((m) => (
                          <BracketMatchCard 
                            key={m.id} 
                            match={m} 
                            getTeam={getTeam} 
                            onToggleLockMatch={onToggleLockMatch}
                            lockedMatches={lockedMatches}
                          />
                        ))}
                      </div>

                      {/* QUARTER-FINALS */}
                      <div className="bracket-round">
                        <div className="bracket-round-title">Quarter-Finals</div>
                        {getMatchesForStage('QF').map((m) => (
                          <BracketMatchCard 
                            key={m.id} 
                            match={m} 
                            getTeam={getTeam} 
                            onToggleLockMatch={onToggleLockMatch}
                            lockedMatches={lockedMatches}
                          />
                        ))}
                      </div>

                      {/* SEMI-FINALS */}
                      <div className="bracket-round">
                        <div className="bracket-round-title">Semi-Finals</div>
                        {getMatchesForStage('SF').map((m) => (
                          <BracketMatchCard 
                            key={m.id} 
                            match={m} 
                            getTeam={getTeam} 
                            onToggleLockMatch={onToggleLockMatch}
                            lockedMatches={lockedMatches}
                          />
                        ))}
                      </div>

                      {/* FINALS */}
                      <div className="bracket-round">
                        <div className="bracket-round-title">Finals</div>
                        <BracketMatchCard 
                          match={singleResult.matches.find(m => m.stage === 'FINAL')!} 
                          getTeam={getTeam} 
                          onToggleLockMatch={onToggleLockMatch}
                          lockedMatches={lockedMatches}
                        />
                        
                        <div className="bracket-round-title" style={{ marginTop: '2rem', color: 'var(--accent-gold)' }}>3rd Place Match</div>
                        <BracketMatchCard 
                          match={singleResult.matches.find(m => m.stage === 'THIRD_PLACE')!} 
                          getTeam={getTeam} 
                          onToggleLockMatch={onToggleLockMatch}
                          lockedMatches={lockedMatches}
                        />
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
                                
                                const lockMatch = lockedMatches[matchId];
                                const isLocked = !!lockMatch && !lockMatch.realPlayed;
                                const isReal = !!lockMatch && !!lockMatch.realPlayed;
                                const localState = lockScores[matchId] || { goalsHome: 0, goalsAway: 0 };
                                
                                const currentGoalsHome = lockMatch ? lockMatch.goalsHome! : localState.goalsHome;
                                const currentGoalsAway = lockMatch ? lockMatch.goalsAway! : localState.goalsAway;
                                
                                return (
                                  <div 
                                    key={matchId} 
                                    style={{ 
                                      display: 'flex', 
                                      alignItems: 'center', 
                                      justifyContent: 'space-between', 
                                      background: isReal ? 'rgba(16, 185, 129, 0.04)' : isLocked ? 'rgba(0, 242, 254, 0.02)' : 'rgba(255,255,255,0.01)', 
                                      padding: '6px 8px', 
                                      borderRadius: '8px', 
                                      fontSize: '0.75rem',
                                      border: isReal ? '1px solid rgba(16, 185, 129, 0.15)' : isLocked ? '1px solid rgba(0, 242, 254, 0.15)' : '1px solid transparent',
                                      marginBottom: '4px'
                                    }}
                                  >
                                    <span style={{ width: '80px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }} title={home.name}>
                                      {home.flag} {home.name}
                                    </span>
                                    
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                      <input 
                                        type="number"
                                        min="0"
                                        max="9"
                                        value={currentGoalsHome}
                                        onChange={(e) => handleInputChange(matchId, 'home', Math.max(0, parseInt(e.target.value) || 0))}
                                        disabled={(isLocked || isReal) || isSimulating}
                                        style={{ width: '28px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-glass)', borderRadius: '4px', color: '#fff', textAlign: 'center', fontSize: '0.75rem', padding: '2px' }}
                                      />
                                      <span style={{ color: 'var(--text-muted)' }}>-</span>
                                      <input 
                                        type="number"
                                        min="0"
                                        max="9"
                                        value={currentGoalsAway}
                                        onChange={(e) => handleInputChange(matchId, 'away', Math.max(0, parseInt(e.target.value) || 0))}
                                        disabled={(isLocked || isReal) || isSimulating}
                                        style={{ width: '28px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-glass)', borderRadius: '4px', color: '#fff', textAlign: 'center', fontSize: '0.75rem', padding: '2px' }}
                                      />
                                    </div>

                                    <span style={{ width: '80px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', textAlign: 'right' }} title={away.name}>
                                      {away.name} {away.flag}
                                    </span>

                                    <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                                      {/* Prediction Lock Button */}
                                      <button 
                                        onClick={() => onToggleLockMatch?.(matchId, home.id, away.id, currentGoalsHome, currentGoalsAway, 'GROUP', false)}
                                        disabled={isSimulating}
                                        style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '2px', display: 'flex', alignItems: 'center' }}
                                        title={isLocked ? "Unlock Scoreline" : "Lock as hypothetical prediction"}
                                      >
                                        <Lock style={{ width: '12px', height: '12px', color: isLocked ? 'var(--accent-cyan)' : 'var(--text-muted)' }} />
                                      </button>

                                      {/* Real Result Button */}
                                      <button 
                                        onClick={() => onToggleLockMatch?.(matchId, home.id, away.id, currentGoalsHome, currentGoalsAway, 'GROUP', true)}
                                        disabled={isSimulating}
                                        style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '2px', display: 'flex', alignItems: 'center' }}
                                        title={isReal ? "Unlock Scoreline" : "Mark as real-life completed result"}
                                      >
                                        <Zap style={{ width: '12px', height: '12px', color: isReal ? 'var(--accent-success)' : 'var(--text-muted)' }} />
                                      </button>
                                    </div>
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
            ) : (
              /* Ready for Prediction display */
              <div className="card" style={{ textAlign: 'center', padding: '5rem 2rem' }}>
                <Trophy style={{ width: '64px', height: '64px', color: 'var(--text-muted)', margin: '0 auto 1.5rem auto' }} />
                <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', marginBottom: '10px' }}>Ready for Prediction</h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '450px', margin: '0 auto 2rem auto', fontSize: '0.95rem', lineHeight: '1.5' }}>
                  Select either the visualizer mode to watch a single bracket play out, or the Monte Carlo simulator to run thousands of trials and verify overall victory percentages.
                </p>
                <button className="btn btn-primary" onClick={handleSingleSimulation}>
                  <Play style={{ width: '16px', height: '16px' }} />
                  {startFromCurrent ? 'Predict Remaining Matches' : 'Simulate 2026 World Cup'}
                </button>
              </div>
            )
          ) : (
            /* Match Schedule sub-tab */
            <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Search & Filter Controls */}
              <div className="card" style={{ padding: '1.25rem' }}>
                <div className="schedule-filters-grid">
                  <input
                    type="text"
                    placeholder="Search by team name..."
                    className="filter-input"
                    value={scheduleSearch}
                    onChange={(e) => setScheduleSearch(e.target.value)}
                  />
                  <select
                    className="filter-select"
                    value={scheduleStageFilter}
                    onChange={(e) => setScheduleStageFilter(e.target.value as any)}
                  >
                    <option value="ALL">All Stages</option>
                    <option value="GROUP">Group Stage</option>
                    <option value="R32">Round of 32</option>
                    <option value="R16">Round of 16</option>
                    <option value="QF">Quarter-finals</option>
                    <option value="SF">Semi-finals</option>
                    <option value="THIRD_PLACE">Third place play-off</option>
                    <option value="FINAL">Final</option>
                  </select>
                  <select
                    className="filter-select"
                    value={scheduleStadiumFilter}
                    onChange={(e) => setScheduleStadiumFilter(e.target.value)}
                  >
                    <option value="ALL">All Stadiums</option>
                    {STADIUMS.map(stadium => (
                      <option key={stadium} value={stadium}>{stadium.split(',')[0]}</option>
                    ))}
                  </select>
                  <select
                    className="filter-select"
                    value={scheduleStatusFilter}
                    onChange={(e) => setScheduleStatusFilter(e.target.value as any)}
                  >
                    <option value="ALL">All Statuses</option>
                    <option value="LOCKED">Locked / Real-world</option>
                    <option value="UNLOCKED">Unlocked / Simulated</option>
                  </select>
                </div>
              </div>

              {/* Table rendering */}
              <div className="schedule-container">
                <table className="schedule-table">
                  <thead>
                    <tr>
                      <th style={{ width: '80px' }}>Match</th>
                      <th style={{ width: '180px' }}>Date & Time</th>
                      <th style={{ width: '130px' }}>Stage</th>
                      <th style={{ textAlign: 'center' }}>Matchup & Score</th>
                      <th>Venue</th>
                      <th style={{ width: '160px' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMatches.length > 0 ? (
                      filteredMatches.map(m => (
                        <ScheduleMatchRow
                          key={m.id}
                          match={m}
                          getTeam={getTeam}
                          onToggleLockMatch={onToggleLockMatch}
                          lockedMatches={lockedMatches}
                        />
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
                          No matches found matching the criteria.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
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

            <div style={{ marginTop: '1rem', padding: '12px', background: 'rgba(0, 242, 254, 0.02)', border: '1px solid rgba(0, 242, 254, 0.1)', borderRadius: '8px', color: 'var(--text-muted)', fontSize: '0.75rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Zap style={{ width: '16px', height: '16px', color: 'var(--accent-cyan)', flexShrink: 0 }} />
                <span>
                  <strong>4-Model Ensemble:</strong> {modelWeightSummary()} — Probabilities shift dynamically when you lock real results or fetch live Elo via Groq.
                </span>
              </div>
              {/* Probability Delta Table — shown after a second MC run */}
              {Object.values(probabilityDeltas).some(d => d !== 0) && (
                <div style={{ marginTop: '4px' }}>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.7rem', marginBottom: '6px' }}>Probability shift vs. previous run:</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {mcResult.sortedStats.slice(0, 12).map(s => {
                      const team = getTeam(s.teamId);
                      const delta = probabilityDeltas[s.teamId] ?? 0;
                      if (Math.abs(delta) < 0.05) return null;
                      return (
                        <span
                          key={s.teamId}
                          className={delta > 0 ? 'prob-delta-up' : 'prob-delta-down'}
                          title={`${team.name}: ${delta > 0 ? '+' : ''}${delta.toFixed(1)}%`}
                        >
                          {team.flag} {delta > 0 ? <TrendingUp style={{ width: '10px', height: '10px' }} /> : <TrendingDown style={{ width: '10px', height: '10px' }} />}
                          {delta > 0 ? '+' : ''}{delta.toFixed(1)}%
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
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

      {/* Default display before simulation (Monte Carlo Mode only) */}
      {simMode === 'MONTE_CARLO' && !mcResult.simulated && !isSimulating && (
        <div className="card" style={{ textAlign: 'center', padding: '5rem 2rem' }}>
          <Trophy style={{ width: '64px', height: '64px', color: 'var(--text-muted)', margin: '0 auto 1.5rem auto' }} />
          <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', marginBottom: '10px' }}>Ready for Prediction</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '450px', margin: '0 auto 2rem auto', fontSize: '0.95rem', lineHeight: '1.5' }}>
            Select either the visualizer mode to watch a single bracket play out, or the Monte Carlo simulator to run thousands of trials and verify overall victory percentages.
          </p>
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
        </div>
      )}

    </div>
  );
};

// Bracket Card Component Helper
const BracketMatchCard: React.FC<{
  match: Match;
  getTeam: (id: string) => Team;
  onToggleLockMatch?: (
    matchId: string, 
    homeTeamId: string, 
    awayTeamId: string, 
    goalsHome: number, 
    goalsAway: number,
    stage: Match['stage'],
    realPlayed: boolean,
    shootoutGoalsHome?: number | null,
    shootoutGoalsAway?: number | null
  ) => void;
  lockedMatches?: Record<string, Match>;
}> = ({ match, getTeam, onToggleLockMatch, lockedMatches }) => {
  const home = getTeam(match.homeTeamId);
  const away = getTeam(match.awayTeamId);

  const lockMatch = lockedMatches ? lockedMatches[match.id] : null;
  const isLocked = !!lockMatch && !lockMatch.realPlayed;
  const isReal = !!lockMatch && !!lockMatch.realPlayed;

  const [scoreHome, setScoreHome] = useState(lockMatch ? (lockMatch.goalsHome ?? 0) : (match.goalsHome ?? 0));
  const [scoreAway, setScoreAway] = useState(lockMatch ? (lockMatch.goalsAway ?? 0) : (match.goalsAway ?? 0));
  const [soHome, setSoHome] = useState(lockMatch ? (lockMatch.shootoutGoalsHome ?? 0) : (match.shootoutGoalsHome ?? 0));
  const [soAway, setSoAway] = useState(lockMatch ? (lockMatch.shootoutGoalsAway ?? 0) : (match.shootoutGoalsAway ?? 0));

  // Sync state if lock changes
  useEffect(() => {
    if (lockMatch) {
      setScoreHome(lockMatch.goalsHome ?? 0);
      setScoreAway(lockMatch.goalsAway ?? 0);
      setSoHome(lockMatch.shootoutGoalsHome ?? 0);
      setSoAway(lockMatch.shootoutGoalsAway ?? 0);
    } else {
      setScoreHome(match.goalsHome ?? 0);
      setScoreAway(match.goalsAway ?? 0);
      setSoHome(match.shootoutGoalsHome ?? 0);
      setSoAway(match.shootoutGoalsAway ?? 0);
    }
  }, [lockMatch, match]);

  const homeWon = match.winnerId === match.homeTeamId;
  const awayWon = match.winnerId === match.awayTeamId;

  return (
    <div className={`bracket-matchup ${isReal ? 'real-played' : isLocked ? 'scenario-locked' : ''}`} style={{
      border: isReal ? '1px solid var(--accent-success)' : isLocked ? '1px solid var(--accent-cyan)' : '1px solid var(--border-glass)',
      background: isReal ? 'rgba(16, 185, 129, 0.04)' : isLocked ? 'rgba(0, 242, 254, 0.02)' : 'rgba(255,255,255,0.01)',
      borderRadius: '8px',
      padding: '8px',
      margin: '6px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }}>
      {/* Home Row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
          <span>{home.flag}</span>
          <span style={{ fontSize: '0.8rem', fontWeight: homeWon ? 'bold' : 'normal', color: homeWon ? '#fff' : 'var(--text-secondary)' }} title={home.name}>{home.name}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {(isLocked || isReal) ? (
            <span style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>{scoreHome}</span>
          ) : (
            <input 
              type="number"
              min="0"
              max="9"
              value={scoreHome}
              onChange={(e) => setScoreHome(Math.max(0, parseInt(e.target.value) || 0))}
              style={{ width: '24px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-glass)', borderRadius: '4px', color: '#fff', textAlign: 'center', fontSize: '0.75rem', padding: '1px' }}
            />
          )}
          {scoreHome === scoreAway && (
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.65rem', color: 'var(--accent-gold)' }}>
              <span>(P:</span>
              {(isLocked || isReal) ? (
                <span style={{ fontWeight: 'bold', marginLeft: '2px' }}>{soHome}</span>
              ) : (
                <input 
                  type="number"
                  min="0"
                  max="15"
                  value={soHome}
                  onChange={(e) => setSoHome(Math.max(0, parseInt(e.target.value) || 0))}
                  style={{ width: '20px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-glass)', borderRadius: '4px', color: 'var(--accent-gold)', textAlign: 'center', fontSize: '0.65rem', padding: '0px', marginLeft: '2px' }}
                />
              )}
              <span>)</span>
            </div>
          )}
        </div>
      </div>

      {/* Away Row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
          <span>{away.flag}</span>
          <span style={{ fontSize: '0.8rem', fontWeight: awayWon ? 'bold' : 'normal', color: awayWon ? '#fff' : 'var(--text-secondary)' }} title={away.name}>{away.name}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {(isLocked || isReal) ? (
            <span style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>{scoreAway}</span>
          ) : (
            <input 
              type="number"
              min="0"
              max="9"
              value={scoreAway}
              onChange={(e) => setScoreAway(Math.max(0, parseInt(e.target.value) || 0))}
              style={{ width: '24px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-glass)', borderRadius: '4px', color: '#fff', textAlign: 'center', fontSize: '0.75rem', padding: '1px' }}
            />
          )}
          {scoreHome === scoreAway && (
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.65rem', color: 'var(--accent-gold)' }}>
              <span>(P:</span>
              {(isLocked || isReal) ? (
                <span style={{ fontWeight: 'bold', marginLeft: '2px' }}>{soAway}</span>
              ) : (
                <input 
                  type="number"
                  min="0"
                  max="15"
                  value={soAway}
                  onChange={(e) => setSoAway(Math.max(0, parseInt(e.target.value) || 0))}
                  style={{ width: '20px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-glass)', borderRadius: '4px', color: 'var(--accent-gold)', textAlign: 'center', fontSize: '0.65rem', padding: '0px', marginLeft: '2px' }}
                />
              )}
              <span>)</span>
            </div>
          )}
        </div>
      </div>

      {/* Control buttons inside card */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '6px', marginTop: '4px', borderTop: '1px solid rgba(255,255,255,0.03)', paddingTop: '4px' }}>
        <button
          onClick={() => onToggleLockMatch?.(match.id, home.id, away.id, scoreHome, scoreAway, match.stage, false, scoreHome === scoreAway ? soHome : null, scoreHome === scoreAway ? soAway : null)}
          style={{
            fontSize: '0.65rem',
            padding: '2px 6px',
            borderRadius: '4px',
            border: '1px solid rgba(0, 242, 254, 0.3)',
            background: isLocked ? 'rgba(0, 242, 254, 0.2)' : 'transparent',
            color: isLocked ? '#fff' : 'var(--accent-cyan)',
            cursor: 'pointer'
          }}
          title="Lock as prediction scenario"
        >
          Lock
        </button>
        <button
          onClick={() => onToggleLockMatch?.(match.id, home.id, away.id, scoreHome, scoreAway, match.stage, true, scoreHome === scoreAway ? soHome : null, scoreHome === scoreAway ? soAway : null)}
          style={{
            fontSize: '0.65rem',
            padding: '2px 6px',
            borderRadius: '4px',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            background: isReal ? 'rgba(16, 185, 129, 0.2)' : 'transparent',
            color: isReal ? '#fff' : 'var(--accent-success)',
            cursor: 'pointer'
          }}
          title="Mark as real-world result"
        >
          Real
        </button>
      </div>
    </div>
  );
};

const ScheduleMatchRow: React.FC<{
  match: Match;
  getTeam: (id: string) => Team;
  onToggleLockMatch?: (
    matchId: string,
    homeTeamId: string,
    awayTeamId: string,
    goalsHome: number,
    goalsAway: number,
    stage: Match['stage'],
    realPlayed: boolean,
    shootoutGoalsHome?: number | null,
    shootoutGoalsAway?: number | null
  ) => void;
  lockedMatches: Record<string, Match>;
}> = ({ match, getTeam, onToggleLockMatch, lockedMatches }) => {
  const home = getTeam(match.homeTeamId);
  const away = getTeam(match.awayTeamId);

  const lockMatch = lockedMatches[match.id] || null;
  const isLocked = !!lockMatch && !lockMatch.realPlayed;
  const isReal = !!lockMatch && !!lockMatch.realPlayed;

  const [scoreHome, setScoreHome] = useState<number | ''>(
    lockMatch ? (lockMatch.goalsHome ?? 0) : (match.goalsHome !== null && match.goalsHome !== undefined ? match.goalsHome : '')
  );
  const [scoreAway, setScoreAway] = useState<number | ''>(
    lockMatch ? (lockMatch.goalsAway ?? 0) : (match.goalsAway !== null && match.goalsAway !== undefined ? match.goalsAway : '')
  );
  const [soHome, setSoHome] = useState<number | ''>(
    lockMatch ? (lockMatch.shootoutGoalsHome ?? 0) : (match.shootoutGoalsHome !== null && match.shootoutGoalsHome !== undefined ? match.shootoutGoalsHome : '')
  );
  const [soAway, setSoAway] = useState<number | ''>(
    lockMatch ? (lockMatch.shootoutGoalsAway ?? 0) : (match.shootoutGoalsAway !== null && match.shootoutGoalsAway !== undefined ? match.shootoutGoalsAway : '')
  );

  // Sync state if lock changes
  useEffect(() => {
    if (lockMatch) {
      setScoreHome(lockMatch.goalsHome ?? 0);
      setScoreAway(lockMatch.goalsAway ?? 0);
      setSoHome(lockMatch.shootoutGoalsHome ?? 0);
      setSoAway(lockMatch.shootoutGoalsAway ?? 0);
    } else {
      setScoreHome(match.goalsHome !== null && match.goalsHome !== undefined ? match.goalsHome : '');
      setScoreAway(match.goalsAway !== null && match.goalsAway !== undefined ? match.goalsAway : '');
      setSoHome(match.shootoutGoalsHome !== null && match.shootoutGoalsHome !== undefined ? match.shootoutGoalsHome : '');
      setSoAway(match.shootoutGoalsAway !== null && match.shootoutGoalsAway !== undefined ? match.shootoutGoalsAway : '');
    }
  }, [lockMatch, match]);

  const getStageClass = (stage: Match['stage']) => {
    switch (stage) {
      case 'GROUP': return 'group';
      case 'R32': return 'r32';
      case 'R16': return 'r16';
      case 'QF': return 'qf';
      case 'SF': return 'sf';
      case 'THIRD_PLACE': return 'third_place';
      case 'FINAL': return 'final';
      default: return 'group';
    }
  };

  const getStageLabel = (stage: Match['stage'], groupLetter: string | null) => {
    switch (stage) {
      case 'GROUP': return `Group ${groupLetter || ''}`;
      case 'R32': return 'Round of 32';
      case 'R16': return 'Round of 16';
      case 'QF': return 'Quarter-Final';
      case 'SF': return 'Semi-Final';
      case 'THIRD_PLACE': return '3rd Place';
      case 'FINAL': return 'Final';
      default: return stage;
    }
  };

  // Determine whether a score exists to display (simulated or locked)
  const hasSimulatedScore = match.goalsHome !== null && match.goalsAway !== null;
  const displayHome = lockMatch ? (lockMatch.goalsHome ?? 0) : (hasSimulatedScore ? match.goalsHome! : null);
  const displayAway = lockMatch ? (lockMatch.goalsAway ?? 0) : (hasSimulatedScore ? match.goalsAway! : null);
  const displaySoHome = lockMatch ? lockMatch.shootoutGoalsHome : match.shootoutGoalsHome;
  const displaySoAway = lockMatch ? lockMatch.shootoutGoalsAway : match.shootoutGoalsAway;

  // Winner display
  const winnerId = lockMatch ? lockMatch.winnerId : match.winnerId;

  return (
    <tr className={`schedule-row ${isReal ? 'real-played' : isLocked ? 'scenario-locked' : ''}`}>
      {/* Match Number */}
      <td style={{ fontWeight: '600', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
        #{match.matchNumber || match.id}
      </td>

      {/* Date & Time */}
      <td>
        <div style={{ fontWeight: '500', fontSize: '0.82rem' }}>{match.date}</div>
        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{match.kickoffTime}</div>
      </td>

      {/* Stage */}
      <td>
        <span className={`stage-badge ${getStageClass(match.stage)}`}>
          {getStageLabel(match.stage, match.groupLetter)}
        </span>
      </td>

      {/* Matchup & Score */}
      <td>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>

          {/* Home Team */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', width: '160px', justifyContent: 'flex-end' }}>
            <span style={{
              fontSize: '0.82rem',
              fontWeight: winnerId === home.id ? '700' : 'normal',
              color: winnerId === home.id ? '#fff' : 'var(--text-secondary)'
            }}>
              {home.name}
            </span>
            <span style={{ fontSize: '1.1rem' }}>{home.flag}</span>
          </div>

          {/* Score Display */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', minWidth: '90px' }}>
            {/* Status Badge */}
            {isReal && (
              <span className="match-status-badge match-status-ft">FT</span>
            )}
            {isLocked && !isReal && (
              <span className="match-status-badge match-status-pred">PRED</span>
            )}
            {!isReal && !isLocked && hasSimulatedScore && (
              <span className="match-status-badge match-status-sim">SIM</span>
            )}

            {/* Score Numbers */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {displayHome !== null ? (
                /* Show score boldly */
                <span style={{
                  fontSize: '1.25rem',
                  fontWeight: '800',
                  color: isReal ? 'var(--accent-success)' : isLocked ? 'var(--accent-cyan)' : '#e2e8f0',
                  minWidth: '24px',
                  textAlign: 'center',
                  fontFamily: 'var(--font-heading)',
                  textShadow: isReal ? '0 0 8px rgba(16,185,129,0.4)' : isLocked ? '0 0 8px rgba(0,242,254,0.4)' : 'none'
                }}>
                  {displayHome}
                </span>
              ) : (
                <input
                  type="number"
                  min="0"
                  max="9"
                  placeholder="-"
                  value={scoreHome}
                  onChange={(e) => {
                    const val = e.target.value;
                    setScoreHome(val === '' ? '' : Math.max(0, parseInt(val) || 0));
                  }}
                  style={{ width: '32px', height: '28px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-glass)', borderRadius: '4px', color: '#fff', textAlign: 'center', fontSize: '0.85rem' }}
                />
              )}

              <span style={{ color: 'var(--text-muted)', fontWeight: '700' }}>–</span>

              {displayAway !== null ? (
                <span style={{
                  fontSize: '1.25rem',
                  fontWeight: '800',
                  color: isReal ? 'var(--accent-success)' : isLocked ? 'var(--accent-cyan)' : '#e2e8f0',
                  minWidth: '24px',
                  textAlign: 'center',
                  fontFamily: 'var(--font-heading)',
                  textShadow: isReal ? '0 0 8px rgba(16,185,129,0.4)' : isLocked ? '0 0 8px rgba(0,242,254,0.4)' : 'none'
                }}>
                  {displayAway}
                </span>
              ) : (
                <input
                  type="number"
                  min="0"
                  max="9"
                  placeholder="-"
                  value={scoreAway}
                  onChange={(e) => {
                    const val = e.target.value;
                    setScoreAway(val === '' ? '' : Math.max(0, parseInt(val) || 0));
                  }}
                  style={{ width: '32px', height: '28px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-glass)', borderRadius: '4px', color: '#fff', textAlign: 'center', fontSize: '0.85rem' }}
                />
              )}
            </div>

            {/* Shootout Score */}
            {match.stage !== 'GROUP' && displaySoHome !== null && displaySoAway !== null && displaySoHome !== undefined && displaySoAway !== undefined && (
              <div style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', fontWeight: '600' }}>
                ({displaySoHome} – {displaySoAway}) pens
              </div>
            )}
            {/* Shootout input when score is tied and unlocked */}
            {match.stage !== 'GROUP' && displayHome === null && scoreHome !== '' && scoreAway !== '' && scoreHome === scoreAway && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '2px', fontSize: '0.75rem', color: 'var(--accent-gold)' }}>
                <span>(</span>
                <input
                  type="number" min="0" max="15" placeholder="P"
                  value={soHome}
                  onChange={(e) => { const v = e.target.value; setSoHome(v === '' ? '' : Math.max(0, parseInt(v) || 0)); }}
                  style={{ width: '24px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-glass)', borderRadius: '4px', color: 'var(--accent-gold)', textAlign: 'center', fontSize: '0.75rem', padding: '1px' }}
                />
                <span>-</span>
                <input
                  type="number" min="0" max="15" placeholder="P"
                  value={soAway}
                  onChange={(e) => { const v = e.target.value; setSoAway(v === '' ? '' : Math.max(0, parseInt(v) || 0)); }}
                  style={{ width: '24px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-glass)', borderRadius: '4px', color: 'var(--accent-gold)', textAlign: 'center', fontSize: '0.75rem', padding: '1px' }}
                />
                <span>)</span>
              </div>
            )}
          </div>

          {/* Away Team */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', width: '160px', justifyContent: 'flex-start' }}>
            <span style={{ fontSize: '1.1rem' }}>{away.flag}</span>
            <span style={{
              fontSize: '0.82rem',
              fontWeight: winnerId === away.id ? '700' : 'normal',
              color: winnerId === away.id ? '#fff' : 'var(--text-secondary)'
            }}>
              {away.name}
            </span>
          </div>
        </div>
      </td>

      {/* Stadium */}
      <td style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', maxWidth: '160px' }}>
        {match.stadium}
      </td>

      {/* Actions */}
      <td>
        <div style={{ display: 'flex', gap: '6px', flexDirection: 'column' }}>
          {/* Lock (Prediction) button */}
          {!isReal && (
            <button
              onClick={() => {
                if (isLocked) {
                  onToggleLockMatch?.(match.id, home.id, away.id, 0, 0, match.stage, false);
                } else {
                  const h = displayHome !== null ? displayHome : (scoreHome === '' ? 0 : scoreHome as number);
                  const a = displayAway !== null ? displayAway : (scoreAway === '' ? 0 : scoreAway as number);
                  const sh = soHome === '' ? null : soHome as number;
                  const sa = soAway === '' ? null : soAway as number;
                  onToggleLockMatch?.(match.id, home.id, away.id, h, a, match.stage, false, sh, sa);
                }
              }}
              style={{
                fontSize: '0.7rem', padding: '3px 8px', borderRadius: '5px',
                border: '1px solid rgba(0, 242, 254, 0.3)',
                background: isLocked ? 'rgba(0, 242, 254, 0.2)' : 'transparent',
                color: isLocked ? '#fff' : 'var(--accent-cyan)',
                cursor: 'pointer', fontWeight: '600', whiteSpace: 'nowrap'
              }}
              title={isLocked ? "Unlock prediction" : "Lock as prediction scenario"}
            >
              {isLocked ? '🔒 Locked' : '🔐 Lock'}
            </button>
          )}

          {/* Real Result button */}
          <button
            onClick={() => {
              if (isReal) {
                onToggleLockMatch?.(match.id, home.id, away.id, 0, 0, match.stage, true);
              } else {
                const h = displayHome !== null ? displayHome : (scoreHome === '' ? 0 : scoreHome as number);
                const a = displayAway !== null ? displayAway : (scoreAway === '' ? 0 : scoreAway as number);
                const sh = soHome === '' ? null : soHome as number;
                const sa = soAway === '' ? null : soAway as number;
                onToggleLockMatch?.(match.id, home.id, away.id, h, a, match.stage, true, sh, sa);
              }
            }}
            style={{
              fontSize: '0.7rem', padding: '3px 8px', borderRadius: '5px',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              background: isReal ? 'rgba(16, 185, 129, 0.2)' : 'transparent',
              color: isReal ? '#fff' : 'var(--accent-success)',
              cursor: 'pointer', fontWeight: '600', whiteSpace: 'nowrap'
            }}
            title={isReal ? "Unlock real result" : "Mark as official real-world result"}
          >
            {isReal ? '✅ Real FT' : '⚡ Set Real'}
          </button>
        </div>
      </td>
    </tr>
  );
};


        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{match.kickoffTime}</div>
      </td>

      {/* Stage */}
      <td>
        <span className={`stage-badge ${getStageClass(match.stage)}`}>
          {getStageLabel(match.stage, match.groupLetter)}
        </span>
      </td>

      {/* Matchup & Score */}
      <td>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          {/* Home Team */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '180px', justifyContent: 'flex-end' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: match.winnerId === home.id ? 'bold' : 'normal', color: match.winnerId === home.id ? '#fff' : 'var(--text-secondary)' }}>
              {home.name}
            </span>
            <span style={{ fontSize: '1.2rem' }}>{home.flag}</span>
          </div>

          {/* Score Inputs / Displays */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {lockMatch ? (
              <span style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--text-primary)', width: '20px', textAlign: 'center' }}>
                {scoreHome}
              </span>
            ) : (
              <input 
                type="number"
                min="0"
                max="9"
                placeholder="-"
                value={scoreHome}
                onChange={(e) => {
                  const val = e.target.value;
                  setScoreHome(val === '' ? '' : Math.max(0, parseInt(val) || 0));
                }}
                style={{ width: '32px', height: '28px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-glass)', borderRadius: '4px', color: '#fff', textAlign: 'center', fontSize: '0.85rem' }}
              />
            )}

            <span style={{ color: 'var(--text-muted)' }}>:</span>

            {lockMatch ? (
              <span style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--text-primary)', width: '20px', textAlign: 'center' }}>
                {scoreAway}
              </span>
            ) : (
              <input 
                type="number"
                min="0"
                max="9"
                placeholder="-"
                value={scoreAway}
                onChange={(e) => {
                  const val = e.target.value;
                  setScoreAway(val === '' ? '' : Math.max(0, parseInt(val) || 0));
                }}
                style={{ width: '32px', height: '28px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-glass)', borderRadius: '4px', color: '#fff', textAlign: 'center', fontSize: '0.85rem' }}
              />
            )}

            {/* Shootout input */}
            {match.stage !== 'GROUP' && scoreHome !== '' && scoreAway !== '' && scoreHome === scoreAway && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '2px', fontSize: '0.75rem', color: 'var(--accent-gold)', marginLeft: '4px' }}>
                <span>(</span>
                {lockMatch ? (
                  <span style={{ fontWeight: 'bold' }}>{soHome}</span>
                ) : (
                  <input 
                    type="number"
                    min="0"
                    max="15"
                    placeholder="P"
                    value={soHome}
                    onChange={(e) => {
                      const val = e.target.value;
                      setSoHome(val === '' ? '' : Math.max(0, parseInt(val) || 0));
                    }}
                    style={{ width: '24px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-glass)', borderRadius: '4px', color: 'var(--accent-gold)', textAlign: 'center', fontSize: '0.75rem', padding: '1px' }}
                  />
                )}
                <span>-</span>
                {lockMatch ? (
                  <span style={{ fontWeight: 'bold' }}>{soAway}</span>
                ) : (
                  <input 
                    type="number"
                    min="0"
                    max="15"
                    placeholder="P"
                    value={soAway}
                    onChange={(e) => {
                      const val = e.target.value;
                      setSoAway(val === '' ? '' : Math.max(0, parseInt(val) || 0));
                    }}
                    style={{ width: '24px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-glass)', borderRadius: '4px', color: 'var(--accent-gold)', textAlign: 'center', fontSize: '0.75rem', padding: '1px' }}
                  />
                )}
                <span>)</span>
              </div>
            )}
          </div>

          {/* Away Team */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '180px', justifyContent: 'flex-start' }}>
            <span style={{ fontSize: '1.2rem' }}>{away.flag}</span>
            <span style={{ fontSize: '0.85rem', fontWeight: match.winnerId === away.id ? 'bold' : 'normal', color: match.winnerId === away.id ? '#fff' : 'var(--text-secondary)' }}>
              {away.name}
            </span>
          </div>
        </div>
      </td>

      {/* Stadium */}
      <td style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
        {match.stadium}
      </td>

      {/* Actions */}
      <td>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => {
              if (isLocked) {
                onToggleLockMatch?.(match.id, home.id, away.id, 0, 0, match.stage, false);
              } else {
                const h = scoreHome === '' ? 0 : scoreHome;
                const a = scoreAway === '' ? 0 : scoreAway;
                const sh = soHome === '' ? null : soHome;
                const sa = soAway === '' ? null : soAway;
                onToggleLockMatch?.(match.id, home.id, away.id, h, a, match.stage, false, sh, sa);
              }
            }}
            style={{
              fontSize: '0.75rem',
              padding: '4px 10px',
              borderRadius: '6px',
              border: '1px solid rgba(0, 242, 254, 0.3)',
              background: isLocked ? 'rgba(0, 242, 254, 0.2)' : 'transparent',
              color: isLocked ? '#fff' : 'var(--accent-cyan)',
              cursor: 'pointer',
              fontWeight: '600'
            }}
            title={isLocked ? "Unlock match" : "Lock prediction score"}
          >
            Lock
          </button>
          <button
            onClick={() => {
              if (isReal) {
                onToggleLockMatch?.(match.id, home.id, away.id, 0, 0, match.stage, true);
              } else {
                const h = scoreHome === '' ? 0 : scoreHome;
                const a = scoreAway === '' ? 0 : scoreAway;
                const sh = soHome === '' ? null : soHome;
                const sa = soAway === '' ? null : soAway;
                onToggleLockMatch?.(match.id, home.id, away.id, h, a, match.stage, true, sh, sa);
              }
            }}
            style={{
              fontSize: '0.75rem',
              padding: '4px 10px',
              borderRadius: '6px',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              background: isReal ? 'rgba(16, 185, 129, 0.2)' : 'transparent',
              color: isReal ? '#fff' : 'var(--accent-success)',
              cursor: 'pointer',
              fontWeight: '600'
            }}
            title={isReal ? "Unlock match" : "Lock real result"}
          >
            Real
          </button>
        </div>
      </td>
    </tr>
  );
};
