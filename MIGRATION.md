# Portfolio — React + Vite Conversion ✨

Successfully converted your portfolio from static HTML/CSS/JS to a modern React 19 + Vite application!

## What Changed

### Before (Static HTML)
- Multiple HTML files (`index.html`, `pages/designer.html`, `pages/developer.html`)
- Manual DOM manipulation with vanilla JavaScript
- Hard-coded HTML structure
- No component reusability

### After (React + Vite)
- **Single Page Application (SPA)** with client-side routing
- **React Components** for reusable sections (Loader, Navigation, Hero, etc.)
- **React Router** for seamless navigation between pages
- **Vite** for fast development and optimized builds
- **Same design** — all CSS preserved, no visual changes

## Project Structure

```
Portfolio/
├── src/
│   ├── components/           # Reusable React components
│   │   ├── Loader.jsx        # Loading screen animation
│   │   ├── TopBar.jsx        # Home page top navigation
│   │   ├── HeroSplit.jsx     # Split-screen hero section
│   │   └── Navigation.jsx    # Developer/Designer page navbar
│   ├── pages/                # Route pages
│   │   ├── Home.jsx          # Main portfolio page (/)
│   │   ├── Developer.jsx     # Developer projects page (/developer)
│   │   └── Designer.jsx      # Designer projects page (/designer)
│   ├── styles/               # CSS modules
│   │   ├── main.css          # Hero split + shared styles
│   │   ├── developer.css     # Developer page theme (cyan accent)
│   │   └── designer.css      # Designer page theme (pink accent)
│   ├── App.jsx               # Main app with routing setup
│   └── main.jsx              # React entry point
├── public/                   # Static files
│   └── assets/               # Images (copied from old assets/)
├── index.html                # Root HTML (Vite template)
├── package.json              # Dependencies & scripts
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

## Running the App

### Development Mode
```bash
npm run dev
```
Opens at `http://localhost:5173` with hot reload

### Production Build
```bash
npm run build
```
Optimized files in `dist/` folder (ready to deploy)

### Preview Production Build
```bash
npm run preview
```
Test the built app locally

## Routing

- `/` — Home (Split hero with Developer/Designer buttons)
- `/developer` — Developer Projects Page
- `/designer` — Designer Projects Page

Navigation between pages uses React Router for smooth, instant transitions (no page reload).

## Key Features Preserved

✅ **Loader Animation** — Same AS loading screen  
✅ **Split-Screen Hero** — Hover effects work perfectly  
✅ **Dark/Cinematic Theme** — All color schemes intact  
✅ **Glass Morphism UI** — Backdrop blur effects  
✅ **Responsive Design** — Mobile-friendly breakpoints  
✅ **Smooth Animations** — CSS transitions & keyframes  

## Next Steps

### 1. Add Project Content
Edit `src/pages/Developer.jsx` and `src/pages/Designer.jsx` to add your actual projects:

```jsx
<section className="section" id="projects">
  <h2>Your Projects</h2>
  {/* Add project cards, grid layout, etc. */}
</section>
```

### 2. Optimize Images
Replace placeholder images in `public/assets/images/` with your actual work

### 3. Add More Components
Break down larger sections into smaller components:
```jsx
// Example: ProjectCard.jsx
export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link}>View Project →</a>
    </div>
  )
}
```

### 4. Integrate Animations with GSAP
The old code used GSAP for scroll animations. To add them back:

```bash
npm install gsap
```

Then in a component:
```jsx
import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function ProjectSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    gsap.from('.project-card', {
      scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top center'
      },
      opacity: 0,
      y: 50,
      stagger: 0.1
    })
  }, [])

  return <div>...</div>
}
```

## Dependencies

- `react@19` — UI library
- `react-dom@19` — React DOM rendering
- `react-router-dom@6` — Client-side routing
- `gsap@3` — Animation library (optional, can be added)
- `vite@5` — Build tool
- `@vitejs/plugin-react@4` — Vite React plugin

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir dist
```

### GitHub Pages
Update `vite.config.js`:
```js
export default defineConfig({
  base: '/Portfolio/', // your repo name
  ...
})
```

Then build and push to GitHub.

## Troubleshooting

**Issue:** Images not loading
- Make sure image paths start with `/assets/` (not `../assets/`)
- Verify images exist in `public/assets/images/`

**Issue:** Routing not working
- Ensure you're using React Router links/navigate, not `<a>` tags for internal routes
- Check that routes are defined in `App.jsx`

**Issue:** Styles not applying
- Make sure CSS files are imported in the component
- Clear browser cache (Ctrl+Shift+Del)
- Check that CSS class names match HTML elements

## Need Help?

Refer to documentation:
- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [React Router Docs](https://reactrouter.com)

---

**Migration completed on June 24, 2026** 🚀  
Your portfolio is now ready for modern web development!
