# Story 1.3: Set Up Eleventy Data Fetching Layer

Status: Done

## Story

As a **developer**,
I want **Eleventy configured to fetch content from Sanity at build time**,
So that **static pages are generated from CMS content**.

## Acceptance Criteria

1. **Given** Sanity schemas are deployed, **When** Eleventy builds the site, **Then** content is fetched from Sanity API and available in templates

2. **Data File: `src/_data/sanity.js`** - **Given** I need Sanity configuration, **When** I import from `sanity.js`, **Then** I get:
   - `projectId` from environment variable
   - `dataset` from environment variable
   - `apiVersion` set to `2021-10-21`
   - Helper function to build query URLs

3. **Data File: `src/_data/designStyles.js`** - **Given** the site builds, **When** Eleventy processes data files, **Then** `designStyles` global data contains all `designStyle` documents from Sanity
   - **And** data is cached for 1 hour (via @11ty/eleventy-fetch)
   - **And** if Sanity is unreachable, an empty array is returned (graceful degradation)
   - **And** console logs the error for debugging

4. **Data File: `src/_data/submissions.js`** - **Given** the site builds, **When** Eleventy processes data files, **Then** `submissions` global data contains `gallerySubmission` documents where `status == 'approved'`
   - **And** data includes resolved `styleRef` reference
   - **And** same caching and error handling as designStyles

5. **Given** `@11ty/eleventy-fetch` is installed, **When** I check `package.json`, **Then** it appears in devDependencies

6. **Given** environment variables are configured, **When** I run `npm run build`, **Then** the build fetches data from Sanity without errors

7. **Given** Sanity API is unreachable, **When** the build runs, **Then** the build completes with empty arrays (graceful degradation) and logs errors to console

---

## ⚠️ CRITICAL: Breaking Changes

**READ THIS FIRST - Data structure changes that WILL affect templates:**

### 1. Slug Field Structure Change

| Before (Mock Data) | After (Sanity) | Template Fix Required |
|-------------------|----------------|----------------------|
| `style.slug` → `"swiss"` | `style.slug` → `{ current: "swiss" }` | Use `style.slug.current` |

**Affected Templates:** Any template using `style.slug` or `submission.styleRef.slug` directly.

### 2. Field Name Changes

| Mock Data Field | Sanity Field | Change Type |
|----------------|--------------|-------------|
| `origin` | `history` | Renamed (now block content) |
| `thumbnail` (emoji) | `heroImage` | Now actual image object |
| `era` | — | **REMOVED** - not in Sanity schema |
| `gridSystem` | — | **REMOVED** - not in Sanity schema |
| `demoUrl` (in designStyle) | — | **REMOVED** - only in gallerySubmission |
| `colorPalette` (array of hex) | `colorPalette[].hex` | Now array of objects |
| `typography` (string) | `typography.primaryFont` | Now object structure |

### 3. Image Field Structure

| Before | After |
|--------|-------|
| `style.thumbnail` (emoji string) | `style.heroImage.asset.url` (Sanity image) |
| Direct URL strings | Sanity image objects with `asset`, `hotspot`, `alt` |

**Developer Action Required:** After data fetching works, verify templates handle these changes. See Task 8 below.

---

## Tasks / Subtasks

