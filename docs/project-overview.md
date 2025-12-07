# MyWebClass.org - Project Overview

## Executive Summary

MyWebClass.org is a design education platform that teaches the history and practice of visual design through authentic, fully-implemented website demos. Built as part of NJIT's S373 course, the platform allows students to explore iconic design movements (Swiss International Style, Bauhaus, Brutalism) and submit their own design implementations for instructor review.

## Project Purpose

- **Educational Platform**: Teach design history through living, functional examples
- **Student Showcase**: Allow students to submit and display design style implementations
- **Instructor Tools**: Review, approve, and manage student submissions
- **Design Reference**: Serve as a resource for understanding applied design principles

## Key Features

### For Students
- Browse gallery of authentic design style demos
- Submit design implementations for review
- Learn through real-world examples

### For Instructors
- Dashboard for reviewing submissions
- Approve/reject workflow
- Manage published gallery content

### Technical Features
- Static site generation with Eleventy
- Responsive design (mobile-first)
- GDPR-compliant cookie consent
- WCAG AA accessibility compliance
- Swiss International Style design system

## Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| Static Site Generator | Eleventy (11ty) | 3.1.2 |
| Templating | Nunjucks | - |
| CSS Framework | Tailwind CSS | 3.4.18 |
| CSS Processing | PostCSS + Autoprefixer | 8.5.6 / 10.4.22 |
| CMS | Sanity | 7.13.1 |
| Build Tool | npm-run-all | 4.1.5 |
| Language | JavaScript/Node.js | 18+ |

## Architecture Pattern

**Component-Based Static Site Architecture**

- **Input**: Nunjucks templates + data files
- **Processing**: Eleventy builds static HTML
- **Styling**: Tailwind CSS with custom Swiss design tokens
- **Output**: Static files in `public/` directory
- **CMS**: Sanity for content management (planned integration)

## Repository Structure

```
MyWebClass/
├── src/                    # Source files
│   ├── _data/              # Data files (site config, design styles, submissions)
│   ├── _includes/          # Reusable templates
│   │   ├── layouts/        # Base and page layouts
│   │   ├── components/     # Navigation, footer, cookie banner
│   │   └── macros/         # Nunjucks macros (button, card, form-field, badge)
│   ├── pages/              # Page templates
│   │   ├── legal/          # Privacy, terms, cookies pages
│   │   └── styles/         # Design style detail pages
│   ├── scripts/            # Client-side JavaScript
│   └── styles/             # CSS (Tailwind)
├── public/                 # Build output
├── docs/                   # Project documentation
├── .eleventy.js            # Eleventy configuration
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── package.json            # Dependencies and scripts
```

## Pages

| Page | Path | Description |
|------|------|-------------|
| Homepage | `/` | Hero, stats, gallery preview, how it works, CTA |
| Gallery Detail | `/styles/[slug]/` | Individual design style with demo and educational content |
| Submit | `/submit/` | Demo submission form |
| Admin Dashboard | `/admin/` | Instructor review panel |
| About | `/about/` | Platform information |
| Privacy Policy | `/legal/privacy/` | GDPR-compliant privacy policy |
| Terms of Service | `/legal/terms/` | Terms and conditions |
| Cookie Policy | `/legal/cookies/` | Cookie usage explanation |
| 404 | `/404.html` | Not found page |

## Design System

Built on Swiss International Style principles:

- **Colors**: Black (#000), White (#FFF), Swiss Red (#E53935)
- **Typography**: Inter font family with systematic type scale
- **Spacing**: 8px base unit system
- **Grid**: 12-column CSS Grid
- **Borders**: 2px solid (signature Swiss element)
- **Accessibility**: WCAG AA compliance (4.5:1 contrast ratio)

## Current Status

The project is a brownfield implementation with:
- Core static site structure complete
- Design system implemented
- Main pages built
- Cookie consent system working
- Currently using mock data (Sanity integration pending)

## Related Documentation

- [Architecture Documentation](./architecture.md)
- [Source Tree Analysis](./source-tree-analysis.md)
- [Component Inventory](./component-inventory.md)
- [Development Guide](./development-guide.md)
- [Initial Implementation Plan](./initial-plan.md)
- [UI Specifications (Swiss Lineage)](./swiss-lineage.md)
