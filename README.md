# Open Flame Project Website

This is the website for the Open Flame Project's Burnerbase initiative - a volunteer skills database for the NSW Burns community.

## Files Structure

```
burnerbase_website/
├── css/
│   └── style.css          # Main stylesheet with ND-friendly design
├── index.html             # Main landing page (CTA destination)
├── about.html            # About the Burnerbase
├── register.html         # Registration page with Google Form embed
├── quotes.html           # Community voices and testimonials
├── privacy.html          # Privacy policy
├── conduct.html          # Code of conduct
├── contact.html          # Contact information
└── README.md            # This file
```

## Deployment to GitHub Pages

### 1. Upload to your GitHub repository

Copy all files to your GitHub repository that's configured for GitHub Pages.

### 2. Update the Google Form embed

In `register.html`, replace `YOUR_GOOGLE_FORM_URL_HERE` with your actual Google Form embed URL:

1. Open your Google Form
2. Click the "Send" button
3. Click the embed icon (`<>`)
4. Copy the URL from the iframe src attribute
5. Replace both instances of `YOUR_GOOGLE_FORM_URL_HERE` in `register.html`

### 3. Update navigation links

If you want to keep your existing `index.html` (the infographic), you can:

- Link to `index.html` as the main CTA destination

### 4. Customize email addresses

Update the email addresses in the contact pages to match your actual email setup:

- `open.flame.project.nsw@gmail.com`
- `privacy@openflameproject.org`
- `conduct@openflameproject.org`
- etc.

### 5. Add CTA links from your infographic

Add links from your existing infographic (`index.html`) to:

- `index.html` - Main CTA destination
- `register.html` - Direct to registration
- `about.html` - Learn more about the project

## Design Features

### Neurodivergent-Friendly Design
- Clear visual hierarchy with consistent headings
- High contrast colors and readable fonts
- Structured layouts with clear sections
- Simple, direct language
- Logical navigation flow

### Accessibility Features
- Semantic HTML structure
- Skip links for keyboard navigation
- Focus indicators for all interactive elements
- Alt text for images (when added)
- Responsive design for mobile/desktop

### Color Scheme
- Primary Orange: #FF9800
- Secondary Orange: #F57C00
- Accent Orange: #E65100
- Background Cream: #FFF3E0
- Text colors optimized for readability

## Content Management

### Adding New Quotes
Edit `quotes.html` to add new community quotes following the existing format.

### Updating Privacy Policy
The privacy policy is written in plain English and covers Australian privacy law requirements. Update as needed for legal compliance.

### Modifying Registration Form
The registration form is embedded from Google Forms. To change the form structure, update your Google Form and the embed URL.

## Technical Notes

### CSS Framework
Uses custom CSS with CSS variables for consistent theming. No external frameworks required.

### Browser Support
Designed to work on all modern browsers including mobile devices.

### Performance
Lightweight design with minimal external dependencies (only Google Fonts).

## Support

For technical issues with the website:
- Check the browser console for JavaScript errors
- Ensure all file paths are correct
- Verify Google Form embed URL is working

For content questions:
- Review the original survey data and pitch deck
- Ensure messaging aligns with community values
- Test with neurodivergent community members for accessibility

## License

This website is part of the Open Flame Project community initiative. Content and code can be adapted for other Burns communities with attribution.

