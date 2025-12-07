---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
lastStep: 11
status: complete
inputDocuments:
  - docs/index.md
  - docs/requirements.md
  - docs/project-overview.md
  - docs/initial-plan.md
workflowType: 'prd'
lastStep: 0
project_name: 'is373-final'
user_name: 'Jay'
date: '2025-12-06'
---

# Product Requirements Document - is373-final

**Author:** Jay
**Date:** 2025-12-06

## Executive Summary

MyWebClass.org is a design-education platform that teaches visual design history through authentic, fully-implemented website demos. Unlike traditional design education that relies on static images and theory, this platform provides living, functional examples where users experience classic design principles in action—learning Swiss International Style by interacting with it, not just reading about it.

The platform serves as a "modern digital museum" where design students browse iconic styles (Swiss International, Bauhaus, Brutalism), submit their own implementations for peer learning, and instructors curate a quality-controlled public gallery. The winning implementation may become the official MyWebClass.org.

### What Makes This Special

- **Learning by experiencing**: Real, high-fidelity implementations replace static screenshots and theoretical descriptions
- **Peer learning ecosystem**: Students submit demos, creating a growing library of authentic examples
- **The medium is the message**: The platform itself demonstrates Swiss International Style principles, modeling what it teaches
- **Production-ready architecture**: Built on modern JAMstack (Eleventy + Sanity CMS) with full CI/CD, GDPR compliance, and accessibility baked in

## Project Classification

**Technical Type:** web_app (Static site generator with JAMstack architecture)
**Domain:** edtech (Design education platform)
**Complexity:** Medium

This is a brownfield project extending an existing Eleventy static site. The edtech domain introduces considerations around student privacy, accessibility compliance (WCAG AA), and content moderation for user submissions. The architecture leverages Sanity headless CMS for content management and submission workflows, with serverless functions handling dynamic operations.

## Success Criteria

### User Success

**Visitors/Design Enthusiasts:**
- Can identify Swiss International Style "in the wild" after browsing the gallery
- Experience a curated, ThemeForest-quality library of "vibe coded" Swiss designs
- Discover featured/top themes that exemplify authentic Swiss aesthetic

**Students:**
- Can submit design demos with clear feedback loop
- See approved work published and potentially featured
- Learn by studying high-quality peer implementations

**Instructors:**
- Can efficiently review submissions against Swiss style authenticity
- Have tools to approve, reject, and feature top submissions
- Maintain quality standards for the curated library

### Business Success

**Primary Metric:** Win the S373 competition and become the official MyWebClass.org

**Secondary Metrics:**
- Curated library of 3+ high-quality, authentic Swiss-style demos at launch
- Working end-to-end submission workflow (submit → review → publish)
- Featured themes section highlighting top implementations
- Production-ready codebase worthy of becoming the official platform

**Future State (Post-Competition):**
- Transition from instructor-only approval to community-based curation
- Growing library of quality Swiss designs
- Active submission pipeline from design students

### Technical Success

- Lighthouse performance score >90
- WCAG AA accessibility compliance
- Full CI/CD pipeline passing (linting, tests, Lighthouse CI, bundle size)
- Sanity CMS fully integrated with migrated data
- GDPR-compliant cookie consent with conditional analytics
- Responsive across mobile, tablet, and desktop breakpoints
- Clean deployment to GitHub Pages

### Measurable Outcomes

| Metric | Target |
|--------|--------|
| Design style demos | 3+ authentic implementations |
| Lighthouse Score | >90 (Performance, Accessibility, Best Practices, SEO) |
| Accessibility | WCAG AA compliant |
| CI Pipeline | All checks passing |
| Submission Workflow | End-to-end functional |
| CMS Integration | Sanity with migrated data |

## Product Scope

### MVP - Minimum Viable Product

**All S373 Requirements (Competition Deliverables):**

**Design Style Gallery:**
- Gallery listing with thumbnails, style names, descriptions, "View Demo" links
- Detail pages with fully-implemented demos in authentic design styles
- 3+ design style implementations (Swiss, Bauhaus, Brutalist, etc.)
- Educational content: origins, characteristics, authenticity explanation
- Featured themes section for top submissions

