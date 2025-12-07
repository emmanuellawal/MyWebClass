# MyWebClass.org - Documentation Index

> **AI Development Reference**: This index is the primary entry point for AI-assisted development. When working on features or fixes, start here to find relevant documentation.

## Project Overview

- **Type:** Web Application (Static Site)
- **Repository:** Monolith
- **Primary Language:** JavaScript (Node.js)
- **Framework:** Eleventy (11ty) v3.1.2
- **Styling:** Tailwind CSS v3.4.18
- **Design System:** Swiss International Style

## Quick Reference

| Attribute | Value |
|-----------|-------|
| **Tech Stack** | Eleventy + Nunjucks + Tailwind CSS + Sanity |
| **Entry Point** | `src/pages/index.njk` |
| **Architecture Pattern** | JAMstack (Static Site + Headless CMS) |
| **Build Output** | `public/` directory |
| **Node Version** | 18+ |

## Generated Documentation

### Core Documentation

- [Project Overview](./project-overview.md) - Executive summary, features, tech stack
- [Architecture](./architecture.md) - System architecture, data flow, component structure
- [Source Tree Analysis](./source-tree-analysis.md) - Complete directory structure with annotations
- [Component Inventory](./component-inventory.md) - All UI components, macros, and CSS classes
- [Development Guide](./development-guide.md) - Setup, workflows, common tasks, troubleshooting

### Existing Project Documentation

- [Initial Implementation Plan](./initial-plan.md) - 16-phase development roadmap
- [Project Requirements](./requirements.md) - S373 project brief and requirements
- [UI Specifications (Swiss Lineage)](./swiss-lineage.md) - Complete design system documentation

### Workflow Tracking

- [BMM Workflow Status](./bmm-workflow-status.yaml) - Current workflow progress

## Key Files Quick Reference

### Configuration Files

| File | Purpose |
|------|---------|
| `.eleventy.js` | Eleventy configuration |
| `tailwind.config.js` | Tailwind CSS configuration |
| `postcss.config.js` | PostCSS plugins |
| `package.json` | Dependencies and scripts |

### Data Files

| File | Purpose |
|------|---------|
| `src/_data/site.js` | Global site configuration |
| `src/_data/designStyles.js` | Design style entries |
| `src/_data/submissions.js` | Submission entries |

### Layout Files

| File | Purpose |
|------|---------|
| `src/_includes/layouts/base.njk` | HTML document shell |
| `src/_includes/layouts/page.njk` | Standard content page |

### Component Files

| File | Purpose |
|------|---------|
| `src/_includes/components/navigation.njk` | Header navigation |
| `src/_includes/components/footer.njk` | Site footer |
| `src/_includes/components/cookie-banner.njk` | GDPR consent |

### Macro Files

| File | Purpose |
|------|---------|
| `src/_includes/macros/button.njk` | Button component |
| `src/_includes/macros/card.njk` | Gallery card |
| `src/_includes/macros/form-field.njk` | Form inputs |
| `src/_includes/macros/badge.njk` | Status badges |

## Pages

| Page | File | Path |
|------|------|------|
| Homepage | `src/pages/index.njk` | `/` |
| About | `src/pages/about.njk` | `/about/` |
| Submit | `src/pages/submit.njk` | `/submit/` |
| Admin | `src/pages/admin.njk` | `/admin/` |
| Style Detail | `src/pages/styles/style-detail.njk` | `/styles/[slug]/` |
| Privacy | `src/pages/legal/privacy.njk` | `/legal/privacy/` |
| Terms | `src/pages/legal/terms.njk` | `/legal/terms/` |
| Cookies | `src/pages/legal/cookies.njk` | `/legal/cookies/` |
| 404 | `src/pages/404.njk` | `/404.html` |

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:8080
```

### Production Build

```bash
# Build for production
npm run build

# Output is in public/ directory
```

## Feature Areas

### For UI Changes

1. **Layouts**: `src/_includes/layouts/`
2. **Components**: `src/_includes/components/`
3. **Macros**: `src/_includes/macros/`
4. **Styles**: `src/styles/main.css`
5. **Design Tokens**: `tailwind.config.js`

### For Content Changes

1. **Site Config**: `src/_data/site.js`
2. **Design Styles**: `src/_data/designStyles.js`
3. **Submissions**: `src/_data/submissions.js`

### For Functionality Changes

1. **Cookie Consent**: `src/scripts/cookie-consent.js`
2. **Navigation**: `src/scripts/navigation.js`
3. **Eleventy Filters**: `.eleventy.js`

### For New Pages

1. Create `.njk` file in `src/pages/`
2. Add front matter with layout, title, permalink
3. Page is automatically generated

## Implementation Status

### Completed Features

- [x] Static site structure (Eleventy)
- [x] Swiss design system (Tailwind)
- [x] Homepage with hero, gallery, stats
- [x] Design style detail pages (paginated)
- [x] Submission form
- [x] Instructor dashboard (mock)
- [x] Cookie consent system
- [x] Mobile responsive navigation
- [x] Legal pages (privacy, terms, cookies)
- [x] Accessibility features (skip links, ARIA)

### Pending Features

- [ ] Sanity CMS integration
- [ ] Real form submission handling
- [ ] Analytics integration
- [ ] Serverless functions for admin actions
- [ ] Discord/CRM integrations

## Brownfield Development Notes

When creating new features for this brownfield project:

1. **Reference this index** to understand existing patterns
2. **Follow Swiss design principles** documented in `swiss-lineage.md`
3. **Use existing components** from `component-inventory.md`
4. **Follow Tailwind patterns** established in `main.css`
5. **Maintain accessibility** standards (WCAG AA)

---

**Documentation Generated:** 2025-12-06
**Scan Level:** Exhaustive
**Project Type:** Web Application
