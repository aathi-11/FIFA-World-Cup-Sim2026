-- ============================================================
-- World Cup 2026 Predictor - Supabase Schema
-- Run this entire file in the Supabase SQL Editor
-- Dashboard: https://supabase.com/dashboard/project/iujcxgscmpbvnqipddjf/sql
-- ============================================================

-- 1. Match Results Table
-- Stores locked/real match scorelines for persistence across sessions
CREATE TABLE IF NOT EXISTS match_results (
  id BIGSERIAL PRIMARY KEY,
  match_id TEXT UNIQUE NOT NULL,
  home_team_id TEXT NOT NULL,
  away_team_id TEXT NOT NULL,
  goals_home INTEGER NOT NULL DEFAULT 0,
  goals_away INTEGER NOT NULL DEFAULT 0,
  shootout_goals_home INTEGER,
  shootout_goals_away INTEGER,
  winner_id TEXT,
  real_played BOOLEAN NOT NULL DEFAULT FALSE,
  pre_match_prob_home NUMERIC(5, 4),
  pre_match_prob_away NUMERIC(5, 4),
  pre_match_prob_draw NUMERIC(5, 4),
  pre_match_predicted_winner TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Player States Table
-- Stores custom player ratings, form, injuries, suspensions, goals and assists
CREATE TABLE IF NOT EXISTS player_states (
  id BIGSERIAL PRIMARY KEY,
  player_id TEXT UNIQUE NOT NULL,
  team_id TEXT NOT NULL,
  player_name TEXT NOT NULL,
  rating NUMERIC(5, 2) NOT NULL DEFAULT 70,
  form NUMERIC(5, 4) NOT NULL DEFAULT 1.0,
  injured BOOLEAN NOT NULL DEFAULT FALSE,
  suspended BOOLEAN NOT NULL DEFAULT FALSE,
  goals_scored INTEGER NOT NULL DEFAULT 0,
  assists INTEGER NOT NULL DEFAULT 0,
  clean_sheets INTEGER NOT NULL DEFAULT 0,
  saves INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. User Simulations Table
-- Logs every Monte Carlo simulation run for history tracking
CREATE TABLE IF NOT EXISTS user_simulations (
  id BIGSERIAL PRIMARY KEY,
  champion_probabilities JSONB NOT NULL DEFAULT '{}'::JSONB,
  locked_matches_count INTEGER NOT NULL DEFAULT 0,
  simulation_runs INTEGER NOT NULL DEFAULT 1000,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- Enable Row Level Security (RLS) with open anon access
-- This allows the browser client to read/write all rows
-- ============================================================

ALTER TABLE match_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE player_states ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_simulations ENABLE ROW LEVEL SECURITY;

-- Policies: Allow all operations for anon role (public app, no auth needed)
CREATE POLICY "Allow all for anon" ON match_results FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "Allow all for anon" ON player_states FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "Allow all for anon" ON user_simulations FOR ALL TO anon USING (true) WITH CHECK (true);

-- ============================================================
-- Updated_at auto-update trigger
-- ============================================================
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER match_results_updated_at
  BEFORE UPDATE ON match_results
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE OR REPLACE TRIGGER player_states_updated_at
  BEFORE UPDATE ON player_states
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================
-- Verify tables were created correctly
-- ============================================================
SELECT table_name, column_name, data_type
FROM information_schema.columns
WHERE table_schema = 'public'
  AND table_name IN ('match_results', 'player_states', 'user_simulations')
ORDER BY table_name, ordinal_position;
