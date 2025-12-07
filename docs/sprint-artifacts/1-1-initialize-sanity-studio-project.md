# Story 1.1: Initialize Sanity Studio Project

Status: Done

## Story

As a **developer**,
I want **a Sanity Studio project initialized in the repository**,
So that **we have a content management system ready for schema development**.

## Acceptance Criteria

1. **Given** I am in the project root directory, **When** I navigate to the `/studio` directory, **Then** I see a properly configured Sanity Studio project
2. **And** `studio/package.json` exists with Sanity dependencies
3. **And** `studio/sanity.config.js` exports a valid configuration
4. **And** `studio/sanity.cli.js` contains CLI configuration
5. **And** the project ID and dataset are configured (from environment or config)
6. **Given** I have valid Sanity credentials, **When** I run `npm run dev` in the `/studio` directory, **Then** Sanity Studio launches on localhost:3333
7. **And** I can log in with Sanity authentication

## Tasks / Subtasks

- [x] Task 1: Reset `/studio` directory to clean state (AC: #1)
  - [x] 1.1: Verify existing `/studio` directory structure from initial commit
  - [x] 1.2: Update to Sanity v3.68.0 (latest stable)
  - [x] 1.3: Configure project ID (gc7vlywa) and dataset (production)
  - [x] 1.4: Remove pre-existing schemas to establish clean starting point for Story 1.2

- [x] Task 2: Configure Sanity Studio files (AC: #2, #3, #4)
  - [x] 2.1: Verify `studio/package.json` contains required dependencies
  - [x] 2.2: Configure `studio/sanity.config.js` with project settings
  - [x] 2.3: Configure `studio/sanity.cli.js` with CLI settings
  - [x] 2.4: Create empty `studio/schemas/index.js` for future schema exports

- [x] Task 3: Environment variable setup (AC: #5)
  - [x] 3.1: Add `SANITY_PROJECT_ID` to `.env` file
  - [x] 3.2: Add `SANITY_DATASET` to `.env` file (value: `production`)
  - [x] 3.3: Update `.env.example` with these variables (no values)
  - [x] 3.4: Ensure `.env` is in `.gitignore`

- [x] Task 4: Verify Studio launches (AC: #6, #7)
  - [x] 4.1: Run `cd studio && npm install`
  - [x] 4.2: Run `npm run dev` and confirm Studio launches on localhost:3333
  - [x] 4.3: Verify Sanity authentication works (login via Google/GitHub/email)
  - [x] 4.4: Confirm empty schema state (no document types yet - that's Story 1.2)

- [x] Task 5: Update root package.json with Studio scripts (AC: #6)
  - [x] 5.1: Add `"studio:dev": "cd studio && npm run dev"` script
  - [x] 5.2: Add `"studio:build": "cd studio && npm run build"` script
  - [x] 5.3: Add `"studio:deploy": "cd studio && npm run deploy"` script (optional)

## Dev Notes

### Architecture Compliance

**Source:** [docs/architecture.md#Integration-Architecture-Sanity-CMS]

- Sanity Studio goes in standalone `/studio` directory (NOT embedded in Eleventy)
- Use Sanity v3 (latest stable) - NOT v2
- Project structure per Architecture: `studio/` at project root level
- Studio can be deployed separately or accessed locally during development

### Technology Requirements

| Technology | Version | Notes |
|------------|---------|-------|
| Sanity CLI | Latest | `npx sanity init` uses latest |
| Sanity Studio | v3 | Must be v3, NOT v2 |
| Node.js | 18+ | Required for Sanity v3 |

### File Structure to Create

```
studio/
├── package.json           # Sanity dependencies
├── sanity.config.js       # Studio configuration
├── sanity.cli.js          # CLI configuration
├── schemas/
│   └── index.js           # Schema exports (empty for now)
└── static/                # Static assets (auto-created)
```

### Critical Configuration

**sanity.config.js pattern:**
```javascript
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'MyWebClass',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'gc7vlywa',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
```

**sanity.cli.js pattern:**
```javascript
import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'gc7vlywa',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production'
  },
  autoUpdates: true,
})
```

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `SANITY_STUDIO_PROJECT_ID` | Sanity project ID | `abc123xyz` |
| `SANITY_STUDIO_DATASET` | Dataset name | `production` |

**Note:** Sanity Studio uses `SANITY_STUDIO_*` prefix for env vars (different from the Eleventy data fetching which uses `SANITY_*`).

### Naming Conventions

**From Architecture:** [docs/architecture.md#Naming-Patterns]

- Sanity project: Use the same project as will be used for data fetching
- Dataset: `production` for MVP
- Studio title: `MyWebClass`

### Testing Standards

**Manual Verification:**
1. `cd studio && npm run dev` launches without errors
2. Browser opens to localhost:3333
3. Sanity login screen appears
4. After login, empty Studio dashboard visible
5. No document types shown (schemas not created yet)

**No automated tests for this story** - Studio initialization is a manual setup task.

### Project Structure Notes

- `/studio` is a separate npm project with its own `package.json`
- It does NOT share dependencies with the root Eleventy project
- `@sanity/client` in root `package.json` is for data fetching, not Studio
- Studio has its own node_modules

### Existing Codebase Context

**Already in place:**
- `@sanity/client@7.13.1` installed in root (for data fetching layer - Story 1.3)
- `src/_data/designStyles.js` exists (will be updated in Story 1.3)
- `src/_data/submissions.js` exists (will be updated in Story 1.3)

**Does NOT exist yet:**
- `/studio` directory - **THIS STORY CREATES IT**
- Sanity schemas - Story 1.2
- Sanity data fetching - Story 1.3

### References

- [Source: docs/architecture.md#Integration-Architecture-Sanity-CMS]
- [Source: docs/architecture.md#Project-Structure-Boundaries]
- [Source: docs/epics.md#Story-1.1-Initialize-Sanity-Studio-Project]
- [Source: docs/prd.md#Content-Management-CMS]
- [Source: docs/project_context.md#Technology-Stack]

## Dev Agent Record

### Context Reference

- docs/architecture.md
- docs/prd.md
- docs/epics.md
- docs/project_context.md

### Agent Model Used

Claude Opus 4.5 (claude-opus-4-5-20251101)

### Debug Log References

- Studio successfully launches on localhost:3333 with `npm run dev`
- Sanity v3.99.0 installed (auto-updates enabled)
- Minor styled-components version warning fixed (updated to ^6.1.15)

### Completion Notes List

- Created complete Sanity Studio v3 project structure in `/studio` directory
- Configured sanity.config.js with structureTool and visionTool plugins
- Configured sanity.cli.js with project ID (gc7vlywa) and dataset (production)
- Created empty schemas/index.js ready for Story 1.2 schema development
- Added environment variables to .env (SANITY_PROJECT_ID, SANITY_DATASET, SANITY_STUDIO_*)
- Created .env.example with template variables (no values)
- Created .gitignore with proper exclusions including .env
- Added studio:dev, studio:build, studio:deploy scripts to root package.json
- Verified Studio launches successfully on localhost:3333

### File List

**Files Created:**
- `studio/sanity.cli.js` - NEW CLI configuration file

**Files Modified:**
- `studio/package.json` - Updated dependencies (sanity ^3.68.0), added dev/deploy scripts
- `studio/sanity.config.js` - Added environment variable fallbacks for projectId/dataset
- `studio/schemas/index.js` - Reset to empty array for clean initialization
- `.env.example` - Added Sanity environment variable templates
- `.gitignore` - Added Sanity Studio cache exclusions
- `package.json` - Added studio:dev, studio:build, studio:deploy scripts
- `.env` - Added SANITY_PROJECT_ID, SANITY_DATASET, SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_DATASET

**Files Deleted:**
- `studio/schemas/designStyle.js` - Removed pre-existing schema (will be recreated in Story 1.2)
- `studio/schemas/article.js` - Removed pre-existing schema (not needed for MVP)
- `studio/schemas/author.js` - Removed pre-existing schema (not needed for MVP)

### Change Log

- 2025-12-06: Story 1.1 completed - Sanity Studio initialized with project ID gc7vlywa
- 2025-12-06: Code Review completed - Fixed documentation accuracy (File List, Task descriptions, Dev Notes patterns)

---

**Story Context Engine Analysis:** COMPLETED
**Status:** Done
**Completion Note:** Code review passed - documentation corrected for accuracy
