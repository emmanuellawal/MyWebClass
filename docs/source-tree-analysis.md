# MyWebClass.org - Source Tree Analysis

## Complete Directory Structure

```
MyWebClass/
│
├── .bmad/                          # BMM workflow configuration
│   ├── bmm/                        # BMM module files
│   └── core/                       # Core BMAD system files
│
├── .claude/                        # Claude Code configuration
│
├── .github/
│   └── workflows/
│       └── ci.yml                  # GitHub Actions CI pipeline
│
├── docs/                           # Project documentation
│   ├── bmm-workflow-status.yaml    # Workflow tracking
│   ├── initial-mockup.jsx          # Initial UI mockup
│   ├── initial-plan.md             # 16-phase implementation plan
│   ├── requirements.md             # S373 project brief
│   └── swiss-lineage.md            # UI specifications document
│
├── public/                         # Build output (generated)
│   ├── about/
│   ├── admin/
│   ├── legal/
│   ├── scripts/
│   ├── styles/
│   └── submit/
│
├── src/                            # SOURCE CODE ROOT
│   │
│   ├── _data/                      # DATA LAYER
│   │   ├── designStyles.js         # Design style entries (mock)
│   │   ├── site.js                 # Global site configuration
│   │   └── submissions.js          # Submission entries (mock)
│   │
│   ├── _includes/                  # TEMPLATE COMPONENTS
│   │   │
│   │   ├── layouts/                # Page layouts
│   │   │   ├── base.njk            # HTML document shell
│   │   │   └── page.njk            # Standard content page
│   │   │
│   │   ├── components/             # Reusable components
│   │   │   ├── cookie-banner.njk   # GDPR consent banner
│   │   │   ├── footer.njk          # 4-column footer
│   │   │   └── navigation.njk      # Header with nav
│   │   │
│   │   └── macros/                 # Nunjucks macros
│   │       ├── badge.njk           # Status badges
│   │       ├── button.njk          # Button component
│   │       ├── card.njk            # Gallery card
│   │       └── form-field.njk      # Form inputs
│   │
│   ├── pages/                      # PAGE TEMPLATES
│   │   ├── index.njk               # Homepage
│   │   ├── about.njk               # About page
│   │   ├── admin.njk               # Instructor dashboard
│   │   ├── submit.njk              # Submission form
│   │   ├── 404.njk                 # Not found page
│   │   │
│   │   ├── legal/                  # Legal pages
│   │   │   ├── cookies.njk         # Cookie policy
│   │   │   ├── privacy.njk         # Privacy policy
│   │   │   └── terms.njk           # Terms of service
│   │   │
│   │   └── styles/                 # Design style pages
│   │       └── style-detail.njk    # Paginated style template
│   │
│   ├── scripts/                    # CLIENT-SIDE JAVASCRIPT
│   │   ├── cookie-consent.js       # Cookie banner logic
│   │   └── navigation.js           # Mobile menu toggle
│   │
│   └── styles/                     # CSS
│       └── main.css                # Tailwind entry point
│
├── .eleventy.js                    # Eleventy configuration
├── .env                            # Environment variables
├── package.json                    # Dependencies and scripts
├── package-lock.json               # Locked dependency versions
├── postcss.config.js               # PostCSS configuration
├── tailwind.config.js              # Tailwind CSS configuration
└── README.md                       # Project readme
```

## Critical Directories

### `/src/_data/` - Data Layer
**Purpose:** Provides data to templates at build time

| File | Purpose | Used By |
|------|---------|---------|
| `site.js` | Global config (title, URL, stats) | All pages via `site` variable |
| `designStyles.js` | Design style entries | Homepage gallery, style detail pages |
| `submissions.js` | Submission entries | Admin dashboard |

### `/src/_includes/layouts/` - Layout Templates
**Purpose:** Define page structure and HTML shell

| File | Purpose | Extends |
|------|---------|---------|
| `base.njk` | HTML document, head, body, nav, footer | - |
| `page.njk` | Standard page with title header | `base.njk` |

### `/src/_includes/components/` - Reusable Components
**Purpose:** Shared UI elements included in layouts

| File | Purpose | Lines |
|------|---------|-------|
| `navigation.njk` | Header nav bar with mobile menu | 70 |
| `footer.njk` | 4-column footer with links | 50 |
| `cookie-banner.njk` | GDPR consent dialog | 35 |

### `/src/_includes/macros/` - Nunjucks Macros
**Purpose:** Parameterized, reusable template components

| Macro | Parameters | Usage |
|-------|------------|-------|
| `button(text, href, variant, type, classes)` | Creates button/link | Forms, CTAs |
| `galleryCard(style)` | Creates gallery card | Homepage, gallery |
| `input/select/textarea/checkbox(...)` | Form field components | Submit form |
| `statusBadge(status)` | Status badge | Admin dashboard |

