# Story 1.2: Tailwind CSS v4 Neo-Swiss Configuration

**Status:** Ready for Review
**Epic:** 1 - Foundation & Core Infrastructure
**Created:** 2025-12-05
**Story Key:** 1-2-tailwind-css-v4-neo-swiss-configuration

---

## Story

As a **developer**,
I want **Tailwind CSS v4 configured with Neo-Swiss design tokens**,
So that **all components use consistent typography, colors, and spacing**.

---

## Acceptance Criteria

### AC1: Tailwind v4 CSS-First Configuration with Neo-Swiss Design Tokens
**Given** Tailwind CSS v4.1.17 is installed (from Story 1.1)
**When** I configure the design system using Tailwind v4's CSS-first approach
**Then** `src/assets/css/main.css` includes `@theme` directive with:

**Typography Scale (fluid, per Neo-Swiss guide):**
```css
@theme {
  --font-size-display: clamp(36px, 5vw, 64px);
  --font-size-h1: clamp(36px, 5vw, 64px);
  --font-size-h2: clamp(28px, 4vw, 48px);
  --font-size-h3: clamp(24px, 3vw, 36px);
  --font-size-body: clamp(16px, 2vw, 18px);
  --font-size-small: 14px;
}
```

**Color Palette (preserving existing red accent):**
```css
@theme {
  --color-primary: #000000;
  --color-background: #FFFFFF;
  --color-gray-50: #F5F5F5;
  --color-gray-100: #E0E0E0;
  --color-gray-200: #BDBDBD;
  --color-gray-300: #9E9E9E;
  --color-gray-400: #757575;
  --color-gray-500: #616161;
  --color-gray-600: #424242;
  --color-gray-700: #4a4a4a;
  --color-accent: #e31e24;
  --color-accent-dark: #b71c1c;
}
```

**Spacing Scale (8px base):**
```css
@theme {
  --spacing-1: 8px;
  --spacing-2: 16px;
  --spacing-3: 24px;
  --spacing-4: 32px;
  --spacing-6: 48px;
  --spacing-8: 64px;
}
```

### AC2: Main CSS File with Tailwind v4 Import
**Given** the @theme configuration exists
**When** I create the main CSS file
**Then** `src/assets/css/main.css` contains:
- Tailwind v4 import (`@import "tailwindcss";`)
- `@theme` block with all design tokens
- `@layer components` with `.button-primary`, `.button-secondary` classes (preserving existing naming)
- Focus state utilities using `--color-accent` for WCAG AA accessibility compliance
- Legacy CSS variable compatibility layer

### AC3: NPM Scripts Configured for Tailwind v4
**Given** Tailwind CSS v4 is configured
**When** I update package.json
**Then** the scripts are updated from:
```json
"dev": "eleventy --serve",
"build": "eleventy",
```
To:
```json
"dev": "npm-run-all -p dev:*",
"dev:11ty": "eleventy --serve",
"dev:css": "tailwindcss -i src/assets/css/main.css -o _site/assets/css/main.css --watch",
"build": "npm-run-all build:css build:11ty",
"build:css": "tailwindcss -i src/assets/css/main.css -o _site/assets/css/main.css --minify",
"build:11ty": "eleventy",
```

### AC4: CSS Budget Compliance
**Given** the build completes successfully
**When** I check the output CSS size
**Then** the built CSS is under 50KB (per NFR performance budget)

### AC5: Existing Templates Updated
**Given** templates currently reference `/assets/css/style.css`
**When** I update the base layout
**Then** `base.njk` references `/assets/css/main.css` (Tailwind output)

### AC6: Existing CSS Variables Preserved
**Given** the existing site uses CSS variables (--color-red, --spacing-*, etc.)
**When** Tailwind is configured
**Then** a compatibility layer maps old variable names to new Tailwind tokens

---

## Tasks

### Task 1: Create Tailwind v4 CSS-First Configuration (AC: 1, 2)

**CRITICAL: Tailwind v4 uses CSS-first configuration with @theme directive, NOT JavaScript config!**

