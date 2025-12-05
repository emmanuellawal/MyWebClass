# Setup Guide for MyWebClass.org

This guide will walk you through setting up MyWebClass.org from scratch, including all necessary accounts, configurations, and deployments.

## Prerequisites

- Node.js 20.x or higher
- npm 9.x or higher
- Git
- GitHub account
- Text editor (VS Code recommended)

## Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/mywebclass.git
cd mywebclass
```

## Step 2: Install Dependencies

```bash
npm install
```

## Step 3: Set Up Supabase

### Create Supabase Project

1. Go to [supabase.com](https://supabase.com/)
2. Sign up or log in
3. Click "New Project"
4. Fill in project details:
   - Name: MyWebClass
   - Database Password: (create a strong password)
   - Region: (choose closest to you)
5. Wait for project to provision

### Get Supabase Credentials

1. In your Supabase dashboard, go to **Settings → API**
2. Copy the following:
   - **Project URL** (looks like `https://xxx.supabase.co`)
   - **Anon/Public Key** (starts with `eyJ...`)

### Run Database Migrations

The database tables should already be created if you used the MCP tool during development. If not:

1. Go to **SQL Editor** in Supabase dashboard
2. Run the migration files from the project
3. Verify tables exist: `gallery_submissions`, `analytics_events`, `consent_logs`

## Step 4: Set Up Sanity CMS

### Create Sanity Account

1. Go to [sanity.io](https://www.sanity.io/)
2. Sign up with GitHub
3. Install Sanity CLI globally:
   ```bash
   npm install -g @sanity/cli
   ```

### Initialize Sanity Project

1. Login to Sanity CLI:
   ```bash
   sanity login
   ```

2. In the `studio/` directory, initialize:
   ```bash
   cd studio
   sanity init
   ```

3. When prompted:
   - Create new project? **Yes**
   - Project name: **MyWebClass**
   - Use default dataset? **Yes**
   - Output path: **.** (current directory)
   - Select schema? **Skip, use existing**

4. Note your **Project ID** from the output

### Deploy Sanity Studio

```bash
cd studio
npm install
sanity deploy
```

Choose a studio hostname (e.g., `mywebclass-studio`)

Access at: `https://mywebclass-studio.sanity.studio`

### Get Sanity Credentials

1. Go to [manage.sanity.io](https://manage.sanity.io/)
2. Select your project
3. Go to **Settings → API**
4. Create a new token:
   - Name: "MyWebClass Production"
   - Permissions: **Editor**
5. Copy the token

## Step 5: Configure Environment Variables

Create `.env` file in the project root:

```bash
cp .env.example .env
```

Edit `.env` with your credentials:

```env
# Supabase
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here

# Sanity
SANITY_PROJECT_ID=your-sanity-project-id
SANITY_DATASET=production
SANITY_API_VERSION=2024-01-01
SANITY_TOKEN=your-sanity-token

# Discord (optional)
DISCORD_WEBHOOK_URL=your-discord-webhook-url
```

## Step 6: Set Up Discord Notifications (Optional)

### Create Discord Webhook

1. Open Discord and go to your server
2. Click **Server Settings → Integrations**
3. Click **Create Webhook**
4. Name it "MyWebClass Submissions"
5. Select channel (e.g., #submissions)
6. Copy webhook URL
7. Add to `.env` file

## Step 7: Add Content to Sanity

### Create Your First Design Style

1. Go to your Sanity Studio: `https://your-studio.sanity.studio`
2. Click **Design Styles** → **Create new Design Style**
3. Fill in the fields:
   - **Title**: Swiss Destructive Grunge
   - **Slug**: Generate from title
   - **Description**: A deconstructed approach breaking traditional Swiss grid principles
   - **Demo URL**: https://gsinghjay.github.io/swiss_destructive_grunge/
   - **Featured**: ✓ (check)
   - **Historical Background**: (write content)
   - **Key Characteristics**: (write content)
4. Click **Publish**

Repeat for Swiss Metro and any other styles.

## Step 8: Test Locally

Start the development server:

```bash
npm run dev
```

Visit [http://localhost:8080](http://localhost:8080)

Test:
- ✓ Homepage loads with featured styles
- ✓ Gallery shows design styles
- ✓ Detail pages work
- ✓ Submit form validates
- ✓ Cookie consent banner appears
- ✓ Review page loads (at `/admin/review/`)

## Step 9: Configure GitHub Actions

### Add Secrets to GitHub

1. Go to your GitHub repository
2. Click **Settings → Secrets and variables → Actions**
3. Add these secrets:
   - `SANITY_PROJECT_ID`
   - `SANITY_DATASET`
   - `SANITY_API_VERSION`
   - `SANITY_TOKEN`
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

### Enable GitHub Pages

1. Go to **Settings → Pages**
2. Source: **GitHub Actions**
3. Click **Save**

## Step 10: Deploy

Push to main branch:

```bash
git add .
git commit -m "Initial setup"
git push origin main
```

GitHub Actions will:
1. ✓ Lint code
2. ✓ Build site
3. ✓ Run tests
4. ✓ Run Lighthouse CI
5. ✓ Deploy to GitHub Pages

Site will be live at: `https://your-username.github.io/mywebclass/`

## Step 11: Configure Custom Domain (Optional)

### Add Custom Domain

1. In GitHub repository, go to **Settings → Pages**
2. Under "Custom domain", enter: `mywebclass.org`
3. Click **Save**

### Configure DNS

Add these DNS records to your domain:

```
Type    Name    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     your-username.github.io
```

Wait for DNS propagation (can take up to 24 hours).

## Troubleshooting

### Build Fails

**Issue**: Build fails with Sanity errors

**Solution**: Verify `SANITY_PROJECT_ID` is set correctly in `.env` and GitHub Secrets

**Issue**: Build fails with "module not found"

**Solution**: Run `npm install` again

### No Design Styles Showing

**Issue**: Gallery is empty

**Solution**:
1. Check Sanity Studio has published design styles
2. Verify `SANITY_TOKEN` has read permissions
3. Rebuild: `npm run build`

### Submission Form Not Working

**Issue**: Form submission fails

**Solution**:
1. Check Supabase credentials in `.env`
2. Verify RLS policies are enabled on `gallery_submissions` table
3. Check browser console for errors

### Tests Failing

**Issue**: Playwright tests fail locally

**Solution**:
1. Install browsers: `npx playwright install`
2. Ensure dev server is running
3. Run tests: `npm run test`

## Next Steps

1. **Add More Design Styles**: Create additional entries in Sanity
2. **Customize Design**: Modify CSS in `src/css/` directory
3. **Review Submissions**: Check `/admin/review/` for student submissions
4. **Monitor Analytics**: Query Supabase `analytics_events` table
5. **Write Articles**: Create educational content in Sanity

## Support

For issues or questions:
- Check documentation in `docs/` folder
- Review README.md
- Open GitHub issue
- Email: hello@mywebclass.org

## Additional Resources

- [Eleventy Documentation](https://www.11ty.dev/docs/)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Playwright Documentation](https://playwright.dev/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
