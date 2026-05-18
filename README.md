# Portfolio — Abdelrahman Abd El-Hafez

This is a personal portfolio website built with React 19 and Vite 8.  
The project was created to showcase my experience, technical skills, education, projects, certifications, and achievements through a clean and responsive interface.

The entire UI was built without using any UI framework or component library. All styling and interactions were implemented manually using React and inline styling.

---

## Sections

### Hero
Animated landing section with a typewriter text effect, introduction content, and quick statistics cards.

### Education
Expandable education cards with animated GPA progress indicators.

### Experience
Accordion-style experience section containing company information, roles, and responsibilities.

### Skills
Tabbed skills section with animated skill bars and certification displays.

### Achievements
Competition rankings, awards, and notable accomplishments.

### Leadership
Volunteer work, leadership positions, and event coordination experience.

### Contact
Contact section with clickable links, email copy functionality, and social media access.

---

# Tech Stack

- React 19
- Vite 8
- JavaScript (JSX)
- CSS-in-JS using inline style objects
- LightningCSS (used internally by Vite during production builds)

---

# Project Structure

```bash
src/
├── components/
│   ├── ui.jsx
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Education.jsx
│   ├── Experience.jsx
│   ├── Skills.jsx
│   ├── Achievements.jsx
│   ├── Leadership.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
│
├── context/
│   └── ThemeContext.jsx
│
├── hooks/
│   └── hooks.js
│
├── data/
│   └── portfolioData.js
│
├── styles/
│   └── global.css
│
├── App.jsx
└── index.jsx
```

---

# Major Design Choices

## Single Source of Truth

All portfolio content is stored inside:

```bash
src/data/portfolioData.js
```

This includes:
- Text content
- Dates
- Links
- Certifications
- Experience
- Contact information

Updating the portfolio only requires editing one file instead of searching through multiple components.

---

## Theme Management with React Context

The project uses a custom `ThemeContext.jsx` to manage application themes.

All components access colors and theme values through:

```js
useTheme()
```

Switching between dark mode and light mode updates the entire application dynamically without relying on CSS frameworks or class-based styling.

---

## Scroll Animations Without External Libraries

A custom hook called `useInView` was built using the browser's native `IntersectionObserver`.

Elements animate into view only when visible on screen, and observers disconnect immediately after triggering to reduce unnecessary overhead.

---

## Scroll Spy Navigation

The navbar active state is controlled using a custom hook called:

```js
useScrollSpy
```

The hook listens to passive scrolling events and determines which section is currently visible in the viewport.

---

# Getting Started

## Prerequisites

- Node.js 18 or newer
- npm

---

## Installation

```bash
npm install
```

---

## Run Development Server

```bash
npm run dev
```

The app will run locally on:

```bash
http://localhost:5173
```

---

## Production Build

```bash
npm run build
```

---

## Preview Production Build

```bash
npm run preview
```

---

# Customization

## Update Portfolio Content

Edit:

```bash
src/data/portfolioData.js
```

---

## Change Theme Defaults

Inside `ThemeContext.jsx`:

```js
const [dark, setDark] = useState(false)
```

- `false` → Light Mode
- `true` → Dark Mode

---

## Change Accent Colors

Modify the `colors` object inside `ThemeContext.jsx`.

Example:

```js
const colors = {
  accent: "#2563eb",
  purple: "#7c3aed",
  teal: "#0891b2"
}
```

---

## Add New Sections

1. Add data inside `portfolioData.js`
2. Create a component inside `src/components`
3. Import it into `App.jsx`
4. Add the section id to navigation data

---

# Available Scripts

| Command | Description |
|---|---|
| npm run dev | Start development server |
| npm run build | Build project for production |
| npm run preview | Preview production build |
| npm run lint | Run ESLint |

---

# Browser Support

The project supports all modern browsers.

Features used:
- IntersectionObserver
- navigator.clipboard
- backdrop-filter

No polyfills are included.

---

# Author

### Abdelrahman Mohamed Abd El-Hafez

Data Analyst & Web Developer  
Cairo, Egypt

- LinkedIn: https://www.linkedin.com/in/abdelrhmanmohmed
- Email: amohamed.datanalyst@gmail.com