**Submission Workflow:**
- Submission form (name, email, style, URL, screenshot, explanation, consent)
- Sanity CMS backend with status workflow (submitted → approved → rejected)
- Instructor review dashboard with approve/reject actions
- Only approved entries appear in public gallery

**CMS (Sanity):**
- `designStyle` schema (title, slug, description, history, palette, typography, images)
- `gallerySubmission` schema (submitter info, URL, screenshot, style ref, status)
- `article` schema (educational content)
- `author` schema
- Migrate existing static data to Sanity

**Build Pipeline + CI/CD:**
- GitHub Actions workflow
- Quality gates: JS, CSS, Markdown linting + Prettier
- Eleventy build
- Playwright tests (2-3 e2e tests)
- Lighthouse CI (reports as artifacts)
- Bundle size enforcement
- Deploy to GitHub Pages

**GDPR/Privacy/Legal:**
- Cookie consent banner (Accept/Reject/Preferences)
- Analytics delayed until consent given
- Privacy Policy, Terms of Service, Cookie Policy pages
- Accessible forms with labels/ARIA

**Web Analytics:**
- Evaluate 2+ options (GA4, Plausible, Cloudflare, Fathom)
- Implement 1 with GDPR consent mode
- Deliver `docs/analytics-evaluation.md`

**Discord Integration:**
- Discord server with `#gallery-submissions` and `#announcements`
- Webhook: new submission → Discord notification
- Optional: approval notification

**CRM Integration:**
- HubSpot, Airtable, or Notion integration
- Store submission data, contributor info, contact info
- Automation via Zapier/Make

**UX Deliverables:**
- 3+ personas (design student, instructor, hobbyist)
- Customer journey map
- Problem statement & goals
- Competitor analysis (Awwwards, CSS Zen Garden, etc.)
- Information architecture (sitemap, page structure)
- Wireframes (homepage, gallery, detail, submission)
- Brand guide (logo, typography, colors, components, accessibility)

**Documentation:**
- `docs/ai-usage.md` - AI usage documentation
- `docs/qa-report.md` - Lighthouse scores, CI logs, bundle size, test results, accessibility notes

**Deployment:**
- Production URL on GitHub Pages
- Clean CI build
- Working cookie banner + consent logic
- Analytics only after consent

### Growth Features (Post-Competition)

- Community voting/rating system replacing instructor-only approval
- User accounts for submitters
- Comments and feedback on submissions
- Advanced filtering/search
- Expanded design style categories

### Vision (Future)

- Community-curated design library (ThemeForest for Swiss designs)
- Designer profiles and portfolios
- API access to themes

## User Journeys

### Journey 1: Marcus Chen - The Aspiring Vibe Coder

Marcus is a second-year web development student who's always been drawn to clean, minimalist design but never knew there was a name for it. While browsing MyWebClass.org for a class assignment, he discovers Swiss International Style and has an "aha" moment - this is the aesthetic he's been trying to recreate intuitively.

He spends an hour exploring the gallery, studying the featured themes, reading about grid systems and typography rules. The educational content clicks - he finally understands *why* certain designs feel "right." Inspired, he decides to build his own Swiss-style portfolio site.

Three weeks later, Marcus submits his first design. He fills out the form carefully, uploads his screenshot, and writes a passionate explanation of how he applied the principles he learned. The Discord notification pings in #gallery-submissions. He waits nervously.

When the approval notification arrives, Marcus feels a rush of validation. His design is now part of the curated library - proof that he "gets it." He shares the link everywhere. Six months later, he's submitted three more designs and considers himself a legitimate vibe coder.

**Capabilities Required:**
- Gallery browsing with educational content
- Detailed style guides and design principles
- Submission form with explanation field
- Discord webhook notifications
- Approval workflow with notifications
- Public gallery display of approved work

---

### Journey 2: Dr. Sarah Williams - The Design Instructor

