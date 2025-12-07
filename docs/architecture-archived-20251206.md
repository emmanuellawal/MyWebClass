# MyWebClass.org - Architecture Documentation

## 1. Architecture Overview

### 1.1 System Type
**Static Site with Headless CMS Integration**

MyWebClass.org follows a JAMstack architecture pattern:
- **J**avaScript: Client-side interactivity
- **A**PIs: Sanity CMS for content management
- **M**arkup: Pre-built HTML via Eleventy

### 1.2 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                           CONTENT LAYER                              │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────────┐  │
│  │  Sanity CMS     │  │  Data Files     │  │  Template Files     │  │
│  │  (Headless)     │  │  (JS/JSON)      │  │  (Nunjucks)         │  │
│  └────────┬────────┘  └────────┬────────┘  └──────────┬──────────┘  │
└───────────┼────────────────────┼─────────────────────┼──────────────┘
            │                    │                     │
            ▼                    ▼                     ▼
┌─────────────────────────────────────────────────────────────────────┐
│                           BUILD LAYER                                │
│  ┌─────────────────────────────────────────────────────────────────┐│
│  │                    Eleventy (11ty) v3.1.2                       ││
│  │  • Fetches data from Sanity / local files                       ││
│  │  • Processes Nunjucks templates                                  ││
│  │  • Generates static HTML pages                                   ││
│  └─────────────────────────────────────────────────────────────────┘│
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────────┐│
│  │                    Tailwind CSS + PostCSS                        ││
│  │  • Compiles Tailwind utilities                                   ││
│  │  • Autoprefixer for browser compatibility                        ││
│  │  • cssnano for production minification                           ││
│  └─────────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────────┘
            │
            ▼
┌─────────────────────────────────────────────────────────────────────┐
│                          OUTPUT LAYER                                │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────────┐  │
│  │  HTML Pages     │  │  CSS Bundle     │  │  JS Scripts         │  │
│  │  (public/)      │  │  (public/       │  │  (public/scripts/)  │  │
│  │                 │  │   styles/)      │  │                     │  │
│  └─────────────────┘  └─────────────────┘  └─────────────────────┘  │
└─────────────────────────────────────────────────────────────────────┘
            │
            ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         HOSTING LAYER                                │
│  ┌─────────────────────────────────────────────────────────────────┐│
│  │              Netlify / Vercel / GitHub Pages                     ││
│  │  • CDN distribution                                              ││
│  │  • Form handling (Netlify Forms)                                 ││
│  │  • Environment variables                                         ││
│  └─────────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────────┘
```

## 2. Component Architecture

### 2.1 Directory Structure

```
src/
├── _data/                 # Data layer (drives content)
│   ├── site.js            # Global site configuration
│   ├── designStyles.js    # Design style entries (mock data)
│   └── submissions.js     # Submission entries (mock data)
│
├── _includes/             # Template components
│   ├── layouts/           # Page structure templates
│   │   ├── base.njk       # HTML document shell
│   │   └── page.njk       # Standard content page
│   │
│   ├── components/        # Reusable UI components
│   │   ├── navigation.njk # Header with nav links
│   │   ├── footer.njk     # 4-column footer
│   │   └── cookie-banner.njk # GDPR consent banner
│   │
│   └── macros/            # Parameterized components
│       ├── button.njk     # Button variants
│       ├── card.njk       # Gallery card
│       ├── form-field.njk # Form input components
│       └── badge.njk      # Status badges
│
├── pages/                 # Page templates
│   ├── index.njk          # Homepage
│   ├── about.njk          # About page
│   ├── submit.njk         # Submission form
│   ├── admin.njk          # Instructor dashboard
│   ├── 404.njk            # Not found page
│   ├── legal/             # Legal pages
│   │   ├── privacy.njk
│   │   ├── terms.njk
│   │   └── cookies.njk
│   └── styles/
│       └── style-detail.njk # Paginated design style pages
│
├── scripts/               # Client-side JavaScript
│   ├── cookie-consent.js  # Cookie banner logic
│   └── navigation.js      # Mobile menu toggle
│
└── styles/
    └── main.css           # Tailwind CSS entry point
```

### 2.2 Template Inheritance

```
base.njk
├── Provides: DOCTYPE, <html>, <head>, <body> structure
├── Includes: navigation.njk, footer.njk, cookie-banner.njk
├── Blocks: head, content, scripts
│
└── page.njk (extends base.njk)
    ├── Provides: Standard page layout with title/description header
    ├── Overrides: content block
    │
    └── [Page Templates]
        ├── about.njk
        ├── legal/privacy.njk
        ├── legal/terms.njk
        └── legal/cookies.njk

