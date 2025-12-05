/*
  # Create Analytics and Consent Tables

  1. New Tables
    - `analytics_events`
      - `id` (uuid, primary key)
      - `event_type` (text, required) - Type of event (page_view, demo_click, etc.)
      - `page_url` (text) - URL of the page
      - `user_id` (text) - Anonymous user identifier
      - `metadata` (jsonb) - Additional event data
      - `created_at` (timestamptz, default now())

    - `consent_logs`
      - `id` (uuid, primary key)
      - `session_id` (text, required) - Anonymous session identifier
      - `consent_given` (boolean, required) - Whether consent was given
      - `preferences` (jsonb) - Granular consent preferences
      - `created_at` (timestamptz, default now())

  2. Security
    - Enable RLS on both tables
    - Allow anonymous users to insert their own events and consent
    - Allow authenticated users to read analytics data
*/

CREATE TABLE IF NOT EXISTS analytics_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type text NOT NULL,
  page_url text,
  user_id text,
  metadata jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create analytics events"
  ON analytics_events
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view analytics"
  ON analytics_events
  FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_analytics_events_type ON analytics_events(event_type);
CREATE INDEX IF NOT EXISTS idx_analytics_events_created_at ON analytics_events(created_at DESC);

CREATE TABLE IF NOT EXISTS consent_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL,
  consent_given boolean NOT NULL,
  preferences jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE consent_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create consent logs"
  ON consent_logs
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Users can view their own consent logs"
  ON consent_logs
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_consent_logs_session ON consent_logs(session_id);
CREATE INDEX IF NOT EXISTS idx_consent_logs_created_at ON consent_logs(created_at DESC);
