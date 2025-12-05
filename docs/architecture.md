---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8]
inputDocuments:
  - docs/prd.md
workflowType: 'architecture'
lastStep: 8
status: 'complete'
completedAt: '2025-12-05'
project_name: 'MyWebClass'
user_name: 'Jay'
date: '2025-12-05'
---

# Architecture Decision Document

_This document builds collaboratively through step-by-step discovery. Sections are appended as we work through each architectural decision together._

## Project Context Analysis

### Requirements Overview

**Functional Requirements:**
41 functional requirements spanning 7 categories. The core value proposition is a gallery of authentic design style implementations with educational content, supported by a student submission workflow with instructor moderation.

Key functional areas:
- **Content consumption** (FR1-FR8): Gallery browsing, detail pages, external demo links
- **Submission pipeline** (FR9-FR16): Form capture → Sanity storage → instructor review → public display
- **Content management** (FR17-FR28): Sanity Studio for both submission review and content authoring
- **Integrations** (FR29-FR32): Discord notifications, CRM sync, analytics
- **Compliance** (FR33-FR37): GDPR consent, privacy policy

**Non-Functional Requirements:**
- Performance: Lighthouse 90+, FCP <1.5s, LCP <2.5s, CLS <0.1, CSS <50KB
- Security: HTTPS-only submissions, Sanity auth, consent-gated third-party scripts
- Accessibility: WCAG AA compliance
- Build: CI pipeline <10min, automated deployment on main merge
- Reliability: Graceful degradation for all integrations

**Scale & Complexity:**

- Primary domain: Static web application with headless CMS
- Complexity level: Medium
- Estimated architectural components: 8-10 (pages, layouts, components, Sanity schemas, client-side scripts, CI pipeline, integrations)

### Technical Constraints & Dependencies

**Pre-determined technology stack:**
- Eleventy (11ty) for static site generation
- Sanity CMS for content and submissions
- GitHub Pages for hosting
- GitHub Actions for CI/CD
- Playwright for E2E testing

**External dependencies:**
- Sanity API (build-time GROQ queries + runtime mutations for form)
- Discord webhook API
- CRM API (via Zapier/Make)
- Google Analytics 4

### Cross-Cutting Concerns Identified

1. **GDPR Compliance:** Affects analytics loading, form submission consent, privacy documentation
2. **Accessibility (WCAG AA):** Impacts all UI components, navigation, forms, content structure
3. **Performance Budget:** Constrains CSS architecture, image handling, JavaScript footprint
4. **Build Pipeline:** Linting, testing, Lighthouse checks gate all deployments
5. **Graceful Degradation:** All integrations must fail silently without blocking core functionality

## Starter Template Evaluation

### Primary Technology Domain

Static web application with headless CMS (Eleventy v3.1.2 + Sanity CMS), based on PRD-specified stack.

### Starter Options Considered

| Option | Description | Fit |
|--------|-------------|-----|
| Sanity + 11ty Blog Starter | Official monorepo with pre-configured Sanity | Poor (blog-centric) |
| ixartz/Eleventy-Starter-Boilerplate | Production-ready with Tailwind, ESLint, Netlify CMS | Moderate (wrong CMS) |
| Fresh Eleventy + Manual Sanity | Clean slate with purpose-built integration | Best |

### Selected Approach: Fresh Eleventy + Manual Sanity Integration

**Rationale:**
- Gallery/submission model doesn't fit blog starter schemas
- Sanity integration is simple (client + `_data` files with GROQ)
- No cruft to delete—every dependency serves the requirements
- Full control over project structure and patterns

**Initialization Commands:**

```bash
# Initialize Eleventy project
mkdir mywebclass && cd mywebclass
npm init -y
npm install @11ty/eleventy@latest

# Add Sanity client for data fetching
npm install @sanity/client

# Add dev dependencies for quality
npm install -D eslint prettier stylelint
```

### Architectural Decisions to Make Manually

Since we're not using a starter, these decisions remain open:
- **Styling solution:** CSS approach (vanilla, PostCSS, Sass, Tailwind)
- **Templating language:** Nunjucks, Liquid, or other
- **Project structure:** Folder organization conventions
- **Build tooling:** Additional processing (if any)
- **Testing setup:** Playwright configuration

These will be addressed in subsequent architectural decisions.

## Core Architectural Decisions

### Decision Summary