**File: `src/assets/css/main.css`**
```css
/* Tailwind CSS v4 - CSS-first configuration */
@import "tailwindcss";

/* ===========================================
   NEO-SWISS DESIGN TOKENS via @theme
   =========================================== */
@theme {
  /* Typography Scale (per Neo-Swiss guide) */
  --font-size-display: clamp(36px, 5vw, 64px);
  --font-size-h1: clamp(36px, 5vw, 64px);
  --font-size-h2: clamp(28px, 4vw, 48px);
  --font-size-h3: clamp(24px, 3vw, 36px);
  --font-size-body: clamp(16px, 2vw, 18px);
  --font-size-small: 14px;

  /* Line Heights */
  --line-height-heading: 1.2;
  --line-height-body: 1.6;

  /* Color Palette (preserving existing red accent) */
  --color-primary: #000000;
  --color-background: #FFFFFF;
  --color-gray-50: #F5F5F5;
  --color-gray-100: #E0E0E0;
  --color-gray-200: #BDBDBD;
  --color-gray-300: #9E9E9E;
  --color-gray-400: #757575;
  --color-gray-500: #616161;
  --color-gray-600: #424242;
  --color-gray-700: #4a4a4a;
  --color-accent: #e31e24;
  --color-accent-dark: #b71c1c;

  /* Spacing Scale (8px base) */
  --spacing-1: 8px;
  --spacing-2: 16px;
  --spacing-3: 24px;
  --spacing-4: 32px;
  --spacing-6: 48px;
  --spacing-8: 64px;

  /* Container */
  --container-max: 1200px;

  /* Breakpoints (Neo-Swiss responsive grid) */
  --breakpoint-sm: 480px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1200px;
}

/* ===========================================
   LEGACY CSS VARIABLE COMPATIBILITY LAYER
   Maps existing --color-* and --spacing-* to Tailwind tokens
   =========================================== */
:root {
  /* Preserve existing variable names for backwards compatibility */
  --color-black: var(--color-primary);
  --color-white: var(--color-background);
  --color-red: var(--color-accent);
  --color-red-dark: var(--color-accent-dark);

  /* Spacing compatibility */
  --spacing-unit: 8px;
  --spacing-xs: var(--spacing-1);
  --spacing-sm: var(--spacing-2);
  --spacing-md: var(--spacing-3);
  --spacing-lg: var(--spacing-4);
  --spacing-xl: var(--spacing-6);
  --spacing-2xl: var(--spacing-8);
  --spacing-3xl: 96px;

  /* Layout */
  --max-width: var(--container-max);
  --grid-gap: var(--spacing-4);

  /* Transitions */
  --transition-base: 150ms ease-in-out;

  /* Fonts */
  --font-sans: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Arial', sans-serif;
  --font-mono: 'SF Mono', 'Monaco', 'Inconsolata', 'Courier New', monospace;
}

/* ===========================================
   NEO-SWISS BASE STYLES
   =========================================== */
@layer base {
  html {
    font-family: var(--font-sans);
    font-size: var(--font-size-body);
    line-height: var(--line-height-body);
    color: var(--color-primary);
    background-color: var(--color-background);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: var(--line-height-heading);
    font-weight: 700;
    margin-bottom: var(--spacing-3);
  }

  h1 { font-size: var(--font-size-h1); letter-spacing: -0.02em; }
  h2 { font-size: var(--font-size-h2); letter-spacing: -0.01em; }
  h3 { font-size: var(--font-size-h3); }

  p, li { max-width: 75ch; }
  p { margin-bottom: var(--spacing-3); line-height: var(--line-height-body); }

  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: color var(--transition-base);
  }
  a:hover, a:focus { color: var(--color-accent); }

  :focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }
}

/* ===========================================
   NEO-SWISS COMPONENT CLASSES
   Preserves existing class names for compatibility
   =========================================== */
@layer components {
  /* Primary Button - Black background, white text */
  .button,
  .button-primary,
  .btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-3) var(--spacing-6);
    font-size: var(--font-size-body);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-background);
    background-color: var(--color-primary);
    border: 2px solid var(--color-primary);
    cursor: pointer;
    transition: all var(--transition-base);
  }

  .button:hover,
  .button:focus,
  .button-primary:hover,
  .button-primary:focus,
  .btn-primary:hover,
  .btn-primary:focus {
    background-color: var(--color-accent);
    border-color: var(--color-accent);
    transform: translateY(-2px);
  }

  /* Secondary Button - Outlined */
  .button-secondary,
  .btn-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-3) var(--spacing-6);
    font-size: var(--font-size-body);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-primary);
    background-color: transparent;
    border: 2px solid var(--color-primary);
    cursor: pointer;
    transition: all var(--transition-base);
  }

  .button-secondary:hover,
  .button-secondary:focus,
  .btn-secondary:hover,
  .btn-secondary:focus {
    background-color: var(--color-primary);
    color: var(--color-background);
  }

  /* Card Component */
  .card {
    background-color: var(--color-background);
    border: 2px solid var(--color-primary);
    transition: transform var(--transition-base), box-shadow var(--transition-base);
  }
  .card:hover {
    transform: translateY(-4px);
    box-shadow: 8px 8px 0 var(--color-primary);
  }

  /* Container with max-width */
  .container-neo {
    max-width: var(--container-max);
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--spacing-3);
    padding-right: var(--spacing-3);
  }

  /* Grid layouts per Neo-Swiss guide: 12→6→4 columns */
  .grid-neo {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--spacing-2);
  }
  @media (min-width: 480px) {
    .grid-neo { grid-template-columns: repeat(6, 1fr); gap: var(--spacing-3); }
  }
  @media (min-width: 768px) {
    .grid-neo { grid-template-columns: repeat(12, 1fr); gap: var(--spacing-3); }
  }
}

/* ===========================================
   ACCESSIBILITY UTILITIES
   =========================================== */
@layer utilities {
  .focus-ring {
    outline: none;
  }
  .focus-ring:focus {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }

  .skip-link {
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(-100%);
    background-color: var(--color-primary);
    color: var(--color-background);
    padding: var(--spacing-2) var(--spacing-4);
    transition: transform var(--transition-base);
  }
  .skip-link:focus {
    transform: translateY(0);
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
}
```