base.njk
└── [Direct Usage]
    ├── index.njk (custom hero layout)
    ├── submit.njk (form layout)
    ├── admin.njk (dashboard layout)
    ├── 404.njk (centered error layout)
    └── styles/style-detail.njk (paginated style pages)
```

## 3. Data Architecture

### 3.1 Data Flow

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  src/_data/     │────▶│  Eleventy       │────▶│  Templates      │
│  *.js files     │     │  Data Cascade   │     │  (Nunjucks)     │
└─────────────────┘     └─────────────────┘     └─────────────────┘
        │                                               │
        │                                               ▼
        │                                       ┌─────────────────┐
        │                                       │  Static HTML    │
        │                                       │  (public/)      │
        │                                       └─────────────────┘
        ▼
┌─────────────────────────────────────────────────────────────────┐
│  Data Sources (Currently Mock, Planned Sanity Integration)      │
├─────────────────────────────────────────────────────────────────┤
│  site.js           → Global configuration, stats                │
│  designStyles.js   → Design style entries with metadata         │
│  submissions.js    → Student submission entries                 │
└─────────────────────────────────────────────────────────────────┘
```

### 3.2 Data Schemas

**Site Configuration** (`site.js`):
```javascript
{
  title: 'MyWebClass.org',
  description: 'Learn design history through authentic demos',
  url: 'https://mywebclass.org',
  author: 'NJIT S373 Project Team',
  year: 2025,
  stats: {
    designStyles: '12+',
    studentDemos: '50+',
    authentic: '100%',
    cost: 'Free'
  }
}
```

**Design Style** (`designStyles.js`):
```javascript
{
  id: 'swiss',
  title: 'Swiss International Style',
  slug: 'swiss',
  era: '1950s–1970s',
  thumbnail: '🇨🇭',
  accentColor: '#E53935',
  description: 'Clean grids, sans-serif typography...',
  origin: 'Developed in Switzerland...',
  characteristics: ['Grid-based layouts', 'Sans-serif typefaces', ...],
  typography: 'Helvetica Neue, Univers',
  colorPalette: ['#000000', '#FFFFFF', '#E53935'],
  gridSystem: '12-column grid with 24px gutters',
  demoUrl: '/demos/swiss.html',
  status: 'approved'
}
```

**Submission** (`submissions.js`):
```javascript
{
  id: 1,
  name: 'Alex Chen',
  email: 'alex@njit.edu',
  style: 'Swiss',
  styleSlug: 'swiss',
  demoUrl: 'https://alexchen.github.io/swiss-demo',
  screenshot: '/assets/images/submission-1.jpg',
  authenticityExplanation: '...',
  status: 'pending', // pending | approved | rejected
  submittedDate: '2025-01-14',
  reviewedDate: null
}
```

## 4. Styling Architecture

### 4.1 CSS Stack

```
┌─────────────────────────────────────────────────────────────────┐
│                    src/styles/main.css                          │
├─────────────────────────────────────────────────────────────────┤
│  @tailwind base;      ← Tailwind's reset and base styles        │
│  @tailwind components; ← Tailwind component classes             │
│  @tailwind utilities;  ← Tailwind utility classes               │
│                                                                  │
│  :root { ... }        ← CSS custom properties (design tokens)   │
│  @layer base { ... }  ← Global element styles                   │
│  @layer components { ... } ← Component classes (.btn, .card)    │
│  @layer utilities { ... }  ← Custom utilities                   │
└─────────────────────────────────────────────────────────────────┘
            │
            ▼ PostCSS Processing
┌─────────────────────────────────────────────────────────────────┐
│  tailwindcss    → Compile utility classes                       │
│  autoprefixer   → Add vendor prefixes                           │
│  cssnano        → Minify (production only)                      │
└─────────────────────────────────────────────────────────────────┘
            │
            ▼
┌─────────────────────────────────────────────────────────────────┐
│  public/styles/main.css (compiled output)                       │
└─────────────────────────────────────────────────────────────────┘
```

### 4.2 Design Tokens

```css
:root {
  /* Colors */
  --color-black: #000000;
  --color-white: #FFFFFF;
  --color-red-500: #E53935;
  --color-red-600: #C62828;

  /* Typography */
  --font-primary: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Spacing (8px base unit) */
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-4: 1rem;     /* 16px */
  --space-6: 1.5rem;   /* 24px */
  --space-8: 2rem;     /* 32px */
  --space-12: 3rem;    /* 48px */
  --space-16: 4rem;    /* 64px */

  /* Borders */
  --border-width: 2px;
  --border-color: var(--color-black);

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
}
```

### 4.3 Component Classes