| Category | Decision | Rationale |
|----------|----------|-----------|
| Templating | Nunjucks | 11ty community standard, powerful macros |
| Styling | Tailwind CSS v4 | Rapid development, JIT purges unused CSS |
| Project Structure | Monorepo | Single repo with `/studio` for Sanity |
| Sanity Schemas | 4 content types | designStyle, gallerySubmission, article, author |
| Client-side JS | Vanilla ES modules | Minimal footprint (~10KB), no bundler |
| CI/CD | GitHub Actions | Full pipeline with quality gates |

### Data Architecture

**CMS:** Sanity CMS (hosted)
- Build-time data fetching via `@sanity/client` + GROQ queries
- Runtime mutations for form submissions only
- Portable Text for rich content fields

**Schemas:**
- `designStyle` - Gallery entries with educational content
- `gallerySubmission` - Student submissions with status workflow (submitted → approved/rejected)
- `article` - Standalone educational content
- `author` - Content attribution

**Data Flow:**
```
[Sanity Studio] → [Sanity API] → [Build-time GROQ] → [Static HTML]
[Submission Form] → [Sanity Mutations API] → [gallerySubmission document]
```

### Frontend Architecture

**Templating:** Nunjucks
- Layouts in `src/_includes/layouts/`
- Components in `src/_includes/components/`
- Data files in `src/_data/` (Sanity queries)

**Styling:** Tailwind CSS v4
- Input: `src/assets/css/main.css`
- Output: Purged, minified CSS (<50KB budget)
- Build integration via npm scripts (concurrent dev, sequential build)

**Client-side JavaScript:** Vanilla ES modules
- `consent.js` - Cookie banner, localStorage, GA4 gating
- `submit-form.js` - Validation, Sanity mutation POST
- `analytics.js` - GA4 initialization after consent
- No bundler, progressive enhancement

### Project Structure

```
mywebclass/
├── src/
│   ├── _data/              # Sanity GROQ queries
│   ├── _includes/
│   │   ├── layouts/        # base.njk, page.njk
│   │   └── components/     # nav.njk, card.njk, consent-banner.njk
│   ├── assets/
│   │   ├── css/            # Tailwind input
│   │   └── js/             # consent.js, submit-form.js, analytics.js
│   ├── pages/              # about.njk, privacy.njk, submit.njk
│   └── styles/             # Design style pages (from Sanity)
├── studio/                 # Sanity Studio
├── tests/                  # Playwright E2E
├── .github/workflows/      # CI/CD
├── _site/                  # Build output
├── eleventy.config.js
├── tailwind.config.js
└── package.json
```

### Infrastructure & Deployment

**Hosting:** GitHub Pages (static output from `_site/`)

**CI/CD Pipeline (GitHub Actions):**
```
PR:   lint → build → test → lighthouse
Main: lint → build → test → lighthouse → deploy
```

**Quality Gates:**
- ESLint, Stylelint, Markdownlint must pass
- Playwright tests must pass
- Lighthouse scores ≥90

**Environment Secrets:**
- `SANITY_PROJECT_ID`
- `SANITY_DATASET`
- `SANITY_TOKEN` (for mutations)
- `GA4_MEASUREMENT_ID`
- `DISCORD_WEBHOOK_URL`

### Security Considerations

- Form submissions over HTTPS only
- Sanity mutation token stored in GitHub Secrets, never exposed client-side
- Client-side form uses Sanity's public mutation endpoint with write token server-side or edge function
- GA4 only loads after explicit user consent
- No user authentication in MVP (Sanity Studio handles admin auth)

## Implementation Patterns & Consistency Rules

### Pattern Summary

These patterns ensure AI agents and developers write compatible, consistent code.

| Category | Convention |
|----------|------------|
| File naming | kebab-case (except Sanity schemas: camelCase) |
| Templates | includes for partials, macros for parameterized components |
| Data fetching | Plural file names, shared client, explicit GROQ projection |
| Client JS | Object literal modules, data-* attributes for DOM hooks |
| Tailwind | Ordered classes, @layer for reusables, always focus states |
| Forms | Client validators, aria-* for errors, role="alert" for messages |

### File & Directory Naming

**Convention:** kebab-case for all files except Sanity schemas

```
✓ src/_includes/components/style-card.njk
✓ src/assets/js/submit-form.js
✓ src/pages/privacy-policy.njk
✓ studio/schemas/designStyle.js  (Sanity convention)

✗ src/_includes/components/StyleCard.njk
✗ src/assets/js/submitForm.js
```

### Nunjucks Template Patterns