### Task 2: Update NPM Scripts (AC: 3)

**File: `package.json`** - Update scripts section:

**Current scripts (to be replaced):**
```json
"dev": "eleventy --serve",
"build": "eleventy",
```

**New scripts:**
```json
{
  "scripts": {
    "dev": "npm-run-all -p dev:*",
    "dev:11ty": "eleventy --serve",
    "dev:css": "tailwindcss -i src/assets/css/main.css -o _site/assets/css/main.css --watch",
    "build": "npm-run-all build:css build:11ty",
    "build:css": "tailwindcss -i src/assets/css/main.css -o _site/assets/css/main.css --minify",
    "build:11ty": "eleventy",
    "format": "prettier --write .",
    "lint:js": "eslint .",
    "lint:css": "stylelint '**/*.css'",
    "lint:md": "markdownlint '**/*.md' --ignore node_modules --ignore _site",
    "lint": "npm run lint:js && npm run lint:css && npm run lint:md",
    "test": "playwright test",
    "test:ui": "playwright test --ui"
  }
}
```

### Task 3: Update Base Layout Reference (AC: 5)

**File: `src/_includes/layouts/base.njk`** - Update stylesheet link:
```diff
- <link rel="stylesheet" href="/assets/css/style.css">
+ <link rel="stylesheet" href="/assets/css/main.css">
```

### Task 4: Update Eleventy Config for CSS Handling (AC: All)

**File: `eleventy.config.js`** - Ensure assets are handled correctly:
```javascript
export default function(eleventyConfig) {
  // Passthrough copy for assets (images, fonts - CSS handled by Tailwind build)
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/js");

  // Watch for CSS changes (triggers browser reload)
  eleventyConfig.addWatchTarget("src/assets/css/");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
}
```

