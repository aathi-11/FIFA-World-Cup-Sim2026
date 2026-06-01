/**
 * LiveSync.tsx
 * ──────────────────────────────────────────────────────────────────────────
 * Groq AI sync panel for live World Cup 2026 data.
 * Fetches real-world results, performances, injuries and Elo updates.
 *
 * IMPORTANT: Requires VITE_GROQ_API_KEY in your .env file.
 * Get a free key at: https://console.groq.com
 * ──────────────────────────────────────────────────────────────────────────
 */
import { useState } from 'react';
import { RefreshCw, CheckCircle2, AlertCircle, Zap } from 'lucide-react';

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY as string | undefined;
const GROQ_MODEL = 'llama-3.3-70b-versatile';
const TODAY = new Date().toISOString().slice(0, 10);

// ── Prompt Templates ──────────────────────────────────────────────────────

const PROMPTS = {
  results: `You are a FIFA World Cup 2026 data assistant. Return only valid JSON, no markdown.

Today is ${TODAY}. Return all FIFA World Cup 2026 match results played so far.
Use matchId format: "G_X_HOMEID_AWAYID" for group matches (X = group letter A–L, e.g. "G_A_USA_CAN"),
"R32_N", "R16_N", "QF_N", "SF_N" for knockout matches, "FINAL_MATCH", "TP_MATCH".

Return format:
{
  "matches": [
    {
      "matchId": "G_A_MEX_POL",
      "homeGoals": 0,
      "awayGoals": 0,
      "played": true,
      "scorers": [{"player": "Name", "team": "MEX", "minute": 45}],
      "yellowCards": ["Player Name"],
      "redCards": [],
      "injuries": []
    }
  ]
}

If no matches have been played yet, return: {"matches": []}`,

  performances: `You are a FIFA World Cup 2026 performance analyst. Return only valid JSON, no markdown.

Today is ${TODAY}. Return player performance ratings for all World Cup 2026 matches played so far.
formMultiplier: 0.7 = very poor, 0.85 = below average, 1.0 = normal, 1.15 = good, 1.3 = outstanding.

Return format:
{
  "performances": [
    {
      "playerName": "Lionel Messi",
      "team": "ARG",
      "matchId": "G_B_ARG_MAR",
      "minutesPlayed": 90,
      "goals": 1,
      "assists": 0,
      "yellowCard": false,
      "redCard": false,
      "injured": false,
      "formMultiplier": 1.2
    }
  ]
}

If no matches played yet, return: {"performances": []}`,

  injuries: `You are a FIFA World Cup 2026 injury reporter. Return only valid JSON, no markdown.

Today is ${TODAY}. Return all confirmed injuries and suspensions for FIFA World Cup 2026 players.

Return format:
{
  "injuries": [
    {
      "playerName": "Player Name",
      "team": "BRA",
      "type": "injury",
      "matchesMissed": 2,
      "reason": "Hamstring strain"
    }
  ],
  "suspensions": [
    {
      "playerName": "Player Name",
      "team": "FRA",
      "type": "suspension",
      "matchesMissed": 1,
      "reason": "Red card vs. GER"
    }
  ]
}

If none, return: {"injuries": [], "suspensions": []}`,

  elo: `You are a FIFA World Cup 2026 Elo ratings calculator. Return only valid JSON, no markdown.

Based on all World Cup 2026 results so far (today: ${TODAY}), calculate updated Elo ratings.
K-factor by stage: Group=20, R32/R16=30, QF/SF=40, Final=50.
Base pre-tournament Elos: ARG=2140, FRA=2110, ENG=2090, BRA=2090, ESP=2080, POR=2050, GER=2030, NED=2010, BEL=1990, URU=1970.

Return format:
{
  "updatedElo": {
    "ARG": 2155,
    "FRA": 2118,
    "BRA": 2087
  }
}

If no matches played yet, return: {"updatedElo": {}}`,
};

// ── Component ──────────────────────────────────────────────────────────────

export type LiveSyncType = 'results' | 'performances' | 'injuries' | 'elo';

interface SyncStatus {
  lastSync?: string;
  error?: string;
  count?: number;
}

interface LiveSyncProps {
  onUpdate: (type: LiveSyncType, data: unknown) => void;
  hasLiveData?: boolean;
}

const SYNC_LABELS: Record<LiveSyncType, { label: string; emoji: string }> = {
  results:      { label: 'Results',      emoji: '⚽' },
  performances: { label: 'Performances', emoji: '📊' },
  injuries:     { label: 'Injuries',     emoji: '🏥' },
  elo:          { label: 'Elo Ratings',  emoji: '📈' },
};