**Layout inheritance:**
```nunjucks
{% extends "layouts/base.njk" %}
{% block content %}...{% endblock %}
```

**Simple partials (nav, footer):**
```nunjucks
{% include "components/nav.njk" %}
```

**Parameterized components:**
```nunjucks
{% from "components/button.njk" import button %}
{{ button("View Demo", style.demoUrl, "primary") }}
```

### Sanity Data Fetching Patterns

**Data file structure:**
```javascript
// src/_data/designStyles.js
const client = require('../lib/sanity-client.js');

module.exports = async function() {
  return await client.fetch(`
    *[_type == "designStyle"] | order(title asc) {
      _id,
      title,
      slug,
      "imageUrl": image.asset->url,
      demoUrl
    }
  `);
};
```

**Rules:**
- Data file names match content type (plural)
- Shared client in `src/lib/sanity-client.js`
- Always project specific fields (never `*[_type == "foo"]` without projection)
- Use GROQ dereferencing for assets: `"imageUrl": image.asset->url`

### Client-Side JavaScript Patterns

**Module structure:**
```javascript
const ModuleName = {
  STORAGE_KEY: 'key-name',

  init() { /* ... */ },
  methodName() { /* ... */ },
};

document.addEventListener('DOMContentLoaded', () => ModuleName.init());
```

**DOM selection (use data attributes):**
```javascript
const form = document.querySelector('[data-form="submission"]');
```

**Error handling:**
```javascript
try {
  const response = await fetch(url, options);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return await response.json();
} catch (error) {
  console.error('Context:', error);
  this.showError('User-friendly message');
}
```

### Tailwind CSS Patterns

**Class ordering:** Layout → Spacing → Sizing → Typography → Colors → Effects → States
```html
<div class="flex items-center gap-4 p-6 w-full text-lg text-gray-800 bg-white rounded-lg shadow-md hover:shadow-lg">
```

**Reusable components (use @layer):**
```css
@layer components {
  .btn-primary {
    @apply inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500;
  }
}
```

**Accessibility:** Always include focus states
```html
<a class="... focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
```

### Form & Error Handling Patterns

**Validation:**
```javascript
const validators = {
  required: (value) => value.trim() !== '' || 'This field is required',
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Valid email required',
  url: (value) => /^https?:\/\/.+/.test(value) || 'Valid URL required',
};
```

**Error display:**
```html
<input aria-invalid="true" aria-describedby="field-error" class="border-red-500">
<p id="field-error" class="mt-1 text-sm text-red-600">Error message</p>
```

**Form states:**
- **Submitting:** Disable button, show "Submitting..."
- **Success:** `role="alert"` green message, reset form
- **Error:** `role="alert"` red message, preserve user input

### Enforcement Guidelines

**All AI Agents MUST:**
- Follow file naming conventions (kebab-case, Sanity exception)
- Use data-* attributes for JavaScript DOM hooks (not classes/IDs)
- Include focus states on all interactive elements
- Use aria-* attributes for form validation errors
- Project specific fields in GROQ queries (no wildcards)
- Use the shared Sanity client (never instantiate new clients)

## Project Structure & Boundaries

### Complete Project Directory Structure