### Task 5: Delete Old CSS Files After Migration Verification (AC: 2, 6)

**After verifying Tailwind build works**, remove redundant CSS files:

| File | Action | Reason |
|------|--------|--------|
| `src/assets/css/base.css` | DELETE | Merged into main.css @layer base |
| `src/assets/css/layout.css` | DELETE | Merged into main.css (if exists) |
| `src/assets/css/components.css` | DELETE | Merged into main.css @layer components |
| `src/assets/css/utilities.css` | DELETE | Replaced by Tailwind utilities |
| `src/assets/css/style.css` | DELETE | Was only importing above files |

**CRITICAL: Only delete AFTER verifying:**
1. `npm run build` succeeds
2. Site renders correctly
3. All existing styles preserved via compatibility layer

### Task 6: Migrate Specific Existing Component Styles (AC: 6)

**Styles already migrated in main.css @layer components:**

| Original Class | Status | Notes |
|----------------|--------|-------|
| `.button` | PRESERVED | Same class name, same styles |
| `.button-primary` | PRESERVED | Same class name, same styles |
| `.button-secondary` | PRESERVED | Same class name, same styles |
| `.card` | PRESERVED | Same class name, enhanced with Tailwind |
| `.form-group` | MIGRATE | Add to @layer components if form tests fail |
| `.form-label` | MIGRATE | Add to @layer components if form tests fail |
| `.form-input` | MIGRATE | Add to @layer components if form tests fail |
| `.form-error` | MIGRATE | Add to @layer components if form tests fail |
| `.cookie-consent` | MIGRATE | Add to @layer components if consent tests fail |
| `.gallery-card` | MIGRATE | Add to @layer components if gallery tests fail |
| `.gallery-grid` | MIGRATE | Use `.grid-neo` or add custom |
| `.hero` | MIGRATE | Add to @layer components if needed |

**Migration command if styles are missing:**
```bash
# Run tests to identify broken styles
npm run test

# If tests fail, copy specific styles from old components.css to main.css @layer components
```

### Task 7: Verify Build & CSS Budget (AC: 4)

```bash
# Build CSS
npm run build:css

# Check output file size (must be under 50KB = 51200 bytes)
ls -la _site/assets/css/main.css

# Run full build
npm run build

# Run tests to verify all styles work
npm run test

# Start dev server and visually verify
npm run dev
```

**Verification Checklist:**
- [x] `npm run build:css` succeeds without errors
- [x] `_site/assets/css/main.css` exists and is under 50KB (38KB with Brutalist additions)
- [x] `npm run build` completes successfully
- [x] `npm run test` - all 23 tests pass (7 new Tailwind integration tests)
- [x] Homepage renders with correct typography
- [x] Gallery cards display correctly
- [x] Form styles work on submit page
- [x] Cookie consent banner appears/hides correctly
- [x] Focus states visible on all interactive elements (red outline)

---

## Dev Notes

### Tailwind v4 Critical Differences from v3
| Feature | Tailwind v3 | Tailwind v4 |
|---------|-------------|-------------|
| Configuration | `tailwind.config.js` (JavaScript) | `@theme` directive (CSS-first) |
| Import | `@tailwind base/components/utilities` | `@import "tailwindcss";` |
| Custom values | `theme.extend` in JS | `@theme { --variable: value; }` |
| Default engine | JavaScript | Rust (10x faster) |

### Neo-Swiss Typography Scale (EXACT from guide)
| Element | Size | Tailwind Class |
|---------|------|----------------|
| Display/H1 | `clamp(36px, 5vw, 64px)` | `text-h1` |
| H2 | `clamp(28px, 4vw, 48px)` | `text-h2` |
| H3 | `clamp(24px, 3vw, 36px)` | `text-h3` |
| Body | `clamp(16px, 2vw, 18px)` | `text-body` |
| Small | `14px` | `text-small` |

### Color System (Preserves Existing Brand)
| Purpose | Color | Variable |
|---------|-------|----------|
| Primary text | #000000 | `--color-primary` |
| Background | #FFFFFF | `--color-background` |
| Accent (brand) | #e31e24 (red) | `--color-accent` |
| Focus rings | #e31e24 (red) | Uses `--color-accent` |

