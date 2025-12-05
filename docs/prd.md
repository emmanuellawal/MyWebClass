---
stepsCompleted: [1, 2, 3, 4, 7, 8, 9, 10, 11]
inputDocuments:
  - docs/requirements.md
workflowType: 'prd'
lastStep: 11
status: complete
project_name: 'MyWebClass'
user_name: 'Jay'
date: '2025-12-05'
---

# Product Requirements Document - MyWebClass

**Author:** Jay
**Date:** 2025-12-05

## Executive Summary

MyWebClass.org is a design education platform that teaches visual design history through authentic, fully-implemented website demonstrations. Unlike traditional design education resources that rely on static images and theory, MyWebClass provides living examples—real websites that faithfully recreate iconic design movements like Swiss International Style, Bauhaus, and Brutalism.

The platform serves three core audiences: design students learning through hands-on examples, instructors curating and reviewing student submissions, and design enthusiasts exploring the history and principles of visual design.

### What Makes This Special

Each design style in the gallery isn't just *styled* to look like a historical movement—it's a *researched implementation* built with authentic typography, layout principles, color usage, and interaction patterns. Every demo includes educational context explaining the style's origins, key characteristics, and why the implementation is faithful to historical principles.

The platform combines gallery, textbook, and portfolio functionality: browse curated examples, learn the history behind each style, and submit your own authenticated implementations for instructor review.

## Project Classification

**Technical Type:** Web Application (Static Site + Headless CMS)
**Domain:** EdTech (Design Education)
**Complexity:** Medium

**Technology Stack:**
- Eleventy (11ty) static site generator
- Sanity CMS for all content and operational data
- Google Analytics 4 with GDPR-compliant consent management
- GitHub Actions CI/CD with Playwright tests
- Deployment to GitHub Pages

**Domain Considerations:**
- WCAG AA accessibility compliance required
- GDPR cookie consent for analytics
- Content moderation via instructor review workflow

## Success Criteria

### User Success

**Design Student**
- Can browse the gallery and understand different design styles through educational content
- Can submit their own design demo with explanation of authenticity
- Receives confirmation of submission and notification when approved
- Sees their approved work featured in the public gallery

**Instructor**
- Can access all submissions through Sanity Studio
- Can review submission details: demo URL, screenshot, authenticity explanation
- Can toggle status (submitted → approved/rejected) with single action
- Only approved submissions appear in public gallery automatically

**Design Enthusiast**
- Can discover and browse iconic design styles
- Can view live demos that authentically recreate historical movements
- Can read educational content explaining origins, characteristics, and design principles
- Can understand *why* each demo is faithful to its style

### Business Success

- **Competition Winner:** Deliverable quality that could become the official MyWebClass.org
- **Production Ready:** Site can go live immediately after judging
- **Complete Requirements:** All functional, technical, and documentation requirements met
- **5-Minute Pitch Ready:** All features demonstrable in final presentation

### Technical Success

| Metric | Target |
|--------|--------|
| Design Style Demos | Minimum 3 authentic implementations |
| Lighthouse Performance | 90+ score |
| Lighthouse Accessibility | 90+ score |
| CI Pipeline | All checks passing (lint, build, test, Lighthouse) |
| Bundle Size | CSS < 50KB uncompressed |
| Test Coverage | 2-3 Playwright E2E tests passing |
| GDPR Compliance | Consent banner functional, analytics gated |
| Uptime | Deployed and accessible on GitHub Pages |

### Measurable Outcomes

- [ ] Gallery displays 3+ design styles with educational content
- [ ] Submission form captures all required fields and stores in Sanity
- [ ] Instructor can review and approve submissions in Sanity Studio
- [ ] Approved submissions appear in public gallery
- [ ] Discord webhook fires on new submission
- [ ] CRM receives submission/contributor data
- [ ] Cookie consent gates GA4 loading
- [ ] All CI checks green on main branch
- [ ] Live deployment accessible via public URL

## Product Scope

### MVP - Minimum Viable Product

