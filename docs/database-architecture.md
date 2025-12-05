# Database Architecture

## Overview

MyWebClass.org uses a dual-database architecture combining Sanity CMS for content management with Supabase for operational data. This separation provides flexibility, scalability, and clear boundaries between published content and dynamic application features.

## Architecture Diagram

```
┌─────────────────────────────────────────┐
│                                         │
│         MyWebClass.org Website          │
│         (Eleventy Static Site)          │
│                                         │
└───────────┬─────────────────┬───────────┘
            │                 │
            │                 │
            ▼                 ▼
    ┌───────────────┐  ┌──────────────────┐
    │  Sanity CMS   │  │    Supabase      │
    │   (Content)   │  │  (Operational)   │
    └───────────────┘  └──────────────────┘
```

## Database Separation Strategy

### Sanity CMS - Content Management

**Purpose**: Store and manage published, structured content

**Use Cases**:
- Published design styles with educational content
- Articles and blog posts
- Author information
- Media assets (images, videos)

**Benefits**:
- Rich content editing experience
- Structured content modeling
- Asset management with CDN
- Version control and publishing workflow
- Real-time collaboration

### Supabase - Operational Database

**Purpose**: Handle dynamic application data and user interactions

**Use Cases**:
- Gallery submissions workflow
- Analytics and tracking
- Consent management
- User-generated content (pre-approval)
- Transactional data

**Benefits**:
- PostgreSQL relational database
- Row Level Security (RLS)
- Real-time subscriptions
- Built-in authentication (future enhancement)
- RESTful and GraphQL APIs

## Supabase Schema

### gallery_submissions

Stores student design submissions with review workflow.

```sql
CREATE TABLE gallery_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  style_name text NOT NULL,
  style_slug text,
  demo_url text NOT NULL,
  screenshot_url text,
  explanation text NOT NULL,
  status text DEFAULT 'submitted',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  reviewer_notes text
);
```

**Status Values**:
- `submitted`: Initial state, awaiting review
- `approved`: Accepted by instructor, ready to sync to Sanity
- `rejected`: Not accepted, with feedback in reviewer_notes

**Row Level Security**:
- Anonymous users can INSERT submissions
- Authenticated users can SELECT all submissions
- Authenticated users can UPDATE submission status

### analytics_events

Privacy-first analytics tracking with consent management.

```sql
CREATE TABLE analytics_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type text NOT NULL,
  page_url text,
  user_id text,
  metadata jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now()
);
```

**Event Types**:
- `page_view`: Page navigation
- `demo_click`: Click on demo view button
- `form_submission`: Gallery submission completed

**Row Level Security**:
- Anonymous users can INSERT events (consent required client-side)
- Authenticated users can SELECT all events for analytics

### consent_logs

GDPR compliance logging for cookie consent.

```sql
CREATE TABLE consent_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL,
  consent_given boolean NOT NULL,
  preferences jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now()
);
```

**Preferences Structure**:
```json
{
  "analytics": true,
  "functional": true
}
```

**Row Level Security**:
- Anonymous users can INSERT consent logs
- Anonymous users can SELECT their own logs (by session_id)

## Sanity Schema

### designStyle

Published design styles with educational content.

```javascript
{
  name: 'designStyle',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug' },
    { name: 'description', type: 'text' },
    { name: 'historicalBackground', type: 'array', of: [block] },
    { name: 'keyCharacteristics', type: 'array', of: [block] },
    { name: 'colorPalette', type: 'array' },
    { name: 'typographyGuidance', type: 'array', of: [block] },
    { name: 'principles', type: 'array', of: [string] },
    { name: 'sampleImages', type: 'array', of: [image] },
    { name: 'demoUrl', type: 'url' },
    { name: 'githubRepo', type: 'url' },
    { name: 'technologies', type: 'array', of: [string] },
    { name: 'featured', type: 'boolean' },
    { name: 'publishedAt', type: 'datetime' }
  ]
}
```

