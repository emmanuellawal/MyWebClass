# is373-final - Epic Breakdown

**Author:** Jay
**Date:** 2025-12-06
**Project Level:** Medium Complexity
**Target Scale:** Competition MVP → Production Platform

---

## Overview

This document provides the complete epic and story breakdown for is373-final (MyWebClass.org), decomposing the requirements from the [PRD](./prd.md) into implementable stories with full technical context from the [Architecture](./architecture.md).

**Context Validation:**
- ✅ PRD loaded (50 FRs + 38 NFRs)
- ✅ Architecture loaded (Sanity CMS + Make + GitHub Pages)
- ○ UX Design not available (proceeding without UI-specific patterns)

---

## Functional Requirements Inventory

### Design Gallery (FR1-FR7)
| FR | Description | Domain |
|----|-------------|--------|
| FR1 | Visitors can browse a gallery of design style entries showing thumbnails, style names, and descriptions | Gallery |
| FR2 | Visitors can filter gallery entries by design style category | Gallery |
| FR3 | Visitors can view detailed pages for each design style with embedded demo preview | Gallery |
| FR4 | Visitors can read educational content about each style including origins, characteristics, and authenticity explanation | Gallery |
| FR5 | Visitors can see featured/highlighted design submissions prominently displayed | Gallery |
| FR6 | Visitors can navigate to external demo URLs for each submission | Gallery |
| FR7 | Visitors can view the gallery on mobile, tablet, and desktop devices | Gallery |

### Submission Management (FR8-FR16)
| FR | Description | Domain |
|----|-------------|--------|
| FR8 | Students can submit design demos via a structured form | Submission |
| FR9 | Students can provide their name and .edu email address with submissions | Submission |
| FR10 | Students can select the design style category for their submission | Submission |
| FR11 | Students can provide a URL to their hosted demo | Submission |
| FR12 | Students can upload a screenshot of their design | Submission |
| FR13 | Students can write an explanation of how their design demonstrates style authenticity | Submission |
| FR14 | Students can provide consent for public display if approved | Submission |
| FR15 | Students can opt-in to marketing/newsletter communications (separate from submission consent) | Submission |
| FR16 | System stores submissions in Sanity CMS with pending status | Submission |

### Instructor Dashboard (FR17-FR24)
| FR | Description | Domain |
|----|-------------|--------|
| FR17 | Instructors can authenticate to access the review dashboard | Instructor |
| FR18 | Instructors can view a queue of pending submissions | Instructor |
| FR19 | Instructors can view submission details including screenshot, URL, and explanation | Instructor |
| FR20 | Instructors can approve submissions, changing status to approved | Instructor |
| FR21 | Instructors can reject submissions, changing status to rejected | Instructor |
| FR22 | Instructors can add feedback notes when rejecting submissions | Instructor |
| FR23 | Instructors can filter submissions by status (pending, approved, rejected) | Instructor |
| FR24 | Instructors can mark approved submissions as featured | Instructor |

### Content Curation (FR25-FR28)
| FR | Description | Domain |
|----|-------------|--------|
| FR25 | Curators can select which approved submissions appear as featured themes | Curation |
| FR26 | Curators can add highlight blurbs to featured submissions | Curation |
| FR27 | Curators can manage the order of featured themes on the homepage | Curation |
| FR28 | System displays only approved submissions in the public gallery | Curation |

### User Consent & Privacy (FR29-FR35)
| FR | Description | Domain |
|----|-------------|--------|
| FR29 | Visitors can accept or reject cookie consent for analytics tracking | Privacy |
| FR30 | Visitors can modify cookie preferences after initial choice | Privacy |
| FR31 | System delays analytics loading until consent is granted | Privacy |
| FR32 | Visitors can view Privacy Policy page with all data collection disclosures | Privacy |
| FR33 | Visitors can view Terms of Service page | Privacy |
| FR34 | Visitors can view Cookie Policy page | Privacy |
| FR35 | Users can request deletion of their submitted data | Privacy |

### Integrations (FR36-FR40)
| FR | Description | Domain |
|----|-------------|--------|
| FR36 | System sends Discord webhook notification when new submission is created | Integration |
| FR37 | System sends Discord webhook notification when submission is approved | Integration |
| FR38 | System syncs submission data to CRM (HubSpot/Airtable/Notion) | Integration |
| FR39 | System tracks page views and user behavior via Google Analytics 4 (with consent) | Integration |
| FR40 | System triggers site rebuild via webhook when Sanity content changes | Integration |

### Content Management (FR41-FR45)
| FR | Description | Domain |
|----|-------------|--------|
| FR41 | Content editors can manage design style entries in Sanity CMS | CMS |
| FR42 | Content editors can create and edit educational articles | CMS |
| FR43 | Content editors can manage author profiles | CMS |
| FR44 | System generates static pages from Sanity CMS content at build time | CMS |
| FR45 | System optimizes images from CMS for web delivery | CMS |

### Legal & Accessibility (FR46-FR50)
| FR | Description | Domain |
|----|-------------|--------|
| FR46 | System provides skip links for keyboard navigation | Accessibility |
| FR47 | System provides alt text for all images | Accessibility |
| FR48 | System provides ARIA labels for interactive elements | Accessibility |
| FR49 | System maintains 4.5:1 color contrast ratio minimum | Accessibility |
| FR50 | System provides semantic HTML structure for screen readers | Accessibility |

---

## FR Coverage Map

### Complete FR → Story Mapping

| FR | Description | Epic | Story | Status |
|----|-------------|------|-------|--------|
| FR1 | Browse gallery with thumbnails, names, descriptions | 2 | 2.1 | ✅ |
| FR2 | Filter gallery by design style category | 2 | 2.3 | ✅ |
| FR3 | View detail pages with embedded demo preview | 2 | 2.2 | ✅ |
| FR4 | Read educational content about styles | 2 | 2.2 | ✅ |
| FR5 | See featured/highlighted submissions | 2 | 2.4 | ✅ |
| FR6 | Navigate to external demo URLs | 2 | 2.5 | ✅ |
| FR7 | View gallery on mobile, tablet, desktop | 2 | 2.1, 2.6 | ✅ |
| FR8 | Submit design demos via structured form | 4 | 4.1 | ✅ |
| FR9 | Provide name and .edu email | 4 | 4.1, 4.8 | ✅ |
| FR10 | Select design style category | 4 | 4.1 | ✅ |
| FR11 | Provide URL to hosted demo | 4 | 4.1 | ✅ |
| FR12 | Upload screenshot of design | 4 | 4.1, 4.3 | ✅ |
| FR13 | Write authenticity explanation | 4 | 4.1 | ✅ |
| FR14 | Provide consent for public display | 4 | 4.2 | ✅ |
| FR15 | Opt-in to marketing (separate consent) | 4 | 4.2 | ✅ |
| FR16 | Store submissions in Sanity with pending status | 4 | 4.4, 4.5 | ✅ |
| FR17 | Instructor authentication | 5 | 5.1, 5.10 | ✅ |
| FR18 | View pending submissions queue | 5 | 5.2 | ✅ |
| FR19 | View submission details | 5 | 5.3 | ✅ |
| FR20 | Approve submissions | 5 | 5.4 | ✅ |
| FR21 | Reject submissions | 5 | 5.5 | ✅ |
| FR22 | Add feedback notes on rejection | 5 | 5.5 | ✅ |
| FR23 | Filter submissions by status | 5 | 5.6 | ✅ |
| FR24 | Mark approved submissions as featured | 5 | 5.7 | ✅ |
| FR25 | Select featured themes | 5 | 5.7 | ✅ |
| FR26 | Add highlight blurbs to featured | 5 | 5.7, 5.8 | ✅ |
| FR27 | Manage featured themes order | 5 | 5.8 | ✅ |
| FR28 | Display only approved submissions | 2 | 2.5 | ✅ |
| FR29 | Accept/reject cookie consent | 3 | 3.1 | ✅ |
| FR30 | Modify cookie preferences | 3 | 3.2 | ✅ |
| FR31 | Delay analytics until consent | 3 | 3.3 | ✅ |
| FR32 | View Privacy Policy | 3 | 3.4 | ✅ |
| FR33 | View Terms of Service | 3 | 3.4 | ✅ |
| FR34 | View Cookie Policy | 3 | 3.4 | ✅ |
| FR35 | Request data deletion | 3 | 3.5 | ✅ |
| FR36 | Discord webhook on new submission | 4 | 4.6 | ✅ |
| FR37 | Discord webhook on approval | 5 | 5.9 | ✅ |
| FR38 | Sync submission data to CRM | 4 | 4.7 | ✅ |
| FR39 | Track via GA4 with consent | 3 | 3.3 | ✅ |
| FR40 | Trigger rebuild on Sanity changes | 1 | 1.4 | ✅ |
| FR41 | Manage design styles in Sanity | 1 | 1.1, 1.2, 1.5 | ✅ |
| FR42 | Create/edit educational articles | 2 | 2.7 | ✅ |
| FR43 | Manage author profiles | 2 | 2.7 | ✅ |
| FR44 | Generate static pages from Sanity | 1 | 1.3 | ✅ |
| FR45 | Optimize images from CMS | 1, 2 | 1.3, 2.1, 2.2 | ✅ |
| FR46 | Skip links for keyboard navigation | 3 | 3.7 | ✅ |
| FR47 | Alt text for all images | 3 | 3.6, 3.9 | ✅ |
| FR48 | ARIA labels for interactive elements | 3 | 3.8 | ✅ |
| FR49 | 4.5:1 color contrast minimum | 3 | 3.9 | ✅ |
| FR50 | Semantic HTML for screen readers | 3 | 3.6 | ✅ |

