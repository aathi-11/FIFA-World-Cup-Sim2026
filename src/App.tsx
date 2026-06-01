import { useState, useEffect } from 'react';
import type { Team, Player } from './types';
import { teamsData } from './data/teamsData';
import { initializeAllPlayers } from './data/playersData';

// Components
import { Dashboard } from './components/Dashboard';
import { TournamentSimulator } from './components/TournamentSimulator';
import { SquadManager } from './components/SquadManager';
import { MatchPredictor } from './components/MatchPredictor';
import { ModelExplanation } from './components/ModelExplanation';

// Icons
import { Trophy, Users, Sparkles, HelpCircle, Activity, LayoutDashboard } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [teams, setTeams] = useState<Team[]>([]);
  const [playersDb, setPlayersDb] = useState<Record<string, Player[]>>({});

  // Initialize data on mount
  useEffect(() => {
    // 1. Initialize teams
    const initialTeams = [...teamsData];
    
    // 2. Initialize players database (procedural + preloaded)
    const initialPlayersDb = initializeAllPlayers(initialTeams);
    
    // 3. Compute dynamic team strength metrics on load
    const updatedTeams = initialTeams.map(team => {
      const squad = initialPlayersDb[team.id] || [];
      
      // Calculate SQI
      const active = squad.filter(p => !p.injured && !p.suspended);
      const sqi = active.length > 0 
        ? Math.round(active.reduce((sum, p) => sum + p.rating, 0) / active.length) 
        : 50;

      return {
        ...team,
        sqi
      };
    });

    setTeams(updatedTeams);
    setPlayersDb(initialPlayersDb);
  }, []);

  // Handler to update a player's details (rating, injury, suspension)
  const handleUpdatePlayer = (teamId: string, playerId: string, updates: Partial<Player>) => {
    setPlayersDb(prevDb => {
      const currentSquad = prevDb[teamId] || [];
      const updatedSquad = currentSquad.map(p => {
        if (p.id === playerId) {
          // If marking injured or suspended, we adjust form multiplier for extra realism
          const formValue = updates.injured || updates.suspended ? 0.0 : 1.0;
          return {
            ...p,
            ...updates,
            form: updates.form !== undefined ? updates.form : formValue
          };
        }
        return p;
      });

      // Recalculate team strength and update the team state
      setTeams(prevTeams => {
        return prevTeams.map(t => {
          if (t.id === teamId) {
            // Calculate new SQI
            const active = updatedSquad.filter(p => !p.injured && !p.suspended);
            const sqi = active.length > 0 
              ? Math.round(active.reduce((sum, p) => sum + p.rating, 0) / active.length) 
              : 0;
            
            return {
              ...t,
              sqi
            };
          }
          return t;
        });
      });

      return {
        ...prevDb,
        [teamId]: updatedSquad
      };
    });
  };

  const renderActiveTabContent = () => {
    if (teams.length === 0) {
      return (
        <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
          <Activity className="animate-pulse" style={{ color: 'var(--accent-gold)', width: '48px', height: '48px', margin: '0 auto 1rem auto' }} />
          <h3>Loading Tournament Database...</h3>
        </div>
      );
    }

    switch (activeTab) {
      case 'dashboard':
        return <Dashboard teams={teams} onSelectTab={setActiveTab} />;
      case 'simulator':
        return <TournamentSimulator teams={teams} playersDb={playersDb} />;
      case 'squad':
        return <SquadManager teams={teams} playersDb={playersDb} onUpdatePlayer={handleUpdatePlayer} />;
      case 'predictor':
        return <MatchPredictor teams={teams} playersDb={playersDb} />;
      case 'info':
        return <ModelExplanation />;
      default:
        return <Dashboard teams={teams} onSelectTab={setActiveTab} />;
    }
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="brand" onClick={() => setActiveTab('dashboard')} style={{ cursor: 'pointer' }}>
          <Trophy style={{ color: 'var(--accent-gold)', width: '32px', height: '32px' }} />
          <div>
            <div className="brand-logo">MUNDIAL <span>2026</span></div>
            <div className="brand-subtitle">Prediction Console</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="nav-menu">
          <button 
            className={`nav-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <LayoutDashboard style={{ width: '16px', height: '16px' }} />
            Dashboard
          </button>
          <button 
            className={`nav-btn ${activeTab === 'simulator' ? 'active' : ''}`}
            onClick={() => setActiveTab('simulator')}
          >
            <Trophy style={{ width: '16px', height: '16px' }} />
            Tournament Simulator
          </button>
          <button 
            className={`nav-btn ${activeTab === 'squad' ? 'active' : ''}`}
            onClick={() => setActiveTab('squad')}
          >
            <Users style={{ width: '16px', height: '16px' }} />
            Squad Manager
          </button>
          <button 
            className={`nav-btn ${activeTab === 'predictor' ? 'active' : ''}`}
            onClick={() => setActiveTab('predictor')}
          >
            <Sparkles style={{ width: '16px', height: '16px' }} />
            Match Predictor
          </button>
          <button 
            className={`nav-btn ${activeTab === 'info' ? 'active' : ''}`}
            onClick={() => setActiveTab('info')}
          >
            <HelpCircle style={{ width: '16px', height: '16px' }} />
            Model Math
          </button>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="tabs-content">
        {renderActiveTabContent()}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Antigravity FIFA World Cup Predictor. Running on React + TypeScript.</p>
        <p style={{ marginTop: '6px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          Simulation Engine calibrated at &ge;20% match classification error rate to respect football entropy (upset factor).
        </p>
      </footer>
    </div>
  );
}

export default App;