| Class | Purpose |
|-------|---------|
| `.btn` | Base button styling |
| `.btn-primary` | Black background, white text |
| `.btn-secondary` | Bordered, transparent background |
| `.card` | Container with 2px border |
| `.card-hover` | Adds shadow on hover |
| `.form-input` | Input field styling |
| `.form-label` | Label styling |
| `.badge` | Status indicator base |
| `.badge-pending/approved/rejected` | Status variants |
| `.container-custom` | Max-width container with padding |
| `.section-padding` | Responsive section padding |
| `.prose` | Typography for long-form content |

## 5. Build Architecture

### 5.1 Build Pipeline

```
┌─────────────────────────────────────────────────────────────────┐
│  npm run build                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. build:css                                                    │
│     npx tailwindcss -i src/styles/main.css                      │
│                     -o public/styles/main.css --minify          │
│                                                                  │
│  2. build:eleventy                                               │
│     eleventy                                                     │
│     (processes templates, copies assets to public/)             │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
            │
            ▼
┌─────────────────────────────────────────────────────────────────┐
│  public/                                                         │
│  ├── index.html                                                  │
│  ├── about/index.html                                            │
│  ├── submit/index.html                                           │
│  ├── admin/index.html                                            │
│  ├── styles/[slug]/index.html (for each design style)           │
│  ├── legal/privacy/index.html                                    │
│  ├── legal/terms/index.html                                      │
│  ├── legal/cookies/index.html                                    │
│  ├── 404.html                                                    │
│  ├── styles/main.css                                             │
│  ├── scripts/cookie-consent.js                                   │
│  ├── scripts/navigation.js                                       │
│  └── assets/...                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 5.2 Development Server

```
┌─────────────────────────────────────────────────────────────────┐
│  npm run dev                                                     │
├─────────────────────────────────────────────────────────────────┤
│  Runs in parallel:                                               │
│                                                                  │
│  dev:eleventy                                                    │
│  └── eleventy --serve                                            │
│      (watches src/, rebuilds, serves on localhost:8080)          │
│                                                                  │
│  dev:css                                                         │
│  └── tailwindcss -i src/styles/main.css                         │
│                  -o public/styles/main.css --watch              │
│      (watches for class changes, recompiles CSS)                 │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## 6. Security Considerations

### 6.1 GDPR Compliance

- **Cookie Consent**: Banner with Accept/Reject/Preferences buttons
- **Analytics Loading**: Conditional based on user consent
- **Consent Storage**: localStorage (`cookie_consent` key)
- **Legal Pages**: Privacy Policy, Terms of Service, Cookie Policy

### 6.2 Form Security

- **Honeypot Field**: Hidden field to catch bots
- **Netlify Forms**: Server-side form handling
- **Required Fields**: Client-side validation
- **File Upload**: Limited to PNG/JPG, 5MB max

### 6.3 Content Security

- **Static Files**: No server-side execution vulnerabilities
- **External Links**: `rel="noopener"` on all external links
- **Script Loading**: `defer` attribute on all scripts

## 7. Accessibility Architecture

### 7.1 Semantic Structure

```html
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <nav aria-label="Main navigation">...</nav>
  <main id="main-content">...</main>
  <footer>...</footer>
</body>
```

### 7.2 ARIA Implementation

| Element | ARIA |
|---------|------|
| Navigation | `aria-label="Main navigation"` |
| Mobile Menu Button | `aria-expanded`, `aria-controls` |
| Cookie Banner | `role="dialog"`, `aria-label` |
| Form Fields | `aria-required`, `aria-describedby` |

### 7.3 Focus Management

- Focus-visible styles with 2px red outline
- Skip links for keyboard navigation
- Proper focus order in modals/menus
- `prefers-reduced-motion` media query support

## 8. Future Architecture (Planned)

### 8.1 Sanity CMS Integration

```
┌─────────────────────────────────────────────────────────────────┐
│  Sanity Studio                                                   │
│  ├── designStyle schema                                          │
│  ├── gallerySubmission schema                                    │
│  ├── article schema                                              │
│  └── author schema                                               │
└──────────────────────────┬──────────────────────────────────────┘
                           │ API
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│  src/_data/sanity.js                                             │
│  (Fetch data at build time via @sanity/client)                   │
└─────────────────────────────────────────────────────────────────┘
```

### 8.2 Serverless Functions (Planned)

- `/api/submit-demo` - Form submission handler
- `/api/update-submission` - Admin action handler
- `/api/webhook` - Sanity rebuild triggers

### 8.3 Analytics Integration (Planned)

- GDPR-compliant analytics (Plausible/Cloudflare)
- Conditional loading based on consent
- Privacy-focused, no personal data collection
