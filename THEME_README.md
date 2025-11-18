# Generalist Programmer Theme Documentation

A professional, modern Jekyll theme designed for tech blogs and technology leadership content.

## Overview

This custom Jekyll theme provides a clean, professional design inspired by leading tech publications like Medium, TechCrunch, and CSS-Tricks. It features:

- **Mobile-first responsive design**
- **Professional typography** with Inter and Fira Code fonts
- **Card-based layouts** for article listings
- **Sticky navigation** with mobile hamburger menu
- **Reading progress bar** for articles
- **Social sharing** functionality
- **SEO optimized** structure

## Theme Structure

```
generalistprogrammer.github.io/
├── _layouts/
│   ├── default.html    # Base layout with header/footer
│   ├── home.html       # Homepage with hero, featured article, cards
│   ├── post.html       # Individual article layout
│   └── page.html       # Simple page layout
├── assets/
│   ├── css/
│   │   └── main.css    # Complete theme styles
│   └── js/
│       └── main.js     # Interactive features
└── _config.yml         # Jekyll configuration
```

## Layouts

### 1. default.html (Base Layout)
The foundation layout that all other layouts inherit from.

**Features:**
- Sticky header with navigation
- Logo area with custom icon
- Responsive mobile menu
- Professional footer with:
  - Social media icons
  - Quick links
  - Resources section
  - Legal links
  - Copyright notice

**Usage:**
```yaml
---
layout: default
---
```

### 2. home.html (Homepage)
Rich homepage layout with multiple sections.

**Features:**
- Hero section with CTA buttons
- Featured article card
- Article grid with cards
- Topics grid with icons
- Call-to-action section

**Usage:**
```yaml
---
layout: home
title: "Your Site Title"
description: "Your site description"
---
```

### 3. post.html (Article Pages)
Professional article layout with reading experience optimizations.

**Features:**
- Breadcrumb navigation
- Article metadata (author, date, read time)
- Category badges
- Tags display
- Reading progress bar
- Share buttons (Twitter, LinkedIn, Facebook, Copy Link)
- Author bio section
- Related articles grid
- Table of contents support

**Front Matter:**
```yaml
---
layout: post
title: "Your Article Title"
description: "Article description for SEO"
keywords: "keyword1, keyword2, keyword3"
author: "Author Name"
category: "Category Name"
date: 2025-11-18
read_time: 15
---
```

### 4. page.html (Simple Pages)
Clean layout for About, Contact, Privacy, etc.

**Features:**
- Breadcrumb navigation
- Centered content area
- Simple header

**Usage:**
```yaml
---
layout: page
title: "Page Title"
description: "Page description"
---
```

## Styling System

### Color Palette
```css
/* Primary Colors */
--color-primary: #2563eb       /* Blue - links, CTAs */
--color-secondary: #0f172a     /* Dark - headings, footer */
--color-accent: #10b981        /* Green - featured badges */

/* Neutrals */
--color-text: #1e293b         /* Body text */
--color-text-light: #64748b   /* Muted text */
--color-background: #ffffff   /* Page background */
--color-background-alt: #f8fafc /* Alternative bg */
```

### Typography
- **Primary Font:** Inter (sans-serif) - Modern, readable
- **Code Font:** Fira Code (monospace) - Developer-friendly

### Responsive Breakpoints
- **Desktop:** 1200px+
- **Tablet:** 768px - 1199px
- **Mobile:** < 768px

## JavaScript Features

The theme includes several interactive features:

1. **Mobile Navigation**
   - Hamburger menu toggle
   - Smooth animations
   - Body scroll lock when open
   - Auto-close on link click

2. **Smooth Scrolling**
   - Anchor links scroll smoothly
   - Offset for sticky header

3. **Article Animations**
   - Cards fade in on scroll
   - Intersection Observer API

4. **Reading Progress Bar**
   - Shows scroll progress on articles
   - Fixed at top of viewport

5. **Share Functionality**
   - Copy link to clipboard
   - Social media sharing
   - Success feedback

6. **Back to Top Button**
   - Appears after scrolling 300px
   - Smooth scroll to top
   - Hover effects

7. **External Links**
   - Automatically adds target="_blank"
   - Adds rel="noopener noreferrer"

