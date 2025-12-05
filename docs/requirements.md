# **S373 – Project Brief**

## **MyWebClass.org – Design Styles Gallery**

### *Two-Week Production Sprint*

***

# **1. Project Overview**

**MyWebClass.org** is a design-education website focused on teaching the history and practice of visual design styles through **authentic, fully-implemented website demos.**
Your team will build a production-ready version of this site using:

* **Eleventy (11ty)**
* **Sanity headless CMS**
* **EAiKW.com architecture & CSS**
* **Automations + Discord + CRM**
* **GDPR compliance + consent management**
* **Modern UX and discovery methods**
* **AI-accelerated development**

The winning team’s work may become the **official public version** of MyWebClass.org.

This site must feel like a *modern digital museum* — educational, clean, fast, and visually bold.

***

# **2. Core Mission of the Site**

### **Teach design by showing real, high-fidelity examples.**

MyWebClass.org must allow:

1. **Users to browse iconic design styles (Swiss, Bauhaus, Flat, Brutalist, etc.)**
2. **Students to submit their own style-accurate demos**
3. **Instructors to review, approve, and publish submissions**
4. **Visitors to read educational content explaining each style**
5. **Design enthusiasts to learn applied principles by seeing living examples**

Your implementation must provide:

* A polished design gallery
* Working CMS workflows
* Real examples of authentic design styles
* Excellent accessibility and performance
* A modern build pipeline with full CI automation

***

# **3. Functional Requirements**

Your team must deliver **all** of the following:

***

## **A. Design Style Gallery**

### **Gallery Listing**

* Shows all design style entries (manual + student submissions)
* Each entry contains:
  * Thumbnail image
  * Style name
  * Short description
  * “View Demo” link

### **Gallery Detail Page**

* Individual page for each design style
* Must include:
  * A **fully implemented demo webpage** in that design style
  * High authenticity:
    * Typography consistent with the style
    * Composition, spacing, layout rules
    * Color usage
    * Interaction patterns
  * An educational explanation:
    * Origins of the style
    * Key characteristics
    * Why your demo is faithful to it

### **Minimum Requirement**

You must implement **at least THREE design-style demos**, for example:

* Swiss (International Typographic Style)
* Bauhaus
* Flat Design
* Brutalism
* Minimalism
* Neo-Futurism

*Your team chooses the styles, but they must be historically grounded.*

***

## **B. Submission Workflow (Students → Instructor Review)**

### **Submission Form**

Fields must include:

* Name
* Email
* Design style
* URL to demo (e.g., GitHub Pages)
* Screenshot
* Written explanation of authenticity

### **Backend Requirements (Sanity CMS)**

Submissions must be stored as Sanity documents with fields:

* `name`
* `email`
* `style`
* `url`
* `screenshot`
* `description`
* `status` (`submitted`, `approved`, `rejected`)

### **Review Workflow**

* Instructor panel (simple listing page is fine)
* Ability to toggle status from `submitted` → `approved`
* Only approved entries appear publicly in the gallery

***

## **C. CMS Requirements (Sanity)**

You must implement the following schemas:

### **1. `designStyle`**

* Title
* Slug
* Description
* Historical background
* Color palette
* Typography guidance
* Sample images
* Relationship to `gallerySubmission`

### **2. `gallerySubmission`**

* Submitter info
* URL
* Screenshot
* Style reference
* Description
* Status (workflow)

### **3. `article`**

For educational content.

### **4. `author`**

For articles and educational posts.

***

# **4. Technical Requirements**

***

## **A. Base Architecture (EAiKW Harvest)**

You MUST clone and analyze the EAiKW reference repo:

[**https://github.com/kaw393939/eaikwLinks to an external site.**](https://github.com/kaw393939/eaikw)

Create a `/reference` folder in your project repo that includes:

* Eleventy config patterns
* CSS architecture
* Utility classes
* Accessibility strategies
* SEO metadata approach
* Performance decisions

Use AI to harvest insights and write:
`reference/harvest-notes.md`

***

## **B. Build Pipeline + CI/CD**

Your repo must include the full GitHub Actions pipeline:

1. **Quality Gates & Linting**
   * JS, CSS, Markdown
   * Prettier formatting
2. **Build** (npm run build using Eleventy)
3. **Playwright Tests**
4. **Lighthouse CI** (reports must be uploaded as artifacts)
5. **Bundle Size Enforcement**
   * CSS must remain small
6. **Deploy to GitHub Pages**

No failing checks allowed.

***

## **C. GDPR / Privacy / Legal Compliance**

Your site must include:

* **Cookie consent banner** (Accept / Reject / Preferences)
* **Delay analytics until consent given**
* **Privacy Policy page**
* Clear explanation of:
  * Cookies
  * Analytics
  * Form data storage
  * CRM connections
* Accessible forms with labels/ARIA

***

## **D. Web Analytics (Evaluation + Implementation)**

You must evaluate **at least two** options (e.g., GA4, Plausible, Cloudflare, Fathom)
and implement **one** with GDPR consent mode.

Deliver:
`docs/analytics-evaluation.md`
and proof of working analytics.

***

## **E. Discord Integration**

Required for MyWebClass:

* Create/Use a Discord server with:
  * `#gallery-submissions`
  * `#announcements`
* Automation:
  * When a new submission is created → send a message
  * Optional: when a submission is approved → send a message

***

## **F. CRM Integration**

Required for MyWebClass:

Use HubSpot, Airtable, or Notion to store:

* Submission data
* Contributor information
* Contact information for participants

Automation may be through Zapier/Make.

***

# **5. UX and Content Requirements**

***

## **A. Discovery Deliverables**

You must include:

1. **Personas (min. 3)** — e.g.,
   * Design student
   * Instructor
   * Hobbyist designer / web dev
2. **Customer Journey Map**
   * Example: “Student wants to submit a design demo”
3. **Problem Statement & Goals**
   * What problem does MyWebClass solve?
   * What does success look like?
4. **Competitor/Comparable Analysis**
   * Awwwards, design history sites, CSS Zen Garden, etc.

***

## **B. UX Deliverables**

1. **Information Architecture**
   * Sitemap
   * Page structure
   * Content model
2. **Wireframes**
   * Homepage
   * Gallery
   * Design style page
   * Submission workflow
3. **Brand Guide**
   * Logo
   * Typography
   * Colors
   * Components
   * Accessibility considerations

***

# **6. AI Usage Requirement**

Document:

* Where AI was used
* Prompts used
* How AI accelerated your process
* How AI supported coding, UX, research, testing

Deliverable:
`docs/ai-usage.md`

***

# **7. QA Requirements**

You must deliver:

* Lighthouse score report
* Screenshot or logs from CI runs
* Bundle size report
* 2–3 Playwright tests
* Manual accessibility notes

Deliverable:
`docs/qa-report.md`

***

# **8. Final Presentation**

Each team gives a **5-minute pitch** covering:

* Concept + goals
* Demo of the live site
* CMS architecture
* Workflow demonstration
* Discord + CRM integration
* Analytics + GDPR compliance
* AI usage summary
* Why this implementation should become the official MyWebClass.org

***

# **9. Deployment Requirement**

* Must deploy to GitHub Pages, Netlify, or Vercel
* Must build cleanly through CI
* Must have a working public URL
* Must show cookie banner + consent logic
* Must load analytics only after consent