# 🚀 Deployment Guide

## Method 1: Vercel (Easiest & Recommended)

### Option A: Deploy via GitHub

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy" (Vercel auto-detects React)
6. Done! Your site is live 🎉

### Option B: Deploy via CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# For production
vercel --prod
```

## Method 2: Netlify

### Via Drag & Drop (No Terminal)

1. Run: `npm run build`
2. Go to [netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `build` folder
4. Done! 🎉

### Via CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=build
```

## Method 3: GitHub Pages

1. **Update package.json:**

Add this line at the top (replace `yourusername` and `portfolio`):
```json
"homepage": "https://yourusername.github.io/portfolio",
```

Add these to `scripts` section:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

2. **Install gh-pages:**
```bash
npm install --save-dev gh-pages
```

3. **Deploy:**
```bash
npm run deploy
```

4. **Enable GitHub Pages:**
   - Go to your repo Settings
   - Pages section
   - Source: gh-pages branch
   - Save

Your site will be live at: `https://yourusername.github.io/portfolio`

## 📝 Before Deploying

Make sure to:
- ✅ Test locally: `npm start`
- ✅ Build successfully: `npm run build`
- ✅ Update personal info in components
- ✅ Replace placeholder links (GitHub, LinkedIn)
- ✅ Test on mobile devices

## 🔧 Troubleshooting

**Build fails?**
- Delete `node_modules` and run `npm install` again
- Make sure you're using Node.js 16+

**Blank page after deploy?**
- Check browser console for errors
- Verify `homepage` in package.json is correct

**Tailwind styles not working?**
- Make sure `tailwind.config.js` exists
- Run `npm install -D tailwindcss postcss autoprefixer`

## 🌐 Custom Domain

### Vercel:
1. Go to Project Settings
2. Domains
3. Add your domain
4. Follow DNS instructions

### Netlify:
1. Site Settings
2. Domain Management
3. Add custom domain
4. Update DNS records

---

Need help? Check the main README.md