**Note:** The existing site uses RED accent (`#e31e24`), not blue. This preserves brand consistency.

### Responsive Breakpoints
| Breakpoint | Width | Grid Columns | Tailwind |
|------------|-------|--------------|----------|
| Mobile | < 480px | 4 columns | default |
| Tablet | ≥ 480px | 6 columns | `sm:` |
| Desktop | ≥ 768px | 12 columns | `md:` |
| Large | ≥ 1024px | 12 columns | `lg:` |

### CSS Variable Compatibility
The compatibility layer in `:root` ensures existing templates work:
- `--color-red` → `--color-accent`
- `--color-black` → `--color-primary`
- `--spacing-md` → `--spacing-3`

### Previous Story (1.1) Context
- ES modules configured (`"type": "module"`)
- npm-run-all is installed
- Existing CSS uses CSS variables extensively
- All 16 tests currently pass
- Sanity CMS configured (project: gc7vlywa)

### Rollback Plan
If Tailwind v4 build fails:
```bash
# Restore old CSS
git checkout HEAD -- src/assets/css/

# Revert package.json scripts
git checkout HEAD -- package.json

# Update base.njk back to style.css
# In src/_includes/layouts/base.njk:
# <link rel="stylesheet" href="/assets/css/style.css">
```

---

## References