**Core Gallery Experience**
- Homepage with hero and featured styles grid
- Gallery listing page with all design styles
- Detail page per style: educational content + "View Demo" link to external GitHub Pages
- About page explaining MyWebClass mission

**Submission Workflow**
- Submission form: name, email, style, demo URL, screenshot URL, authenticity explanation
- Sanity `gallerySubmission` schema with status workflow
- Instructor review via Sanity Studio
- Only approved submissions visible in gallery

**Content Management**
- Sanity schemas: `designStyle`, `gallerySubmission`, `article`, `author`
- Sanity Studio deployed for content editing
- 3 design style entries with full educational content

**Integrations**
- Discord webhook: notification on new submission
- CRM (HubSpot/Airtable/Notion): store submission + contributor data
- Google Analytics 4 with GDPR consent gating

**Compliance & Quality**
- Cookie consent banner (accept/reject/preferences)
- Privacy policy page
- WCAG AA accessibility
- Full CI/CD: lint → build → test → Lighthouse → deploy

**Documentation**
- `docs/analytics-evaluation.md`
- `docs/ai-usage.md`
- `docs/qa-report.md`
- `reference/harvest-notes.md`

### Growth Features (Post-MVP)

- User accounts for submitters to track their submissions
- Comment/feedback system on submissions
- Style comparison tool (side-by-side demos)
- Search and filter in gallery
- Related styles recommendations
- Newsletter signup integration

### Vision (Future)

- Community-driven design style wiki
- Interactive tutorials teaching how to implement each style
- Design style generator/starter templates
- Integration with design tools (Figma plugins)
- Certification program for style authenticity

## User Journeys

### Journey 1: Alex Chen - From Assignment to Featured Work

Alex is a junior design student who's been given an assignment: recreate a historical design style as a working website. She's heard of Swiss Design but doesn't really *get* it beyond "clean and grid-based." Searching for examples, she finds MyWebClass.org.

Browsing the gallery, she clicks on "Swiss International Style" and immediately sees a live demo—not a screenshot, but an actual working page. The educational content explains *why* the typography is Helvetica, *why* the grid is asymmetrical, *why* there's so much whitespace. She finally understands.

Inspired, Alex builds her own Swiss-style demo on GitHub Pages. When she's confident it's authentic, she visits `/submit` and fills out the form: her name, the demo URL, a screenshot, and a 200-word explanation of how she honored the style's principles.

The next day, her instructor reviews the submission in Sanity Studio. Impressed by her attention to typographic hierarchy, he approves it. Alex gets an email, checks the gallery, and sees her work featured alongside the curated examples. She screenshots it for her portfolio.

### Journey 2: Professor Williams - Efficient Curation

Professor Williams teaches Visual Design History. Every semester, students submit design demos via email attachments, Google Drive links, and random Discord messages. It's chaos.

This semester, he directs all submissions to MyWebClass.org. When Alex submits her Swiss Design demo, a Discord notification pops up in `#gallery-submissions`. He clicks through to Sanity Studio during office hours.

The interface shows him everything in one place: Alex's demo URL (he opens it in a new tab), her screenshot, her authenticity explanation. He reads her reasoning about Helvetica usage and grid structure—she clearly did her research. One click: **Approved**.

The approved work appears instantly in the public gallery. When preparing his lecture slides, he simply links to the gallery page instead of hunting for examples. Students see real peer work alongside curated examples—teaching becomes showing.

### Journey 3: Marcus - The Curious Developer

Marcus is a self-taught frontend developer who stumbled onto MyWebClass while searching "brutalist web design examples." He's tired of every site looking the same and wants to understand design movements beyond "minimalist" and "material."

On the homepage, he's drawn to a bold card labeled "Brutalism." The detail page shows a raw, aggressive demo—exposed HTML structure, monospace fonts, harsh colors. But the educational content explains it's *intentional*: brutalism rejects polish in favor of honesty about the medium.