### article

Blog posts and educational articles.

```javascript
{
  name: 'article',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug' },
    { name: 'author', type: 'reference', to: [author] },
    { name: 'body', type: 'array', of: [block] },
    { name: 'excerpt', type: 'text' },
    { name: 'categories', type: 'array', of: [string] },
    { name: 'relatedStyles', type: 'array', of: [reference] },
    { name: 'publishedAt', type: 'datetime' }
  ]
}
```

### author

Content authors and contributors.

```javascript
{
  name: 'author',
  type: 'document',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'slug', type: 'slug' },
    { name: 'bio', type: 'text' },
    { name: 'photo', type: 'image' },
    { name: 'email', type: 'string' },
    { name: 'role', type: 'string' }
  ]
}
```

## Data Flow

### Submission Workflow

1. **User submits design** → Supabase `gallery_submissions` (status: `submitted`)
2. **Discord notification** → Alerts instructors of new submission
3. **Instructor reviews** → Updates status to `approved` or `rejected`
4. **If approved** → Manual or automated sync creates `designStyle` in Sanity
5. **Eleventy rebuild** → New design appears in public gallery

### Analytics Flow

1. **User visits page** → Check consent status in localStorage
2. **If consented** → Track event to Supabase `analytics_events`
3. **Log consent** → Record in `consent_logs` table
4. **Dashboard queries** → Aggregate analytics for insights

### Content Publishing Flow

1. **Create content** → Sanity Studio interface
2. **Edit and preview** → Sanity's real-time preview
3. **Publish** → Content marked as published
4. **Build trigger** → GitHub Actions or manual build
5. **Eleventy fetches** → Pull published content from Sanity API
6. **Static generation** → Build HTML pages
7. **Deploy** → GitHub Pages deployment

## Security Considerations

### Row Level Security (RLS)

All Supabase tables have RLS enabled with specific policies:

- **Submissions**: Public INSERT, authenticated SELECT/UPDATE
- **Analytics**: Public INSERT (with consent), authenticated SELECT
- **Consent**: Public INSERT/SELECT (by session)

### Data Privacy

- No personal data in analytics without explicit consent
- Email addresses only used for submission communication
- Consent logs track GDPR compliance
- Data retention policies configurable

### API Security

- Supabase anon key exposed client-side (safe with RLS)
- Sanity read token for public content only
- Discord webhook URL in environment variables
- No sensitive credentials in client code

## Scalability

### Current Limits

- Supabase Free Tier: 500MB database, 2GB bandwidth
- Sanity Free Tier: 10k documents, 3 users
- GitHub Pages: 100GB bandwidth/month

### Future Scaling

- Upgrade Supabase tier for more storage
- Implement caching layer (Cloudflare)
- Consider CDN for static assets
- Add database indexes for large datasets

## Monitoring

### Health Checks

- Supabase dashboard for database metrics
- Sanity dashboard for API usage
- GitHub Actions for build status
- Lighthouse CI for performance monitoring

### Alerts

- Failed GitHub Actions workflows
- High error rates in Supabase logs
- Sanity API rate limiting
- Lighthouse performance degradation

## Backup and Recovery

### Supabase Backups

- Daily automated backups (Pro tier)
- Point-in-time recovery available
- Export data via pg_dump

### Sanity Backups

- Content version history
- Export via Sanity CLI
- Datasets can be duplicated

## Future Enhancements

1. **User Authentication**: Supabase Auth for instructor login
2. **Real-time Updates**: Live submission notifications
3. **Advanced Analytics**: Custom dashboards and reports
4. **Search**: Full-text search across content
5. **Comments**: User feedback on design styles
6. **Ratings**: Community voting on submissions

## Documentation Links

- [Supabase Documentation](https://supabase.com/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [PostgreSQL RLS Guide](https://www.postgresql.org/docs/current/ddl-rowsecurity.html)