**Coverage: 50/50 Functional Requirements (100%)**

---

## Epic Structure Plan

### Epic 1: Foundation & Sanity CMS Integration
**User Value:** Enables all subsequent features by establishing the content management foundation and build pipeline.

**What Users Get:** Nothing directly visible yet - this is infrastructure. But without it, nothing else works.

**PRD Coverage:** FR40, FR41, FR44, FR45 (partial)
**Architecture Context:** Sanity Studio setup, schemas, @11ty/eleventy-fetch data layer, GitHub Actions webhook trigger

**Dependencies:** None (first epic)

---

### Epic 2: Public Design Gallery Experience
**User Value:** Visitors can browse a curated gallery of Swiss design implementations, filter by style, read educational content, and discover featured themes.

**What Users Get:** The core value proposition - a living museum of design where hobbyists like Jordan can learn by exploring.

**PRD Coverage:** FR1, FR2, FR3, FR4, FR5, FR6, FR7, FR28, FR42, FR43, FR45
**Architecture Context:** `designStyles.js` data fetching, paginated style detail pages, responsive Tailwind layouts, Sanity image optimization

**Dependencies:** Epic 1 (Sanity CMS must be working)

---

### Epic 3: Privacy, Legal & Accessibility Compliance
**User Value:** Visitors have control over their data, can understand how their information is used, and all users (including those with disabilities) can access the site.

**What Users Get:** Cookie consent choice, legal transparency, accessible experience. Required for GDPR compliance and WCAG AA.

**PRD Coverage:** FR29, FR30, FR31, FR32, FR33, FR34, FR35, FR39, FR46, FR47, FR48, FR49, FR50
**Architecture Context:** Cookie consent JS module, legal page templates, GA4 consent mode integration, semantic HTML patterns, ARIA implementation

**Dependencies:** Epic 2 (gallery pages exist to apply accessibility to)

---

### Epic 4: Student Submission Pipeline
**User Value:** Students can submit their design implementations for review, with automatic notifications to the community.

**What Users Get:** Marcus can submit his Swiss-style portfolio, get a Discord ping, and wait for approval. The community sees new submissions land in #gallery-submissions.

**PRD Coverage:** FR8, FR9, FR10, FR11, FR12, FR13, FR14, FR15, FR16, FR36, FR38
**Architecture Context:** Submit form → Make webhook → Sanity (pending status) + Discord notification + Airtable CRM sync

**Dependencies:** Epic 1 (Sanity schemas), Epic 3 (consent handling)

---

### Epic 5: Instructor Review & Curation Workflow
**User Value:** Instructors can review pending submissions, approve/reject with feedback, and curate featured themes. Approved work appears in the public gallery.

**What Users Get:** Dr. Williams can manage submissions each morning. Alex can feature top work. Marcus gets notified when approved. The gallery grows with quality content.

**PRD Coverage:** FR17, FR18, FR19, FR20, FR21, FR22, FR23, FR24, FR25, FR26, FR27, FR37
**Architecture Context:** Sanity Studio native auth + interface for MVP, `isFeatured` boolean, approval webhook → Discord #announcements, Sanity content change → GitHub Actions rebuild

**Dependencies:** Epic 4 (submissions exist to review)

---

### Epic Dependency Flow

```
Epic 1: Foundation
    ↓
Epic 2: Gallery ←────────────────┐
    ↓                            │
Epic 3: Privacy & Accessibility  │
    ↓                            │
Epic 4: Submissions ─────────────┘
    ↓
Epic 5: Review & Curation
```

### Technical Context Summary

| Epic | Key Technologies | Architecture Sections |
|------|------------------|----------------------|
| 1 | Sanity Studio, GitHub Actions, eleventy-fetch | Data Architecture, Infrastructure |
| 2 | Nunjucks templates, Tailwind, Sanity Image URL | Frontend Architecture, Structure |
| 3 | Cookie consent JS, GA4 consent mode, ARIA | Privacy, Accessibility NFRs |
| 4 | Make webhook, Sanity mutations, Discord API | API & Communication Patterns |
| 5 | Sanity Studio UI, webhooks, status workflow | Authentication, Integration Points |

---

## Epic 1: Foundation & Sanity CMS Integration

**Epic Goal:** Establish the content management foundation and build pipeline that enables all subsequent features. After this epic, content can be managed in Sanity and automatically deployed to GitHub Pages.

**User Value:** Infrastructure foundation - no direct user-facing features, but required for everything else.

**FR Coverage:** FR40, FR41, FR44, FR45 (partial)

---

### Story 1.1: Initialize Sanity Studio Project

As a **developer**,
I want **a Sanity Studio project initialized in the repository**,
So that **we have a content management system ready for schema development**.

**Acceptance Criteria:**

**Given** I am in the project root directory
**When** I navigate to the `/studio` directory
**Then** I see a properly configured Sanity Studio project

**And** `studio/package.json` exists with Sanity dependencies
**And** `studio/sanity.config.js` exports a valid configuration
**And** `studio/sanity.cli.js` contains CLI configuration
**And** the project ID and dataset are configured (from environment or config)

**Given** I have valid Sanity credentials
**When** I run `npm run dev` in the `/studio` directory
**Then** Sanity Studio launches on localhost:3333
**And** I can log in with Sanity authentication

**Technical Notes:**
- Use Sanity v3 (latest stable)
- Project structure per Architecture section "Project Structure"
- Store `SANITY_PROJECT_ID` and `SANITY_DATASET` in environment variables
- Dataset should be `production` for MVP
- Studio can be deployed separately or accessed locally during development

**Prerequisites:** None (first story)

---

### Story 1.2: Create Sanity Content Schemas

As a **content editor**,
I want **Sanity schemas defined for all content types**,
So that **I can manage design styles, submissions, articles, and authors in the CMS**.

**Acceptance Criteria:**

**Given** Sanity Studio is initialized
**When** I open Sanity Studio
**Then** I see document types for: Design Style, Gallery Submission, Article, Author

**Schema: `designStyle`**
**Given** I create a new Design Style document
**Then** I can enter:
- `title` (string, required) - e.g., "Swiss International Style"
- `slug` (slug, required, generated from title)
- `description` (text) - brief overview
- `history` (block content) - rich text for origins/background
- `characteristics` (array of strings) - key design traits
- `colorPalette` (array of colors) - representative colors
- `typography` (object) - font recommendations
- `heroImage` (image with hotspot)
- `galleryImages` (array of images)

**Schema: `gallerySubmission`**
**Given** I create a new Gallery Submission document
**Then** I can enter:
- `submitterName` (string, required)
- `submitterEmail` (string, required, validation: email format)
- `styleRef` (reference to designStyle, required)
- `demoUrl` (url, required)
- `screenshot` (image, required)
- `authenticityExplanation` (text, required)
- `hasPublicDisplayConsent` (boolean, required)
- `hasMarketingConsent` (boolean)
- `status` (string: `pending` | `approved` | `rejected`, default: `pending`)
- `isFeatured` (boolean, default: false)
- `featuredBlurb` (text, only if isFeatured)
- `feedbackNotes` (text, for rejection feedback)
- `submittedAt` (datetime, required)
- `reviewedAt` (datetime)

**Schema: `article`**
**Given** I create a new Article document
**Then** I can enter:
- `title` (string, required)
- `slug` (slug, required)
- `author` (reference to author)
- `publishedAt` (datetime)
- `body` (block content with images)
- `relatedStyle` (reference to designStyle)

**Schema: `author`**
**Given** I create a new Author document
**Then** I can enter:
- `name` (string, required)
- `slug` (slug, required)
- `bio` (text)
- `image` (image)

**Technical Notes:**
- Follow naming conventions from Architecture: camelCase for all fields
- Use Sanity's built-in image type with hotspot/crop support
- Status field uses lowercase string enum per Architecture patterns
- Boolean fields prefixed with `is` or `has` per conventions
- Schemas located in `studio/schemas/` directory
- Export all schemas from `studio/schemas/index.js`

**Prerequisites:** Story 1.1

---

### Story 1.3: Set Up Eleventy Data Fetching Layer

As a **developer**,
I want **Eleventy configured to fetch content from Sanity at build time**,
So that **static pages are generated from CMS content**.

**Acceptance Criteria:**

**Given** Sanity schemas are deployed
**When** Eleventy builds the site
**Then** content is fetched from Sanity API and available in templates

**Data File: `src/_data/sanity.js`**
**Given** I need Sanity configuration
**When** I import from `sanity.js`
**Then** I get:
- `projectId` from environment variable
- `dataset` from environment variable
- `apiVersion` set to `2021-10-21`
- Helper function to build query URLs