Dr. Williams teaches Visual Communication at a state university. She's frustrated that students learn design theory from textbooks but can't recognize good design in practice. She discovers MyWebClass.org and realizes it's exactly what her curriculum needs - living examples, not static PDFs.

She assigns her students to study three designs from the gallery and write critiques. The engagement is immediate - students are actually excited to analyze real websites instead of reading about Müller-Brockmann.

When submission season begins, Dr. Williams logs into the instructor dashboard each morning with her coffee. She reviews pending submissions, looking for authentic Swiss characteristics. Some students nail it; others need feedback. She approves the strong ones and writes rejection notes for those that miss the mark, always educational.

The breakthrough comes when a student's submission gets featured. The class celebrates, and suddenly everyone wants their work in the gallery. Quality improves dramatically. Dr. Williams realizes she's not just teaching design - she's building a community of practitioners.

**Capabilities Required:**
- Instructor authentication and dashboard
- Submission queue with pending/approved/rejected tabs
- Review interface with approve/reject actions
- Feedback/rejection notes
- View submission details (screenshot, URL, explanation)
- Track student submissions

---

### Journey 3: Alex Rivera - The Site Curator

Alex is the graduate assistant who manages MyWebClass.org. While instructors handle academic approvals, Alex ensures the public-facing gallery tells a cohesive story. Every week, Alex reviews the newly approved submissions and decides which ones deserve the spotlight.

Monday morning, Alex opens the admin dashboard and sees five new approved designs. Two are solid but standard. One is exceptional - a portfolio site that perfectly balances Swiss grid with modern interactions. Alex marks it as "featured" and writes a short highlight blurb.

Alex also monitors the Discord channels, watching community reactions to new approvals. When a design generates buzz, that's a signal to consider featuring it. Alex updates the homepage's featured section, ensuring the first impression visitors get showcases the absolute best work.

The site's growing reputation is Alex's KPI. When design blogs start linking to MyWebClass.org as a reference, Alex knows the curation strategy is working.

**Capabilities Required:**
- Admin/curator role (separate from instructor)
- Featured theme management
- Highlight/blurb editing for featured items
- Homepage featured section management
- Discord channel monitoring
- Analytics access (future)

---

### Journey 4: Jordan Park - The Design Hobbyist

Jordan is a backend developer who secretly wishes they had better design taste. They stumble on MyWebClass.org while searching "how to make website look professional" at 11 PM. The homepage immediately catches their attention - it's exactly the clean, confident aesthetic they want.

Jordan browses the gallery, filtering by style. They click into a Bauhaus-inspired design and read the educational sidebar. "Oh, that's why geometric shapes work here." They bookmark three designs as references for their personal project.

Over the next month, Jordan returns regularly, treating MyWebClass.org like a design cookbook. They never submit anything, but they learn to recognize Swiss style in the wild. When their team debates a UI decision, Jordan confidently says "that's not balanced - the grid is off" and everyone looks at them differently.

**Capabilities Required:**
- Public gallery browsing (no auth required)
- Filtering by design style
- Educational content on detail pages
- Bookmarking/favorites (future feature)
- Mobile-responsive browsing

---

### Journey 5: The Discord Community Moment

It's 3:47 PM when the webhook fires. A new submission just landed in #gallery-submissions. The bot posts: "🎨 New Submission: 'Helvetica Dreams' by @marcus_codes - Swiss International Style"

Three community members react within minutes. Someone posts "clean grid work 👀". Another asks "is that Inter or Helvetica Neue?" A small discussion breaks out about typography choices.

When the approval notification hits #announcements two days later, Marcus gets pinged. "Congrats @marcus_codes! Your submission 'Helvetica Dreams' has been approved and added to the gallery." The community celebrates with emoji reactions.

This loop - submission → discussion → approval → celebration - creates a feedback cycle that keeps the community engaged and motivated to submit quality work.