```
mywebclass/
├── .github/
│   └── workflows/
│       └── ci.yml                    # Lint → Build → Test → Lighthouse → Deploy
├── src/
│   ├── _data/
│   │   ├── designStyles.js           # GROQ: all design styles
│   │   ├── approvedSubmissions.js    # GROQ: approved gallery submissions
│   │   └── site.js                   # Site metadata
│   ├── _includes/
│   │   ├── layouts/
│   │   │   ├── base.njk              # HTML shell, meta, scripts
│   │   │   ├── page.njk              # Standard page layout
│   │   │   └── style-detail.njk      # Design style detail layout
│   │   └── components/
│   │       ├── nav.njk               # Site navigation
│   │       ├── footer.njk            # Site footer
│   │       ├── style-card.njk        # Gallery card component
│   │       ├── submission-card.njk   # Approved submission card
│   │       ├── consent-banner.njk    # GDPR cookie banner
│   │       └── button.njk            # Reusable button macro
│   ├── assets/
│   │   ├── css/
│   │   │   └── main.css              # Tailwind input + @layer components
│   │   ├── js/
│   │   │   ├── consent.js            # Cookie consent + GA4 gating
│   │   │   ├── submit-form.js        # Form validation + Sanity mutation
│   │   │   └── analytics.js          # GA4 initialization
│   │   └── images/
│   │       └── logo.svg              # Site logo
│   ├── lib/
│   │   └── sanity-client.js          # Shared Sanity client instance
│   ├── pages/
│   │   ├── about.njk                 # About MyWebClass
│   │   ├── submit.njk                # Submission form page
│   │   ├── privacy.njk               # Privacy policy
│   │   └── cookies.njk               # Cookie policy
│   ├── styles/
│   │   ├── styles.json               # Collection definition
│   │   └── styles.njk                # Template for /styles/{slug}
│   ├── gallery.njk                   # Gallery listing page
│   └── index.njk                     # Homepage
├── studio/
│   ├── schemas/
│   │   ├── index.js                  # Schema exports
│   │   ├── designStyle.js            # Design style content type
│   │   ├── gallerySubmission.js      # Submission with status workflow
│   │   ├── article.js                # Educational articles
│   │   └── author.js                 # Content attribution
│   ├── sanity.config.js              # Studio configuration
│   ├── sanity.cli.js                 # CLI configuration
│   └── package.json                  # Studio dependencies
├── tests/
│   ├── e2e/
│   │   ├── gallery.spec.js           # Gallery browsing tests
│   │   ├── submission.spec.js        # Form submission tests
│   │   └── consent.spec.js           # Cookie consent tests
│   └── fixtures/
│       └── test-data.json            # Test fixtures
├── _site/                            # Build output (gitignored)
├── .env.example                      # Environment template
├── .eslintrc.js                      # ESLint config
├── .prettierrc                       # Prettier config
├── .stylelintrc.json                 # Stylelint config
├── .gitignore
├── eleventy.config.js                # Eleventy configuration
├── tailwind.config.js                # Tailwind configuration
├── playwright.config.js              # Playwright configuration
├── package.json                      # Project dependencies & scripts
└── README.md                         # Project documentation
```

### Architectural Boundaries

**Data Flow Boundaries:**

```
┌─────────────────────────────────────────────────────────────────┐
│                        BUILD TIME                                │
│  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐    │
│  │ Sanity API   │────▶│ _data/*.js   │────▶│ Static HTML  │    │
│  │ (GROQ fetch) │     │ (queries)    │     │ (_site/)     │    │
│  └──────────────┘     └──────────────┘     └──────────────┘    │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                        RUNTIME (Browser)                         │
│  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐    │
│  │ User Form    │────▶│ submit-form  │────▶│ Sanity API   │    │
│  │ Input        │     │ .js          │     │ (mutation)   │    │
│  └──────────────┘     └──────────────┘     └──────────────┘    │
│                                                                  │
│  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐    │
│  │ User Consent │────▶│ consent.js   │────▶│ GA4 / No GA4 │    │
│  └──────────────┘     └──────────────┘     └──────────────┘    │
└─────────────────────────────────────────────────────────────────┘
```

**Component Boundaries:**

| Boundary | Description |
|----------|-------------|
| `src/` ↔ `studio/` | Complete separation; studio is its own npm project |
| `_data/` ↔ templates | Data files export arrays/objects consumed by Nunjucks |
| `assets/js/` ↔ DOM | JS uses `data-*` attributes, never touches template logic |
| `_includes/layouts/` ↔ pages | Pages extend layouts, define content blocks |
| `_includes/components/` ↔ pages | Components included/imported, never standalone |

### Requirements to Structure Mapping

**Gallery & Content (FR1-FR8):**

| Requirement | File(s) |
|-------------|---------|
| FR1: Browse gallery | `src/gallery.njk`, `src/_data/designStyles.js` |
| FR2: Detail page | `src/styles/styles.njk` (pagination template) |
| FR3: Live demo link | `src/_includes/components/style-card.njk` |
| FR4-FR6: Educational content | `studio/schemas/designStyle.js` (Portable Text fields) |
| FR7: Featured on homepage | `src/index.njk`, `src/_data/designStyles.js` (featured filter) |
| FR8: Navigation | `src/_includes/components/nav.njk` |

**Submission Workflow (FR9-FR16):**

| Requirement | File(s) |
|-------------|---------|
| FR9-FR15: Submission form | `src/pages/submit.njk`, `src/assets/js/submit-form.js` |
| FR16: Confirmation | `src/assets/js/submit-form.js` (success state) |

**Review & Moderation (FR17-FR21):**

