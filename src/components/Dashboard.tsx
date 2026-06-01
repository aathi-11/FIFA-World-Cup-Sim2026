import React, { useState, useEffect } from 'react';
import type { Team } from '../types';
import { Trophy, Calendar, MapPin, Play, TrendingUp, Users } from 'lucide-react';

interface DashboardProps {
  teams: Team[];
  onSelectTab: (tab: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ teams, onSelectTab }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 10, hours: 0, minutes: 0, seconds: 0 });

  // Countdown timer to June 11, 2026 18:00:00 UTC
  useEffect(() => {
    const targetDate = new Date('2026-06-11T18:00:00Z').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    };
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Top 5 contenders based on baseline Elo
  const topContenders = [...teams]
    .sort((a, b) => b.elo - a.elo)
    .slice(0, 5);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <div className="brand-subtitle" style={{ marginBottom: '8px' }}>FIFA World Cup 2026 Predictor</div>
          <h1 className="hero-title">
            Predicting the <span>2026 Champions</span>
          </h1>
          <p className="hero-desc">
            Explore active rosters, analyze historical Elo ratings, edit player performance stats, and run Monte Carlo simulations to see who has the highest probability of holding the cup.
          </p>
          <div className="hero-stats">
            <div className="hero-stat-card">
              <div className="hero-stat-value">48</div>
              <div className="hero-stat-label">Teams</div>
            </div>
            <div className="hero-stat-card">
              <div className="hero-stat-value">12</div>
              <div className="hero-stat-label">Groups</div>
            </div>
            <div className="hero-stat-card">
              <div className="hero-stat-value">104</div>
              <div className="hero-stat-label">Matches</div>
            </div>
          </div>
        </div>
        
        {/* Countdown Timer */}
        <div className="card highlight" style={{ width: '320px', textAlign: 'center', background: 'rgba(18, 22, 44, 0.85)' }}>
          <Calendar className="star-icon" style={{ width: '40px', height: '40px', margin: '0 auto 12px auto' }} />
          <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>Tournament Kickoff</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '16px' }}>
            <div style={{ background: 'rgba(255,255,255,0.04)', padding: '10px 4px', borderRadius: '8px', border: '1px solid var(--border-glass)' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--accent-gold)' }}>{timeLeft.days}</div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Days</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.04)', padding: '10px 4px', borderRadius: '8px', border: '1px solid var(--border-glass)' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-primary)' }}>{timeLeft.hours}</div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Hrs</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.04)', padding: '10px 4px', borderRadius: '8px', border: '1px solid var(--border-glass)' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-primary)' }}>{timeLeft.minutes}</div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Mins</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.04)', padding: '10px 4px', borderRadius: '8px', border: '1px solid var(--border-glass)' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-primary)' }}>{timeLeft.seconds}</div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Secs</div>
            </div>
          </div>
          
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <MapPin style={{ width: '12px', height: '12px', color: 'var(--accent-cyan)' }} />
            <span>Estadio Azteca, Mexico City</span>
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="grid-main">
        {/* Left Hand Column: Details & Contenders */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="card">
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Trophy style={{ color: 'var(--accent-gold)' }} />
              Tournament Favorites
            </h2>
            <div className="favorites-list">
              {topContenders.map((team, idx) => {
                // Approximate baseline champion chance for display before live simulation
                const baseChances = ["14.8%", "12.6%", "11.2%", "9.8%", "8.9%"];
                return (
                  <div key={team.id} className="favorite-item">
                    <div className="favorite-team-info">
                      <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: varTextColor(idx), width: '20px' }}>{idx + 1}</span>
                      <span className="flag-icon">{team.flag}</span>
                      <div>
                        <span className="favorite-name">{team.name}</span>
                        <div className="favorite-rating">Elo Rating: {team.elo} • FIFA Rank: #{team.fifaRank}</div>
                      </div>
                    </div>
                    <div className="favorite-chance">
                      {baseChances[idx]}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid-2">
            <div className="card">
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Users style={{ color: 'var(--accent-cyan)' }} />
                Squad Management
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '1.2rem' }}>
                View complete roster players, edit their performance ratings, or toggle injuries/suspensions to observe direct effects on match prediction outcomes.
              </p>
              <button className="btn btn-secondary" onClick={() => onSelectTab('squad')}>
                Open Squad Manager
              </button>
            </div>
            <div className="card">
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <TrendingUp style={{ color: 'var(--accent-success)' }} />
                Simulator Calibration
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '1.2rem' }}>
                Our model utilizes Poisson goal expectations matched with uninjured squad performance ratings. Prediction error matches the football entropy at around 30%.
              </p>
              <button className="btn btn-secondary" onClick={() => onSelectTab('info')}>
                View Model Math
              </button>
            </div>
          </div>
        </div>

        {/* Right Hand Column: CTA & Overview */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="card highlight" style={{ background: 'linear-gradient(135deg, rgba(25, 30, 62, 0.8) 0%, rgba(18, 22, 44, 0.9) 100%)', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)', color: '#fff' }}>Simulate Bracket</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Run full group stages, calculate best 3rd placed advancements, and watch the Round of 32 knockout brackets animate dynamically. Or run a massive Monte Carlo simulation to compute statistical probabilities.
              </p>
            </div>
            <button className="btn btn-primary" onClick={() => onSelectTab('simulator')} style={{ width: '100%', justifyContent: 'center' }}>
              <Play style={{ width: '18px', height: '18px' }} />
              Launch Simulator
            </button>
          </div>
          
          <div className="card" style={{ padding: '1rem' }}>
            <h4 style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Host Nations</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                <span>🇺🇸</span>
                <strong>United States</strong>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>(11 Host Cities)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                <span>🇲🇽</span>
                <strong>Mexico</strong>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>(3 Host Cities)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                <span>🇨🇦</span>
                <strong>Canada</strong>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>(2 Host Cities)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const varTextColor = (idx: number): string => {
  switch (idx) {
    case 0: return 'var(--accent-gold)';
    case 1: return 'var(--accent-cyan)';
    case 2: return 'var(--accent-blue)';
    default: return 'var(--text-primary)';
  }
};