**Data File: `src/_data/designStyles.js`**
**Given** the site builds
**When** Eleventy processes data files
**Then** `designStyles` global data contains all `designStyle` documents from Sanity
**And** data is cached for 1 hour (via @11ty/eleventy-fetch)
**And** if Sanity is unreachable, an empty array is returned (graceful degradation)
**And** console logs the error for debugging

**Data File: `src/_data/submissions.js`**
**Given** the site builds
**When** Eleventy processes data files
**Then** `submissions` global data contains `gallerySubmission` documents where `status == 'approved'`
**And** data includes resolved `styleRef` reference
**And** same caching and error handling as designStyles

**Technical Notes:**
- Install `@11ty/eleventy-fetch` if not present
- Use GROQ queries: `*[_type == "designStyle"]` and `*[_type == "gallerySubmission" && status == "approved"]{..., styleRef->}`
- Follow data file pattern from Architecture: try/catch with empty array fallback
- Environment variables: `SANITY_PROJECT_ID`, `SANITY_DATASET`
- Read-only public API (no token needed for published content)

**Prerequisites:** Story 1.2

---

### Story 1.4: Configure GitHub Actions Sanity Webhook Rebuild

As a **content editor**,
I want **the site to automatically rebuild when I publish content in Sanity**,
So that **changes appear on the live site without manual deployment**.

**Acceptance Criteria:**

**Given** I publish or update content in Sanity Studio
**When** the Sanity webhook fires
**Then** GitHub Actions triggers a new build
**And** the updated site deploys to GitHub Pages

**GitHub Actions Workflow: `.github/workflows/sanity-rebuild.yml`**
**Given** a `repository_dispatch` event with type `sanity-content-update`
**When** GitHub receives the webhook
**Then** the workflow:
1. Checks out the repository
2. Sets up Node.js
3. Installs dependencies
4. Runs Eleventy build
5. Deploys to GitHub Pages

**And** the workflow uses repository secrets for Sanity credentials
**And** build failures are reported in GitHub Actions UI

**Sanity Webhook Configuration:**
**Given** I am in the Sanity project settings
**When** I configure the webhook
**Then** it points to: `https://api.github.com/repos/{owner}/{repo}/dispatches`
**And** uses a GitHub Personal Access Token with `repo` scope
**And** triggers on document publish events
**And** sends payload: `{"event_type": "sanity-content-update"}`

**Technical Notes:**
- Workflow file per Architecture: `.github/workflows/sanity-rebuild.yml`
- Use `repository_dispatch` event trigger
- GitHub token stored as repository secret `GH_DISPATCH_TOKEN`
- Sanity webhook configured in Sanity Manage dashboard
- Consider adding a 5-minute debounce in Sanity to batch rapid changes

**Prerequisites:** Story 1.3

---

### Story 1.5: Migrate Existing Content to Sanity

As a **content editor**,
I want **existing design style data migrated to Sanity**,
So that **the gallery displays real content from the CMS**.

**Acceptance Criteria:**

**Given** the current site has mock/static design style data
**When** migration is complete
**Then** all existing design styles exist as documents in Sanity
**And** the Eleventy build uses Sanity data instead of static files
**And** the gallery displays the same content as before migration

**Migration Checklist:**
- [ ] Export current `designStyles` data structure
- [ ] Create corresponding documents in Sanity Studio
- [ ] Upload images to Sanity (automatic CDN hosting)
- [ ] Verify all fields populated correctly
- [ ] Test build with Sanity data
- [ ] Remove or archive old static data files

**Given** the migration is complete
**When** I view the gallery page
**Then** design styles display with:
- Correct titles and descriptions
- Working thumbnail images (from Sanity CDN)
- Accurate educational content
- Proper filtering by style category

**Technical Notes:**
- Can use Sanity CLI import or manual Studio entry
- Images uploaded to Sanity get automatic CDN URLs
- Old `src/_data/designStyles.js` mock data can be archived
- Verify Sanity Image URLs work in templates
- Test with both local dev and production build

**Prerequisites:** Story 1.3, Story 1.4

---

**Epic 1 Summary:**

| Story | Title | FRs | Key Deliverables |
|-------|-------|-----|------------------|
| 1.1 | Initialize Sanity Studio | FR41 | `/studio` directory, Sanity config |
| 1.2 | Create Sanity Schemas | FR41 | 4 document types defined |
| 1.3 | Eleventy Data Fetching | FR44, FR45 | `_data/*.js` files, eleventy-fetch |
| 1.4 | GitHub Actions Webhook | FR40 | `sanity-rebuild.yml`, webhook config |
| 1.5 | Content Migration | FR41 | Live data in Sanity |

**Stories Created:** 5
**FR Coverage:** FR40, FR41, FR44, FR45 (partial)

---

## Epic 2: Public Design Gallery Experience

**Epic Goal:** Deliver the core value proposition - a browsable, filterable gallery of Swiss design implementations with educational content. Visitors can explore, learn, and discover featured themes.

**User Value:** Hobbyists like Jordan can browse designs, filter by style, read educational content, and learn to recognize Swiss design "in the wild."

**FR Coverage:** FR1, FR2, FR3, FR4, FR5, FR6, FR7, FR28, FR42, FR43, FR45

---

### Story 2.1: Gallery Listing Page with Design Style Cards

As a **visitor**,
I want **to browse a gallery of design style entries**,
So that **I can discover different design styles and find ones that interest me**.

**Acceptance Criteria:**

**Given** I navigate to the gallery/homepage
**When** the page loads
**Then** I see a grid of design style cards

**And** each card displays:
- Thumbnail image (from Sanity CDN, optimized)
- Style name (e.g., "Swiss International Style")
- Brief description (truncated to ~100 characters)
- "View Details" link/button

**Given** there are multiple design styles in Sanity
**When** I view the gallery
**Then** cards are displayed in a responsive grid:
- Mobile (<640px): 1 column
- Tablet (640-1024px): 2 columns
- Desktop (>1024px): 3-4 columns

**Given** a design style has no thumbnail image
**When** the card renders
**Then** a placeholder/fallback is displayed (style-colored block or emoji)

**Technical Notes:**
- Use `designStyles` data from `src/_data/designStyles.js`
- Card component: `src/_includes/components/card.njk` or macro
- Images via Sanity Image URL with width parameter for optimization
- Tailwind responsive grid: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Follow empty state pattern: `{% if designStyles.length %}` check

**Prerequisites:** Epic 1 complete (Sanity data available)

---

### Story 2.2: Design Style Detail Pages with Educational Content

As a **visitor**,
I want **to view detailed information about a specific design style**,
So that **I can learn about its origins, characteristics, and how to recognize it**.

**Acceptance Criteria:**

**Given** I click on a design style card
**When** the detail page loads
**Then** I see comprehensive information about that style

**Page Content:**
- Hero image (full-width, from Sanity with hotspot crop)
- Style title (h1)
- Description/overview
- History section (rich text from Sanity block content)
- Characteristics list (bullet points)
- Color palette display (visual swatches)
- Typography recommendations
- Gallery of example images

**Given** I am on a style detail page
**When** I scroll down
**Then** I see educational content explaining:
- Origins and historical context
- Key visual characteristics
- What makes a design "authentically" this style
- Common mistakes to avoid

**Given** the style has related articles
**When** the page renders
**Then** I see links to related educational articles

**Technical Notes:**
- Page template: `src/pages/styles/style-detail.njk`
- Use Eleventy pagination to generate pages from `designStyles` data
- Slug-based URLs: `/styles/swiss-international/`
- Render Sanity block content with `@sanity/block-content-to-html` or portable text renderer
- Responsive images with srcset via Sanity Image URL parameters

**Prerequisites:** Story 2.1

---

### Story 2.3: Gallery Filtering by Design Style Category

As a **visitor**,
I want **to filter gallery entries by design style category**,
So that **I can focus on styles that interest me most**.

**Acceptance Criteria:**

**Given** I am on the gallery page
**When** the page loads
**Then** I see filter buttons/tabs for each design style category
**And** an "All" option is selected by default

**Given** I click on a style filter (e.g., "Swiss", "Bauhaus", "Brutalist")
**When** the filter is applied
**Then** only cards matching that style are displayed
**And** the active filter is visually highlighted
**And** the URL updates to reflect the filter (e.g., `?style=swiss`)

**Given** I click "All"
**When** the filter clears
**Then** all design style cards are displayed again

**Given** I share a filtered URL
**When** someone opens that URL
**Then** the filter is pre-applied based on the query parameter

**Technical Notes:**
- Client-side filtering with vanilla JavaScript (no framework needed)
- Filter buttons styled with Tailwind (active state with Swiss design accent)
- Use `data-style` attributes on cards for JS filtering
- URL query parameter: `?style=swiss` parsed on page load
- Graceful degradation: without JS, all cards show (progressive enhancement)

**Prerequisites:** Story 2.1

---

### Story 2.4: Featured Themes Section

As a **visitor**,
I want **to see featured/highlighted design submissions prominently displayed**,
So that **I can quickly discover the best examples of each style**.

**Acceptance Criteria:**

**Given** I visit the homepage
**When** the page loads
**Then** I see a "Featured Themes" section above or prominently within the gallery

