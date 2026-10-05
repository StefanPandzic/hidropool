# Custom Domain Setup Guide - hidropool.rs

## ✅ Files Updated for hidropool.rs

All URLs have been updated from `hidropool.netlify.app` to `hidropool.rs`:

- ✅ **index.html** - Open Graph, Twitter Card, Canonical URL, Schema.org
- ✅ **sitemap.xml** - All 8 page URLs
- ✅ **robots.txt** - Sitemap reference
- ✅ **Favicon** - Now using Logo.png instead of Vite default

Your site is **ready to deploy** with the custom domain!

---

## 📋 Step-by-Step Custom Domain Setup

### Step 1: Purchase hidropool.rs Domain

**Recommended Registrars for .rs domains:**

1. **RNIDS.rs** (Official Serbian Registry)
   - Website: https://www.rnids.rs/en
   - Cost: ~€15-25/year
   - Best for: Serbian businesses

2. **Register.rs**
   - Website: https://register.rs
   - Serbian registrar
   - Easy Serbian language interface

3. **GoDaddy / Namecheap**
   - International registrars with .rs support
   - Slightly more expensive

**Purchase:** `hidropool.rs` (not www.hidropool.rs - that's a subdomain)

---

### Step 2: Deploy to Netlify

If not already deployed:

```bash
# Build the project
npm run build

# Verify dist folder was created with all files
```

**Deploy Options:**

**Option A: Manual Deploy (Quick Test)**

1. Go to https://app.netlify.com
2. Sign up/login (can use GitHub account)
3. Drag & drop the `dist` folder
4. Wait for deployment

**Option B: GitHub Deploy (Recommended)**

1. Push code to GitHub:
   ```bash
   git add .
   git commit -m "Update URLs for custom domain hidropool.rs"
   git push origin master
   ```
2. In Netlify: "Add new site" → "Import from Git"
3. Choose GitHub → Select `StefanPandzic94/hidropool`
4. Build settings (auto-detected from netlify.toml):
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

---

### Step 3: Add Custom Domain in Netlify

1. **Go to your site in Netlify dashboard**
2. **Navigate to:** Site settings → Domain management
3. **Click:** "Add custom domain"
4. **Enter:** `hidropool.rs`
5. **Netlify will check:** Domain ownership
6. **Add both:**
   - `hidropool.rs` (primary)
   - `www.hidropool.rs` (will redirect to primary)

---

### Step 4: Configure DNS

You have TWO options. **Option A is recommended** for simplicity.

#### Option A: Use Netlify DNS (Recommended - Easiest)

**In Netlify:**

1. Domain settings → "Set up Netlify DNS"
2. Netlify will provide 4 nameservers like:
   ```
   dns1.p03.nsone.net
   dns2.p03.nsone.net
   dns3.p03.nsone.net
   dns4.p03.nsone.net
   ```
3. Copy these nameservers

**At your domain registrar (RNIDS, Register.rs, etc.):**

1. Login to your registrar account
2. Find "DNS Settings" or "Nameservers"
3. Change from default nameservers to Netlify's 4 nameservers
4. Save changes

**DNS Propagation:**

- Usually takes 2-6 hours
- Can take up to 24-48 hours
- Check status: https://www.whatsmydns.net/#NS/hidropool.rs

**Advantages:**
✅ Netlify handles all DNS automatically
✅ SSL certificate auto-configured
✅ One less service to manage
✅ Faster DNS resolution

#### Option B: Use External DNS (Advanced)

If you prefer to keep your registrar's DNS:

**Add A Record:**

```
Type: A
Name: @ (or blank for root domain)
Value: 75.2.60.5
TTL: 3600
```

**Add CNAME for www:**

```
Type: CNAME
Name: www
Value: [your-site-name].netlify.app
TTL: 3600
```

**Disadvantages:**
⚠️ Requires manual DNS management
⚠️ More complex SSL setup
⚠️ Slower propagation sometimes

---

### Step 5: Enable HTTPS (Automatic)

**After DNS propagates:**

1. Go to Netlify: Site settings → Domain management → HTTPS
2. Netlify automatically provisions Let's Encrypt SSL certificate
3. Wait 10-30 minutes for certificate to activate
4. Enable **"Force HTTPS"** (redirects http → https)
5. Enable **"Automatic redirects"** (www → non-www or vice versa)

**Result:**
✅ `http://hidropool.rs` → `https://hidropool.rs`
✅ `https://www.hidropool.rs` → `https://hidropool.rs`
✅ Green padlock in browser
✅ Certificate auto-renews every 90 days

---

### Step 6: Verify Everything Works

**Test these URLs:**

1. **Main domain:**
   - https://hidropool.rs ✓
   - Redirects from http://hidropool.rs ✓

2. **WWW subdomain:**
   - https://www.hidropool.rs ✓
   - Redirects to main domain ✓

3. **All pages load:**
   - https://hidropool.rs/services ✓
   - https://hidropool.rs/products ✓
   - https://hidropool.rs/price ✓
   - https://hidropool.rs/about ✓
   - https://hidropool.rs/gallery ✓
   - https://hidropool.rs/contact ✓

4. **Contact form works:**
   - Submit test form
   - Redirects to /thank-you ✓
   - Check Netlify Forms dashboard

5. **Images load:**
   - Logo in navbar ✓
   - Gallery images ✓
   - Hero images on pages ✓

6. **SSL certificate:**
   - Click padlock in browser
   - Shows "Let's Encrypt" certificate ✓
   - Valid dates ✓

---

### Step 7: Update Google Search Console

**Add new property:**

1. Go to https://search.google.com/search-console
2. Click "Add property"
3. Choose "Domain" property type
4. Enter: `hidropool.rs`
5. Verify via DNS (add TXT record):
   - If using Netlify DNS: Add in Netlify dashboard
   - If using external DNS: Add at registrar
6. Wait for verification

**Submit sitemap:**

1. In Search Console, go to "Sitemaps"
2. Add new sitemap: `https://hidropool.rs/sitemap.xml`
3. Submit

**Request indexing:**

1. Go to "URL Inspection"
2. Enter: `https://hidropool.rs`
3. Click "Request indexing"
4. Repeat for main pages (/services, /products, /contact)

**Optional: Keep old property**

- Keep `hidropool.netlify.app` property for transition period
- Set up 301 redirects (Netlify does this automatically)
- Monitor both for 1-2 months

---

### Step 8: Update Google Business Profile

**Update your Google Business listing:**

1. Go to https://business.google.com
2. Select your Hidro Pool business
3. Click "Edit profile"
4. Update website to: `https://hidropool.rs`
5. Save changes

**If you don't have Google Business yet:**

1. Create profile (essential for local SEO!)
2. Business name: Hidro Pool
3. Category: Pool & Hot Tub Service
4. Address: Novi Sad, Serbia
5. Phone: 065 150-3859
6. Website: https://hidropool.rs
7. Hours: Mo-Fr 08:00-17:00
8. Upload photos from gallery
9. Verify business

---

## ⏱️ Timeline & Expectations

**Day 1: Domain Purchase & Setup**

- Purchase domain: 10 minutes
- Add to Netlify: 5 minutes
- Configure DNS: 10 minutes
- **Total: 30 minutes active work**

**Hours 2-6: DNS Propagation**

- DNS changes propagate globally
- Site may be intermittently accessible
- Check progress: whatsmydns.net

**Hours 6-12: SSL Certificate**

- Netlify provisions SSL after DNS is live
- Automatic process
- Site shows secure (padlock) when ready

**Day 2-3: Search Engine Update**

- Google re-crawls site with new domain
- Old URLs (netlify.app) redirect to new domain
- Rankings maintained (301 redirects)

**Week 1-2: Full Migration**

- All search engines updated
- Google Business Profile updated
- Social media links updated
- Business cards, emails updated

---

## 🚨 Troubleshooting

### DNS Not Propagating

**Problem:** Site not accessible after 24 hours

**Solutions:**

1. Verify nameservers at registrar exactly match Netlify's
2. Clear DNS cache on your computer:
   ```bash
   ipconfig /flushdns  # Windows
   ```
3. Check DNS propagation: https://www.whatsmydns.net/#NS/hidropool.rs
4. Contact registrar support if stuck after 48 hours

### SSL Certificate Not Activating

**Problem:** "Not Secure" warning after DNS propagates

**Solutions:**

1. Wait 30-60 minutes after DNS is live
2. In Netlify: Domain settings → HTTPS → "Renew certificate"
3. Verify DNS is fully propagated (all green on whatsmydns.net)
4. Check Netlify support if not working after 2 hours

### Contact Form Not Working

**Problem:** Form submissions fail after domain change

**Solutions:**

1. Rebuild and redeploy site
2. Check Netlify Forms: Site settings → Forms
3. Verify form has `data-netlify="true"`
4. Check browser console for errors
5. Test on netlify.app subdomain - if works there, DNS issue

### Images Not Loading

**Problem:** Broken images after deployment

**Solutions:**

1. Check image paths are lowercase: `/gallery/1.jpg`
2. Verify images in `public/` folder before build
3. Check browser Network tab for 404 errors
4. Clear browser cache (Ctrl+Shift+R)
5. Rebuild: `npm run build` and redeploy

### Old Domain Still Appearing

**Problem:** hidropool.netlify.app shows in search results

**Solutions:**

1. Wait 1-2 weeks for Google to re-index
2. Netlify automatically sets up 301 redirects
3. In Search Console, mark old URL as moved
4. Use "Change of Address" tool in Search Console
5. Submit new sitemap with new domain

---

## 📊 Monitoring After Launch

### Daily (Week 1)

- [ ] Check site loads: https://hidropool.rs
- [ ] Test contact form
- [ ] Monitor Netlify Forms dashboard
- [ ] Check Netlify deploy logs for errors

### Weekly (Month 1)

- [ ] Google Search Console performance
- [ ] Check for crawl errors
- [ ] Monitor sitemap status
- [ ] Review form submissions
- [ ] Check SSL certificate status

### Monthly (Ongoing)

- [ ] Review Google Analytics (if installed)
- [ ] Update gallery with new project photos
- [ ] Check for security updates
- [ ] Monitor domain renewal date
- [ ] Review keyword rankings

---

## 💰 Ongoing Costs

**Domain Renewal: €15-25/year**

- Set calendar reminder 1 month before expiration
- Enable auto-renewal at registrar
- Typical renewal period: 1-2 years

**Netlify Hosting: FREE**

- Free tier includes:
  - 100 GB bandwidth/month
  - Automatic HTTPS
  - 100 form submissions/month
  - Continuous deployment
  - Custom domain (1 included)

**Total Annual Cost: €15-25** (domain only!)

---

## 🎯 Post-Launch Checklist

After domain is fully live (DNS + SSL working):

### Update Marketing Materials

- [ ] Email signatures → hidropool.rs
- [ ] Business cards → hidropool.rs
- [ ] Vehicle wraps/signage
- [ ] Invoices/quotes
- [ ] Social media bios:
  - Instagram
  - Facebook
  - LinkedIn
  - TikTok (if applicable)

### SEO & Listings

- [ ] Google Business Profile updated
- [ ] Google Search Console verified
- [ ] Bing Webmaster Tools updated
- [ ] Local business directories (Serbia)
- [ ] Yellow pages / business listings

### Analytics (Recommended)

- [ ] Install Google Analytics 4
- [ ] Set up conversion tracking (form submissions)
- [ ] Configure Search Console data import
- [ ] Set up Google Ads pixel (if planning ads)

### Social Proof

- [ ] Ask 5-10 happy customers for Google reviews
- [ ] Add reviews to Google Business Profile
- [ ] Consider adding testimonials page to site
- [ ] Share gallery projects on social media

---

## 🔐 Security Best Practices

### Domain Security

1. **Enable domain lock** at registrar (prevent unauthorized transfers)
2. **Use strong password** for registrar account
3. **Enable 2FA** at registrar if available
4. **Set privacy protection** (hide personal info in WHOIS)
5. **Add recovery email** in case of account issues

### Netlify Security

1. **Enable 2FA** on Netlify account
2. **Review access logs** monthly in Netlify
3. **Monitor deploy notifications**
4. **Keep dependencies updated** (`npm audit fix`)
5. **Review form spam** (enable reCAPTCHA if needed)

---

## 📞 Support Contacts

### Netlify Support

- Documentation: https://docs.netlify.com
- Community: https://answers.netlify.com
- Email: support@netlify.com (paid plans only)
- Status: https://www.netlifystatus.com

### Domain Registrar

- RNIDS: https://www.rnids.rs/en (for .rs domains)
- Check your registrar's support page

### Emergency Contacts

- DNS Issues: Netlify support or registrar
- Site Down: Check Netlify status page first
- SSL Issues: Wait 2 hours, then Netlify support
- Form Issues: Check Netlify Forms dashboard

---

## ✅ Final Pre-Launch Checklist

Before purchasing domain and deploying:

- [ ] All files updated with hidropool.rs URLs
- [ ] Site builds successfully: `npm run build`
- [ ] Test locally: `npm run preview`
- [ ] All pages load without errors
- [ ] Contact form works
- [ ] Images display correctly
- [ ] Mobile responsive (test on phone)
- [ ] Code committed to Git
- [ ] README.md updated

---

**You're ready to launch hidropool.rs! 🚀**

**Start with Step 1:** Purchase the domain hidropool.rs

**Then follow Steps 2-8** to get your site live with the custom domain.

**Need help?** Refer to the Troubleshooting section or contact support.

Good luck with your launch! 🎯
