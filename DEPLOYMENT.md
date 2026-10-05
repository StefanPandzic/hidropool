# Netlify Deployment Guide for Hidropool

## Step 1: Prepare for Deployment

The contact form is now configured for Netlify Forms with:

- ✅ Form name: "contact"
- ✅ Spam protection (honeypot)
- ✅ Redirect to /thank-you page after submission
- ✅ netlify.toml configuration file created

## Step 2: Deploy to Netlify

### Option A: Deploy via Netlify Dashboard (Easiest)

1. **Build your project locally:**

   ```bash
   npm run build
   ```

2. **Go to Netlify:**
   - Visit https://app.netlify.com/
   - Sign up or log in (can use GitHub account)

3. **Deploy:**
   - Click "Add new site" → "Deploy manually"
   - Drag & drop the `dist` folder from your project
   - Wait for deployment (1-2 minutes)
   - You'll get a URL like: `https://random-name-123.netlify.app`

### Option B: Deploy via GitHub (Recommended for Updates)

1. **Push your code to GitHub** (already done):

   ```bash
   git add .
   git commit -m "Add Netlify Forms integration"
   git push origin master
   ```

2. **Connect Netlify to GitHub:**
   - Go to https://app.netlify.com/
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize
   - Select repository: `StefanPandzic94/hidropool`
   - Build settings (should auto-detect from netlify.toml):
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Automatic deployments:**
   - Every push to master will auto-deploy
   - Get preview URLs for pull requests

## Step 3: Configure Email Notifications

After deployment, set up email notifications:

1. **Go to your site dashboard on Netlify**
2. **Navigate to:** Site settings → Forms → Form notifications
3. **Add notification:**
   - Click "Add notification"
   - Select "Email notification"
   - Enter your email: `hidropoolns@gmail.com`
   - Choose event: "New form submission"
   - Save

**You'll receive emails like:**

```
From: Netlify Forms
Subject: New submission from contact form

Name: Stefan Pandzic
Email: customer@example.com
Phone: 065 123-4567
Message: Zanima me izgradnja bazena u mom dvorištu...
```

## Step 4: Verify Form is Working

1. **Visit your deployed site**
2. **Go to Contact page**
3. **Fill out and submit the form**
4. **Check that:**
   - You're redirected to /thank-you page
   - You receive an email notification
   - Submission appears in Netlify dashboard (Site → Forms)

## Step 5: Custom Domain (Optional)

If you want a custom domain like `hidropool.rs`:

1. **Buy domain** (e.g., from GoDaddy, Namecheap, etc.)
2. **In Netlify dashboard:**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain: `hidropool.rs`
   - Follow DNS instructions
3. **Enable HTTPS** (automatic after DNS propagates)

## Troubleshooting

### Form submissions not working?

- Check Netlify deploy logs for form detection
- Ensure `netlify.toml` is in root directory
- Verify form has `name="contact"` and `data-netlify="true"`

### Not receiving emails?

- Check spam folder
- Verify email in Netlify Form notifications settings
- Check Netlify Forms dashboard for submissions

### Images not loading?

- Images must be in `public/` folder
- Check capitalization: `public/gallery/` (lowercase)
- Images are compressed (13.52 MB total)

## Spam Protection

Netlify Forms includes:

- ✅ Built-in spam filtering
- ✅ Honeypot field (hidden from users)
- ✅ reCAPTCHA option (can enable in settings)
- ✅ Akismet integration (can enable)

## Free Tier Limits

Netlify Free tier includes:

- ✅ 100 form submissions/month
- ✅ 100 GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Continuous deployment from Git

## Support

If you need help:

- Netlify Docs: https://docs.netlify.com/forms/setup/
- Netlify Support: https://answers.netlify.com/
- Contact me for code-related issues

---

**Your site is ready to deploy! 🚀**

Choose Option A (manual) for quick testing or Option B (GitHub) for professional continuous deployment.
