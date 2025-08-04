# GitHub Pages Deployment Guide

## Quick Deployment Steps

### 1. Push to GitHub
```bash
git add .
git commit -m "Prepare for GitHub Pages deployment"
git push origin main
```

### 2. Enable GitHub Pages
1. Go to your GitHub repository
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** branch and **root** folder
6. Click **Save**

### 3. Your site will be available at:
`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Pre-Deployment Checklist

- [x] ✅ All navigation links point to correct pages
- [x] ✅ `index.html` is the main homepage
- [x] ✅ CSS and images are in correct folders
- [x] ✅ Google Form URL needs to be updated in `register.html`

## Important: Update Google Form

Before going live, update the Google Form embed in `register.html`:

1. Open your Google Form
2. Click **Send** button
3. Click the embed icon (`<>`)
4. Copy the URL from the iframe src attribute
5. Replace `YOUR_GOOGLE_FORM_URL_HERE` in `register.html`

## Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file to your repository with your domain
2. Update DNS settings with your domain provider
3. Enable custom domain in GitHub Pages settings

## Troubleshooting

- **404 errors**: Check that `index.html` exists in the root
- **Broken links**: Verify all href attributes are correct
- **CSS not loading**: Ensure `css/style.css` path is correct
- **Form not working**: Update Google Form URL in `register.html`

## Performance Tips

- Images are optimized for web
- CSS is minified and efficient
- No external dependencies except Google Fonts
- Fast loading times expected 