# MyWebClass.org

> A digital museum of design styles - Teaching design history through authentic, fully-implemented demonstrations

[![CI/CD Pipeline](https://github.com/your-username/mywebclass/actions/workflows/ci.yml/badge.svg)](https://github.com/your-username/mywebclass/actions/workflows/ci.yml)

## Overview

MyWebClass.org is an educational platform dedicated to teaching visual design history and principles through real, working examples. Built for the S373 Design Education Project, this site showcases Swiss Design lineage and related movements through live, interactive demonstrations.

## Features

- **Design Style Gallery**: Curated collection of authentic design demonstrations
- **Educational Content**: Historical context, key characteristics, and design principles
- **Student Submissions**: Community-driven gallery with instructor review workflow
- **GDPR Compliant**: Full cookie consent management and privacy controls
- **Analytics**: Privacy-first analytics with consent-based tracking
- **Responsive Design**: Mobile-first approach with Swiss Design aesthetics
- **Accessibility**: WCAG AA compliant with keyboard navigation support

## Tech Stack

- **Static Site Generator**: [Eleventy (11ty)](https://www.11ty.dev/)
- **CMS**: [Sanity](https://www.sanity.io/) for content management
- **Database**: [Supabase](https://supabase.com/) for operational data
- **Styling**: Custom CSS with Swiss Design principles
- **Testing**: [Playwright](https://playwright.dev/) for end-to-end tests
- **CI/CD**: GitHub Actions with Lighthouse CI
- **Deployment**: GitHub Pages

## Quick Start

### Prerequisites

- Node.js 20.x or higher
- npm 9.x or higher
- Sanity CLI (for studio management)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mywebclass.git
   cd mywebclass
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```

4. Edit `.env` with your credentials:
   - Supabase URL and anon key
   - Sanity project ID, dataset, and token
   - Discord webhook URL (optional)

5. Start development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:8080](http://localhost:8080)

## Project Structure

```
mywebclass/
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions CI/CD pipeline
├── docs/                       # Documentation
│   ├── analytics-evaluation.md
│   ├── ai-usage.md
│   ├── database-architecture.md
│   └── qa-report.md
├── src/
│   ├── _data/                  # Eleventy global data
│   │   ├── designStyles.js     # Fetches styles from Sanity
│   │   ├── sanity.js          # Sanity client config
│   │   └── site.js            # Site metadata
│   ├── _includes/
│   │   ├── layouts/           # Page layouts
│   │   └── partials/          # Reusable components
│   ├── admin/                 # Instructor review interface
│   ├── css/                   # Stylesheets
│   │   ├── base.css
│   │   ├── components.css
│   │   ├── layout.css
│   │   ├── utilities.css
│   │   └── style.css
│   ├── gallery/               # Gallery and detail pages
│   ├── js/                    # Client-side JavaScript
│   │   ├── analytics.js
│   │   ├── consent.js
│   │   ├── review.js
│   │   ├── submit-form.js
│   │   └── supabase.js
│   ├── about.njk
│   ├── cookies.njk
│   ├── gallery.njk
│   ├── index.njk
│   ├── privacy.njk
│   └── submit.njk
├── studio/                    # Sanity Studio
│   ├── schemas/
│   │   ├── article.js
│   │   ├── author.js
│   │   ├── designStyle.js
│   │   └── index.js
│   ├── package.json
│   └── sanity.config.js
├── tests/                     # Playwright tests
│   ├── consent.spec.js
│   ├── gallery.spec.js
│   ├── homepage.spec.js
│   └── submit-form.spec.js
├── .eleventy.js               # Eleventy configuration
├── .env.example               # Environment variables template
├── .gitignore
├── lighthouserc.js           # Lighthouse CI configuration
├── package.json
├── playwright.config.js
└── README.md
```

## Database Architecture

### Supabase (Operational Data)

- **gallery_submissions**: Student submissions with review workflow
- **analytics_events**: Privacy-first analytics tracking
- **consent_logs**: GDPR compliance logging

### Sanity CMS (Content)

- **designStyle**: Published design styles with educational content
- **article**: Blog posts and educational articles
- **author**: Content authors

## Development Commands

```bash
# Development
npm run dev              # Start Eleventy dev server

# Building
npm run build            # Build production site

# Testing
npm run test             # Run Playwright tests
npm run test:ui          # Run tests with UI

# Linting
npm run lint             # Run all linters
npm run lint:js          # ESLint
npm run lint:css         # Stylelint
npm run lint:md          # Markdownlint

# Formatting
npm run format           # Format code with Prettier
```

## Sanity Studio

To manage content in Sanity Studio:

```bash
cd studio
npm install
npm start
```

Visit http://localhost:3333 to access the Sanity Studio interface.

## Deployment

The site automatically deploys to GitHub Pages when pushing to the `main` branch. The CI/CD pipeline:

1. Lints code (JS, CSS, Markdown)
2. Builds the Eleventy site
3. Runs Playwright tests
4. Executes Lighthouse CI audits
5. Deploys to GitHub Pages

## Featured Design Styles

Currently featuring Swiss Design lineage demonstrations:

1. **Swiss Destructive Grunge**: Deconstructed grid approach breaking traditional Swiss principles
   - Demo: https://gsinghjay.github.io/swiss_destructive_grunge/

2. **Swiss Metro**: Clean modernist design inspired by transit systems
   - Demo: https://gsinghjay.github.io/swiss_metro/

## Contributing

We welcome contributions from students and design enthusiasts! To submit a design:

1. Visit [mywebclass.org/submit](https://mywebclass.org/submit)
2. Fill out the submission form with your demo details
3. Your submission will be reviewed by instructors
4. Approved designs will be featured in the gallery

For code contributions, please follow the existing patterns and ensure all tests pass.

## GDPR Compliance

This site is fully GDPR compliant with:

- Cookie consent banner with granular preferences
- Privacy policy and cookie policy pages
- Consent-based analytics tracking
- Right to access and delete personal data

## Accessibility

- WCAG AA compliant
- Keyboard navigation support
- Screen reader compatible
- High contrast ratios throughout
- Semantic HTML structure

## License

MIT License - See LICENSE file for details

## Contact

For questions or support, contact: hello@mywebclass.org

## Acknowledgments

Built for the S373 Design Education course, exploring Swiss Design lineage and modernist principles through authentic web demonstrations.
