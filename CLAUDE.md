# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static portfolio website for Bongomin Erick, showcasing web development projects and skills. The site is built with vanilla HTML, CSS, and JavaScript without any build tools or package managers.

## Architecture

### File Structure
```
portfoliona/
├── index.html          # Main HTML file with all content sections
├── style.css          # All styling with CSS custom properties
├── script.js          # Interactive features (menu, typewriter, scroll effects)
├── images/
│   └── photo.jpg      # Profile photo
└── Bongomin-Erick-CV.pdf  # Resume PDF
```

### Key Components

1. **HTML Structure** (index.html)
   - Single-page application with sections: Hero, About, Projects, Contact
   - Semantic HTML5 with proper heading hierarchy
   - External CDN dependencies:
     - Google Fonts (Jost, Source Code Pro)
     - Font Awesome 6.0.0 for icons

2. **Styling** (style.css)
   - CSS custom properties for theming (colors, fonts, spacing)
   - Mobile-first responsive design with breakpoints at 768px
   - Features:
     - Gradient backgrounds and animations
     - Horizontal scrolling project gallery
     - Hamburger menu for mobile
     - Custom scrollbar styling

3. **JavaScript** (script.js)
   - Mobile menu toggle functionality
   - Navbar scroll effects (transparency change)
   - Typewriter animation for hero subtitle
   - Event listeners for smooth interactions

## Development Commands

Since this is a static site with no build process:

```bash
# Open the site locally
# Option 1: Open index.html directly in browser
# Option 2: Use a local server (if Python installed)
python -m http.server 8000

# Option 3: Use Live Server VS Code extension
# Right-click index.html > "Open with Live Server"
```

## Making Changes

### Adding New Projects
Projects are in the `#projects` section of index.html. Each project card follows this structure:
```html
<div class="project">
  <h3><i class="fa-solid fa-icon"></i> Project Name</h3>
  <p class="tech">Tech Stack</p>
  <p class="desc">Description</p>
  <div class="project-links">
    <a href="demo-url" target="_blank">demo</a>
    <a href="github-url" target="_blank">GitHub</a>
  </div>
</div>
```

### Modifying Styles
- Color scheme uses CSS custom properties defined in `:root` selector
- Responsive breakpoints: 768px (mobile), 600px and 900px (project grid)
- Animations: gradient-animation, blink-caret, typewriter effect

### JavaScript Features
- Menu toggle: Controlled by `.menu-toggle` and `.nav-links` classes
- Scroll effects: `.navbar.scrolled` class applied when scrollY > 50px
- Typewriter: Modifies `.typewriter-text` content character by character

## Git Workflow

The repository uses git for version control. Recent commits show updates to CV and portfolio content. When committing:
- Use clear, descriptive commit messages
- Focus on what changed and why