Marcus spends an hour clicking through Swiss, Bauhaus, and Flat Design demos. Each one has the "View Demo" button linking to GitHub Pages—he can inspect the source code directly. He bookmarks the site and returns whenever he needs design inspiration that isn't just "another Tailwind template."

### Journey 4: Site Launch - Admin Setup

Before launch, the team admin needs to configure the system. She deploys Sanity Studio and creates the initial `designStyle` entries for the three pre-built demos. Each entry includes: title, slug, historical background, key characteristics, color palette, typography guidance, and the external demo URL.

She tests the submission form, watching the data appear in Sanity as a `gallerySubmission` with status "submitted." She configures the Discord webhook—new submissions trigger a message to `#gallery-submissions`. She sets up the CRM integration via Zapier: submission data flows to Airtable for contributor tracking.

Finally, she verifies the cookie consent banner works: analytics only load after consent. The site is ready for students.

### Journey Requirements Summary

| Journey | Reveals Requirements For |
|---------|-------------------------|
| Alex (Student) | Gallery browse, detail page content, submission form, approval notification, public display |
| Prof. Williams (Instructor) | Sanity review interface, status workflow, Discord notifications, efficient content access |
| Marcus (Enthusiast) | Educational content depth, external demo links, discoverability, source code access |
| Admin Setup | Sanity schemas, content entry, Discord webhook, CRM integration, consent management |

## Web Application Requirements

### Architecture Overview

**Application Type:** Multi-Page Application (MPA)
**Framework:** Eleventy (11ty) Static Site Generator
**Rendering:** Static HTML generation at build time
**Data Source:** Sanity CMS via GROQ queries at build time

This architecture provides excellent performance, SEO, and simplicity. Pages are pre-rendered as static HTML, with client-side JavaScript only for interactive features (consent banner, form submission).

### Browser Support Matrix

| Browser | Minimum Version | Support Level |
|---------|-----------------|---------------|
| Chrome | Last 2 versions | Full |
| Firefox | Last 2 versions | Full |
| Safari | Last 2 versions | Full |
| Edge | Last 2 versions | Full |
| Mobile Safari | iOS 14+ | Full |
| Chrome Android | Last 2 versions | Full |

**Not Supported:** Internet Explorer (all versions)

### Responsive Design Requirements

| Breakpoint | Width | Target Devices |
|------------|-------|----------------|
| Mobile | < 768px | Phones |
| Tablet | 768px - 1024px | Tablets, small laptops |
| Desktop | > 1024px | Laptops, desktops |

**Design Approach:**
- Mobile-first CSS architecture
- Fluid typography scaling
- Flexible grid system (CSS Grid + Flexbox)
- Touch-friendly tap targets (minimum 44x44px)
- No horizontal scrolling at any breakpoint

### Performance Targets

| Metric | Target | Measurement |
|--------|--------|-------------|
| Lighthouse Performance | 90+ | CI/CD pipeline |
| First Contentful Paint | < 1.5s | Lighthouse |
| Largest Contentful Paint | < 2.5s | Lighthouse |
| Cumulative Layout Shift | < 0.1 | Lighthouse |
| Total Bundle Size (CSS) | < 50KB | Build output |
| Time to Interactive | < 3s | Lighthouse |

**Performance Strategies:**
- Static HTML generation (no server rendering)
- Lazy loading for images below the fold
- Minimal JavaScript (consent, forms only)
- CSS optimized and minified at build
- Image optimization via Sanity CDN

### SEO Strategy

**Technical SEO:**
- Semantic HTML5 structure
- Unique `<title>` and `<meta description>` per page
- Open Graph tags for social sharing
- Canonical URLs on all pages
- XML sitemap generation
- robots.txt configuration

**Content SEO:**
- Design style pages optimized for "[style name] web design" queries
- Educational content with relevant keywords
- Alt text on all images
- Structured heading hierarchy (H1 → H2 → H3)

**Target Keywords:**
- "Swiss design examples"
- "Bauhaus web design"
- "design style gallery"
- "learn design history"
- "[style] website examples"