| Requirement | File(s) |
|-------------|---------|
| FR17-FR19: Review in Studio | `studio/schemas/gallerySubmission.js` |
| FR20-FR21: Approved only | `src/_data/approvedSubmissions.js` (status filter) |

**Integrations (FR29-FR32):**

| Requirement | File(s) |
|-------------|---------|
| FR29: Discord notification | Sanity webhook (dashboard config, no code) |
| FR30: CRM sync | Zapier/Make (external, no code) |
| FR31-FR32: Analytics | `src/assets/js/analytics.js`, `src/assets/js/consent.js` |

**Compliance (FR33-FR37):**

| Requirement | File(s) |
|-------------|---------|
| FR33-FR34: Cookie banner | `src/_includes/components/consent-banner.njk`, `src/assets/js/consent.js` |
| FR35-FR36: Policy pages | `src/pages/privacy.njk`, `src/pages/cookies.njk` |
| FR37: Respect consent | `src/assets/js/consent.js` → `src/assets/js/analytics.js` |

### Integration Points

**External Integrations:**

| Service | Integration Method | Configuration |
|---------|-------------------|---------------|
| Sanity API | `@sanity/client` | `SANITY_PROJECT_ID`, `SANITY_DATASET` |
| Discord | Sanity webhook | Webhook URL in Sanity dashboard |
| CRM | Zapier/Make | External automation (no code) |
| GA4 | gtag.js | `GA4_MEASUREMENT_ID`, consent-gated |
| GitHub Pages | GitHub Actions | `.github/workflows/ci.yml` |

**npm Scripts (package.json):**

```json
{
  "scripts": {
    "dev": "npm-run-all -p dev:*",
    "dev:11ty": "eleventy --serve",
    "dev:css": "tailwindcss -i src/assets/css/main.css -o _site/assets/css/main.css --watch",
    "build": "npm-run-all build:css build:11ty",
    "build:css": "tailwindcss -i src/assets/css/main.css -o _site/assets/css/main.css --minify",
    "build:11ty": "eleventy",
    "lint": "npm-run-all -p lint:*",
    "lint:js": "eslint src/**/*.js",
    "lint:css": "stylelint src/**/*.css",
    "lint:md": "markdownlint docs/**/*.md",
    "test": "playwright test",
    "lighthouse": "lhci autorun"
  }
}
```

## Architecture Validation Results

### Coherence Validation ✅

**Decision Compatibility:**
- Eleventy v3.1.2 + Nunjucks + Tailwind CSS v4: Fully compatible
- Sanity CMS for unified content and submissions: Coherent data model
- Vanilla ES modules without bundler: Aligns with static site simplicity
- GitHub Actions CI/CD with quality gates: Supports all NFRs

**Pattern Consistency:**
- All naming conventions are consistent (kebab-case, Sanity exception)
- Template patterns support the chosen architecture
- Data fetching patterns align with Sanity + Eleventy integration

**Structure Alignment:**
- Project structure supports all architectural decisions
- Clear boundaries between frontend and studio
- Integration points well-defined

### Requirements Coverage ✅

**Functional Requirements:**
- FR1-FR8 (Gallery & Content): Fully supported by Sanity + Eleventy
- FR9-FR16 (Submission): Supported by gallerySubmission schema + mutation API
- FR17-FR21 (Review): Supported by Sanity Studio workflow
- FR22-FR28 (Content Management): Fully supported by Sanity schemas
- FR29-FR32 (Integrations): Discord webhook, CRM via Zapier, GA4 consent-gated
- FR33-FR37 (Compliance): Cookie consent, privacy pages, GDPR patterns
- FR38-FR41 (Navigation): Standard Eleventy navigation patterns

**Non-Functional Requirements:**
- Performance: Tailwind purging, static HTML, <50KB CSS budget
- Security: HTTPS-only, Sanity token in secrets, consent gating
- Accessibility: WCAG AA patterns defined (focus states, aria-*)
- Build: CI pipeline with lint, test, Lighthouse gates

### Implementation Readiness ✅

**Decision Completeness:**
- All critical decisions documented with specific versions
- Implementation patterns comprehensive with code examples
- Consistency rules clear and enforceable

**Structure Completeness:**
- Complete project tree with all files defined
- Requirements mapped to specific file locations
- Component boundaries clearly established

### Migration Requirements

**IMPORTANT:** Current Bolt implementation differs from target architecture. Migration needed:

**Phase 1: Infrastructure**
- [ ] Upgrade Eleventy from v2.0.1 to v3.1.2
- [ ] Install and configure Tailwind CSS v4
- [ ] Restructure folders: `js/` → `assets/js/`, `css/` → `assets/css/`
- [ ] Rename `partials/` → `components/`

**Phase 2: Sanity Schema**
- [ ] Create `studio/schemas/gallerySubmission.js` schema
- [ ] Update `studio/schemas/index.js` to export new schema
- [ ] Deploy schema changes to Sanity

**Phase 3: Submission Migration**
- [ ] Replace Supabase submission flow with Sanity mutations
- [ ] Remove Supabase dependencies
- [ ] Update `submit-form.js` to use Sanity API
- [ ] Migrate existing submissions from Supabase to Sanity (if any)

**Phase 4: Styling Migration**
- [ ] Convert plain CSS to Tailwind utility classes
- [ ] Create `@layer components` for reusable patterns
- [ ] Remove old CSS files

### Architecture Completeness Checklist

**✅ Requirements Analysis**
- [x] Project context thoroughly analyzed
- [x] Scale and complexity assessed
- [x] Technical constraints identified
- [x] Cross-cutting concerns mapped

**✅ Architectural Decisions**
- [x] Critical decisions documented with versions
- [x] Technology stack fully specified
- [x] Integration patterns defined
- [x] Performance considerations addressed

**✅ Implementation Patterns**
- [x] Naming conventions established
- [x] Structure patterns defined
- [x] Communication patterns specified
- [x] Process patterns documented

**✅ Project Structure**
- [x] Complete directory structure defined
- [x] Component boundaries established
- [x] Integration points mapped
- [x] Requirements to structure mapping complete

### Architecture Readiness Assessment

**Overall Status:** READY FOR IMPLEMENTATION (after migration)

**Confidence Level:** High

**Key Strengths:**
- Unified data model with Sanity for both content and submissions
- Clear separation between frontend and CMS
- Comprehensive patterns prevent AI agent conflicts
- Full requirements coverage with explicit file mappings

**Migration Notes:**
- Current Bolt implementation uses Supabase for submissions
- Architecture targets Sanity-only approach per PRD specifications
- Migration plan provided in phases above

## Architecture Completion Summary

### Workflow Completion

**Architecture Decision Workflow:** COMPLETED ✅
**Total Steps Completed:** 8
**Date Completed:** 2025-12-05
**Document Location:** docs/architecture.md

### Final Architecture Deliverables

**Complete Architecture Document**
- All architectural decisions documented with specific versions
- Implementation patterns ensuring AI agent consistency
- Complete project structure with all files and directories
- Requirements to architecture mapping
- Validation confirming coherence and completeness

**Implementation Ready Foundation**
- 6 core architectural decisions made
- 6 implementation pattern categories defined
- 8+ architectural components specified
- 41 functional requirements fully supported

**AI Agent Implementation Guide**
- Technology stack with verified versions
- Consistency rules that prevent implementation conflicts
- Project structure with clear boundaries
- Integration patterns and communication standards

### Implementation Handoff

**For AI Agents:**
This architecture document is your complete guide for implementing MyWebClass. Follow all decisions, patterns, and structures exactly as documented.

**First Implementation Priority:**
Execute migration phases before new feature development:
1. Infrastructure migration (Eleventy upgrade, Tailwind setup)
2. Sanity schema addition (gallerySubmission)
3. Supabase → Sanity submission migration
4. CSS → Tailwind migration

**Development Sequence:**
1. Complete migration phases above
2. Initialize project structure per architecture
3. Implement core architectural foundations
4. Build features following established patterns
5. Maintain consistency with documented rules

### Quality Assurance Checklist

**✅ Architecture Coherence**
- [x] All decisions work together without conflicts
- [x] Technology choices are compatible
- [x] Patterns support the architectural decisions
- [x] Structure aligns with all choices

**✅ Requirements Coverage**
- [x] All functional requirements are supported
- [x] All non-functional requirements are addressed
- [x] Cross-cutting concerns are handled
- [x] Integration points are defined

**✅ Implementation Readiness**
- [x] Decisions are specific and actionable
- [x] Patterns prevent agent conflicts
- [x] Structure is complete and unambiguous
- [x] Examples are provided for clarity

---

**Architecture Status:** READY FOR IMPLEMENTATION ✅

**Next Phase:** Begin migration and implementation using the architectural decisions and patterns documented herein.

**Document Maintenance:** Update this architecture when major technical decisions are made during implementation.