## Configuration

### _config.yml Settings

```yaml
# Site settings
title: Generalist Programmer
description: Expert insights on CTO as a Service and technology leadership
url: https://generalistprogrammer.github.io
baseurl: ""

# Build settings
markdown: kramdown
plugins:
  - jekyll-seo-tag

# Exclude from processing
exclude:
  - Gemfile
  - Gemfile.lock
  - node_modules
  - vendor
  - .git
  - README.md
```

## Navigation Menu

Edit navigation links in `/Users/gerome/githubpage/generalistprogrammer.github.io/_layouts/default.html`:

```html
<ul class="nav-menu">
    <li class="nav-item">
        <a href="/" class="nav-link">Home</a>
    </li>
    <li class="nav-item">
        <a href="/about.html" class="nav-link">About</a>
    </li>
    <!-- Add more items here -->
</ul>
```

## Footer Customization

### Social Media Links
Update social media URLs in `default.html` footer:

```html
<a href="#" class="social-link" aria-label="Twitter">
    <!-- Replace # with your Twitter URL -->
</a>
```

### Footer Sections
The footer has 4 columns:
1. About (description + social links)
2. Quick Links (main navigation)
3. Resources (key articles)
4. Legal (privacy, disclaimer, etc.)

## Content Guidelines

### Article Front Matter
Always include these fields for articles:

```yaml
---
layout: post
title: "Your Article Title"          # Required
description: "SEO description"       # Required
keywords: "keyword1, keyword2"       # Required
author: "Author Name"                # Required
category: "Category Name"            # Required
date: 2025-11-18                    # Required
read_time: 15                       # Required (in minutes)
---
```

### Categories
Recommended categories:
- Product Guides
- Technical Guides
- Case Studies
- Tutorials
- News & Updates

## Performance Features

1. **CSS Variables** - Easy theming and consistency
2. **Lazy Loading** - Images load as needed
3. **Minimal JS** - Vanilla JavaScript, no frameworks
4. **Optimized Fonts** - Preconnect to Google Fonts
5. **Print Styles** - Optimized for printing

## Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Alt text for icons (using inline SVG)
- Reduced motion support

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile Safari
- Chrome Mobile

## Customization Tips

### Changing Colors
Edit CSS variables in `/Users/gerome/githubpage/generalistprogrammer.github.io/assets/css/main.css`:

```css
:root {
    --color-primary: #2563eb;  /* Change to your brand color */
}
```

### Changing Logo
Edit in `default.html`:

```html
<span class="logo-icon">&lt;/&gt;</span>
<span class="logo-text">Your Site Name</span>
```

### Adding Google Analytics
Add to `default.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Best Practices

1. **Images:** Use optimized images (WebP when possible)
2. **Content:** Write descriptive titles and meta descriptions
3. **SEO:** Use proper heading hierarchy (h1 > h2 > h3)
4. **Mobile:** Test on mobile devices regularly
5. **Performance:** Keep JavaScript minimal
6. **Accessibility:** Include alt text on all images

## Deployment

This theme works with GitHub Pages automatically. Just push your changes:

```bash
git add .
git commit -m "Update theme"
git push origin main
```

GitHub Pages will build and deploy automatically.

## Troubleshooting

### Styles not loading?
1. Check that CSS file path is correct
2. Clear browser cache
3. Verify `_config.yml` doesn't exclude assets

### Mobile menu not working?
1. Check JavaScript console for errors
2. Verify JS file is loaded
3. Check that classes match between HTML and JS

### Articles not showing?
1. Verify front matter includes `layout: post`
2. Check date is not in the future
3. Verify file extension is `.md`

## Support

For issues or questions:
- Check Jekyll documentation: https://jekyllrb.com/docs/
- Review theme files in `_layouts/` and `assets/`
- Test locally with `bundle exec jekyll serve`

## Credits

- **Fonts:** Google Fonts (Inter, Fira Code)
- **Icons:** Feather Icons (inline SVG)
- **Inspiration:** Medium, TechCrunch, CSS-Tricks

---

**Version:** 1.0.0
**Last Updated:** November 18, 2025
**License:** MIT (or your chosen license)
