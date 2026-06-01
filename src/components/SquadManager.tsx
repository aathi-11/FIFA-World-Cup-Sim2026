import React, { useState } from 'react';
import type { Team, Player, PlayerPosition } from '../types';
import { Search, ShieldAlert, Award, Star, Activity, Ban } from 'lucide-react';
import { calculateTeamStrength } from '../utils/simulation';

interface SquadManagerProps {
  teams: Team[];
  playersDb: Record<string, Player[]>;
  onUpdatePlayer: (teamId: string, playerId: string, updates: Partial<Player>) => void;
}

export const SquadManager: React.FC<SquadManagerProps> = ({ teams, playersDb, onUpdatePlayer }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTeamId, setSelectedTeamId] = useState('ARG');

  // Filter teams based on search term
  const filteredTeams = teams.filter(team => 
    team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    team.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    team.group.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedTeam = teams.find(t => t.id === selectedTeamId) || teams[0];
  const squad = playersDb[selectedTeam.id] || [];

  // Calculate stats
  const activeSquadCount = squad.filter(p => !p.injured && !p.suspended).length;
  const injuredCount = squad.filter(p => p.injured).length;
  const suspendedCount = squad.filter(p => p.suspended).length;
  
  // Dynamic SQI & Dynamic Strength
  const totalRating = squad.filter(p => !p.injured && !p.suspended).reduce((sum, p) => sum + p.rating, 0);
  const sqi = activeSquadCount > 0 ? Math.round(totalRating / activeSquadCount) : 0;
  const dynamicStrength = Math.round(calculateTeamStrength(selectedTeam, squad));

  // Sort players: GK -> DEF -> MID -> FWD, then by rating desc
  const sortedSquad = [...squad].sort((a, b) => {
    const posOrder: Record<PlayerPosition, number> = { GK: 0, DEF: 1, MID: 2, FWD: 3 };
    if (posOrder[a.position] !== posOrder[b.position]) {
      return posOrder[a.position] - posOrder[b.position];
    }
    return b.rating - a.rating;
  });

  return (
    <div className="animate-fade-in grid-main">
      
      {/* Left Column: Team Browser */}
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: 'fit-content' }}>
        <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Award style={{ color: 'var(--accent-gold)' }} />
          Browse Teams
        </h3>
        
        <div className="squad-search-bar" style={{ marginBottom: 0 }}>
          <Search className="info-box-icon" style={{ width: '18px', height: '18px', alignSelf: 'center', marginLeft: '12px', position: 'absolute', color: 'var(--text-muted)' }} />
          <input 
            type="text"
            placeholder="Search team or group..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
            style={{ paddingLeft: '40px' }}
          />
        </div>

        <div className="teams-list-scroller">
          {filteredTeams.map(team => (
            <div 
              key={team.id}
              className={`team-list-item ${selectedTeamId === team.id ? 'selected' : ''}`}
              onClick={() => setSelectedTeamId(team.id)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="flag-icon">{team.flag}</span>
                <div>
                  <div className="team-list-name">{team.name}</div>
                  <div className="team-list-meta">Group {team.group} • Rank #{team.fifaRank}</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>Elo: {team.elo}</span>
                <span style={{ display: 'flex', gap: '2px', color: 'var(--accent-gold)', fontSize: '0.65rem' }}>
                  {Array.from({ length: team.stars }).map((_, i) => (
                    <Star key={i} style={{ width: '10px', height: '10px', fill: 'var(--accent-gold)' }} />
                  ))}
                </span>
              </div>
            </div>
          ))}
          {filteredTeams.length === 0 && (
            <div style={{ padding: '20px', textAlign: 'center', color: 'var(--text-muted)' }}>No teams found</div>
          )}
        </div>
      </div>

      {/* Right Column: Squad Details & Player List */}
      <div className="card">
        {/* Squad Header Info */}
        <div className="squad-header">
          <div className="squad-header-info">
            <span style={{ fontSize: '3rem' }}>{selectedTeam.flag}</span>
            <div>
              <h2 className="squad-header-name">{selectedTeam.name}</h2>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Group {selectedTeam.group} • Baseline Elo: {selectedTeam.elo} • FIFA Rank: #{selectedTeam.fifaRank}
              </div>
            </div>
          </div>

          <div className="squad-stats-grid">
            <div className="squad-stat-item" style={{ borderColor: 'var(--border-glass-active)' }}>
              <div className="squad-stat-value" style={{ color: 'var(--accent-gold)' }}>{dynamicStrength}</div>
              <div className="squad-stat-label">Dynamic Strength</div>
            </div>
            <div className="squad-stat-item">
              <div className="squad-stat-value">{sqi}</div>
              <div className="squad-stat-label">Squad Quality (SQI)</div>
            </div>
            <div className="squad-stat-item">
              <div className="squad-stat-value" style={{ color: 'var(--accent-cyan)' }}>{activeSquadCount} / {squad.length}</div>
              <div className="squad-stat-label">Active Players</div>
            </div>
          </div>
        </div>

        {/* Warning if players are injured/suspended */}
        {(injuredCount > 0 || suspendedCount > 0) && (
          <div className="info-box" style={{ background: 'rgba(239, 68, 68, 0.04)', borderColor: 'rgba(239, 68, 68, 0.15)', color: 'var(--text-primary)' }}>
            <ShieldAlert style={{ color: 'var(--accent-error)' }} />
            <div>
              <strong>Roster Status Warning:</strong> You have {injuredCount} injured and {suspendedCount} suspended players. 
              This reduces the team's Squad Quality Index (SQI) and dynamically impacts their World Cup predictions!
            </div>
          </div>
        )}

        {/* Player Roster Table */}
        <div style={{ overflowX: 'auto' }}>
          <table className="roster-table">
            <thead>
              <tr>
                <th>Pos</th>
                <th>Player Name</th>
                <th>Age</th>
                <th>Club</th>
                <th style={{ textAlign: 'center' }}>Rating (45-98)</th>
                <th style={{ textAlign: 'center' }}>Availability</th>
              </tr>
            </thead>
            <tbody>
              {sortedSquad.map(player => (
                <tr key={player.id} className="player-row">
                  <td>
                    <span className={`player-position-badge pos-${player.position}`}>{player.position}</span>
                  </td>
                  <td>
                    <strong style={{ color: (player.injured || player.suspended) ? 'var(--text-muted)' : '#fff' }}>
                      {player.name}
                    </strong>
                  </td>
                  <td style={{ color: 'var(--text-secondary)' }}>{player.age}</td>
                  <td style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{player.club}</td>
                  <td style={{ textAlign: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                      <input 
                        type="range"
                        min="45"
                        max="98"
                        value={player.rating}
                        onChange={(e) => onUpdatePlayer(selectedTeam.id, player.id, { rating: parseInt(e.target.value) })}
                        style={{ width: '80px', accentColor: 'var(--accent-gold)' }}
                        disabled={player.injured || player.suspended}
                      />
                      <input 
                        type="number"
                        min="45"
                        max="98"
                        value={player.rating}
                        onChange={(e) => {
                          const val = Math.min(98, Math.max(45, parseInt(e.target.value) || 45));
                          onUpdatePlayer(selectedTeam.id, player.id, { rating: val });
                        }}
                        className="player-rating-input"
                        disabled={player.injured || player.suspended}
                      />
                    </div>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <div className="player-status-toggles" style={{ justifyContent: 'center' }}>
                      <button 
                        className={`status-toggle-btn ${player.injured ? 'active injured' : ''}`}
                        title={player.injured ? "Clear Injury" : "Mark Injured"}
                        onClick={() => onUpdatePlayer(selectedTeam.id, player.id, { injured: !player.injured })}
                      >
                        <Activity style={{ width: '12px', height: '12px', display: 'inline', marginRight: '4px', verticalAlign: 'text-bottom' }} />
                        Injured
                      </button>
                      <button 
                        className={`status-toggle-btn ${player.suspended ? 'active suspended' : ''}`}
                        title={player.suspended ? "Clear Suspension" : "Mark Suspended"}
                        onClick={() => onUpdatePlayer(selectedTeam.id, player.id, { suspended: !player.suspended })}
                      >
                        <Ban style={{ width: '12px', height: '12px', display: 'inline', marginRight: '4px', verticalAlign: 'text-bottom' }} />
                        Suspended
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