### Accessibility Requirements (WCAG AA)

**Perceivable:**
- Alt text on all images
- Color contrast ratio minimum 4.5:1 (text), 3:1 (large text)
- Text resizable to 200% without loss of functionality
- No content conveyed by color alone

**Operable:**
- Full keyboard navigation
- Skip-to-content link
- Focus indicators visible
- No keyboard traps
- Touch targets minimum 44x44px

**Understandable:**
- Consistent navigation across pages
- Form labels and error messages clear
- Language attribute set on HTML element

**Robust:**
- Valid HTML5
- ARIA labels where semantic HTML insufficient
- Works with screen readers (VoiceOver, NVDA)

### Client-Side JavaScript

**Minimal JS footprint - only for:**

1. **Cookie Consent Banner** (`consent.js`)
   - Display/hide consent UI
   - Store preference in localStorage
   - Gate GA4 loading on consent

2. **Submission Form** (`submit-form.js`)
   - Form validation
   - Submit to Sanity API
   - Success/error state handling

3. **Analytics** (`analytics.js`)
   - GA4 initialization (after consent)
   - Page view tracking
   - Event tracking (demo clicks, form submissions)

**No JavaScript required for:**
- Navigation
- Content display
- Gallery browsing
- Style detail pages

## Risk Mitigation Strategy

### Technical Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Sanity API integration issues | Low | High | Use official Sanity client, test early |
| Build time with Eleventy | Low | Medium | Optimize data fetching, use caching |
| Form submission to Sanity | Medium | High | Test mutation API early, have fallback |
| Discord webhook failures | Low | Low | Graceful degradation, log failures |

### Delivery Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Time constraint (2 weeks) | Medium | High | Prioritize core gallery + submission first |
| Integration complexity | Medium | Medium | Use Zapier/Make for CRM, proven patterns |
| Content entry bottleneck | Medium | Medium | Prepare content in parallel with dev |

### Contingency Plan

**If running behind:**
1. Discord integration → defer to post-launch
2. CRM integration → manual export from Sanity
3. Third design style → launch with 2, add third post-launch

**Non-negotiable MVP:**
- Gallery with educational content (at least 2 styles)
- Submission form storing to Sanity
- Instructor review in Sanity Studio
- Cookie consent + privacy page
- Deployed to GitHub Pages

## Functional Requirements

### Gallery & Content Discovery

- **FR1:** Visitors can browse all published design styles in a gallery view
- **FR2:** Visitors can view a detail page for each design style with educational content
- **FR3:** Visitors can access the live demo for any design style via external link
- **FR4:** Visitors can read historical background for each design style
- **FR5:** Visitors can view key characteristics and design principles for each style
- **FR6:** Visitors can see typography and color guidance for each design style
- **FR7:** Visitors can view featured design styles on the homepage
- **FR8:** Visitors can navigate to the gallery from any page

### Submission Workflow

- **FR9:** Students can submit a design demo via a submission form
- **FR10:** Students can provide their name and email with a submission
- **FR11:** Students can specify the design style their demo represents
- **FR12:** Students can provide a URL to their live demo
- **FR13:** Students can provide a screenshot URL of their demo
- **FR14:** Students can write an explanation of their demo's authenticity
- **FR15:** Students can agree to privacy policy before submitting
- **FR16:** Students receive confirmation when submission is successful

### Content Review & Moderation

- **FR17:** Instructors can view all submissions in Sanity Studio
- **FR18:** Instructors can see submission details (name, email, demo URL, screenshot, explanation)
- **FR19:** Instructors can change submission status (submitted → approved/rejected)
- **FR20:** Only approved submissions appear in the public gallery
- **FR21:** System prevents unapproved submissions from being publicly visible

### Content Management

- **FR22:** Admins can create new design style entries in Sanity Studio
- **FR23:** Admins can edit existing design style content
- **FR24:** Admins can add educational content (historical background, characteristics, principles)
- **FR25:** Admins can configure color palette and typography guidance per style
- **FR26:** Admins can upload sample images for each design style
- **FR27:** Admins can set the external demo URL for each style
- **FR28:** Admins can mark design styles as featured for homepage display