### `/src/pages/` - Page Templates
**Purpose:** Individual page content

| Page | Path | Layout | Key Features |
|------|------|--------|--------------|
| `index.njk` | `/` | base | Hero, stats, gallery, how it works, CTA |
| `about.njk` | `/about/` | page | Mission, for students/educators |
| `submit.njk` | `/submit/` | base | Multi-field form, file upload |
| `admin.njk` | `/admin/` | base | Tabs, table, stats grid |
| `404.njk` | `/404.html` | base | Centered error message |
| `legal/*.njk` | `/legal/*/` | page | Legal content pages |
| `styles/style-detail.njk` | `/styles/[slug]/` | base | Paginated from designStyles |

### `/src/scripts/` - Client-Side JavaScript
**Purpose:** Browser-side interactivity

| File | Purpose | Size |
|------|---------|------|
| `cookie-consent.js` | Cookie banner, localStorage, analytics loading | 82 lines |
| `navigation.js` | Mobile menu toggle, click outside, escape key | 53 lines |

### `/src/styles/` - CSS Source
**Purpose:** Styling via Tailwind CSS

| File | Sections | Purpose |
|------|----------|---------|
| `main.css` | base, components, utilities | Design system implementation |

## Entry Points

### Build Entry Points

| Entry Point | Type | Purpose |
|-------------|------|---------|
| `.eleventy.js` | Configuration | Eleventy build configuration |
| `src/pages/index.njk` | Template | Homepage (permalink: `/`) |
| `src/styles/main.css` | CSS | Tailwind CSS entry |

### Runtime Entry Points

| Entry Point | Load Location | Purpose |
|-------------|---------------|---------|
| `/scripts/navigation.js` | `base.njk` | Mobile nav functionality |
| `/scripts/cookie-consent.js` | `base.njk` | GDPR consent logic |

## File Statistics

### By File Type

| Type | Count | Purpose |
|------|-------|---------|
| `.njk` | 16 | Nunjucks templates |
| `.js` | 7 | Data files + scripts + configs |
| `.css` | 1 | Tailwind CSS source |
| `.md` | 6+ | Documentation |
| `.json` | 2 | package.json, package-lock.json |

### By Directory

| Directory | Files | Purpose |
|-----------|-------|---------|
| `src/_data/` | 3 | Data sources |
| `src/_includes/layouts/` | 2 | Layout templates |
| `src/_includes/components/` | 3 | UI components |
| `src/_includes/macros/` | 4 | Reusable macros |
| `src/pages/` | 5 | Page templates |
| `src/pages/legal/` | 3 | Legal pages |
| `src/pages/styles/` | 1 | Style detail template |
| `src/scripts/` | 2 | Client JS |
| `src/styles/` | 1 | CSS |
| `docs/` | 6+ | Documentation |

## Key Configuration Files

### `.eleventy.js`
```javascript
// Key configurations:
- addPassthroughCopy("src/assets")   // Copy assets to public/
- addPassthroughCopy("src/scripts")  // Copy scripts to public/
- addWatchTarget("src/styles/")      // Watch for CSS changes
- addFilter("limit", ...)            // Array limit filter
- addFilter("filterByStatus", ...)   // Status filter for submissions
- dir: { input: "src", output: "public", includes: "_includes", data: "_data" }
```

### `tailwind.config.js`
```javascript
// Key configurations:
- content: ["./src/**/*.{html,njk,md,js}"]  // Template scanning
- theme.extend.colors: { swiss-red, neutral }  // Swiss color palette
- theme.extend.fontFamily: { primary, mono }   // Inter + JetBrains Mono
- theme.extend.fontSize: { display - caption } // Type scale
- theme.extend.spacing: { 0 - 24 }             // 8px base spacing
```

### `postcss.config.js`
```javascript
// Plugins:
- tailwindcss    // Compile Tailwind utilities
- autoprefixer   // Add vendor prefixes
- cssnano        // Minify (production only)
```

## Template Relationships

```
src/pages/index.njk
  └── imports: macros/button.njk, macros/card.njk
  └── uses: designStyles data
  └── extends: layouts/base.njk
      └── includes: components/navigation.njk
      └── includes: components/footer.njk
      └── includes: components/cookie-banner.njk

src/pages/submit.njk
  └── imports: macros/form-field.njk
  └── extends: layouts/base.njk

src/pages/admin.njk
  └── imports: macros/badge.njk
  └── uses: submissions data, designStyles data
  └── extends: layouts/base.njk

src/pages/styles/style-detail.njk
  └── pagination: designStyles data
  └── extends: layouts/base.njk

src/pages/about.njk, src/pages/legal/*.njk
  └── extends: layouts/page.njk
      └── extends: layouts/base.njk
```
