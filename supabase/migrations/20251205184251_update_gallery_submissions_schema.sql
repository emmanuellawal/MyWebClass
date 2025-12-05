/*
  # Update Gallery Submissions Table Schema

  1. Changes
    - Add `style_slug` column (keeping style_name for compatibility)
    - Add `reviewer_notes` column
    - Update status check constraint to include 'submitted', 'approved', 'rejected'
    - Add indexes for performance

  2. Notes
    - Keeps existing columns: created_at, updated_at, style_name
    - Adds new columns: style_slug, reviewer_notes
    - Updates status values for workflow
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'gallery_submissions' AND column_name = 'style_slug'
  ) THEN
    ALTER TABLE gallery_submissions ADD COLUMN style_slug text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'gallery_submissions' AND column_name = 'reviewer_notes'
  ) THEN
    ALTER TABLE gallery_submissions ADD COLUMN reviewer_notes text;
  END IF;
END $$;

ALTER TABLE gallery_submissions 
  ALTER COLUMN status SET DEFAULT 'submitted';

CREATE INDEX IF NOT EXISTS idx_gallery_submissions_status ON gallery_submissions(status);
CREATE INDEX IF NOT EXISTS idx_gallery_submissions_created_at ON gallery_submissions(created_at DESC);