export default function LiveSync({ onUpdate, hasLiveData = false }: LiveSyncProps) {
  const [loading, setLoading] = useState<LiveSyncType | null>(null);
  const [statuses, setStatuses] = useState<Record<LiveSyncType, SyncStatus>>({
    results: {},
    performances: {},
    injuries: {},
    elo: {},
  });
  const [expanded, setExpanded] = useState(false);

  const fetchGroq = async (type: LiveSyncType) => {
    if (!GROQ_API_KEY || GROQ_API_KEY === 'your_groq_api_key_here') {
      alert('⚠️ No Groq API key found.\n\nEdit the .env file in your project root:\nVITE_GROQ_API_KEY=your_key_here\n\nGet a free key at: https://console.groq.com');
      return;
    }

    setLoading(type);

    try {
      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: GROQ_MODEL,
          messages: [
            {
              role: 'system',
              content: 'You are a sports data assistant. Always respond with valid JSON only. No markdown, no explanation, no code blocks.',
            },
            {
              role: 'user',
              content: PROMPTS[type],
            },
          ],
          temperature: 0.1,
          max_tokens: 8000,
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        throw new Error(`Groq API error ${res.status}: ${err}`);
      }

      const json = await res.json();
      const raw: string = json.choices[0].message.content;

      // Strip any accidental markdown fences
      const cleaned = raw.replace(/```json|```/g, '').trim();
      const parsed = JSON.parse(cleaned) as unknown;

      onUpdate(type, parsed);

      // Calculate count for status display
      let count = 0;
      if (type === 'results' && typeof parsed === 'object' && parsed !== null && 'matches' in parsed) {
        count = (parsed as { matches: unknown[] }).matches.length;
      } else if (type === 'performances' && typeof parsed === 'object' && parsed !== null && 'performances' in parsed) {
        count = (parsed as { performances: unknown[] }).performances.length;
      } else if (type === 'injuries' && typeof parsed === 'object' && parsed !== null) {
        const d = parsed as { injuries?: unknown[]; suspensions?: unknown[] };
        count = (d.injuries?.length ?? 0) + (d.suspensions?.length ?? 0);
      } else if (type === 'elo' && typeof parsed === 'object' && parsed !== null && 'updatedElo' in parsed) {
        count = Object.keys((parsed as { updatedElo: Record<string, number> }).updatedElo).length;
      }

      setStatuses(prev => ({
        ...prev,
        [type]: {
          lastSync: new Date().toLocaleTimeString(),
          count,
          error: undefined,
        },
      }));
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`LiveSync [${type}] failed:`, err);
      setStatuses(prev => ({
        ...prev,
        [type]: { error: msg.slice(0, 80) },
      }));
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className={`live-sync-panel ${expanded ? 'live-sync-expanded' : ''}`}>
      {/* Header Toggle */}
      <button
        className="live-sync-toggle"
        onClick={() => setExpanded(e => !e)}
        title="Toggle Live Match Sync"
      >
        <Zap className="live-sync-zap-icon" />
        <span>Live Sync</span>
        {hasLiveData && <span className="live-indicator-dot" title="Live data loaded" />}
        <span className="live-sync-chevron">{expanded ? '▲' : '▼'}</span>
      </button>

      {/* Expanded Panel */}
      {expanded && (
        <div className="live-sync-body">
          <p className="live-sync-subtitle">
            Fetch real-world match data via Groq AI — updates Monte Carlo predictions instantly.
          </p>

          <div className="live-sync-buttons">
            {(Object.keys(SYNC_LABELS) as LiveSyncType[]).map(type => {
              const { label, emoji } = SYNC_LABELS[type];
              const status = statuses[type];
              const isLoading = loading === type;

              return (
                <button
                  key={type}
                  onClick={() => fetchGroq(type)}
                  disabled={isLoading || loading !== null}
                  className={`sync-btn ${status.lastSync ? 'sync-btn--success' : ''} ${status.error ? 'sync-btn--error' : ''}`}
                  id={`live-sync-btn-${type}`}
                >
                  <span className="sync-btn-icon">
                    {isLoading ? (
                      <RefreshCw className="spin-icon" />
                    ) : status.lastSync ? (
                      <CheckCircle2 />
                    ) : status.error ? (
                      <AlertCircle />
                    ) : (
                      <span>{emoji}</span>
                    )}
                  </span>
                  <span className="sync-btn-label">
                    {isLoading ? `Fetching ${label}…` : `Fetch ${label}`}
                  </span>
                  {status.lastSync && !isLoading && (
                    <span className="sync-time">
                      ✓ {status.lastSync}
                      {status.count !== undefined && status.count > 0 && (
                        <span className="sync-count"> ({status.count})</span>
                      )}
                    </span>
                  )}
                  {status.error && !isLoading && (
                    <span className="sync-error" title={status.error}>Error</span>
                  )}
                </button>
              );
            })}
          </div>

          <p className="live-sync-disclaimer">
            ⚠️ Groq LLM provides best-effort data from training knowledge. Verify scores before locking.
          </p>
        </div>
      )}
    </div>
  );
}