**Capabilities Required:**
- Discord webhook for new submissions
- Discord webhook for approvals
- Formatted bot messages with submission details
- Channel structure (#gallery-submissions, #announcements)
- @mention capability for submitters (if Discord-linked)

---

### Journey Requirements Summary

| Journey | Primary Capabilities |
|---------|---------------------|
| Vibe Coder (Marcus) | Gallery browsing, educational content, submission form, approval notifications |
| Instructor (Dr. Williams) | Auth dashboard, submission queue, approve/reject workflow, feedback notes |
| Curator (Alex) | Featured management, highlight editing, homepage curation |
| Hobbyist (Jordan) | Public gallery, filtering, educational sidebars, mobile experience |
| Discord Community | Webhooks for submissions/approvals, formatted notifications, channel structure |

**Core Capability Areas Revealed:**
1. **Public Gallery Experience** - Browsing, filtering, educational content
2. **Submission Pipeline** - Form, validation, storage, status tracking
3. **Instructor Dashboard** - Queue management, review workflow, feedback
4. **Curator Tools** - Featured selection, highlight content, homepage management
5. **Discord Integration** - Webhooks, formatted messages, community notifications
6. **Authentication** - Role-based access (instructor vs curator vs public)

## Domain-Specific Requirements

### EdTech Privacy & Data Handling

MyWebClass.org collects student data through voluntary submissions, requiring careful privacy consideration even though submissions are not tied to academic records.

### Data Collection Scope

**Personal Data Collected:**
- Name (displayed publicly with approved submissions)
- Email address (.edu institutional emails)
- Design style submissions (URL, screenshot, explanation)
- Consent preferences

**Usage Purposes:**
- Submission status notifications (required for service)
- Marketing/newsletter communications (requires separate opt-in consent)
- Community engagement via Discord
- Analytics and platform improvement

### Consent Requirements

**Submission Consent (Required):**
- Consent to public display of name and submission if approved
- Consent to submission status notifications
- Acknowledgment of data sharing with review platforms

**Marketing Consent (Separate Opt-In):**
- Explicit checkbox for newsletter/marketing emails
- Must be unchecked by default (GDPR requirement)
- Easy unsubscribe mechanism required
- Cannot bundle with submission consent

### Third-Party Data Sharing

| Service | Data Shared | Purpose |
|---------|-------------|---------|
| Discord | Submitter name, style, submission status | Community notifications |
| CRM (HubSpot/Airtable/Notion) | Name, email, submission data | Contact management, workflow |
| Google Analytics 4 | Anonymized usage data | Site analytics (consent required) |
| Cloudflare | IP addresses, traffic data | CDN, security, analytics |

### Data Retention Policy

**Retention Period:** Indefinite

- Approved submissions: Permanent (part of public gallery)
- Rejected submissions: Retained for records
- Email addresses: Retained until unsubscribe request
- Analytics data: Per platform retention policies

**User Rights:**
- Right to request data deletion (GDPR Article 17)
- Right to withdraw marketing consent
- Right to data portability
- Right to access their data

### Privacy Policy Requirements

The Privacy Policy page must disclose:
- All data collected and purposes
- Third-party services and data sharing
- Indefinite retention policy
- User rights and how to exercise them
- Contact information for privacy requests
- Cookie usage and consent mechanism

### Implementation Checklist

- [ ] Submission form includes required consent checkbox
- [ ] Separate marketing opt-in checkbox (unchecked default)
- [ ] Privacy Policy covers all third-party integrations
- [ ] Cookie consent delays GA4 until accepted
- [ ] Unsubscribe link in all marketing emails
- [ ] Data deletion process documented

## Web App Specific Requirements

### Project-Type Overview

MyWebClass.org is a **Multi-Page Application (MPA)** built with Eleventy static site generator. Pages are pre-rendered at build time, ensuring fast load times, excellent SEO, and simple hosting on GitHub Pages. Content updates require a rebuild triggered by Sanity CMS webhooks.

### Browser Support Matrix

| Browser | Version | Support Level |
|---------|---------|---------------|
| Chrome | Latest 2 versions | Full |
| Firefox | Latest 2 versions | Full |
| Safari | Latest 2 versions | Full |
| Edge | Latest 2 versions | Full |
| Mobile Chrome | Latest | Full |
| Mobile Safari | Latest | Full |

**Not Supported:** Internet Explorer, Legacy Edge, browsers older than 2 versions

### Responsive Design

**Breakpoint Strategy:**

| Breakpoint | Width | Target |
|------------|-------|--------|
| Mobile | < 640px | Phones (portrait) |
| Tablet | 640px - 1024px | Tablets, phones (landscape) |
| Desktop | > 1024px | Laptops, desktops |

**Mobile-First Approach:**
- Base styles target mobile
- Progressive enhancement for larger screens
- Touch-friendly tap targets (minimum 44x44px)
- Responsive images with srcset
- Collapsible navigation on mobile

### Performance Targets

| Metric | Target | Measurement |
|--------|--------|-------------|
| Lighthouse Performance | > 90 | CI pipeline |
| Lighthouse Accessibility | > 90 | CI pipeline |
| Lighthouse Best Practices | > 90 | CI pipeline |
| Lighthouse SEO | > 90 | CI pipeline |
| First Contentful Paint | < 1.5s | Lighthouse |
| Largest Contentful Paint | < 2.5s | Lighthouse |
| Cumulative Layout Shift | < 0.1 | Lighthouse |
| Total Bundle Size (CSS) | < 50KB | CI enforcement |

**Performance Strategies:**
- Static HTML generation (no client-side rendering)
- Optimized images via Eleventy Image plugin
- CSS minification and tree-shaking
- Lazy loading for below-fold images
- Preload critical fonts
- CDN delivery via Cloudflare

### SEO Strategy

**Technical SEO:**
- Semantic HTML5 structure
- Unique title and meta description per page
- Canonical URLs
- XML sitemap generation (`sitemap.xml`)
- Robots.txt configuration
- Clean URL structure (`/styles/swiss-international/` not `/styles/?id=123`)

**Structured Data (Schema.org):**
- `WebSite` schema on homepage
- `Article` schema for educational content
- `ImageGallery` schema for gallery pages
- `CreativeWork` schema for design submissions

**Social Sharing:**
- Open Graph meta tags (title, description, image)
- Twitter Card meta tags
- Preview images optimized for social (1200x630px)

### Accessibility Level

**Target:** WCAG 2.1 Level AA

**Implementation Requirements:**
- Semantic HTML elements (`<nav>`, `<main>`, `<article>`, `<aside>`)
- Skip links for keyboard navigation
- ARIA labels for interactive elements
- Alt text for all images
- Form labels properly associated with inputs
- Focus-visible styles for keyboard users
- Color contrast ratio minimum 4.5:1
- No content conveyed by color alone
- Reduced motion support (`prefers-reduced-motion`)

**Testing Requirements:**
- Automated: axe-core in Playwright tests
- Manual: Keyboard navigation verification
- Screen reader testing (VoiceOver, NVDA)

### Build & Deployment Architecture

**Build Pipeline:**
```
Sanity CMS → Webhook → GitHub Actions → Eleventy Build → GitHub Pages
```

**Rebuild Triggers:**
- Push to main branch
- Sanity content webhook (new/updated content)
- Manual dispatch

**No Real-Time Requirements:**
- Static site regeneration on content changes is sufficient
- No WebSocket or SSE needed for MVP
- Submission status shown on page reload

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Competition-Driven MVP
- Deliver all S373 requirements to win competition
- Prioritize judge-visible features (gallery, submissions, CI/CD)
- Polish the demo experience over internal tooling
- Position for post-competition iteration

**Resource Reality:**
- Fixed timeline (two-week sprint)
- Team-based execution
- AI-accelerated development

### MVP Scope Validation

**Core Journeys Supported in MVP:**

| Journey | MVP Support | Notes |
|---------|-------------|-------|
| Vibe Coder (Marcus) | ✅ Full | Gallery, submission, approval flow |
| Instructor (Dr. Williams) | ✅ Full | Dashboard, review workflow |
| Curator (Alex) | ⚠️ Partial | Featured management (may be instructor role for MVP) |
| Hobbyist (Jordan) | ✅ Full | Public gallery, educational content |
| Discord Community | ✅ Full | Webhooks for submissions/approvals |

**MVP Simplification Decision:**
For MVP, Curator and Instructor roles may be combined. Featured theme selection can be a field in Sanity CMS that instructors toggle, rather than a separate curator dashboard.

### Feature Priority Matrix

| Priority | Feature | Rationale |
|----------|---------|-----------|
| P0 - Critical | Design gallery with 3+ demos | Core value proposition |
| P0 - Critical | Sanity CMS integration | Required for submission workflow |
| P0 - Critical | Submission form | Student journey essential |
| P0 - Critical | Instructor dashboard | Review workflow essential |
| P0 - Critical | CI/CD pipeline | Competition requirement |
| P0 - Critical | GDPR cookie consent | Compliance requirement |
| P1 - Important | Discord webhooks | Community engagement |
| P1 - Important | CRM integration | Data management |
| P1 - Important | Analytics (GA4) | Usage tracking |
| P1 - Important | Featured themes section | Polish/differentiation |
| P2 - Nice-to-Have | Feedback notes on rejection | Instructor UX |
| P2 - Nice-to-Have | Email notifications | Can be manual initially |

### Post-MVP Roadmap

**Phase 2 (Post-Competition):**
- Community voting system
- User accounts for submitters
- Email notifications (automated)
- .edu email verification
- Advanced gallery filtering/search

**Phase 3 (Growth):**
- Multiple design style categories
- Designer profiles
- Comments and feedback
- API access

### Risk Mitigation Strategy

**Technical Risks:**

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Sanity CMS learning curve | Medium | High | Start with simple schemas, iterate |
| Lighthouse score < 90 | Low | High | Performance-first CSS, image optimization |
| CI/CD pipeline complexity | Medium | Medium | Use existing GitHub Actions patterns |
| Discord webhook reliability | Low | Low | Graceful degradation, manual backup |

**Competition Risks:**

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Incomplete features at deadline | Medium | Critical | Prioritize P0 features, cut P2 if needed |
| UI polish insufficient | Medium | High | Focus on Swiss design consistency |
| Demo fails during presentation | Low | Critical | Test thoroughly, have backup screenshots |

**Resource Contingency:**
If timeline pressure hits:
1. Keep P0 features, cut P2 entirely
2. Combine Curator/Instructor roles
3. Manual Discord notifications instead of webhooks
4. Static CRM export instead of live integration

## Functional Requirements

### Design Gallery

- FR1: Visitors can browse a gallery of design style entries showing thumbnails, style names, and descriptions
- FR2: Visitors can filter gallery entries by design style category
- FR3: Visitors can view detailed pages for each design style with embedded demo preview
- FR4: Visitors can read educational content about each style including origins, characteristics, and authenticity explanation
- FR5: Visitors can see featured/highlighted design submissions prominently displayed
- FR6: Visitors can navigate to external demo URLs for each submission
- FR7: Visitors can view the gallery on mobile, tablet, and desktop devices

### Submission Management

- FR8: Students can submit design demos via a structured form
- FR9: Students can provide their name and .edu email address with submissions
- FR10: Students can select the design style category for their submission
- FR11: Students can provide a URL to their hosted demo
- FR12: Students can upload a screenshot of their design
- FR13: Students can write an explanation of how their design demonstrates style authenticity
- FR14: Students can provide consent for public display if approved
- FR15: Students can opt-in to marketing/newsletter communications (separate from submission consent)
- FR16: System stores submissions in Sanity CMS with pending status

### Instructor Dashboard

- FR17: Instructors can authenticate to access the review dashboard
- FR18: Instructors can view a queue of pending submissions
- FR19: Instructors can view submission details including screenshot, URL, and explanation
- FR20: Instructors can approve submissions, changing status to approved
- FR21: Instructors can reject submissions, changing status to rejected
- FR22: Instructors can add feedback notes when rejecting submissions
- FR23: Instructors can filter submissions by status (pending, approved, rejected)
- FR24: Instructors can mark approved submissions as featured

### Content Curation

- FR25: Curators can select which approved submissions appear as featured themes
- FR26: Curators can add highlight blurbs to featured submissions
- FR27: Curators can manage the order of featured themes on the homepage
- FR28: System displays only approved submissions in the public gallery

### User Consent & Privacy

- FR29: Visitors can accept or reject cookie consent for analytics tracking
- FR30: Visitors can modify cookie preferences after initial choice
- FR31: System delays analytics loading until consent is granted
- FR32: Visitors can view Privacy Policy page with all data collection disclosures
- FR33: Visitors can view Terms of Service page
- FR34: Visitors can view Cookie Policy page
- FR35: Users can request deletion of their submitted data

### Integrations

- FR36: System sends Discord webhook notification when new submission is created
- FR37: System sends Discord webhook notification when submission is approved
- FR38: System syncs submission data to CRM (HubSpot/Airtable/Notion)
- FR39: System tracks page views and user behavior via Google Analytics 4 (with consent)
- FR40: System triggers site rebuild via webhook when Sanity content changes

### Content Management (CMS)

- FR41: Content editors can manage design style entries in Sanity CMS
- FR42: Content editors can create and edit educational articles
- FR43: Content editors can manage author profiles
- FR44: System generates static pages from Sanity CMS content at build time
- FR45: System optimizes images from CMS for web delivery

### Legal & Accessibility

- FR46: System provides skip links for keyboard navigation
- FR47: System provides alt text for all images
- FR48: System provides ARIA labels for interactive elements
- FR49: System maintains 4.5:1 color contrast ratio minimum
- FR50: System provides semantic HTML structure for screen readers

## Non-Functional Requirements

### Performance

- NFR1: Page load time < 3 seconds on 3G connection
- NFR2: Lighthouse Performance score > 90
- NFR3: First Contentful Paint < 1.5 seconds
- NFR4: Largest Contentful Paint < 2.5 seconds
- NFR5: Cumulative Layout Shift < 0.1
- NFR6: Total CSS bundle size < 50KB (gzipped)
- NFR7: Images optimized with WebP format and lazy loading
- NFR8: Gallery page renders 20+ entries without performance degradation

### Security

- NFR9: All traffic served over HTTPS
- NFR10: Form submissions protected against CSRF attacks
- NFR11: User input sanitized to prevent XSS vulnerabilities
- NFR12: Instructor dashboard requires authentication
- NFR13: API keys and secrets stored in environment variables, never in code
- NFR14: Third-party integrations use secure authentication (OAuth, API keys)
- NFR15: No sensitive data exposed in client-side JavaScript

### Accessibility

- NFR16: WCAG 2.1 Level AA compliance across all pages
- NFR17: Color contrast ratio minimum 4.5:1 for normal text
- NFR18: Color contrast ratio minimum 3:1 for large text
- NFR19: All interactive elements keyboard accessible
- NFR20: Focus indicators visible on all focusable elements
- NFR21: Screen reader compatible with semantic HTML and ARIA labels
- NFR22: Form error messages associated with inputs via aria-describedby
- NFR23: Reduced motion support via prefers-reduced-motion media query

### Reliability

- NFR24: Site available 99.9% uptime (GitHub Pages SLA)
- NFR25: Graceful degradation when third-party integrations fail
- NFR26: Discord webhook failures logged but don't block submission
- NFR27: CRM sync failures queued for retry
- NFR28: Build failures prevent deployment of broken code

### Integration

- NFR29: Sanity CMS content changes trigger rebuild within 5 minutes
- NFR30: Discord webhooks deliver within 30 seconds of trigger event
- NFR31: Analytics tracking compliant with GDPR consent requirements
- NFR32: CRM integration supports batch sync for reliability
- NFR33: All integrations support manual fallback procedures

### Maintainability

- NFR34: Code follows ESLint and Prettier style guidelines
- NFR35: Components documented with usage examples
- NFR36: CI pipeline provides clear failure messages
- NFR37: Environment configuration documented for local development
- NFR38: Deployment process documented and repeatable

