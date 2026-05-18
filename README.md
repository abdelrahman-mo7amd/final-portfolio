# Personal Portfolio — Abdelrahman Abd El-Hafez

A single-page portfolio built with React 19 and Vite 8, designed to present professional experience, skills, education, and achievements in a clean, performant interface. No UI framework. No component library. Every style is written in code.

---

## Live Sections

| Section | Description |
|---|---|
| **Hero** | Animated introduction with a typewriter role cycler and stat cards |
| **Education** | Expandable cards with animated GPA progress bars |
| **Experience** | Accordion job cards with company branding and bullet points |
| **Skills** | Tabbed skill bars that animate on scroll, plus certification grid |
| **Achievements** | Competition rankings and national award rows |
| **Leadership** | Volunteering and event coordination roles |
| **Contact** | Clickable fields with one-click email copy and external links |

---

## Tech Stack

- **React 19** — component model, hooks, context API
- **Vite 8** — dev server and production bundler
- **JavaScript (JSX)** — no TypeScript
- **CSS-in-JS** — all styling via inline `style` props, no stylesheet dependencies
- **LightningCSS** — used internally by Vite for CSS minification at build time

---

## Project Structure

```
src/
├── components/
│   ├── ui.jsx            # Shared primitives: Reveal, SectionHeader, SkillBar, StatCard, Button
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Education.jsx
│   ├── Experience.jsx
│   ├── Skills.jsx
│   ├── Achievements.jsx
│   ├── Leadership.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── context/
│   └── ThemeContext.jsx  # Global dark/light state and color tokens
├── hooks/
│   └── hooks.js          # useTyping, useInView, useScrollSpy, useClipboard
├── data/
│   └── portfolioData.js  # All content in one place — edit here to update the site
├── styles/
│   └── global.css        # Minimal resets only
├── App.jsx
└── index.jsx
```

---

## Key Design Decisions

**Single source of truth for content**
All text, links, dates, and data live in `src/data/portfolioData.js`. To update a job title, certification, or contact detail, you edit one file — no hunting through components.

**Theme via React Context**
`ThemeContext.jsx` holds a `colors` object that every component consumes via `useTheme()`. Toggling dark/light mode re-renders the entire tree with new color values instantly. No CSS variables, no class toggling.

**Scroll animations without a library**
`useInView` wraps the browser's native `IntersectionObserver`. Elements fade up when they enter the viewport and the observer disconnects immediately after — no ongoing overhead.

**Scroll spy without a library**
`useScrollSpy` listens to the `scroll` event passively and walks the section IDs to determine which one is currently in view, driving the active state in the navbar.

---

## Getting Started

**Prerequisites:** Node.js 18 or higher

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

The dev server runs at `http://localhost:5173` by default.

---

## Customisation

**To update personal information**
Open `src/data/portfolioData.js` and edit the exported arrays directly. Every section of the site is driven by this file.

**To change the default theme**
In `src/context/ThemeContext.jsx`, change:
```js
const [dark, setDark] = useState(false); // false = light, true = dark
```

**To change accent colors**
In `ThemeContext.jsx`, update the `colors` object:
```js
const colors = {
    accent: "#2563eb",   // primary blue
    purple: "#7c3aed",   // section headers
    teal:   "#0891b2",   // achievements section
    ...
};
```

**To add a new section**
1. Add your data to `portfolioData.js`
2. Create a component in `src/components/`
3. Import and place it in `App.jsx`
4. Add the section `id` to `NAV_IDS` in `portfolioData.js`

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint across all source files |

---

## Browser Support

Targets all modern browsers. Uses `IntersectionObserver`, `navigator.clipboard`, and CSS `backdrop-filter` — all widely supported. No polyfills included.

---

## Author

**Abdelrahman Mohamed Abd El-Hafez**
Data Analyst · Web Developer · Cairo, Egypt

- LinkedIn: [linkedin.com/in/abdelrhmanmohmed](https://www.linkedin.com/in/abdelrhmanmohmed)
- Email: amohamed.datanalyst@gmail.com