### Integrations

- **FR29:** System sends Discord notification when new submission is created
- **FR30:** System syncs submission data to CRM (via Zapier/Make)
- **FR31:** System tracks page views and events via Google Analytics 4
- **FR32:** Analytics only load after user consents to tracking

### Compliance & Privacy

- **FR33:** Visitors can view and interact with cookie consent banner
- **FR34:** Visitors can accept or reject analytics cookies
- **FR35:** Visitors can access the privacy policy page
- **FR36:** Visitors can access the cookie policy page
- **FR37:** System respects user consent preferences for analytics

### Site Information & Navigation

- **FR38:** Visitors can access the About page explaining MyWebClass mission
- **FR39:** Visitors can navigate between all main pages via consistent navigation
- **FR40:** Visitors can access the site from search engines (SEO-friendly URLs)
- **FR41:** Visitors can share design style pages via social media (Open Graph support)

## Non-Functional Requirements

### Performance

| Metric | Requirement | Measurement |
|--------|-------------|-------------|
| Lighthouse Performance Score | ≥ 90 | Lighthouse CI in pipeline |
| First Contentful Paint | < 1.5 seconds | Lighthouse |
| Largest Contentful Paint | < 2.5 seconds | Lighthouse |
| Cumulative Layout Shift | < 0.1 | Lighthouse |
| Time to Interactive | < 3 seconds | Lighthouse |
| Total Page Weight | < 1MB per page | Build output |
| CSS Bundle Size | < 50KB uncompressed | Build output |

### Security & Data Protection

- **NFR-SEC1:** Form submissions transmitted over HTTPS only
- **NFR-SEC2:** Email addresses stored in Sanity CMS with access restricted to authenticated admins
- **NFR-SEC3:** No client-side storage of personal data beyond consent preferences
- **NFR-SEC4:** Analytics data anonymized where possible (IP anonymization in GA4)
- **NFR-SEC5:** Third-party scripts (GA4) loaded only after explicit user consent
- **NFR-SEC6:** Sanity Studio access requires authentication

### Accessibility

| Standard | Requirement |
|----------|-------------|
| WCAG Level | AA compliance |
| Color Contrast | Minimum 4.5:1 (body text), 3:1 (large text) |
| Keyboard Navigation | All interactive elements accessible via keyboard |
| Screen Reader | Compatible with VoiceOver, NVDA, JAWS |
| Focus Indicators | Visible focus state on all interactive elements |
| Text Scaling | Functional at 200% zoom |

### Integration Reliability

- **NFR-INT1:** Site builds successfully even if Sanity API is temporarily unavailable (use cached data)
- **NFR-INT2:** Discord webhook failures do not block form submission success
- **NFR-INT3:** CRM sync failures are logged but do not affect user experience
- **NFR-INT4:** GA4 failures do not affect site functionality
- **NFR-INT5:** Form submission provides user feedback within 3 seconds

### Build & Deployment

- **NFR-BUILD1:** Full CI pipeline completes in < 10 minutes
- **NFR-BUILD2:** All linting checks (ESLint, Stylelint, Markdownlint) must pass
- **NFR-BUILD3:** All Playwright tests must pass before deployment
- **NFR-BUILD4:** Lighthouse CI thresholds must be met before deployment
- **NFR-BUILD5:** Deployment to GitHub Pages automated on main branch merge
- **NFR-BUILD6:** Build artifacts include Lighthouse reports as CI artifacts

### Browser Compatibility

- **NFR-COMPAT1:** Full functionality in Chrome, Firefox, Safari, Edge (last 2 versions)
- **NFR-COMPAT2:** Responsive design functional on viewports 320px to 2560px
- **NFR-COMPAT3:** Touch interactions work on iOS Safari and Chrome Android
- **NFR-COMPAT4:** No JavaScript required for content consumption (progressive enhancement)