**And** featured items display:
- Larger card treatment than regular gallery items
- Screenshot image (from approved submission)
- Style name
- Submitter name
- Featured blurb (curator's highlight text)
- "View Demo" button linking to external URL

**Given** there are multiple featured submissions
**When** the section renders
**Then** featured items are displayed in order set by curator (Sanity ordering)
**And** maximum of 3-6 featured items shown (configurable)

**Given** no submissions are marked as featured
**When** the page loads
**Then** the featured section is hidden (not empty state, just absent)

**Technical Notes:**
- Query: `*[_type == "gallerySubmission" && status == "approved" && isFeatured == true]`
- Featured section component: `src/_includes/components/featured-section.njk`
- Larger card variant with additional visual treatment
- Featured blurb from `featuredBlurb` field in Sanity
- Order by Sanity document order or custom `featuredOrder` field

**Prerequisites:** Story 2.1, Epic 1 (gallerySubmission schema)

---

### Story 2.5: Approved Submissions in Gallery

As a **visitor**,
I want **to see approved student submissions in the gallery**,
So that **I can explore real implementations and learn from peers**.

**Acceptance Criteria:**

**Given** submissions have been approved by instructors
**When** I view the gallery
**Then** I see approved submissions displayed alongside or within design style sections

**And** each submission card shows:
- Screenshot thumbnail
- Submission title or style name
- Submitter name
- "View Demo" button (external link)

**Given** a submission has status "pending" or "rejected"
**When** the gallery renders
**Then** that submission is NOT displayed (FR28)

**Given** I click "View Demo" on a submission
**When** the link opens
**Then** I am taken to the external demo URL in a new tab
**And** the link has `rel="noopener noreferrer"` for security

**Technical Notes:**
- Use `submissions` data from `src/_data/submissions.js` (pre-filtered to approved)
- Display within relevant style section or separate "Community Gallery" area
- External links: `target="_blank" rel="noopener noreferrer"`
- Card component reused with submission-specific fields
- Empty state if no approved submissions yet

**Prerequisites:** Story 2.1, Story 2.4

---

### Story 2.6: Responsive Mobile Experience

As a **mobile visitor**,
I want **the gallery to work well on my phone**,
So that **I can browse designs on the go**.

**Acceptance Criteria:**

**Given** I visit the site on a mobile device (<640px)
**When** the page loads
**Then** the layout adapts to single-column view
**And** navigation collapses to hamburger menu
**And** cards stack vertically with appropriate spacing
**And** touch targets are minimum 44x44px

**Given** I am on a tablet (640-1024px)
**When** viewing the gallery
**Then** cards display in 2-column grid
**And** detail pages have appropriate content width

**Given** I am on desktop (>1024px)
**When** viewing the gallery
**Then** cards display in 3-4 column grid
**And** content has max-width container for readability

**Given** images load on mobile
**When** viewing gallery cards
**Then** images are appropriately sized (not desktop-sized)
**And** lazy loading is enabled for below-fold images

**Technical Notes:**
- Tailwind breakpoints: sm (640px), md (768px), lg (1024px)
- Mobile-first CSS approach (base styles = mobile)
- Navigation component already has mobile hamburger (verify working)
- Sanity Image URL with `w=` parameter for responsive images
- `loading="lazy"` attribute on images below fold
- Test on actual mobile devices or responsive mode

**Prerequisites:** Stories 2.1-2.5

---

### Story 2.7: Educational Articles Display

As a **visitor**,
I want **to read educational articles about design principles**,
So that **I can deepen my understanding beyond just viewing examples**.

**Acceptance Criteria:**

**Given** articles exist in Sanity CMS
**When** I navigate to an article
**Then** I see the full article content with:
- Title (h1)
- Author name and bio (if linked)
- Published date
- Rich text body content
- Related design style link (if applicable)
- Images embedded in content

**Given** I am on a design style detail page
**When** related articles exist
**Then** I see a "Related Reading" section with article links

**Given** an article has an author
**When** the article renders
**Then** author name links to author profile or displays bio inline

**Technical Notes:**
- Article template: `src/pages/articles/article.njk` (if needed)
- Or embed articles within style detail pages
- Sanity block content renderer for rich text
- Author reference resolved in GROQ query: `author->`
- Optional: Article listing page (can be post-MVP)

**Prerequisites:** Story 2.2, Epic 1 (article schema)

---

**Epic 2 Summary:**

| Story | Title | FRs | Key Deliverables |
|-------|-------|-----|------------------|
| 2.1 | Gallery Listing Page | FR1, FR7 | Grid of design style cards |
| 2.2 | Design Style Detail Pages | FR3, FR4 | Paginated detail pages with educational content |
| 2.3 | Gallery Filtering | FR2 | Client-side filter by style category |
| 2.4 | Featured Themes Section | FR5 | Prominent featured submissions display |
| 2.5 | Approved Submissions | FR6, FR28 | Community submissions in gallery |
| 2.6 | Responsive Mobile | FR7 | Mobile/tablet/desktop layouts |
| 2.7 | Educational Articles | FR42, FR43, FR45 | Article display with authors |

**Stories Created:** 7
**FR Coverage:** FR1, FR2, FR3, FR4, FR5, FR6, FR7, FR28, FR42, FR43, FR45

---

## Epic 3: Privacy, Legal & Accessibility Compliance

**Epic Goal:** Ensure the site is GDPR-compliant with proper cookie consent, provides legal transparency through policy pages, and meets WCAG 2.1 AA accessibility standards for all users.

**User Value:** Visitors have control over their data, can understand how their information is used, and users with disabilities can fully access the site.

**FR Coverage:** FR29, FR30, FR31, FR32, FR33, FR34, FR35, FR39, FR46, FR47, FR48, FR49, FR50

---

### Story 3.1: Cookie Consent Banner

As a **visitor**,
I want **to accept or reject cookie consent for analytics tracking**,
So that **I have control over my privacy and data collection**.

**Acceptance Criteria:**

**Given** I visit the site for the first time
**When** the page loads
**Then** I see a cookie consent banner at the bottom of the screen

**And** the banner displays:
- Clear explanation of cookie usage
- "Accept" button (accepts all cookies)
- "Reject" button (rejects non-essential cookies)
- "Preferences" link (opens detailed settings)
- Link to Cookie Policy page

**Given** I click "Accept"
**When** consent is recorded
**Then** the banner disappears
**And** my preference is stored in localStorage
**And** analytics cookies are enabled

**Given** I click "Reject"
**When** consent is recorded
**Then** the banner disappears
**And** my preference is stored in localStorage
**And** NO analytics cookies are set
**And** NO tracking scripts load

**Given** I have previously made a choice
**When** I return to the site
**Then** the banner does NOT appear
**And** my previous preference is respected

**Technical Notes:**
- Component: `src/_includes/components/cookie-banner.njk`
- JavaScript: `src/scripts/cookie-consent.js`
- Store preference in localStorage key: `cookie-consent`
- Values: `accepted`, `rejected`, `preferences` (custom)
- Banner z-index high enough to overlay content
- Accessible: focusable buttons, ARIA labels

**Prerequisites:** None (can be developed in parallel with Epic 2)

---

### Story 3.2: Cookie Preferences Management

As a **visitor**,
I want **to modify my cookie preferences after my initial choice**,
So that **I can change my mind about data collection**.

**Acceptance Criteria:**

**Given** I previously accepted or rejected cookies
**When** I want to change my preference
**Then** I can access cookie settings via footer link "Cookie Settings"

**Given** I click "Cookie Settings" in the footer
**When** the preferences modal opens
**Then** I see:
- Current consent status
- Toggle for analytics cookies
- Toggle for marketing cookies (if applicable)
- "Save Preferences" button
- Link to full Cookie Policy

**Given** I change my preferences and save
**When** preferences are updated
**Then** localStorage is updated
**And** analytics are enabled/disabled accordingly
**And** confirmation message appears

**Given** I click "Preferences" on the initial banner
**When** the modal opens
**Then** I can make granular choices before initial consent

**Technical Notes:**
- Reuse cookie-consent.js with modal functionality
- Footer link: "Cookie Settings" or cookie icon
- Preferences stored as JSON: `{ analytics: true, marketing: false }`
- When preferences change, dynamically load/unload GA4 script
- Modal accessible: trap focus, ESC to close, ARIA

**Prerequisites:** Story 3.1

---

### Story 3.3: Google Analytics 4 with Consent Gating

As a **site owner**,
I want **analytics to only load after user consent**,
So that **we comply with GDPR requirements**.

**Acceptance Criteria:**

**Given** a visitor has NOT made a cookie choice
**When** the page loads
**Then** Google Analytics script does NOT load
**And** no tracking cookies are set
**And** no data is sent to GA4

**Given** a visitor clicks "Accept" on the cookie banner
**When** consent is granted
**Then** GA4 script loads dynamically
**And** pageview is tracked
**And** subsequent interactions are tracked

**Given** a visitor clicks "Reject"
**When** consent is denied
**Then** GA4 script never loads
**And** no tracking occurs

**Given** a returning visitor who previously accepted
**When** the page loads
**Then** GA4 loads automatically (consent already granted)
**And** pageview is tracked

**Technical Notes:**
- GA4 Measurement ID stored in environment variable or site config
- Use GA4 consent mode: `gtag('consent', 'default', { analytics_storage: 'denied' })`
- On consent: `gtag('consent', 'update', { analytics_storage: 'granted' })`
- Load GA4 script dynamically via JavaScript, not in HTML
- Test with browser dev tools Network tab to verify no requests before consent

**Prerequisites:** Story 3.1

---

### Story 3.4: Legal Pages (Privacy Policy, Terms, Cookies)

As a **visitor**,
I want **to view Privacy Policy, Terms of Service, and Cookie Policy pages**,
So that **I understand how my data is handled and my rights**.

**Acceptance Criteria:**

**Privacy Policy Page (`/legal/privacy/`):**
**Given** I navigate to the Privacy Policy page
**When** the page loads
**Then** I see comprehensive information about:
- What personal data is collected (name, email, submissions)
- How data is used (submission review, notifications, marketing if opted-in)
- Third-party services (Sanity, Discord, Airtable, GA4, Cloudflare)
- Data retention policy (indefinite for approved submissions)
- User rights (access, deletion, portability)
- Contact information for privacy requests
- Last updated date

**Terms of Service Page (`/legal/terms/`):**
**Given** I navigate to the Terms of Service page
**When** the page loads
**Then** I see:
- Acceptance of terms
- User responsibilities
- Submission guidelines and content ownership
- Prohibited conduct
- Limitation of liability
- Governing law
- Last updated date

**Cookie Policy Page (`/legal/cookies/`):**
**Given** I navigate to the Cookie Policy page
**When** the page loads
**Then** I see:
- What cookies are used
- Purpose of each cookie type (essential, analytics, marketing)
- How to manage cookies
- Third-party cookies (GA4)
- Link to cookie preferences

**Given** I am on any page
**When** I look at the footer
**Then** I see links to all three legal pages

**Technical Notes:**
- Templates: `src/pages/legal/privacy.njk`, `terms.njk`, `cookies.njk`
- Content can be static (hardcoded) or from Sanity (future enhancement)
- Use consistent legal page layout
- Footer component updated with legal links
- SEO: noindex these pages or leave indexed (your choice)

**Prerequisites:** None

---

### Story 3.5: Data Deletion Request Process

As a **user who submitted content**,
I want **to request deletion of my submitted data**,
So that **I can exercise my GDPR right to be forgotten**.

**Acceptance Criteria:**

**Given** I want to delete my submission data
**When** I look for deletion options
**Then** I find instructions on the Privacy Policy page

**And** the instructions explain:
- Email address to contact for deletion requests
- What information to include (name, email used for submission)
- Expected response timeframe
- What will be deleted (submission record, personal info)

**Given** an admin receives a deletion request
**When** they process the request
**Then** they can locate the submission in Sanity by email
**And** delete or anonymize the record
**And** confirm deletion to the requester

**Technical Notes:**
- For MVP: Manual deletion process via Sanity Studio
- Privacy Policy includes deletion request email/form
- Future enhancement: Self-service deletion portal
- Consider: Anonymize vs full delete (keep submission, remove PII)
- Log deletion requests for compliance records

**Prerequisites:** Story 3.4

---

### Story 3.6: Semantic HTML & Screen Reader Support

As a **visitor using a screen reader**,
I want **the site to use proper semantic HTML**,
So that **I can navigate and understand the content**.

**Acceptance Criteria:**

**Given** I am using a screen reader
**When** I navigate the site
**Then** I hear meaningful page structure:
- Page title read on load
- Landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`, `<aside>`
- Headings in logical hierarchy (h1 → h2 → h3, no skips)
- Lists use `<ul>`, `<ol>`, `<li>` appropriately
- Links have descriptive text (not "click here")

**Given** I navigate to any page
**When** the page loads
**Then** there is exactly ONE `<h1>` element
**And** subsequent headings follow hierarchy

**Given** I encounter a form
**When** I interact with it
**Then** all inputs have associated `<label>` elements
**And** error messages are announced via `aria-describedby`

**Given** I encounter an image
**When** the screen reader reaches it
**Then** meaningful alt text is read
**Or** decorative images have `alt=""`

**Technical Notes:**
- Audit all templates for semantic structure
- Use `<article>` for gallery cards, submissions
- Use `<section>` with aria-labelledby for page sections
- Verify heading hierarchy with browser dev tools
- Test with VoiceOver (Mac) or NVDA (Windows)

**Prerequisites:** Epic 2 (gallery pages exist)

---

### Story 3.7: Skip Links & Keyboard Navigation

As a **keyboard-only user**,
I want **skip links and full keyboard navigation**,
So that **I can efficiently navigate without a mouse**.

**Acceptance Criteria:**

**Given** I press Tab when a page first loads
**When** focus moves
**Then** the first focusable element is a "Skip to main content" link
**And** the link is visually hidden until focused
**And** activating it moves focus to `<main>` element

**Given** I navigate using only keyboard
**When** I Tab through the page
**Then** all interactive elements are focusable in logical order:
- Skip link → Navigation links → Main content → Footer links
**And** focus order matches visual order

**Given** I focus on any interactive element
**When** it receives focus
**Then** there is a visible focus indicator (outline or ring)
**And** the indicator has sufficient contrast

**Given** I open a modal (e.g., cookie preferences)
**When** the modal is open
**Then** focus is trapped within the modal
**And** pressing ESC closes the modal
**And** focus returns to the trigger element

**Technical Notes:**
- Skip link in `base.njk` layout, first element in body
- CSS: `.skip-link { position: absolute; left: -9999px; } .skip-link:focus { left: 0; }`
- Tailwind focus-visible utilities: `focus-visible:ring-2`
- Test by unplugging mouse and navigating entire site
- Modal focus trap via JavaScript

**Prerequisites:** Story 3.1 (modals), Story 3.6

---

### Story 3.8: ARIA Labels & Interactive Element Accessibility

As a **visitor using assistive technology**,
I want **interactive elements to have proper ARIA labels**,
So that **I understand what each element does**.

**Acceptance Criteria:**

**Given** I encounter a button with only an icon
**When** my screen reader reads it
**Then** I hear a descriptive label (e.g., "Open menu" not "Button")

**Given** I encounter form inputs
**When** I focus on them
**Then** I hear:
- Field label
- Required status (if required)
- Current value
- Error message (if invalid)

**Given** I interact with the mobile hamburger menu
**When** I activate it
**Then** `aria-expanded` updates to reflect open/closed state
**And** screen reader announces the state change

**Given** I encounter a loading state
**When** content is loading
**Then** `aria-busy="true"` is set on the loading region
**And** I hear "Loading" or equivalent announcement

**Technical Notes:**
- Icon buttons: `aria-label="Menu"` or visually hidden text
- Form fields: `aria-required="true"`, `aria-invalid="true"`
- Expandable menus: `aria-expanded`, `aria-controls`
- Live regions for dynamic content: `aria-live="polite"`
- Use `role` only when semantic HTML isn't sufficient

**Prerequisites:** Story 3.6, Story 3.7

---

### Story 3.9: Color Contrast & Visual Accessibility

As a **visitor with low vision**,
I want **sufficient color contrast throughout the site**,
So that **I can read all text and see interactive elements**.

**Acceptance Criteria:**

**Given** any text on the site
**When** I measure the contrast ratio
**Then** normal text (< 18pt) has at least 4.5:1 contrast ratio
**And** large text (≥ 18pt or 14pt bold) has at least 3:1 contrast ratio

**Given** any interactive element (buttons, links)
**When** I measure contrast
**Then** the element has at least 3:1 contrast against its background
**And** focus indicators have at least 3:1 contrast

**Given** information is conveyed by color
**When** I view the page
**Then** the information is also conveyed by text, icon, or pattern
**And** color is never the ONLY indicator

**Given** I have reduced motion preferences set
**When** I view the site
**Then** animations are reduced or disabled
**And** transitions respect `prefers-reduced-motion` media query

**Technical Notes:**
- Audit existing Tailwind color palette with contrast checker
- Swiss design already favors high contrast (black/white) - verify accents
- Use tools: WebAIM Contrast Checker, axe DevTools
- Add `prefers-reduced-motion` media query to CSS
- Error states: red color + icon + text (not just red)

**Prerequisites:** Epic 2 (pages exist to audit)

---

**Epic 3 Summary:**

| Story | Title | FRs | Key Deliverables |
|-------|-------|-----|------------------|
| 3.1 | Cookie Consent Banner | FR29 | Banner with Accept/Reject/Preferences |
| 3.2 | Cookie Preferences Management | FR30 | Settings modal, footer link |
| 3.3 | GA4 with Consent Gating | FR31, FR39 | Dynamic GA4 loading after consent |
| 3.4 | Legal Pages | FR32, FR33, FR34 | Privacy, Terms, Cookies pages |
| 3.5 | Data Deletion Process | FR35 | Deletion instructions, manual process |
| 3.6 | Semantic HTML | FR50 | Landmarks, headings, structure |
| 3.7 | Skip Links & Keyboard Nav | FR46 | Skip link, focus management |
| 3.8 | ARIA Labels | FR48 | Labels for interactive elements |
| 3.9 | Color Contrast | FR47, FR49 | 4.5:1 ratio, reduced motion support |

**Stories Created:** 9
**FR Coverage:** FR29, FR30, FR31, FR32, FR33, FR34, FR35, FR39, FR46, FR47, FR48, FR49, FR50

---

## Epic 4: Student Submission Pipeline

**Epic Goal:** Enable students to submit their design implementations through a structured form, with automatic processing that creates a Sanity record, notifies the Discord community, and syncs to the CRM.

**User Value:** Marcus can submit his Swiss-style portfolio and get immediate feedback that it was received. The Discord community sees new submissions land in #gallery-submissions.

**FR Coverage:** FR8, FR9, FR10, FR11, FR12, FR13, FR14, FR15, FR16, FR36, FR38

---

### Story 4.1: Submission Form Page

As a **student**,
I want **a structured form to submit my design demo**,
So that **I can share my work for potential inclusion in the gallery**.

**Acceptance Criteria:**

**Given** I navigate to the Submit page (`/submit/`)
**When** the page loads
**Then** I see a submission form with clear instructions

**And** the form includes these fields:
- Name (text input, required)
- Email (email input, required, .edu validation encouraged)
- Design Style (dropdown select, required, populated from Sanity designStyles)
- Demo URL (url input, required)
- Screenshot (file upload, required, accepts jpg/png/webp)
- Authenticity Explanation (textarea, required, min 50 characters)

**Given** I view the form
**When** I look at each field
**Then** each field has:
- Clear label
- Placeholder text or example
- Helper text explaining what's expected
- Required indicator (asterisk or text)

**Given** I have not filled required fields
**When** I try to submit
**Then** validation errors appear inline next to each invalid field
**And** focus moves to the first invalid field
**And** the form does NOT submit

**Technical Notes:**
- Template: `src/pages/submit.njk`
- Style dropdown populated from `designStyles` global data
- Client-side validation before submission
- Form styled with Tailwind, consistent with site design
- Accessible: labels linked to inputs, error messages with aria-describedby

**Prerequisites:** Epic 1 (designStyles data available)

---

### Story 4.2: Consent Checkboxes (Public Display & Marketing)

As a **student**,
I want **to provide consent for public display and optionally opt-in to marketing**,
So that **I understand and control how my submission is used**.

**Acceptance Criteria:**

**Given** I am filling out the submission form
**When** I scroll to the consent section
**Then** I see two separate checkboxes:

**Public Display Consent (Required):**
- Checkbox with label: "I consent to my name and submission being displayed publicly if approved"
- This checkbox is REQUIRED to submit
- Link to Privacy Policy for details

**Marketing Opt-In (Optional):**
- Checkbox with label: "I'd like to receive updates and news about MyWebClass.org"
- This checkbox is UNCHECKED by default (GDPR requirement)
- This is NOT required to submit

**Given** I have not checked the public display consent
**When** I try to submit
**Then** validation error appears: "You must consent to public display to submit"
**And** the form does NOT submit

**Given** I leave marketing unchecked
**When** I submit
**Then** the form submits successfully
**And** `hasMarketingConsent: false` is sent to the backend

**Technical Notes:**
- Two separate form fields per GDPR bundling rules
- Public display consent: `name="consent"` → `hasPublicDisplayConsent`
- Marketing opt-in: `name="marketing"` → `hasMarketingConsent`
- Marketing checkbox MUST be unchecked by default
- Clear visual separation between required and optional consent

**Prerequisites:** Story 4.1

---

### Story 4.3: Screenshot Upload with Preview

As a **student**,
I want **to upload a screenshot of my design with preview**,
So that **I can verify the correct image before submitting**.

**Acceptance Criteria:**

**Given** I click the screenshot upload field
**When** I select an image file
**Then** I see a preview of the selected image
**And** the file name is displayed
**And** file size is shown (e.g., "2.3 MB")

**Given** I upload an image
**When** the image is too large (> 5MB)
**Then** an error message appears: "Image must be under 5MB"
**And** the file is rejected

**Given** I upload a non-image file
**When** the file type is invalid
**Then** an error message appears: "Please upload a JPG, PNG, or WebP image"
**And** the file is rejected

**Given** I want to change my screenshot
**When** I click "Remove" or select a new file
**Then** the previous preview is replaced
**And** the new image is shown

**Technical Notes:**
- Accept: `.jpg, .jpeg, .png, .webp`
- Max file size: 5MB (configurable)
- Client-side preview using FileReader API
- Image will be uploaded to Sanity via Make (base64 or multipart)
- Consider image compression client-side if needed
- Accessible: button has proper label, status announced

**Prerequisites:** Story 4.1

---

### Story 4.4: Form Submission to Make Webhook

As a **student**,
I want **my submission to be processed when I click submit**,
So that **my design enters the review queue**.

**Acceptance Criteria:**

**Given** I have filled out the form correctly
**When** I click "Submit"
**Then** the submit button shows loading state ("Submitting...")
**And** the button is disabled to prevent double submission
**And** form data is sent to the Make webhook URL

**Make Webhook Payload:**
```json
{
  "name": "Alex Chen",
  "email": "alex@njit.edu",
  "style": "swiss-international",
  "demoUrl": "https://example.com/demo",
  "screenshot": "[base64 or file reference]",
  "explanation": "Grid-based layout with Helvetica...",
  "consent": true,
  "marketing": false,
  "timestamp": "2025-01-15T14:30:00Z"
}
```

**Given** the submission succeeds
**When** Make returns success
**Then** I see a success message: "Thank you! Your submission has been received."
**And** the form resets or redirects to a confirmation page
**And** instructions appear: "We'll review your submission and notify you by email."

**Given** the submission fails
**When** Make returns an error or times out
**Then** I see an error message: "Something went wrong. Please try again."
**And** my form data is preserved (not lost)
**And** the submit button re-enables

**Technical Notes:**
- Make webhook URL stored in environment variable or site config
- Use `fetch()` with `POST` method, `Content-Type: application/json`
- Handle network errors gracefully
- Consider honeypot field for spam prevention
- Log errors to console for debugging

**Prerequisites:** Story 4.1, Story 4.2, Story 4.3

---

### Story 4.5: Make Scenario - Create Sanity Document

As a **system**,
I want **Make to create a Sanity document from form submissions**,
So that **submissions are stored in the CMS for review**.

**Acceptance Criteria:**

**Given** Make receives a form submission
**When** the scenario processes the data
**Then** a new `gallerySubmission` document is created in Sanity

**Sanity Document Created:**
- `submitterName`: from form `name`
- `submitterEmail`: from form `email`
- `styleRef`: reference to designStyle document (matched by slug)
- `demoUrl`: from form `demoUrl`
- `screenshot`: uploaded to Sanity assets
- `authenticityExplanation`: from form `explanation`
- `hasPublicDisplayConsent`: from form `consent`
- `hasMarketingConsent`: from form `marketing`
- `status`: `"pending"` (always)
- `submittedAt`: current timestamp
- `isFeatured`: `false`
- `reviewedAt`: null

**Given** the Sanity mutation succeeds
**When** the document is created
**Then** Make continues to next steps (Discord, Airtable)
**And** returns success to the form

**Given** the Sanity mutation fails
**When** an error occurs
**Then** Make logs the error
**And** returns failure to the form (or queues for retry)

**Technical Notes:**
- Make module: Sanity "Create a Document" or HTTP module with mutations API
- Style reference: Look up designStyle by slug, get `_id` for reference
- Image upload: Use Sanity assets API or base64 inline
- Sanity API token with write permissions (stored in Make)
- Test with Make scenario execution logs

**Prerequisites:** Story 4.4, Epic 1 (Sanity schemas)

---

### Story 4.6: Discord Webhook - New Submission Notification

As a **community member**,
I want **to see notifications in Discord when new submissions arrive**,
So that **I can follow along with what's being submitted**.

**Acceptance Criteria:**

**Given** a new submission is created in Sanity
**When** Make processes the submission
**Then** a Discord webhook message is sent to #gallery-submissions

**Discord Message Format:**
```
🎨 New Submission: "{style}" by {name}
Demo: {demoUrl}
```

**And** the message includes:
- Emoji indicator (🎨)
- Design style name
- Submitter name
- Clickable demo URL

**Given** Discord webhook succeeds
**When** the message is posted
**Then** community members can see and react to it

**Given** Discord webhook fails
**When** an error occurs
**Then** the failure is logged in Make
**And** the overall submission still succeeds (Discord is non-blocking)

**Technical Notes:**
- Discord webhook URL created in Discord server settings
- Webhook URL stored in Make scenario
- Use Discord webhook module or HTTP POST
- Message format: plain text or embed (embed is prettier)
- Non-blocking: submission success doesn't depend on Discord

**Prerequisites:** Story 4.5, Discord server with webhook configured

---

### Story 4.7: Airtable CRM Sync

As a **site administrator**,
I want **submission data synced to Airtable**,
So that **we have a CRM record for contact management and tracking**.

**Acceptance Criteria:**

**Given** a new submission is created in Sanity
**When** Make processes the submission
**Then** a record is created in the Airtable base

**Airtable Record Fields:**
- Name: submitter name
- Email: submitter email
- Style: design style name
- Demo URL: link to demo
- Submission Date: timestamp
- Status: "Pending" (text or single select)
- Marketing Opt-In: checkbox (true/false)
- Sanity ID: document ID for reference

**Given** Airtable sync succeeds
**When** the record is created
**Then** admins can view submission in Airtable
**And** can use Airtable for email campaigns (if marketing consent)

**Given** Airtable sync fails
**When** an error occurs
**Then** the failure is logged in Make
**And** the overall submission still succeeds (CRM is non-blocking)
**And** failed syncs can be retried manually

**Technical Notes:**
- Airtable base and table pre-configured
- Make module: Airtable "Create a Record"
- Airtable API key stored in Make
- Consider batch sync for reliability (Make's built-in retry)
- Marketing opt-in important for GDPR compliance in email outreach

**Prerequisites:** Story 4.5, Airtable base configured

---

### Story 4.8: Email Validation and .edu Encouragement

As a **site administrator**,
I want **email addresses validated with .edu encouragement**,
So that **we encourage institutional submissions while allowing all users**.

**Acceptance Criteria:**

**Given** I enter an email address
**When** the email is in standard format
**Then** it passes basic validation (contains @ and domain)

**Given** I enter a .edu email address
**When** the form validates
**Then** a positive indicator appears: "✓ Educational institution email"

**Given** I enter a non-.edu email address
**When** the form validates
**Then** a soft warning appears: "We encourage .edu emails, but all are welcome"
**And** the form still allows submission (not blocked)

**Given** I enter an invalid email format
**When** the form validates
**Then** an error appears: "Please enter a valid email address"
**And** the form does NOT submit

**Technical Notes:**
- Basic regex validation for email format
- Check for `.edu` suffix for encouragement message
- Soft validation: encourage but don't require .edu
- Future enhancement: actual .edu domain verification
- Style encouragement message differently than errors (info vs error)

**Prerequisites:** Story 4.1

---

**Epic 4 Summary:**

| Story | Title | FRs | Key Deliverables |
|-------|-------|-----|------------------|
| 4.1 | Submission Form Page | FR8, FR9, FR10, FR11, FR12, FR13 | Form with all required fields |
| 4.2 | Consent Checkboxes | FR14, FR15 | Public display + marketing opt-in |
| 4.3 | Screenshot Upload | FR12 | File upload with preview, validation |
| 4.4 | Form to Make Webhook | FR16 | POST to Make, success/error handling |
| 4.5 | Make → Sanity Document | FR16 | Create gallerySubmission in Sanity |
| 4.6 | Discord Notification | FR36 | Post to #gallery-submissions |
| 4.7 | Airtable CRM Sync | FR38 | Create CRM record |
| 4.8 | Email Validation | FR9 | .edu encouragement, format validation |

**Stories Created:** 8
**FR Coverage:** FR8, FR9, FR10, FR11, FR12, FR13, FR14, FR15, FR16, FR36, FR38

---

## Epic 5: Instructor Review & Curation Workflow

**Epic Goal:** Enable instructors to review pending submissions, approve/reject with feedback, and curate featured themes. Approved work appears in the public gallery, and the community is notified.

**User Value:** Dr. Williams can review submissions each morning via Sanity Studio. Alex can feature top work. Marcus gets notified when approved. The gallery grows with quality content.

**FR Coverage:** FR17, FR18, FR19, FR20, FR21, FR22, FR23, FR24, FR25, FR26, FR27, FR37

**MVP Simplification:** For MVP, Instructor and Curator roles are combined. All review/curation happens in Sanity Studio native interface (no custom dashboard).

---

### Story 5.1: Instructor Authentication via Sanity Studio

As an **instructor**,
I want **to authenticate and access the review dashboard**,
So that **I can manage student submissions securely**.

**Acceptance Criteria:**

**Given** I am an authorized instructor
**When** I navigate to Sanity Studio URL
**Then** I see the Sanity login screen

**Given** I enter valid credentials
**When** I authenticate
**Then** I am logged into Sanity Studio
**And** I see the content dashboard with document types

**Given** I am not an authorized user
**When** I try to access Sanity Studio
**Then** I cannot log in
**And** I see an authentication error

**Given** I am logged into Sanity Studio
**When** I look at available document types
**Then** I see "Gallery Submissions" in the menu
**And** I can click to view submissions

**Technical Notes:**
- Use Sanity's native authentication (Google, GitHub, email/password)
- Add instructors as team members in Sanity project settings
- Role: Editor or Administrator (can edit documents)
- No custom auth implementation needed for MVP
- Sanity Studio URL: `https://{project}.sanity.studio/` or localhost:3333

**Prerequisites:** Epic 1 (Sanity Studio deployed)

---

### Story 5.2: View Pending Submissions Queue

As an **instructor**,
I want **to view a queue of pending submissions**,
So that **I can see what needs to be reviewed**.

**Acceptance Criteria:**

**Given** I am logged into Sanity Studio
**When** I navigate to Gallery Submissions
**Then** I see a list of all submissions

**Given** I want to see only pending submissions
**When** I filter by status = "pending"
**Then** only pending submissions are displayed
**And** the count of pending items is visible

**Given** there are pending submissions
**When** I view the list
**Then** each item shows:
- Submitter name
- Design style
- Submission date
- Status badge (pending/approved/rejected)

**Given** I want to sort submissions
**When** I click the sort option
**Then** I can sort by submission date (newest/oldest)

**Technical Notes:**
- Sanity Studio's built-in list view with filters
- Configure `gallerySubmission` schema with list preview
- Add `orderings` to schema for date sorting
- Filter by `status` field in Studio interface
- Custom Studio structure can enhance UX (optional)

**Prerequisites:** Story 5.1, Epic 1 (gallerySubmission schema)

---

### Story 5.3: View Submission Details

As an **instructor**,
I want **to view full details of a submission**,
So that **I can evaluate it for approval**.

**Acceptance Criteria:**

**Given** I click on a submission in the list
**When** the detail view opens
**Then** I see all submission information:
- Submitter name and email
- Design style (with link to style document)
- Demo URL (clickable, opens in new tab)
- Screenshot (full size, zoomable)
- Authenticity explanation (full text)
- Consent status (public display, marketing)
- Submission date and time
- Current status

**Given** I want to view the actual demo
**When** I click the Demo URL
**Then** the demo opens in a new browser tab
**And** I can evaluate it against Swiss design principles

**Given** I want to see the screenshot larger
**When** I click on the screenshot
**Then** I can view it at full resolution

**Technical Notes:**
- Sanity Studio document editor view
- Configure field display in schema
- URL field renders as clickable link
- Image field has built-in preview/zoom
- Reference field shows linked designStyle

**Prerequisites:** Story 5.2

---

### Story 5.4: Approve Submission

As an **instructor**,
I want **to approve a submission**,
So that **quality work appears in the public gallery**.

**Acceptance Criteria:**

**Given** I am viewing a pending submission
**When** I change the status field to "approved"
**Then** the status updates to "approved"
**And** `reviewedAt` is set to current timestamp

**Given** I save the approved submission
**When** the document is published
**Then** the submission will appear in the public gallery on next rebuild
**And** the Sanity webhook triggers a site rebuild

**Given** the approval is processed
**When** the site rebuilds
**Then** the submission appears in the gallery
**And** the submitter's name is displayed publicly

**Technical Notes:**
- Status field: string with predefined options in schema
- Set `reviewedAt` manually or via Sanity document action
- Sanity webhook triggers GitHub Actions rebuild
- Gallery data query filters for `status == "approved"`
- Consider custom document action for "Approve" button (optional enhancement)

**Prerequisites:** Story 5.3, Story 1.4 (webhook rebuild)

---

### Story 5.5: Reject Submission with Feedback

As an **instructor**,
I want **to reject a submission with feedback notes**,
So that **students understand why and can improve**.

**Acceptance Criteria:**

**Given** I am viewing a pending submission
**When** I change the status field to "rejected"
**Then** the `feedbackNotes` field becomes prominent/required

**Given** I enter feedback notes
**When** I write my rejection reason
**Then** I can explain:
- What's missing from the design
- How it doesn't meet Swiss style criteria
- Suggestions for improvement

**Given** I save the rejected submission
**When** the document is published
**Then** the status is "rejected"
**And** `reviewedAt` is set to current timestamp
**And** feedback notes are saved

**Given** a submission is rejected
**When** the site rebuilds
**Then** the submission does NOT appear in the public gallery

**Technical Notes:**
- `feedbackNotes` field in schema (text type)
- Consider making notes required when status = rejected (validation)
- Rejected submissions hidden from public but retained in Sanity
- Future enhancement: email notification to submitter with feedback

**Prerequisites:** Story 5.3

---

### Story 5.6: Filter Submissions by Status

As an **instructor**,
I want **to filter submissions by status**,
So that **I can manage my review workflow efficiently**.

**Acceptance Criteria:**

**Given** I am in the Gallery Submissions list
**When** I use the filter controls
**Then** I can filter by:
- All (no filter)
- Pending (needs review)
- Approved (in gallery)
- Rejected (declined)

**Given** I select "Pending" filter
**When** the list updates
**Then** only pending submissions are shown
**And** the filter state is visible/indicated

**Given** I want to see approved submissions
**When** I select "Approved" filter
**Then** I see all approved submissions
**And** I can identify which are featured

**Technical Notes:**
- Sanity Studio built-in filter by field value
- Configure in schema or Studio structure
- Status field as string enum enables filtering
- Badge/indicator for featured items in list

**Prerequisites:** Story 5.2

---

### Story 5.7: Mark Submission as Featured

As an **instructor/curator**,
I want **to mark approved submissions as featured**,
So that **the best work is prominently displayed on the homepage**.

**Acceptance Criteria:**

**Given** I am viewing an approved submission
**When** I toggle the `isFeatured` checkbox to true
**Then** the submission is marked as featured

**Given** I feature a submission
**When** I can optionally add a featured blurb
**Then** the `featuredBlurb` field accepts my highlight text
**And** this text appears on the homepage featured section

**Given** I save the featured submission
**When** the site rebuilds
**Then** the submission appears in the Featured Themes section
**And** displays with the featured blurb

**Given** I want to un-feature a submission
**When** I toggle `isFeatured` to false
**Then** the submission remains approved but not featured
**And** disappears from Featured section on rebuild

**Technical Notes:**
- `isFeatured` boolean field in schema
- `featuredBlurb` text field (conditional on isFeatured)
- Featured query: `status == "approved" && isFeatured == true`
- Limit featured count in template (3-6 items)

**Prerequisites:** Story 5.4, Story 2.4 (Featured section)

---

### Story 5.8: Manage Featured Themes Order

As a **curator**,
I want **to manage the display order of featured themes**,
So that **the homepage showcases work in my preferred arrangement**.

**Acceptance Criteria:**

**Given** multiple submissions are featured
**When** I want to control their order
**Then** I can set a `featuredOrder` number on each

**Given** I set `featuredOrder` values
**When** the site rebuilds
**Then** featured items display in ascending order (1, 2, 3...)
**And** items without order appear last

**Given** I want to promote a submission to first position
**When** I set its `featuredOrder` to 1
**Then** it appears first in the Featured section

**Technical Notes:**
- Add `featuredOrder` number field to schema (optional)
- Alternative: Use Sanity document ordering in Studio
- Query: `*[...] | order(featuredOrder asc)`
- If no explicit ordering, fall back to `submittedAt` or Sanity order

**Prerequisites:** Story 5.7

---

### Story 5.9: Discord Notification on Approval

As a **community member**,
I want **to see notifications when submissions are approved**,
So that **I can celebrate and view new gallery additions**.

**Acceptance Criteria:**

**Given** an instructor approves a submission
**When** the status changes to "approved"
**Then** a Discord webhook fires to #announcements

**Discord Approval Message Format:**
```
🎉 Approved! "{style}" by {name} is now in the gallery!
View: {galleryUrl}
```

**And** the message includes:
- Celebration emoji (🎉)
- Design style name
- Submitter name
- Link to gallery or submission detail page

**Given** Discord webhook succeeds
**When** the message posts
**Then** community members see the announcement
**And** can congratulate the submitter

**Given** Discord webhook fails
**When** an error occurs
**Then** the approval still succeeds (non-blocking)
**And** the error is logged

**Technical Notes:**
- Trigger: Sanity webhook on document publish with status change
- Option 1: Sanity webhook → Make scenario → Discord
- Option 2: Sanity webhook → Netlify/Vercel function → Discord
- Filter webhook to only fire on approval (check previous vs new status)
- Non-blocking: approval succeeds regardless of Discord status

**Prerequisites:** Story 5.4, Discord #announcements channel

---

### Story 5.10: Admin Page with Sanity Studio Link

As an **instructor**,
I want **an admin page on the site linking to Sanity Studio**,
So that **I can easily access the review dashboard**.

**Acceptance Criteria:**

**Given** I am an instructor
**When** I navigate to `/admin/`
**Then** I see an admin landing page

**And** the page displays:
- "Instructor Dashboard" heading
- Explanation of the review process
- Prominent button/link to Sanity Studio
- Quick stats (if available): pending count, total submissions

**Given** I click the Sanity Studio link
**When** the link opens
**Then** I am taken to Sanity Studio (new tab)
**And** can log in if not already authenticated

**Given** I am a regular visitor
**When** I navigate to `/admin/`
**Then** I see the page (no auth on static site)
**But** clicking Sanity Studio requires Sanity authentication

**Technical Notes:**
- Template: `src/pages/admin.njk`
- Static page with links - no server-side auth needed
- Sanity Studio URL configurable in site config
- Optional: Display submission counts from Sanity data
- Page can include review guidelines/criteria

**Prerequisites:** Story 5.1

---

**Epic 5 Summary:**

| Story | Title | FRs | Key Deliverables |
|-------|-------|-----|------------------|
| 5.1 | Instructor Auth | FR17 | Sanity Studio login for instructors |
| 5.2 | Pending Queue | FR18 | Filterable list of submissions |
| 5.3 | View Details | FR19 | Full submission detail view |
| 5.4 | Approve Submission | FR20 | Status change to approved |
| 5.5 | Reject with Feedback | FR21, FR22 | Status change + feedback notes |
| 5.6 | Filter by Status | FR23 | Filter controls in Studio |
| 5.7 | Mark as Featured | FR24, FR25 | isFeatured toggle + blurb |
| 5.8 | Featured Order | FR26, FR27 | featuredOrder field |
| 5.9 | Discord Approval | FR37 | Post to #announcements |
| 5.10 | Admin Page | FR17 | /admin/ with Studio link |

**Stories Created:** 10
**FR Coverage:** FR17, FR18, FR19, FR20, FR21, FR22, FR23, FR24, FR25, FR26, FR27, FR37

---

## Final Validation Summary

### Epic & Story Breakdown Complete

| Epic | Title | Stories | FRs Covered |
|------|-------|---------|-------------|
| 1 | Foundation & Sanity CMS Integration | 5 | FR40, FR41, FR44, FR45 |
| 2 | Public Design Gallery Experience | 7 | FR1-7, FR28, FR42, FR43, FR45 |
| 3 | Privacy, Legal & Accessibility | 9 | FR29-35, FR39, FR46-50 |
| 4 | Student Submission Pipeline | 8 | FR8-16, FR36, FR38 |
| 5 | Instructor Review & Curation | 10 | FR17-27, FR37 |
| **Total** | | **39** | **50 FRs (100%)** |

### Validation Checklist

**FR Coverage Validation:**
- [x] All 50 Functional Requirements mapped to specific stories
- [x] Every FR has at least one story with complete acceptance criteria
- [x] No orphaned requirements

**Architecture Integration Validation:**
- [x] Sanity CMS integration fully specified (Epic 1)
- [x] Make webhook pattern implemented (Epic 4)
- [x] GitHub Actions rebuild configured (Story 1.4)
- [x] Data fetching with eleventy-fetch (Story 1.3)
- [x] Naming conventions followed (camelCase for Sanity, kebab-case for files)

**User Journey Validation:**
- [x] Jordan (Hobbyist): Epic 2 enables browsing, filtering, learning
- [x] Marcus (Vibe Coder): Epics 2, 4, 5 enable discover → submit → approval
- [x] Dr. Williams (Instructor): Epic 5 enables review workflow
- [x] Alex (Curator): Epic 5 enables featured management
- [x] Discord Community: Stories 4.6, 5.9 enable notifications

**Story Quality Validation:**
- [x] All stories sized for single dev agent completion
- [x] Acceptance criteria in BDD format (Given/When/Then)
- [x] Technical implementation guidance included
- [x] Prerequisites clearly defined
- [x] No forward dependencies

**Compliance Validation:**
- [x] GDPR: Cookie consent, data deletion, separate marketing consent
- [x] WCAG 2.1 AA: Semantic HTML, keyboard nav, ARIA, contrast

### Architecture Alignment Summary

| Decision | Stories Implementing |
|----------|---------------------|
| Sanity CMS | 1.1, 1.2, 1.3, 1.5 |
| Make Webhook | 4.4, 4.5, 4.6, 4.7 |
| eleventy-fetch | 1.3 |
| GitHub Actions | 1.4 |
| Tailwind CSS | 2.1, 2.6, 3.9 |
| GA4 Consent Mode | 3.3 |
| Discord Webhooks | 4.6, 5.9 |
| Airtable CRM | 4.7 |

### Implementation Sequence

**Recommended Order:**
```
Epic 1 (Foundation) → Epic 2 (Gallery) → Epic 3 (Compliance) → Epic 4 (Submissions) → Epic 5 (Review)
```

**Critical Path:**
1. Story 1.1-1.3 (Sanity setup) - Blocks all data-dependent work
2. Story 1.4 (Webhook rebuild) - Enables content updates
3. Story 2.1-2.2 (Gallery core) - Core user value
4. Story 4.1-4.5 (Submission pipeline) - Student journey
5. Story 5.1-5.4 (Review workflow) - Instructor journey

---

## Document Complete

**Epic and Story Creation Workflow:** COMPLETED

**Output Generated:** `docs/epics.md`

**Summary:**
- **5 Epics** delivering incremental user value
- **39 Stories** with complete acceptance criteria
- **50 FRs** fully covered (100%)
- **Full Architecture alignment** with PRD and Architecture documents

**Ready for:** Sprint Planning and Phase 4 Implementation

---

_Use the `create-story` workflow to generate individual story implementation plans from this epic breakdown._

_Use the `sprint-planning` workflow to create sprint tracking from these epics and stories._
