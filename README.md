# AgentFlow - AI Project Management Tool

A beautiful, responsive sign-in page for AgentFlow, an AI-powered project management suite that supports workspace authentication through Jira, GitHub, and Azure DevOps.

## Features

✨ **Modern Design**
- Clean, minimalist UI matching the Figma design exactly
- Gradient background with subtle animations
- Responsive layout that works on all screen sizes

🔐 **Multi-Provider Authentication**
- Sign in with Jira
- Sign in with GitHub
- Sign in with Azure DevOps
- Visual feedback on button interactions

📱 **Responsive Design**
- Mobile-first approach
- Optimized for desktop, tablet, and mobile devices
- Smooth transitions and hover effects

## File Structure

```
design-to-deployement-2/
├── index.html          # Main HTML structure
├── styles.css          # Styling and responsive design
├── script.js           # Interactivity and event handling
├── assets/             # SVG icons and graphics
│   ├── logo-gradient.svg      # AgentFlow logo
│   ├── jira-icon.svg          # Jira authentication icon
│   ├── github-icon.svg        # GitHub authentication icon
│   └── azure-icon.svg         # Azure DevOps authentication icon
└── README.md           # This file
```

## Quick Start

### Option 1: Using a Local Server (Recommended)

If you have Python installed:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open your browser to `http://localhost:8000`

### Option 2: Using Node.js

If you have Node.js installed:
```bash
npx http-server
```

Then open your browser to the provided URL (usually `http://localhost:8080`)

### Option 3: Direct File Access

Simply double-click `index.html` to open it in your browser. Note: This works but may have restrictions on loading assets in some browsers.

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Customization

### Colors
Edit the CSS variables in `styles.css`:
- Background gradient: Update the `body` style
- Button colors: Modify `.signin-button` styles
- Text colors: Update `color` properties

### Fonts
The design uses the "Arimo" font family. To use a different font:
1. Update the `font-family` property in `styles.css`
2. Add the font import if needed (e.g., from Google Fonts)

### Authentication Providers
To add or remove authentication providers:
1. Edit the buttons in `index.html`
2. Update the `providers` array in `script.js`
3. Add corresponding icon SVGs to the `assets/` folder

## Implementation Notes

The sign-in buttons currently show a demo notification. In production, they would:
1. Redirect to the respective OAuth provider
2. Handle the authentication flow
3. Store authentication tokens
4. Redirect to the main dashboard

To implement real authentication, you'll need:
- Backend API endpoints for each provider
- OAuth client credentials
- Session management
- Security best practices (CSRF tokens, secure cookies, etc.)

## Development

The page is built with vanilla HTML, CSS, and JavaScript - no frameworks or build tools required. This makes it:
- Fast to load
- Easy to modify
- Compatible with all environments
- Simple to deploy

## Assets

All SVG icons are sourced from Figma and optimized for web. The gradient logo and provider icons are included in the `assets/` folder.

## Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 640px to 1023px
- **Mobile**: Below 640px

The design gracefully adapts to all screen sizes with optimized spacing and font sizes.

## License

This design was created based on a Figma mockup and is ready for deployment.

## Support

For modifications or issues, simply edit the corresponding HTML, CSS, or JavaScript files. All code is well-commented and easy to understand.

---

Built with ❤️ using HTML, CSS, and JavaScript