- [x] Task 1: Install @11ty/eleventy-fetch package (AC: #5)
  - [x] 1.1: Run `npm install @11ty/eleventy-fetch --save-dev`
  - [x] 1.2: Verify package appears in package.json devDependencies

- [x] Task 2: Create `src/_data/sanity.mjs` configuration module (AC: #2)
  - [x] 2.1: Create file with Sanity project configuration
  - [x] 2.2: Read `SANITY_PROJECT_ID` from process.env with fallback to `gc7vlywa`
  - [x] 2.3: Read `SANITY_DATASET` from process.env with fallback to `production`
  - [x] 2.4: Set `apiVersion` to `2021-10-21`
  - [x] 2.5: Export `buildQueryUrl(query)` helper function that constructs Sanity API URLs
  - [x] 2.6: Export `projectId`, `dataset`, `apiVersion` for direct access

- [x] Task 3: Update `src/_data/designStyles.mjs` to fetch from Sanity (AC: #1, #3)
  - [x] 3.1: Convert from CommonJS `module.exports` to ES module `export default`
  - [x] 3.2: Import EleventyFetch from `@11ty/eleventy-fetch`
  - [x] 3.3: Import `buildQueryUrl` from `./sanity.mjs`
  - [x] 3.4: Implement GROQ query: `*[_type == "designStyle"]`
  - [x] 3.5: Configure cache duration to `1h`
  - [x] 3.6: Wrap in try/catch with empty array fallback
  - [x] 3.7: Log errors to console with descriptive message
  - [x] 3.8: Return `data.result` from the Sanity response

- [x] Task 4: Update `src/_data/submissions.mjs` to fetch from Sanity (AC: #1, #4)
  - [x] 4.1: Convert from CommonJS `module.exports` to ES module `export default`
  - [x] 4.2: Import EleventyFetch from `@11ty/eleventy-fetch`
  - [x] 4.3: Import `buildQueryUrl` from `./sanity.mjs`
  - [x] 4.4: Implement GROQ query: `*[_type == "gallerySubmission" && status == "approved"]{..., styleRef->}`
  - [x] 4.5: Configure cache duration to `1h`
  - [x] 4.6: Wrap in try/catch with empty array fallback
  - [x] 4.7: Log errors to console with descriptive message
  - [x] 4.8: Return `data.result` from the Sanity response

- [x] Task 5: Keep `src/_data/site.js` as CommonJS (Decision: Stability)
  - [x] 5.1: Leave site.js unchanged - CommonJS works fine with Eleventy 3.x
  - [x] 5.2: Note: ES module conversion is OPTIONAL and can be done in future refactoring
  - [x] 5.3: Sanity data files use .mjs extension for ES modules; site.js stays CommonJS

- [x] Task 6: Verify environment variable configuration (AC: #6)
  - [x] 6.1: Verify `.env` contains `SANITY_PROJECT_ID=gc7vlywa`
  - [x] 6.2: Verify `.env` contains `SANITY_DATASET=production`
  - [x] 6.3: Verify `.env.example` documents these variables

- [x] Task 7: Test build with Sanity data (AC: #1, #6, #7)
  - [x] 7.1: Run `npm run build` and verify no errors
  - [x] 7.2: Verify `designStyles` data is fetched from Sanity (1 design style fetched)
  - [x] 7.3: Verify `submissions` data is fetched and filtered to approved only (1 approved submission)
  - [x] 7.4: Test graceful degradation by using invalid project ID temporarily

- [x] Task 8: Verify template compatibility with Sanity data structure (CRITICAL)
  - [x] 8.1: Search templates for `style.slug` usage - updated to `style.slug.current or style.slug`
  - [x] 8.2: Search templates for `style.thumbnail` usage - added fallback `or '🎨'`
  - [x] 8.3: Search templates for `style.era` or `style.gridSystem` - added conditional rendering/fallbacks
  - [x] 8.4: Search templates for `style.origin` - updated to `style.history or style.origin`
  - [x] 8.5: Run `npm run build` and verify pages render without errors
  - [x] 8.6: Document any template changes needed in Completion Notes

## Dev Notes

### Architecture Compliance

**Source:** [docs/architecture.md#Data-Architecture]

**CRITICAL Data Fetching Decisions:**
| Decision | Choice | Version/Details | Rationale |
|----------|--------|-----------------|-----------|
| Data Fetching | @11ty/eleventy-fetch | Latest | Built-in caching, simple API, webhooks ensure freshness |
| Cache Duration | 1 hour | — | Safety net; webhook rebuilds handle real-time updates |
| API Version | 2021-10-21 | — | Stable Sanity API version |

**Error Handling Pattern:** [docs/architecture.md#Process-Patterns]
- Sanity fetch fails → Log error, return `[]`, build continues
- Empty result → Return empty array (valid state)

### Technology Requirements

| Technology | Version | Notes |
|------------|---------|-------|
| @11ty/eleventy-fetch | Latest | Must install - NOT currently in package.json |
| @sanity/client | 7.13.1 | Already installed - NOT used directly (use eleventy-fetch) |
| Node.js | 18+ | Required for ES modules |

**IMPORTANT:** We use `@11ty/eleventy-fetch` for data fetching, NOT `@sanity/client` directly. The eleventy-fetch package provides caching out of the box.

### File Structure

**Files to Create/Modify:**
```
src/_data/
├── sanity.js         # NEW - Sanity configuration and helpers
├── designStyles.js   # MODIFY - Convert to Sanity data fetching
├── submissions.js    # MODIFY - Convert to Sanity data fetching
└── site.js           # MODIFY - Convert to ES module syntax
```

### Sanity Configuration Pattern

**src/_data/sanity.js:**
```javascript
// Sanity API configuration for Eleventy data fetching
const projectId = process.env.SANITY_PROJECT_ID || 'gc7vlywa';
const dataset = process.env.SANITY_DATASET || 'production';
const apiVersion = '2021-10-21';

/**
 * Build a Sanity API query URL
 * @param {string} query - GROQ query string
 * @returns {string} - Full API URL
 */
export function buildQueryUrl(query) {
  const encodedQuery = encodeURIComponent(query);
  return `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodedQuery}`;
}

export { projectId, dataset, apiVersion };
```

### Data Fetching Pattern

**src/_data/designStyles.js (target implementation):**
```javascript
import EleventyFetch from "@11ty/eleventy-fetch";
import { buildQueryUrl } from "./sanity.js";

export default async function() {
  const query = '*[_type == "designStyle"]';
  const url = buildQueryUrl(query);

  try {
    const data = await EleventyFetch(url, {
      duration: "1h",
      type: "json"
    });
    console.log(`[Sanity] Fetched ${data.result?.length || 0} design styles`);
    return data.result || [];
  } catch (error) {
    console.error("[Sanity] Failed to fetch design styles:", error.message);
    return [];
  }
}
```

**src/_data/submissions.js (target implementation):**
```javascript
import EleventyFetch from "@11ty/eleventy-fetch";
import { buildQueryUrl } from "./sanity.js";

export default async function() {
  // Only fetch approved submissions with resolved style reference
  const query = '*[_type == "gallerySubmission" && status == "approved"]{..., styleRef->}';
  const url = buildQueryUrl(query);

  try {
    const data = await EleventyFetch(url, {
      duration: "1h",
      type: "json"
    });
    console.log(`[Sanity] Fetched ${data.result?.length || 0} approved submissions`);
    return data.result || [];
  } catch (error) {
    console.error("[Sanity] Failed to fetch submissions:", error.message);
    return [];
  }
}
```

### GROQ Query Patterns

**Design Styles Query:**
```groq
*[_type == "designStyle"]
```

**Approved Submissions with Reference Resolution:**
```groq
*[_type == "gallerySubmission" && status == "approved"]{
  ...,
  styleRef->
}
```
The `styleRef->` syntax resolves the reference to include the full designStyle document inline.

### Environment Variables

| Variable | Description | Value |
|----------|-------------|-------|
| `SANITY_PROJECT_ID` | Sanity project ID | `gc7vlywa` |
| `SANITY_DATASET` | Dataset name | `production` |

**Already configured in .env from Story 1.1.** The data fetching layer uses these same variables.

### Previous Story Learnings

**From Story 1.1 (Initialize Sanity Studio):**
- Project ID: `gc7vlywa`, Dataset: `production`
- Environment variables already in `.env`: `SANITY_PROJECT_ID`, `SANITY_DATASET`
- Studio scripts available via root package.json

**From Story 1.2 (Create Sanity Content Schemas):**
- 4 schemas created: `designStyle`, `gallerySubmission`, `article`, `author`
- All schemas use camelCase field names per Architecture
- `gallerySubmission` has `status` field with values: `pending`, `approved`, `rejected`
- `styleRef` is a reference to `designStyle` (strong reference)
- All image fields have alt text subfields for accessibility

**Key Schema Field Names for Queries:**
| Schema | Key Fields |
|--------|------------|
| `designStyle` | title, slug, description, history, characteristics, colorPalette, typography, heroImage, galleryImages |
| `gallerySubmission` | submitterName, submitterEmail, styleRef, demoUrl, screenshot, authenticityExplanation, status, isFeatured, submittedAt |

### Git Intelligence

**Recent Commits:**
```
1b428ee chore: mark story 1.2 as done
efb3bea feat(sanity): add content schemas for CMS (Story 1.2)
9db724c refactor: restructure project for Sanity CMS integration
```

**Patterns Established:**
- ES modules throughout Sanity Studio (`import`/`export`)
- Data files currently use CommonJS (`module.exports`) - need to convert to ES modules
- Sanity v3 APIs used consistently

### Testing Standards

**Quick Commands:**
```bash
# Install the new package
npm install @11ty/eleventy-fetch --save-dev

# Run the build to test data fetching
npm run build

# Run dev server to test templates
npm run dev
```

**Manual Verification Checklist:**
1. [ ] `npm run build` completes without errors
2. [ ] Console shows `[Sanity] Fetched X design styles` message
3. [ ] Console shows `[Sanity] Fetched X approved submissions` message
4. [ ] If Sanity has no data yet, console shows error but build still completes
5. [ ] Templates still render (may show empty states if no Sanity data)

**Graceful Degradation Test:**
1. Temporarily change `SANITY_PROJECT_ID` to invalid value
2. Run `npm run build`
3. Verify build completes with logged error
4. Verify empty arrays returned (pages still build)
5. Restore correct project ID

### Project Structure Notes

- Data files are in `src/_data/` per Eleventy convention
- **ES Module Approach:** Eleventy 3.x supports mixed CommonJS/ES modules
  - New Sanity data files (`sanity.js`, `designStyles.js`, `submissions.js`) use ES modules
  - Existing `site.js` remains CommonJS - no changes needed
  - No need to rename `.eleventy.js` or modify package.json

### Current Mock Data to Replace

**designStyles.js (current):** Returns static array of 3 design styles:
- swiss, bauhaus, brutalist

**submissions.js (current):** Returns static array of 3 submissions:
- 1 pending, 1 approved, 1 rejected

After this story, these will fetch from Sanity. The mock data can be kept as comments for reference during migration (Story 1.5).

### Field Migration Reference

**Complete Mock Data → Sanity Field Mapping:**

| Mock Data Field | Sanity Field | Type Change | Template Update |
|----------------|--------------|-------------|-----------------|
| `title` | `title` | Same | None |
| `slug` | `slug.current` | String → Object | `style.slug` → `style.slug.current` |
| `description` | `description` | Same | None |
| `origin` | `history` | String → Block content | May need portable text renderer |
| `characteristics` | `characteristics` | Same (array) | None |
| `typography` | `typography.primaryFont` | String → Object | Access subfields |
| `colorPalette` | `colorPalette[].hex` | Array of strings → Array of objects | `color` → `color.hex` |
| `thumbnail` | `heroImage` | Emoji → Sanity image | Use Sanity image URL builder |
| `era` | — | **REMOVED** | Remove from templates or add fallback |
| `gridSystem` | — | **REMOVED** | Remove from templates or add fallback |
| `accentColor` | — | **REMOVED** | Remove from templates or use colorPalette |
| `demoUrl` | — | **REMOVED** from designStyle | Only in gallerySubmission |
| `status` | — | **REMOVED** from designStyle | Only in gallerySubmission |

**Sanity Image URL Pattern:**
```javascript
// For Sanity images, use the CDN URL
// heroImage.asset.url gives the raw URL
// Or use @sanity/image-url for transformations
```

**Block Content (history field):**
```javascript
// history is now portable text (block content)
// May need @portabletext/to-html for rendering
// Or render as plain text for simple cases
```

### References

- [Source: docs/architecture.md#Data-Architecture]
- [Source: docs/architecture.md#Process-Patterns]
- [Source: docs/architecture.md#Data-File-Pattern]
- [Source: docs/epics.md#Story-1.3-Set-Up-Eleventy-Data-Fetching-Layer]
- [Source: docs/prd.md#FR44-System-generates-static-pages-from-Sanity-CMS-content]
- [Source: docs/sprint-artifacts/1-1-initialize-sanity-studio-project.md]
- [Source: docs/sprint-artifacts/1-2-create-sanity-content-schemas.md]

## Dev Agent Record

### Context Reference

- docs/architecture.md - Data architecture, data file patterns, error handling
- docs/prd.md - FR44, FR45 CMS content generation requirements
- docs/epics.md - Story 1.3 acceptance criteria
- docs/sprint-artifacts/1-1-initialize-sanity-studio-project.md - Sanity project config, env vars
- docs/sprint-artifacts/1-2-create-sanity-content-schemas.md - Schema field names for GROQ queries

### Agent Model Used

Claude Opus 4.5 (claude-opus-4-5-20251101)

### Debug Log References

- Build initially failed with ES module error - resolved by using `.mjs` extension
- Graceful degradation verified with invalid project ID - build completes with empty arrays

### Completion Notes List

1. **ES Module Approach:** Used `.mjs` extension for Sanity data files instead of modifying package.json. This allows clean ES module syntax while keeping the rest of the project as CommonJS.

2. **Template Compatibility Fixes Applied:**
   - `style.slug` → `style.slug.current or style.slug` (Sanity returns slug as object)
   - `style.era` → conditional rendering with `{% if style.era %}` (not in Sanity schema)
   - `style.gridSystem` → conditional rendering (not in Sanity schema)
   - `style.origin` → `style.history or style.origin` (field renamed in Sanity)
   - `style.thumbnail` → fallback to '🎨' emoji (Sanity uses heroImage object)
   - `style.accentColor` → fallback to '#E53935' (not in Sanity schema)
   - `style.colorPalette` → `color.hex or color` (Sanity returns objects with .hex)
   - `style.typography` → `style.typography.primaryFont or style.typography` (Sanity returns object)
   - `style.demoUrl` → conditional rendering (only in gallerySubmission, not designStyle)

3. **Sanity Data Verified:**
   - 1 design style fetched from Sanity (slug: swiss-metro)
   - 1 approved submission fetched from Sanity
   - Cache duration set to 1 hour per architecture requirements

4. **Removed status filter from index.njk:** designStyle documents in Sanity don't have a status field - that's only for gallerySubmission. All design styles are displayed.

### File List

**Files Created:**
- `src/_data/sanity.mjs` - Sanity configuration and query URL builder (ES module)
- `tests/sanity.test.mjs` - Unit tests for Sanity configuration module (9 tests)

**Files Modified:**
- `src/_data/designStyles.mjs` - Replaced mock data with Sanity data fetching (renamed from .js to .mjs), added response validation and conditional logging
- `src/_data/submissions.mjs` - Replaced mock data with Sanity data fetching (renamed from .js to .mjs), added response validation and conditional logging
- `src/pages/styles/style-detail.njk` - Template compatibility fixes for Sanity data structure, Portable Text block content rendering
- `src/pages/index.njk` - Updated slug reference and removed status filter
- `src/_includes/macros/card.njk` - Added fallbacks for missing Sanity fields
- `package.json` - Added @11ty/eleventy-fetch to devDependencies, added test script
- `package-lock.json` - Updated with new dependency

**Files Deleted:**
- `src/_data/designStyles.js` - Replaced by .mjs ES module version
- `src/_data/submissions.js` - Replaced by .mjs ES module version

**Files Unchanged:**
- `src/_data/site.js` - Remains CommonJS (no changes needed)

### Change Log

- 2025-12-06: Story 1.3 created with comprehensive developer context from architecture, PRD, and previous story learnings
- 2025-12-06: Story validated - Added CRITICAL breaking changes section, field migration guide, Task 8 for template verification, clarified ES module approach (keep site.js as CommonJS)
- 2025-12-06: Story implemented - Created Sanity data fetching layer with .mjs ES modules, fixed template compatibility issues, verified build with 1 design style and 1 approved submission from Sanity
- 2025-12-06: Code review completed - Fixed CRITICAL Portable Text [object Object] bug, added response validation, conditional logging, unit tests (9 passing), updated File List documentation

---

**Story Context Engine Analysis:** COMPLETED
**Validation Status:** PASSED (with improvements applied)
**Code Review:** PASSED - 1 critical, 4 medium, 3 low issues found and fixed
**Status:** Done
**Completion Note:** All acceptance criteria satisfied. Data fetching from Sanity works with 1-hour cache and graceful degradation. Templates updated to handle Sanity data structure differences. Code review fixes applied: Portable Text rendering, response validation, conditional logging, unit tests added.
