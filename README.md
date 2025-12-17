# MyWebClass.org

[![Netlify Status](https://api.netlify.com/api/v1/badges/0e579509-4d32-481b-943b-02e5e902fbc4/deploy-status)](https://app.netlify.com/projects/mywebclass-is373/deploys)
[![CI/CD Pipeline](https://github.com/gsinghjay/MyWebClass/actions/workflows/ci.yml/badge.svg)](https://github.com/gsinghjay/MyWebClass/actions/workflows/ci.yml)
[![Playwright E2E](https://img.shields.io/badge/E2E-Playwright-45ba4b?logo=playwright&logoColor=white)](https://github.com/gsinghjay/MyWebClass/actions/workflows/ci.yml)

**Live Site:** https://mywebclass-is373.netlify.app/

A design education platform built with Eleventy, Nunjucks, Tailwind CSS, and Sanity CMS. Teaches design history through authentic, fully-implemented website demos.

## Project Overview

MyWebClass.org showcases iconic design movements (Swiss International Style, Bauhaus, Brutalism, etc.) through real, functional website implementations. Students can submit their own demos for instructor review and publication.

## Tech Stack

- **Static Site Generator**: Eleventy (11ty) v3.1.2
- **Templating**: Nunjucks
- **Styling**: Tailwind CSS v4
- **CMS**: Sanity (headless CMS)
- **Hosting**: Netlify
- **Design System**: Swiss International Style

## Project Structure

```
project/
├── src/
│   ├── _includes/
│   │   ├── layouts/         # Base layouts
│   │   ├── components/      # Reusable components
│   │   └── macros/          # Nunjucks macros
│   ├── _data/               # Data files (Sanity integration)
│   ├── pages/               # Page templates
│   ├── styles/              # CSS (Tailwind)
│   ├── scripts/             # Client-side JavaScript
│   └── assets/              # Images, fonts
├── netlify/
│   └── functions/           # Netlify serverless functions
├── studio/                  # Sanity Studio
├── public/                  # Build output
├── netlify.toml             # Netlify configuration
├── .eleventy.js             # Eleventy config
├── tailwind.config.js       # Tailwind config
└── postcss.config.js        # PostCSS config
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for deployment
npm run build
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for deployment |
| `npm start` | Start Eleventy server |
| `npm test` | Run unit tests |
| `npm run test:e2e` | Run Playwright E2E tests |
| `npm run test:e2e:ui` | Run Playwright with interactive UI |
| `npm run test:e2e:headed` | Run Playwright in headed mode |

## Testing

### Unit Tests

```bash
npm test
```

Runs Sanity configuration tests using Node.js native test runner.

### E2E Tests (Playwright)

```bash
# Run all E2E tests
npm run test:e2e

# Run with interactive UI
npm run test:e2e:ui

# Run in headed mode (see browser)
npm run test:e2e:headed
```

**Test Coverage:**
- Gallery filter functionality (21 tests)
  - Filter buttons display and labels
  - Filter application and URL sync
  - Clear filter functionality
  - URL-based state persistence
  - Browser back/forward navigation
  - Responsive layout behavior
  - Keyboard accessibility
  - Category count validation

## Design System

Built following Swiss International Style principles:

- **Colors**: Black (#000), White (#FFF), Swiss Red (#E53935)
- **Typography**: Inter font family, systematic type scale
- **Spacing**: 8px base unit system
- **Grid**: 12-column CSS Grid
- **Borders**: 2px solid borders
- **Accessibility**: WCAG AA compliance

## Features

### For Students
- Browse gallery of design style demos
- Submit own design implementations
- Learn through authentic examples

### For Instructors
- Review submitted demos
- Approve/reject submissions
- Manage gallery content

### Technical Features
- Responsive design (mobile-first)
- GDPR-compliant cookie consent
- Conditional analytics loading
- Accessible (WCAG AA)
- Performance optimized
- SEO friendly

## Pages

- **Homepage** (`/`) - Hero, stats, gallery preview, how it works
- **Gallery Detail** (`/styles/[slug]/`) - Individual design style pages
- **Submit** (`/submit/`) - Demo submission form
- **Admin Dashboard** (`/admin/`) - Instructor review panel
- **About** (`/about/`) - Platform information
- **Legal** - Privacy Policy, Terms of Service, Cookie Policy

## Data Sources

Currently using mock data in `src/_data/`. To integrate with Sanity CMS:

1. Set up Sanity project
2. Configure Sanity client in `src/_data/sanity.js`
3. Update data files to fetch from Sanity
4. Set environment variables for Sanity credentials

## Deployment

This project is deployed on **Netlify** with automatic deploys on push to `main`.

**Site:** https://mywebclass-is373.netlify.app/

### Environment Variables (Netlify Dashboard)

| Variable | Description |
|----------|-------------|
| `SANITY_PROJECT_ID` | Sanity project ID |
| `SANITY_DATASET` | Sanity dataset name |
| `SANITY_API_TOKEN` | Sanity API token (write access) |
| `DISCORD_WEBHOOK_URL` | (Optional) Discord notifications |
| `AIRTABLE_API_KEY` | (Optional) Airtable CRM sync |

### Build Configuration

Build settings are in `netlify.toml`:
- **Build command:** `npm install && NODE_ENV=production npx tailwindcss ... && npx eleventy`
- **Publish directory:** `public`
- **Functions:** `netlify/functions`

## License

MIT License - NJIT S373 Project

## Contact

Questions? Contact info@mywebclass.org