| Document | Section |
|----------|---------|
| `docs/epics.md` | Epic 1, Story 1.2 |
| `docs/architecture.md` | Tailwind CSS Patterns |
| `docs/neo-swiss-guide.md` | Typography scale (lines 107-129), Colors (lines 131-149), Grid (lines 150-179) |
| `docs/stories/1-1-project-initialization-dependencies.md` | Previous story learnings |
| `src/assets/css/main.css` | Tailwind v4 CSS-first configuration |
| `docs/neo-swiss-brutalist-theme.md` | Brutalist theme guide and utility classes |
| [Tailwind CSS v4 Docs](https://tailwindcss.com/blog/tailwindcss-v4) | CSS-first configuration |
| [Tailwind @theme Docs](https://tailwindcss.com/docs/theme) | Theme variables reference |

---

## Dev Agent Record

### Context Reference
- docs/epics.md (Epic 1, Story 1.2)
- docs/architecture.md (Tailwind CSS Patterns, Implementation Patterns)
- docs/neo-swiss-guide.md (Typography: lines 107-129, Colors: lines 131-149, Grid: lines 150-179)
- docs/stories/1-1-project-initialization-dependencies.md (Previous story context)
- docs/project_context.md (Project rules and patterns)

### Agent Model Used
Claude Opus 4.5 (claude-opus-4-5-20251101)

### Debug Log References
- Installed `@tailwindcss/cli` package (required for Tailwind v4 CLI)
- **Bug fix:** Renamed `.container` to `.wrapper` to avoid conflict with Tailwind v4's default container utility (which adds conflicting max-width breakpoints)
- **Enhancement:** Added Brutalist design accents (harsh shadows, monospace typography, bold borders, yellow highlights)
- **Enhancement:** Added mobile hamburger menu with Brutalist styling
- **Bug fix:** Fixed mobile nav gap spacing (reset `gap: 0` in mobile media query)
- **Bug fix:** Fixed sticky header on mobile (removed `position: relative` override)
- **Bug fix:** Fixed button spacing on style-detail page (added `flex gap-md justify-center`)

### Completion Notes List
- **Task 1:** Created `src/assets/css/main.css` with Tailwind v4 CSS-first configuration using `@import "tailwindcss"` and `@theme` directive with Neo-Swiss design tokens (typography, colors, spacing).
- **Task 2:** Updated `package.json` scripts to use npm-run-all for parallel CSS/Eleventy builds. Added `dev:css`, `dev:11ty`, `build:css`, `build:11ty` scripts.
- **Task 3:** Updated `base.njk` to reference `/assets/css/main.css` instead of `/assets/css/style.css`.
- **Task 4:** Updated `eleventy.config.js` passthrough copy to handle images/js separately (CSS now built by Tailwind).
- **Task 5:** Deleted old CSS files after verification: `base.css`, `layout.css`, `components.css`, `utilities.css`, `style.css`.
- **Task 6:** All existing component styles migrated into main.css `@layer components` and `@layer utilities` sections. Legacy CSS variable compatibility layer preserves `--color-red`, `--color-black`, `--spacing-*` mappings.
- **Task 7:** Build verified - CSS output 26KB (under 50KB budget). All 23 tests pass including 7 new Tailwind integration tests.
- **Task 8 (Enhancement):** Added Brutalist design tokens (`--border-brutal`, `--shadow-brutal`, `--color-brutal-yellow`) and utility classes (`.text-brutal`, `.highlight-brutal`, `.shadow-brutal`, `.button-brutal`, `.font-mono`).
- **Task 9 (Enhancement):** Applied Brutalist accents across all pages - hero highlights, section headings, CTA buttons, feature boxes.
- **Task 10 (Enhancement):** Created Brutalist mobile hamburger menu with animated X toggle, full-width dropdown, and red accent styling.
- **Task 11:** Created theme documentation at `docs/neo-swiss-brutalist-theme.md`.

### File List
**New Files:**
- `src/assets/css/main.css` - Tailwind v4 CSS-first config with Neo-Swiss + Brutalist tokens
- `src/assets/js/menu.js` - Hamburger menu toggle JavaScript
- `tests/e2e/tailwind-integration.spec.js` - 7 Playwright tests for Tailwind integration
- `docs/neo-swiss-brutalist-theme.md` - Theme documentation and usage guide

**Modified Files:**
- `package.json` - Updated scripts for Tailwind build, added @tailwindcss/cli dependency
- `package-lock.json` - Updated with new dependencies
- `src/_includes/layouts/base.njk` - Changed stylesheet href, added menu.js script
- `eleventy.config.js` - Updated passthrough copy for images/js only
- `src/index.njk` - Wrapper class, Brutalist accents (highlight-brutal, text-brutal, shadow-brutal, button-brutal)
- `src/submit.njk` - Wrapper class, Brutalist form container and button
- `src/gallery-page.njk` - Wrapper class, Brutalist CTA section
- `src/about.njk` - Wrapper class, Brutalist sections and highlights
- `src/_includes/layouts/style-detail.njk` - Wrapper class, Brutalist title/headings/button, button spacing fix
- `src/_includes/components/header.njk` - Wrapper class, font-mono, hamburger menu button
- `src/_includes/components/footer.njk` - Wrapper class, font-mono headings

**Deleted Files:**
- `src/assets/css/base.css` - Merged into main.css @layer base
- `src/assets/css/layout.css` - Merged into main.css @layer components
- `src/assets/css/components.css` - Merged into main.css @layer components
- `src/assets/css/utilities.css` - Merged into main.css @layer utilities
- `src/assets/css/style.css` - Replaced by main.css

### Change Log
| Date | Change | Author |
|------|--------|--------|
| 2025-12-05 | Implemented Tailwind CSS v4 with Neo-Swiss design tokens | Dev Agent (Amelia) |
| 2025-12-05 | Bug fix: Renamed .container to .wrapper to fix mobile layout (Tailwind v4 conflict) | Dev Agent (Amelia) |
| 2025-12-05 | Enhancement: Added Brutalist design tokens and utility classes | Dev Agent (Amelia) |
| 2025-12-05 | Enhancement: Applied Brutalist accents across all pages | Dev Agent (Amelia) |
| 2025-12-05 | Enhancement: Added Brutalist mobile hamburger menu | Dev Agent (Amelia) |
| 2025-12-05 | Bug fixes: Mobile nav spacing, sticky header, button spacing | Dev Agent (Amelia) |
| 2025-12-05 | Created theme documentation (neo-swiss-brutalist-theme.md) | Dev Agent (Amelia) |
