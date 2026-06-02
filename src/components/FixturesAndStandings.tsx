import React, { useState, useMemo } from 'react';
import type { Team, Match, GroupStanding } from '../types';
import { calculateGroupStandings, getMatchScheduleInfo } from '../utils/simulation';
import { Trophy, Search, Calendar, MapPin, Zap, Lock, Unlock } from 'lucide-react';
import { Flag } from './Flag';

interface FixturesAndStandingsProps {
  teams: Team[];
  lockedMatches: Record<string, Match>;
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
}

const getStageLabel = (stage: Match['stage'], groupLetter: string | null = null) => {
  if (stage === 'GROUP') return `Group ${groupLetter}`;
  if (stage === 'R32') return 'Round of 32';
  if (stage === 'R16') return 'Round of 16';
  if (stage === 'QF') return 'Quarter-Finals';
  if (stage === 'SF') return 'Semi-Finals';
  if (stage === 'THIRD_PLACE') return '3rd Place';
  return 'Final';
};

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
  "Estadio BBVA, Monterrey",
  "NRG Stadium, Houston",
  "Lumen Field, Seattle",
  "Lincoln Financial Field, Philadelphia",
  "Levi's Stadium, San Francisco",
  "BC Place, Vancouver"
];

const GROUP_LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];

export const FixturesAndStandings: React.FC<FixturesAndStandingsProps> = ({
  teams,
  lockedMatches,
  onToggleLockMatch,
  onClearLocks
}) => {
  const [activeTab, setActiveTab] = useState<'GROUPS' | 'ALL_FIXTURES'>('GROUPS');
  const [selectedGroup, setSelectedGroup] = useState<string>('A');

  // Fixture filters state
  const [searchQuery, setSearchQuery] = useState('');
  const [stageFilter, setStageFilter] = useState<'ALL' | Match['stage']>('ALL');
  const [stadiumFilter, setStadiumFilter] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'LOCKED' | 'UNLOCKED'>('ALL');

  // 1. Generate static base group matches (72 matches)
  const baseGroupMatches = useMemo(() => {
    const matches: Match[] = [];
    let matchCounter = 1;

    GROUP_LETTERS.forEach(letter => {
      const groupTeams = teams.filter(t => t.group === letter);
      if (groupTeams.length < 4) return;

      const matchPairings = [
        [0, 1], [2, 3],
        [0, 2], [1, 3],
        [0, 3], [1, 2]
      ];

      matchPairings.forEach(([idxHome, idxAway]) => {
        const home = groupTeams[idxHome];
        const away = groupTeams[idxAway];
        const matchId = `G_${letter}_${home.id}_${away.id}`;
        const schedule = getMatchScheduleInfo(matchCounter, 'GROUP', letter);

        matches.push({
          id: matchId,
          homeTeamId: home.id,
          awayTeamId: away.id,
          stage: 'GROUP',
          goalsHome: null,
          goalsAway: null,
          shootoutGoalsHome: null,
          shootoutGoalsAway: null,
          winnerId: null,
          isSimulated: false,
          groupLetter: letter,
          matchNumber: matchCounter++,
          date: schedule.date,
          stadium: schedule.stadium,
          kickoffTime: schedule.kickoffTime
        });
      });
    });

    return matches;
  }, [teams]);

  // 2. Generate placeholder knockout matches (Match 73 to 104)
  const baseKnockouts = useMemo(() => {
    const matches: Match[] = [];
    const stages: { stage: Match['stage']; count: number; startIdx: number }[] = [
      { stage: 'R32', count: 16, startIdx: 73 },
      { stage: 'R16', count: 8, startIdx: 89 },
      { stage: 'QF', count: 4, startIdx: 97 },
      { stage: 'SF', count: 2, startIdx: 101 },
      { stage: 'THIRD_PLACE', count: 1, startIdx: 103 },
      { stage: 'FINAL', count: 1, startIdx: 104 }
    ];

    stages.forEach(({ stage, count, startIdx }) => {
      for (let i = 0; i < count; i++) {
        const matchNum = startIdx + i;
        const schedule = getMatchScheduleInfo(matchNum, stage, null);
        matches.push({
          id: `KO_${stage}_${matchNum}`,
          homeTeamId: `TBD_H_${matchNum}`,
          awayTeamId: `TBD_A_${matchNum}`,
          stage,
          goalsHome: null,
          goalsAway: null,
          shootoutGoalsHome: null,
          shootoutGoalsAway: null,
          winnerId: null,
          isSimulated: false,
          groupLetter: null,
          matchNumber: matchNum,
          date: schedule.date,
          stadium: schedule.stadium,
          kickoffTime: schedule.kickoffTime
        });
      }
    });

    return matches;
  }, []);

  // 3. Compute group standings dynamically based on locks applied to baseGroupMatches
  const computedStandings = useMemo(() => {
    const standings: Record<string, GroupStanding[]> = {};

    GROUP_LETTERS.forEach(letter => {
      const groupTeams = teams.filter(t => t.group === letter);
      const groupTeamIds = groupTeams.map(t => t.id);

      const groupMatches = baseGroupMatches
        .filter(m => m.groupLetter === letter)
        .map(m => {
          if (lockedMatches[m.id]) {
            return {
              ...m,
              ...lockedMatches[m.id],
              isSimulated: true
            };
          }
          return m;
        });

      standings[letter] = calculateGroupStandings(groupTeamIds, groupMatches);
    });

    return standings;
  }, [teams, lockedMatches, baseGroupMatches]);

  // 4. Resolve knockout match pairings dynamically based on current group stage standings
  const resolvedKnockouts = useMemo(() => {
    const winnerMap: Record<number, string> = {};
    const loserMap: Record<number, string> = {};
    const resolvedList: Match[] = [];

    // Group Winners, Runners-up and Third-places
    const w: Record<string, string> = {};
    const r: Record<string, string> = {};
    const t: string[] = [];

    const thirdPlaceTeams: GroupStanding[] = [];
    GROUP_LETTERS.forEach(letter => {
      const standings = computedStandings[letter];
      if (standings && standings.length >= 3) {
        thirdPlaceTeams.push(standings[2]);
      }
    });

    // Rank 3rd placed teams
    thirdPlaceTeams.sort((x, y) => {
      if (x.points !== y.points) return y.points - x.points;
      if (x.goalDifference !== y.goalDifference) return y.goalDifference - x.goalDifference;
      if (x.goalsFor !== y.goalsFor) return y.goalsFor - x.goalsFor;
      return 0;
    });

    GROUP_LETTERS.forEach(letter => {
      const standings = computedStandings[letter];
      if (standings && standings.length >= 2) {
        w[letter] = standings[0].teamId;
        r[letter] = standings[1].teamId;
      }
    });

    thirdPlaceTeams.forEach(item => {
      t.push(item.teamId);
    });

    const getR32HomeAway = (matchNum: number): [string, string] => {
      const idx = matchNum - 73;
      switch (idx) {
        case 0: return [w["A"] || "Winner Group A", r["B"] || "Runner-up Group B"];
        case 1: return [w["C"] || "Winner Group C", t[0] || "3rd Place Team 1"];
        case 2: return [w["D"] || "Winner Group D", r["C"] || "Runner-up Group C"];
        case 3: return [w["E"] || "Winner Group E", t[1] || "3rd Place Team 2"];
        case 4: return [w["F"] || "Winner Group F", r["E"] || "Runner-up Group E"];
        case 5: return [w["G"] || "Winner Group G", t[2] || "3rd Place Team 3"];
        case 6: return [w["H"] || "Winner Group H", r["F"] || "Runner-up Group F"];
        case 7: return [w["I"] || "Winner Group I", t[3] || "3rd Place Team 4"];
        case 8: return [w["J"] || "Winner Group J", r["H"] || "Runner-up Group H"];
        case 9: return [w["K"] || "Winner Group K", t[4] || "3rd Place Team 5"];
        case 10: return [w["L"] || "Winner Group L", r["J"] || "Runner-up Group J"];
        case 11: return [w["B"] || "Winner Group B", t[5] || "3rd Place Team 6"];
        case 12: return [r["A"] || "Runner-up Group A", t[6] || "3rd Place Team 7"];
        case 13: return [r["D"] || "Runner-up Group D", t[7] || "3rd Place Team 8"];
        case 14: return [r["G"] || "Runner-up Group G", r["I"] || "Runner-up Group I"];
        case 15: return [r["K"] || "Runner-up Group K", r["L"] || "Runner-up Group L"];
        default: return ["TBD", "TBD"];
      }
    };

    const getMatchWinnerLabel = (matchNum: number): string => {
      if (winnerMap[matchNum]) return winnerMap[matchNum];
      return `Winner Match ${matchNum}`;
    };

    const getMatchLoserLabel = (matchNum: number): string => {
      if (loserMap[matchNum]) return loserMap[matchNum];
      return `Loser Match ${matchNum}`;
    };

    baseKnockouts.forEach(m => {
      const matchNum = m.matchNumber!;
      let homeId = m.homeTeamId;
      let awayId = m.awayTeamId;

      if (matchNum >= 73 && matchNum <= 88) {
        const [h, a] = getR32HomeAway(matchNum);
        homeId = h;
        awayId = a;
      } else if (matchNum >= 89 && matchNum <= 96) {
        const baseIdx = 73 + (matchNum - 89) * 2;
        homeId = getMatchWinnerLabel(baseIdx);
        awayId = getMatchWinnerLabel(baseIdx + 1);
      } else if (matchNum >= 97 && matchNum <= 100) {
        const baseIdx = 89 + (matchNum - 97) * 2;
        homeId = getMatchWinnerLabel(baseIdx);
        awayId = getMatchWinnerLabel(baseIdx + 1);
      } else if (matchNum >= 101 && matchNum <= 102) {
        const baseIdx = 97 + (matchNum - 101) * 2;
        homeId = getMatchWinnerLabel(baseIdx);
        awayId = getMatchWinnerLabel(baseIdx + 1);
      } else if (matchNum === 103) {
        homeId = getMatchLoserLabel(101);
        awayId = getMatchLoserLabel(102);
      } else if (matchNum === 104) {
        homeId = getMatchWinnerLabel(101);
        awayId = getMatchWinnerLabel(102);
      }

      let finalMatch = {
        ...m,
        homeTeamId: homeId,
        awayTeamId: awayId
      };

      if (lockedMatches[m.id]) {
        const lock = lockedMatches[m.id];
        finalMatch = {
          ...finalMatch,
          ...lock,
          isSimulated: true
        };
      }

      if (finalMatch.goalsHome !== null && finalMatch.goalsAway !== null) {
        winnerMap[matchNum] = finalMatch.winnerId || "";
        loserMap[matchNum] = finalMatch.winnerId === finalMatch.homeTeamId ? finalMatch.awayTeamId : finalMatch.homeTeamId;
      }

      resolvedList.push(finalMatch);
    });

    return resolvedList;
  }, [computedStandings, lockedMatches, baseKnockouts]);

  // Combine both group stage & knockout stage matches with results applied
  const allMatchesWithResults = useMemo(() => {
    const mappedGroups = baseGroupMatches.map(m => {
      if (lockedMatches[m.id]) {
        return {
          ...m,
          ...lockedMatches[m.id],
          isSimulated: true
        };
      }
      return m;
    });

    return [...mappedGroups, ...resolvedKnockouts];
  }, [baseGroupMatches, resolvedKnockouts, lockedMatches]);

  // Helper to fetch details for a team or placeholder
  const getTeamInfo = (id: string) => {
    const team = teams.find(t => t.id === id);
    if (team) return team;

    // Check if placeholder label
    const isPlaceholder = id.startsWith("Winner") || id.startsWith("Runner-up") || id.startsWith("3rd Place") || id.startsWith("Loser") || id.startsWith("TBD");
    return {
      id,
      name: isPlaceholder ? id : "TBD",
      flag: "❓",
      elo: 1500
    };
  };

  // 5. Filter fixtures list
  const filteredFixturesList = useMemo(() => {
    return allMatchesWithResults.filter(m => {
      const home = getTeamInfo(m.homeTeamId);
      const away = getTeamInfo(m.awayTeamId);

      // Search Filter
      const query = searchQuery.toLowerCase().trim();
      if (query) {
        const homeMatches = home.name.toLowerCase().includes(query) || home.id.toLowerCase().includes(query);
        const awayMatches = away.name.toLowerCase().includes(query) || away.id.toLowerCase().includes(query);
        if (!homeMatches && !awayMatches) return false;
      }

      // Stage Filter
      if (stageFilter !== 'ALL' && m.stage !== stageFilter) return false;

      // Stadium Filter
      if (stadiumFilter !== 'ALL' && m.stadium !== stadiumFilter) return false;

      // Status Filter
      if (statusFilter !== 'ALL') {
        const isLocked = lockedMatches[m.id] !== undefined;
        if (statusFilter === 'LOCKED' && !isLocked) return false;
        if (statusFilter === 'UNLOCKED' && isLocked) return false;
      }

      return true;
    });
  }, [allMatchesWithResults, searchQuery, stageFilter, stadiumFilter, statusFilter, lockedMatches]);

  // Group stage matches specific to selected group
  const selectedGroupMatches = useMemo(() => {
    return allMatchesWithResults.filter(m => m.stage === 'GROUP' && m.groupLetter === selectedGroup);
  }, [allMatchesWithResults, selectedGroup]);



  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* Page Description Header */}
      <div className="card highlight" style={{ background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.05) 0%, rgba(9, 10, 15, 0.9) 100%)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Trophy style={{ color: 'var(--accent-gold)' }} />
            Fixtures & Standings
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '6px', maxWidth: '800px' }}>
            View official match schedules, track live group tables, and locks. Scores updated via **Groq AI Live Sync** in the header instantly adjust team stats and ELO ratings for future predictions.
          </p>
        </div>
        {Object.keys(lockedMatches).length > 0 && (
          <button 
            className="btn btn-secondary" 
            onClick={onClearLocks} 
            style={{ fontSize: '0.8rem', padding: '8px 16px', border: '1px solid rgba(239, 68, 68, 0.4)', color: 'var(--accent-error)' }}
          >
            Reset All Scores
          </button>
        )}
      </div>

      {/* Primary Tab Switcher */}
      <div style={{ display: 'flex', borderBottom: '1px solid var(--border-glass)', gap: '2rem' }}>
        <button
          onClick={() => setActiveTab('GROUPS')}
          style={{
            background: 'transparent',
            border: 'none',
            borderBottom: activeTab === 'GROUPS' ? '2.5px solid var(--accent-gold)' : '2.5px solid transparent',
            color: activeTab === 'GROUPS' ? '#fff' : 'var(--text-secondary)',
            padding: '12px 6px',
            fontSize: '1.05rem',
            fontWeight: '600',
            cursor: 'pointer',
            fontFamily: 'var(--font-heading)',
            transition: 'all 0.15s ease'
          }}
        >
          Group Tables & Matches
        </button>
        <button
          onClick={() => setActiveTab('ALL_FIXTURES')}
          style={{
            background: 'transparent',
            border: 'none',
            borderBottom: activeTab === 'ALL_FIXTURES' ? '2.5px solid var(--accent-gold)' : '2.5px solid transparent',
            color: activeTab === 'ALL_FIXTURES' ? '#fff' : 'var(--text-secondary)',
            padding: '12px 6px',
            fontSize: '1.05rem',
            fontWeight: '600',
            cursor: 'pointer',
            fontFamily: 'var(--font-heading)',
            transition: 'all 0.15s ease'
          }}
        >
          All Match Schedules
        </button>
      </div>

      {/* Render active tab */}
      {activeTab === 'GROUPS' ? (
        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '2rem', alignItems: 'start' }}>
          
          {/* Group A-L selector sidebar */}
          <div className="card" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <h3 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px', paddingLeft: '8px' }}>
              Select Group
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
              {GROUP_LETTERS.map(letter => {
                const isSelected = selectedGroup === letter;
                return (
                  <button
                    key={letter}
                    onClick={() => setSelectedGroup(letter)}
                    style={{
                      background: isSelected ? 'linear-gradient(135deg, var(--accent-gold) 0%, #ffdf6d 100%)' : 'rgba(255, 255, 255, 0.03)',
                      border: isSelected ? 'none' : '1px solid var(--border-glass)',
                      borderRadius: '8px',
                      color: isSelected ? '#05060b' : 'var(--text-primary)',
                      padding: '10px',
                      fontWeight: '700',
                      fontSize: '0.95rem',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-heading)',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    Group {letter}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Standings table & selected group matches */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Table Standings */}
            <div className="card" style={{ overflowX: 'auto', padding: '1.5rem' }}>
              <h2 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-heading)', marginBottom: '1.25rem', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                Group {selectedGroup} Standings
              </h2>
              <table className="roster-table" style={{ width: '100%' }}>
                <thead>
                  <tr>
                    <th style={{ width: '50px', textAlign: 'center' }}>Pos</th>
                    <th>Team</th>
                    <th style={{ textAlign: 'center' }}>P</th>
                    <th style={{ textAlign: 'center' }}>W</th>
                    <th style={{ textAlign: 'center' }}>D</th>
                    <th style={{ textAlign: 'center' }}>L</th>
                    <th style={{ textAlign: 'center' }}>GF</th>
                    <th style={{ textAlign: 'center' }}>GA</th>
                    <th style={{ textAlign: 'center' }}>GD</th>
                    <th style={{ textAlign: 'center', color: 'var(--accent-gold)', fontWeight: 'bold' }}>PTS</th>
                  </tr>
                </thead>
                <tbody>
                  {(computedStandings[selectedGroup] || []).map((row, index) => {
                    const team = getTeamInfo(row.teamId);
                    const isQualifying = index < 2;
                    return (
                      <tr key={row.teamId} className="player-row">
                        <td style={{ textAlign: 'center', fontWeight: 'bold', color: isQualifying ? 'var(--accent-success)' : 'var(--text-muted)' }}>
                          {index + 1}
                        </td>
                        <td style={{ fontWeight: '600' }}>
                          <Flag teamId={team.id} style={{ fontSize: '1.2rem', marginRight: '8px', verticalAlign: 'middle' }} />
                          <span style={{ verticalAlign: 'middle' }}>{team.name}</span>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: '6px' }}>({team.elo} ELO)</span>
                        </td>
                        <td style={{ textAlign: 'center' }}>{row.played}</td>
                        <td style={{ textAlign: 'center' }}>{row.won}</td>
                        <td style={{ textAlign: 'center' }}>{row.drawn}</td>
                        <td style={{ textAlign: 'center' }}>{row.lost}</td>
                        <td style={{ textAlign: 'center' }}>{row.goalsFor}</td>
                        <td style={{ textAlign: 'center' }}>{row.goalsAgainst}</td>
                        <td style={{ textAlign: 'center', color: row.goalDifference > 0 ? 'var(--accent-success)' : row.goalDifference < 0 ? 'var(--accent-error)' : 'inherit' }}>
                          {row.goalDifference > 0 ? `+${row.goalDifference}` : row.goalDifference}
                        </td>
                        <td style={{ textAlign: 'center', fontWeight: '800', color: 'var(--accent-gold)' }}>{row.points}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Fixtures in selected group */}
            <div className="card" style={{ padding: '1.5rem' }}>
              <h2 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-heading)', marginBottom: '1.25rem', color: '#fff' }}>
                Group {selectedGroup} Fixtures
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '1.25rem' }}>
                {selectedGroupMatches.map(m => (
                  <FixtureCard 
                    key={m.id} 
                    match={m} 
                    getTeamInfo={getTeamInfo} 
                    onToggleLockMatch={onToggleLockMatch}
                    lockedMatch={lockedMatches[m.id]}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      ) : (
        /* All fixtures list with filters */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Filter Controls Panel */}
          <div className="card" style={{ padding: '1.25rem' }}>
            <div className="schedule-filters-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              
              <div style={{ position: 'relative' }}>
                <Search style={{ position: 'absolute', left: '12px', top: '10px', width: '16px', height: '16px', color: 'var(--text-muted)' }} />
                <input
                  type="text"
                  placeholder="Search by team..."
                  className="filter-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ paddingLeft: '36px', width: '100%', height: '38px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-glass)', borderRadius: '8px', color: '#fff' }}
                />
              </div>

              <select
                className="filter-select"
                value={stageFilter}
                onChange={(e) => setStageFilter(e.target.value as any)}
                style={{ height: '38px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-glass)', borderRadius: '8px', color: '#fff', padding: '0 8px' }}
              >
                <option value="ALL" style={{ background: 'var(--bg-secondary)' }}>All Stages</option>
                <option value="GROUP" style={{ background: 'var(--bg-secondary)' }}>Group Stage</option>
                <option value="R32" style={{ background: 'var(--bg-secondary)' }}>Round of 32</option>
                <option value="R16" style={{ background: 'var(--bg-secondary)' }}>Round of 16</option>
                <option value="QF" style={{ background: 'var(--bg-secondary)' }}>Quarter-finals</option>
                <option value="SF" style={{ background: 'var(--bg-secondary)' }}>Semi-finals</option>
                <option value="THIRD_PLACE" style={{ background: 'var(--bg-secondary)' }}>Third Place Play-off</option>
                <option value="FINAL" style={{ background: 'var(--bg-secondary)' }}>Final</option>
              </select>

              <select
                className="filter-select"
                value={stadiumFilter}
                onChange={(e) => setStadiumFilter(e.target.value)}
                style={{ height: '38px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-glass)', borderRadius: '8px', color: '#fff', padding: '0 8px' }}
              >
                <option value="ALL" style={{ background: 'var(--bg-secondary)' }}>All Venues</option>
                {STADIUMS.map(stadium => (
                  <option key={stadium} value={stadium} style={{ background: 'var(--bg-secondary)' }}>{stadium.split(',')[0]}</option>
                ))}
              </select>

              <select
                className="filter-select"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                style={{ height: '38px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-glass)', borderRadius: '8px', color: '#fff', padding: '0 8px' }}
              >
                <option value="ALL" style={{ background: 'var(--bg-secondary)' }}>All Statuses</option>
                <option value="LOCKED" style={{ background: 'var(--bg-secondary)' }}>Locked / Official FT</option>
                <option value="UNLOCKED" style={{ background: 'var(--bg-secondary)' }}>Unlocked / Scheduled</option>
              </select>

            </div>
          </div>

          {/* Fixtures display table */}
          <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
            <div className="schedule-container" style={{ overflowX: 'auto' }}>
              <table className="schedule-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid var(--border-glass)' }}>
                    <th style={{ padding: '12px 16px', textAlign: 'left', width: '80px' }}>Match</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left', width: '180px' }}>Date & Time</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left', width: '140px' }}>Stage</th>
                    <th style={{ padding: '12px 16px', textAlign: 'center' }}>Matchup & Score</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left' }}>Venue</th>
                    <th style={{ padding: '12px 16px', textAlign: 'center', width: '160px' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredFixturesList.length > 0 ? (
                    filteredFixturesList.map(m => (
                      <FixtureRow 
                        key={m.id} 
                        match={m} 
                        getTeamInfo={getTeamInfo} 
                        onToggleLockMatch={onToggleLockMatch}
                        lockedMatch={lockedMatches[m.id]}
                      />
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
                        No matches found matching the filter criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};

/* Helper subcomponent for individual Card Fixtures in Group View */
interface FixtureCardProps {
  match: Match;
  getTeamInfo: (id: string) => { id: string; name: string; flag: string; elo: number };
  onToggleLockMatch?: FixturesAndStandingsProps['onToggleLockMatch'];
  lockedMatch?: Match;
}

const FixtureCard: React.FC<FixtureCardProps> = ({
  match,
  getTeamInfo,
  onToggleLockMatch,
  lockedMatch
}) => {
  const home = getTeamInfo(match.homeTeamId);
  const away = getTeamInfo(match.awayTeamId);

  const isReal = lockedMatch?.realPlayed || false;
  const isLocked = lockedMatch?.locked || false;

  const displayHome = lockedMatch ? (lockedMatch.goalsHome ?? 0) : null;
  const displayAway = lockedMatch ? (lockedMatch.goalsAway ?? 0) : null;

  const [scoreHome, setScoreHome] = useState<number | ''>(displayHome !== null ? displayHome : '');
  const [scoreAway, setScoreAway] = useState<number | ''>(displayAway !== null ? displayAway : '');

  const handleScoreSave = (realFlag: boolean) => {
    if (onToggleLockMatch && scoreHome !== '' && scoreAway !== '') {
      onToggleLockMatch(
        match.id,
        home.id,
        away.id,
        scoreHome as number,
        scoreAway as number,
        match.stage,
        realFlag,
        null,
        null
      );
    }
  };

  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.02)',
      border: isReal ? '1px solid rgba(16, 185, 129, 0.25)' : isLocked ? '1px solid rgba(0, 242, 254, 0.25)' : '1px solid var(--border-glass)',
      borderRadius: '12px',
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      position: 'relative'
    }}>
      
      {/* Date & Stage */}
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Calendar style={{ width: '12px', height: '12px' }} />
          {match.date}
        </span>
        <span style={{ fontWeight: '600' }}>#{match.matchNumber}</span>
      </div>

      {/* Matchup row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '6px 0' }}>
        
        {/* Home */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '38%' }}>
          <Flag teamId={home.id} style={{ fontSize: '1.4rem' }} />
          <span style={{ fontWeight: '600', fontSize: '0.85rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={home.name}>
            {home.name}
          </span>
        </div>

        {/* Score Inputs / Displays */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'center', width: '24%' }}>
          {lockedMatch ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: '800', color: isReal ? 'var(--accent-success)' : 'var(--accent-cyan)' }}>
                  {displayHome}
                </span>
                <span style={{ color: 'var(--text-muted)' }}>–</span>
                <span style={{ fontSize: '1.2rem', fontWeight: '800', color: isReal ? 'var(--accent-success)' : 'var(--accent-cyan)' }}>
                  {displayAway}
                </span>
              </div>
              <span className={`match-status-badge ${isReal ? 'match-status-ft' : 'match-status-pred'}`} style={{ fontSize: '0.55rem', padding: '1px 4px' }}>
                {isReal ? 'FT' : 'PRED'}
              </span>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <input
                type="number"
                min="0"
                max="9"
                value={scoreHome}
                onChange={(e) => { const v = e.target.value; setScoreHome(v === '' ? '' : Math.max(0, parseInt(v))); }}
                style={{ width: '34px', height: '28px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-glass)', borderRadius: '4px', color: '#fff', textAlign: 'center', fontSize: '0.85rem', padding: '2px' }}
                placeholder="-"
              />
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>:</span>
              <input
                type="number"
                min="0"
                max="9"
                value={scoreAway}
                onChange={(e) => { const v = e.target.value; setScoreAway(v === '' ? '' : Math.max(0, parseInt(v))); }}
                style={{ width: '34px', height: '28px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-glass)', borderRadius: '4px', color: '#fff', textAlign: 'center', fontSize: '0.85rem', padding: '2px' }}
                placeholder="-"
              />
            </div>
          )}
        </div>

        {/* Away */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-end', width: '38%' }}>
          <span style={{ fontWeight: '600', fontSize: '0.85rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={away.name}>
            {away.name}
          </span>
          <Flag teamId={away.id} style={{ fontSize: '1.4rem' }} />
        </div>

      </div>

      {/* Stadium info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.7rem', color: 'var(--text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        <MapPin style={{ width: '10px', height: '10px', flexShrink: 0 }} />
        {match.stadium?.split(',')[0]}
      </div>

      {/* Action buttons */}
      <div style={{ display: 'flex', gap: '8px', marginTop: '6px', borderTop: '1px solid rgba(255,255,255,0.03)', paddingTop: '8px' }}>
        {lockedMatch ? (
          <button 
            onClick={() => onToggleLockMatch?.(match.id, home.id, away.id, 0, 0, match.stage, isReal)}
            style={{ display: 'flex', alignItems: 'center', gap: '4px', width: '100%', justifyContent: 'center', fontSize: '0.68rem', padding: '4px', borderRadius: '4px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-glass)', color: '#fff', cursor: 'pointer' }}
          >
            <Unlock style={{ width: '10px', height: '10px' }} />
            Unlock Result
          </button>
        ) : (
          <>
            <button 
              onClick={() => handleScoreSave(false)}
              disabled={scoreHome === '' || scoreAway === ''}
              style={{ display: 'flex', alignItems: 'center', gap: '4px', flex: '1', justifyContent: 'center', fontSize: '0.68rem', padding: '4px', borderRadius: '4px', background: 'transparent', border: '1px solid rgba(0, 242, 254, 0.4)', color: 'var(--accent-cyan)', cursor: 'pointer', opacity: (scoreHome === '' || scoreAway === '') ? 0.4 : 1 }}
            >
              <Lock style={{ width: '10px', height: '10px' }} />
              Lock Pred
            </button>
            <button 
              onClick={() => handleScoreSave(true)}
              disabled={scoreHome === '' || scoreAway === ''}
              style={{ display: 'flex', alignItems: 'center', gap: '4px', flex: '1', justifyContent: 'center', fontSize: '0.68rem', padding: '4px', borderRadius: '4px', background: 'transparent', border: '1px solid rgba(16, 185, 129, 0.4)', color: 'var(--accent-success)', cursor: 'pointer', opacity: (scoreHome === '' || scoreAway === '') ? 0.4 : 1 }}
            >
              <Zap style={{ width: '10px', height: '10px' }} />
              Set Real FT
            </button>
          </>
        )}
      </div>

    </div>
  );
};

/* Helper subcomponent for individual Row Fixtures in List View */
interface FixtureRowProps {
  match: Match;
  getTeamInfo: (id: string) => { id: string; name: string; flag: string; elo: number };
  onToggleLockMatch?: FixturesAndStandingsProps['onToggleLockMatch'];
  lockedMatch?: Match;
}

const FixtureRow: React.FC<FixtureRowProps> = ({
  match,
  getTeamInfo,
  onToggleLockMatch,
  lockedMatch
}) => {
  const home = getTeamInfo(match.homeTeamId);
  const away = getTeamInfo(match.awayTeamId);

  const isReal = lockedMatch?.realPlayed || false;

  const displayHome = lockedMatch ? (lockedMatch.goalsHome ?? 0) : null;
  const displayAway = lockedMatch ? (lockedMatch.goalsAway ?? 0) : null;

  const [scoreHome, setScoreHome] = useState<number | ''>(displayHome !== null ? displayHome : '');
  const [scoreAway, setScoreAway] = useState<number | ''>(displayAway !== null ? displayAway : '');

  const handleScoreSave = (realFlag: boolean) => {
    if (onToggleLockMatch && scoreHome !== '' && scoreAway !== '') {
      onToggleLockMatch(
        match.id,
        home.id,
        away.id,
        scoreHome as number,
        scoreAway as number,
        match.stage,
        realFlag,
        null,
        null
      );
    }
  };

  const getStageClass = (stage: Match['stage']) => {
    if (stage === 'GROUP') return 'stage-group';
    if (stage === 'FINAL') return 'stage-final';
    return 'stage-knockout';
  };

  return (
    <tr className="schedule-row" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.02)' }}>
      {/* Match Number */}
      <td style={{ padding: '14px 16px', fontWeight: 'bold', color: 'var(--text-muted)' }}>
        #{match.matchNumber}
      </td>

      {/* Date & Time */}
      <td style={{ padding: '14px 16px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
        <div style={{ fontWeight: '500' }}>{match.date}</div>
        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{match.kickoffTime}</div>
      </td>

      {/* Stage */}
      <td style={{ padding: '14px 16px' }}>
        <span className={`stage-badge ${getStageClass(match.stage)}`} style={{ fontSize: '0.75rem', padding: '3px 8px', borderRadius: '4px' }}>
          {match.stage === 'GROUP' ? `Group ${match.groupLetter}` : getStageLabel(match.stage, null)}
        </span>
      </td>

      {/* Matchup & Score */}
      <td style={{ padding: '14px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          
          {/* Home Team */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '160px', justifyContent: 'flex-end' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '500', color: displayHome !== null && displayAway !== null && displayHome > displayAway ? '#fff' : 'var(--text-secondary)' }}>
              {home.name}
            </span>
            <Flag teamId={home.id} style={{ fontSize: '1.2rem', marginRight: 0 }} />
          </div>

          {/* Scores */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', minWidth: '94px' }}>
            {lockedMatch ? (
              <>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '1.2rem', fontWeight: '800', color: isReal ? 'var(--accent-success)' : 'var(--accent-cyan)' }}>
                    {displayHome}
                  </span>
                  <span style={{ color: 'var(--text-muted)' }}>–</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: '800', color: isReal ? 'var(--accent-success)' : 'var(--accent-cyan)' }}>
                    {displayAway}
                  </span>
                </div>
                <span className={`match-status-badge ${isReal ? 'match-status-ft' : 'match-status-pred'}`}>
                  {isReal ? 'FT' : 'PRED'}
                </span>
              </>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <input
                  type="number"
                  min="0"
                  max="9"
                  value={scoreHome}
                  onChange={(e) => { const v = e.target.value; setScoreHome(v === '' ? '' : Math.max(0, parseInt(v))); }}
                  style={{ width: '34px', height: '26px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-glass)', borderRadius: '4px', color: '#fff', textAlign: 'center', fontSize: '0.85rem' }}
                  placeholder="-"
                />
                <span style={{ color: 'var(--text-muted)' }}>–</span>
                <input
                  type="number"
                  min="0"
                  max="9"
                  value={scoreAway}
                  onChange={(e) => { const v = e.target.value; setScoreAway(v === '' ? '' : Math.max(0, parseInt(v))); }}
                  style={{ width: '34px', height: '26px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-glass)', borderRadius: '4px', color: '#fff', textAlign: 'center', fontSize: '0.85rem' }}
                  placeholder="-"
                />
              </div>
            )}
          </div>

          {/* Away Team */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '160px', justifyContent: 'flex-start' }}>
            <Flag teamId={away.id} style={{ fontSize: '1.2rem', marginRight: 0 }} />
            <span style={{ fontSize: '0.85rem', fontWeight: '500', color: displayHome !== null && displayAway !== null && displayAway > displayHome ? '#fff' : 'var(--text-secondary)' }}>
              {away.name}
            </span>
          </div>

        </div>
      </td>

      {/* Stadium */}
      <td style={{ padding: '14px 16px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
        {match.stadium}
      </td>

      {/* Actions */}
      <td style={{ padding: '14px 16px', textAlign: 'center' }}>
        <div style={{ display: 'flex', gap: '6px', justifyContent: 'center' }}>
          {lockedMatch ? (
            <button 
              onClick={() => onToggleLockMatch?.(match.id, home.id, away.id, 0, 0, match.stage, isReal)}
              style={{ fontSize: '0.7rem', padding: '3px 8px', borderRadius: '5px', border: '1px solid var(--border-glass)', background: 'rgba(255,255,255,0.03)', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
              title="Unlock scoreline"
            >
              <Unlock style={{ width: '10px', height: '10px' }} />
              Unlock
            </button>
          ) : (
            <>
              <button 
                onClick={() => handleScoreSave(false)}
                disabled={scoreHome === '' || scoreAway === ''}
                style={{ fontSize: '0.7rem', padding: '3px 8px', borderRadius: '5px', border: '1px solid rgba(0, 242, 254, 0.3)', background: 'transparent', color: 'var(--accent-cyan)', cursor: 'pointer', opacity: (scoreHome === '' || scoreAway === '') ? 0.4 : 1 }}
                title="Lock as prediction"
              >
                Lock
              </button>
              <button 
                onClick={() => handleScoreSave(true)}
                disabled={scoreHome === '' || scoreAway === ''}
                style={{ fontSize: '0.7rem', padding: '3px 8px', borderRadius: '5px', border: '1px solid rgba(16, 185, 129, 0.3)', background: 'transparent', color: 'var(--accent-success)', cursor: 'pointer', opacity: (scoreHome === '' || scoreAway === '') ? 0.4 : 1 }}
                title="Set official result"
              >
                Real
              </button>
            </>
          )}
        </div>
      </td>
    </tr>
  );
};
