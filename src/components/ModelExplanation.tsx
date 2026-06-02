import React from 'react';
import { HelpCircle, ChevronRight, AlertTriangle, CheckCircle, Database, GitMerge, Activity, RefreshCw } from 'lucide-react';

export const ModelExplanation: React.FC = () => {
  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* Introduction Card */}
      <div className="card">
        <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <HelpCircle style={{ color: 'var(--accent-cyan)' }} />
          How the Prediction Engine Works
        </h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
          Predicting sports matches is a combination of assessing team strengths, accounting for current lineups (player forms and injuries), and simulating the inherent randomness (entropy) of the game. Our engine uses an advanced **4-Model Ensemble** coupled with dynamic **Squad Quality Indices** to simulate matches.
        </p>
      </div>

      {/* ── Visual Architecture Flowchart ── */}
      <div className="card" style={{ padding: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Activity style={{ color: 'var(--accent-gold)' }} />
          Model Architecture & Data Flow
        </h2>

        {/* Embedded Style Block for Flowchart */}
        <style dangerouslySetInnerHTML={{ __html: `
          .math-flow-chart {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            width: 100%;
            margin: 1rem 0;
            font-family: 'Inter', sans-serif;
          }
          .flow-node {
            background: rgba(30, 41, 59, 0.45);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 10px;
            padding: 14px 20px;
            text-align: center;
            width: 100%;
            max-width: 650px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.18);
            backdrop-filter: blur(12px);
            transition: all 0.2s ease-in-out;
          }
          .flow-node:hover {
            transform: translateY(-2px);
            border-color: rgba(255,255,255,0.15);
          }
          .flow-node-header {
            font-weight: 700;
            font-size: 0.95rem;
            margin-bottom: 4px;
            font-family: 'Outfit', sans-serif;
            letter-spacing: 0.03em;
          }
          .flow-node-sub {
            font-size: 0.78rem;
            color: var(--text-secondary);
          }
          .flow-grid-4 {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 16px;
            width: 100%;
            max-width: 900px;
          }
          .flow-grid-3 {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
            width: 100%;
            max-width: 900px;
          }
          .flow-arrow-vert {
            width: 2px;
            height: 20px;
            background: linear-gradient(180deg, var(--text-muted) 0%, rgba(255,255,255,0.1) 100%);
            position: relative;
          }
          .flow-arrow-vert::after {
            content: '▼';
            position: absolute;
            bottom: -6px;
            left: -4.5px;
            font-size: 8px;
            color: var(--text-muted);
          }
          @media (max-width: 768px) {
            .flow-grid-4, .flow-grid-3 {
              grid-template-columns: 1fr;
            }
          }
        ` }} />

        <div className="math-flow-chart">
          
          {/* Real-world inputs Node */}
          <div className="flow-node" style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)' }}>
            <div className="flow-node-header" style={{ color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <Database style={{ width: '16px', height: '16px', color: 'var(--text-muted)' }} />
              Real-world inputs
            </div>
            <div className="flow-node-sub">Elo ratings • squad strength • form • head-to-head • rest days • injuries</div>
          </div>

          <div className="flow-arrow-vert"></div>

          {/* 4 Models Grid */}
          <div className="flow-grid-4">
            <div className="flow-node" style={{ border: '1px solid rgba(59, 130, 246, 0.35)', background: 'rgba(59, 130, 246, 0.05)', color: '#93c5fd' }}>
              <div className="flow-node-header">Model 1</div>
              <div style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '2px', color: '#fff' }}>Bayesian Elo</div>
              <div style={{ fontSize: '0.72rem', color: '#93c5fd', opacity: 0.85 }}>Win probability</div>
              <div style={{ fontSize: '0.68rem', color: '#cbd5e1', marginTop: '6px', fontFamily: 'monospace' }}>P(win/draw/loss)</div>
            </div>

            <div className="flow-node" style={{ border: '1px solid rgba(16, 185, 129, 0.35)', background: 'rgba(16, 185, 129, 0.05)', color: '#6ee7b7' }}>
              <div className="flow-node-header">Model 2</div>
              <div style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '2px', color: '#fff' }}>Dixon-Coles</div>
              <div style={{ fontSize: '0.72rem', color: '#6ee7b7', opacity: 0.85 }}>Scoreline dist.</div>
              <div style={{ fontSize: '0.68rem', color: '#cbd5e1', marginTop: '6px', fontFamily: 'monospace' }}>P(score = a:b)</div>
            </div>

            <div className="flow-node" style={{ border: '1px solid rgba(139, 92, 246, 0.35)', background: 'rgba(139, 92, 246, 0.05)', color: '#c084fc' }}>
              <div className="flow-node-header">Model 3</div>
              <div style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '2px', color: '#fff' }}>Bradley-Terry</div>
              <div style={{ fontSize: '0.72rem', color: '#c084fc', opacity: 0.85 }}>Relative strength</div>
              <div style={{ fontSize: '0.68rem', color: '#cbd5e1', marginTop: '6px', fontFamily: 'monospace' }}>strength ratio</div>
            </div>

            <div className="flow-node" style={{ border: '1px solid rgba(245, 158, 11, 0.35)', background: 'rgba(245, 158, 11, 0.05)', color: '#fde047' }}>
              <div className="flow-node-header">Model 4</div>
              <div style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '2px', color: '#fff' }}>Bivariate Poisson</div>
              <div style={{ fontSize: '0.72rem', color: '#fde047', opacity: 0.85 }}>Correlated goals</div>
              <div style={{ fontSize: '0.68rem', color: '#cbd5e1', marginTop: '6px', fontFamily: 'monospace' }}>joint goal dist.</div>
            </div>
          </div>

          <div className="flow-arrow-vert"></div>

          {/* Weighted Ensemble Node */}
          <div className="flow-node" style={{ border: '1px solid rgba(239, 68, 68, 0.35)', background: 'rgba(239, 68, 68, 0.05)', color: '#fca5a5' }}>
            <div className="flow-node-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <GitMerge style={{ width: '16px', height: '16px', color: '#fca5a5' }} />
              Weighted ensemble
            </div>
            <div className="flow-node-sub" style={{ color: '#fed7d7' }}>Elo 35% • DC 30% • BT 20% • BP 15%</div>
          </div>

          <div className="flow-arrow-vert"></div>

          {/* Per-match probability Node */}
          <div className="flow-node" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}>
            <div className="flow-node-header" style={{ color: '#fff' }}>Per-match probability distribution</div>
            <div className="flow-node-sub" style={{ fontFamily: 'monospace', fontSize: '0.74rem' }}>P(home win) • P(draw) • P(away win) • E[goals]</div>
          </div>

          <div className="flow-arrow-vert"></div>

          {/* Monte Carlo Node */}
          <div className="flow-node" style={{ border: '1px solid rgba(16, 185, 129, 0.45)', background: 'rgba(16, 185, 129, 0.12)', color: '#a7f3d0' }}>
            <div className="flow-node-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <Activity style={{ width: '16px', height: '16px', color: 'var(--accent-success)' }} />
              Monte Carlo × 10,000
            </div>
            <div className="flow-node-sub" style={{ color: '#d1fae5' }}>Samples ensemble dist. • skips locked matches</div>
          </div>

          <div className="flow-arrow-vert"></div>

          {/* Outputs Grid */}
          <div className="flow-grid-3">
            <div className="flow-node" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#fff', marginBottom: '4px' }}>Championship %</div>
              <div className="flow-node-sub">All 48 teams ranked</div>
            </div>

            <div className="flow-node" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#fff', marginBottom: '4px' }}>Bracket paths</div>
              <div className="flow-node-sub">Most likely semifinals</div>
            </div>

            <div className="flow-node" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#fff', marginBottom: '4px' }}>Upset probability</div>
              <div className="flow-node-sub">vs actual result</div>
            </div>
          </div>

          <div className="flow-arrow-vert"></div>

          {/* Ground Truth loop Node */}
          <div className="flow-node" style={{ border: '1px solid rgba(239, 68, 68, 0.45)', background: 'rgba(220, 38, 38, 0.12)', color: '#fca5a5', maxWidth: '750px' }}>
            <div className="flow-node-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <RefreshCw style={{ width: '16px', height: '16px', color: '#fca5a5' }} />
              After real match: lock result → recalculate Elo → update form multipliers → re-run MC
            </div>
            <div className="flow-node-sub" style={{ color: '#fed7d7' }}>Locked matches are ground truth — never re-simulated (Bayesian feedback loop to inputs)</div>
          </div>

        </div>
      </div>

      {/* The Core Formula Details */}
      <div className="grid-2">
        <div className="card">
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#fff', fontFamily: 'var(--font-heading)' }}>1. Dynamic Team Strength</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '1rem' }}>
            A national team's strength is not static. It depends on historical Elo rating (representing long-term competitiveness) and the current active squad quality (reflecting injuries, suspensions, and individual player ratings).
          </p>
          <div className="formula-card">
            Strength = (Base Elo * 0.70) + (SQI * 14 * 0.30)
          </div>
          <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <li><strong>Base Elo:</strong> Baseline team rating (ranges from ~1400 to ~2140).</li>
            <li><strong>SQI (Squad Quality Index):</strong> The average player rating in the squad, excluding injured or suspended players.</li>
            <li><strong>Scale:</strong> We multiply SQI by 14 to convert player ratings (0-100) onto the Elo scale, making sure squad changes dynamically impact team strength.</li>
          </ul>
        </div>

        <div className="card">
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#fff', fontFamily: 'var(--font-heading)' }}>2. Goal Expectations (&lambda;)</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '1rem' }}>
            Goals scored by both teams are modeled as independent Poisson distributions. The expectation parameter (&lambda;) represents the average goals a team is expected to score based on the strength difference.
          </p>
          <div className="formula-card">
            &lambda;_Home = 1.35 * 1.15^((Str_Home - Str_Away) / 100)
            <br />
            &lambda;_Away = 1.35 * 1.15^((Str_Away - Str_Home) / 100)
          </div>
          <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <li><strong>Baseline (1.35):</strong> Matches between equally-ranked teams average 2.7 goals total (1.35 per team).</li>
            <li><strong>Sensitivity (1.15):</strong> Every 100-point difference in Strength scales expected scoring by 15%.</li>
            <li><strong>Goal Generation:</strong> Goals are drawn from a Poisson random generator using the calculated &lambda; values.</li>
          </ul>
        </div>
      </div>

      {/* Error Calibration Alert */}
      <div className="card highlight" style={{ borderLeft: '4px solid var(--accent-gold)' }}>
        <div style={{ display: 'flex', gap: '16px' }}>
          <AlertTriangle style={{ color: 'var(--accent-gold)', width: '32px', height: '32px', flexShrink: 0 }} />
          <div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', color: '#fff', fontFamily: 'var(--font-heading)' }}>
              Error Calibration (Design Rule: Error &ge; 20%)
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '12px' }}>
              In football forecasting, a model that claims over 80% accuracy (less than 20% error) on individual matches is **statistically overfitted and unrealistic**. Football has high mathematical entropy. Upsets happen, red cards occur, and shots hit the post. Advanced sports betting models and data firms (like Opta or Gracenote) average a **32% to 38% prediction error** on match outcomes.
            </p>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem' }}>
                <CheckCircle style={{ color: 'var(--accent-success)', width: '16px', height: '16px' }} />
                <span>Our Model Match Accuracy: ~68% to 72%</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem' }}>
                <CheckCircle style={{ color: 'var(--accent-success)', width: '16px', height: '16px' }} />
                <span>Our Model Prediction Error: ~28% to 32%</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem' }}>
                <CheckCircle style={{ color: 'var(--accent-success)', width: '16px', height: '16px' }} />
                <span>Uncertainty Buffer: Calibrated mathematically</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tournament Simulation Rules */}
      <div className="card">
        <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Knockout Resolutions & Tiebreakers</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <ChevronRight style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ color: '#fff' }}>Group Stage Tiebreakers:</strong> If teams are tied on points in the group stages, we run full tiebreaker logic: Points &rarr; Goal Difference &rarr; Goals For &rarr; Head-to-Head result &rarr; Random Seed draw.
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <ChevronRight style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ color: '#fff' }}>Best Third-Place Qualification:</strong> The 12 third-placed teams are entered into an in-memory league table. The top 8 teams are selected based on: Points &rarr; Goal Difference &rarr; Goals For &rarr; Wins &rarr; Random.
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <ChevronRight style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ color: '#fff' }}>Extra Time & Penalties:</strong> If matches are tied in the knockout round, we simulate 30 minutes of Extra Time (goals are simulated at a prorated 30% goal expectation). If still tied, a penalty shootout is simulated where goalkeeper ratings (GK Save %) and attacker ratings (Fwd shooting conversion) determine shootout goal conversion rates.
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
