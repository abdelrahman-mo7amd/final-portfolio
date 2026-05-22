# Portfolio | Abdelrahman Abd El-Hafez

> A portfolio website built with React + Vite that tries very hard to look expensive while running on pure determination, caffeine, and `npm install`.

---

## What is this?

This is my personal portfolio website built using **React 19** and **Vite 8** to showcase:

* My projects
* Technical skills
* Certifications
* Experience
* Leadership roles
* Achievements
* Education journey
* And my unhealthy relationship with clean UI design

The entire interface was built manually without using any UI framework or component library.
No Bootstrap.
No Tailwind.
No "copy-paste mysterious div from StackOverflow".
Just React, JavaScript, inline styling, and several hours questioning why CSS exists.

---

# Why I Made This

Most portfolio websites feel like:

* 90% animations
* 10% actual information
* 100% confusion

I wanted something that:

* Feels modern and smooth
* Actually tells people who I am
* Loads fast
* Looks professional
* Works on all screen sizes
* Doesn't explode on mobile devices from 2016

As a student from Egypt working toward becoming a Data Scientist and Software Engineer, I needed a place that represents both:

1. My technical skills
2. My personality

Also… recruiters needed somewhere to stalk me professionally.

---

# Features

## Hero Section

* Animated typewriter effect
* Introduction content
* Statistics cards
* Smooth entrance animations

Basically the “please hire me” section.

---

## Education Section

Expandable education cards with animated GPA indicators because suffering academically should at least look beautiful.

---

## Experience Section

Accordion-based layout showing:

* Companies
* Roles
* Responsibilities
* The exact moments I discovered bugs at 2AM

---

## Skills Section

Tabbed skill categories with:

* Animated progress bars
* Certifications
* Technology grouping

Yes, the progress bars are animated.
No, they do not increase my actual intelligence.

---

## Achievements Section

Competition rankings, awards, and accomplishments collected through:

* Hard work
* Consistency
* Panic
* Google searches starting with “why is my code…”

---

## Leadership Section

Volunteer work and leadership experiences proving I can communicate with humans, not only computers.

---

## Contact Section

Includes:

* Clickable links
* Social media access
* Email copy functionality

Because typing emails manually in 2026 is unacceptable behavior.

---

# Live Demo

## Website

(Add your deployed link here)

Example:

```bash
https://personal-web-beest.netlify.app
```

## Repository

(Add your GitHub repository link here)

---

# Screenshots / Visuals

## Landing Page

*Add screenshot here*

## Skills Section

*Add screenshot here*

## Mobile View

*Add screenshot here*

## Experience Section

*Add screenshot here*

> Recommendation:
> Add a GIF preview. People love moving pixels.

Example tools:

* ScreenToGif
* Kap
* OBS Studio

---

# Tech Stack

| Technology           | Usage                  |
| -------------------- | ---------------------- |
| React 19             | Frontend framework     |
| Vite 8               | Development/build tool |
| JavaScript (JSX)     | Logic & components     |
| CSS-in-JS            | Styling                |
| IntersectionObserver | Scroll animations      |
| React Context API    | Theme management       |

---

# What Makes This Project Unique?

Most portfolios use heavy UI libraries and huge dependencies.

This project intentionally avoids that.

Everything was built manually:

* Theme system
* Scroll spy navigation
* View animations
* Responsive layout
* Section transitions
* Component structure

Which means:

* Smaller bundle size
* Better understanding of React internals
* Full customization
* Maximum emotional damage during debugging

---

# How to Use This Project

## 1. Clone the Repository

```bash
git clone https://github.com/abdelrahman-mo7amd/final-portfolio.git
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Start Development Server

```bash
npm run dev
```

The app runs on:

```bash
http://localhost:5173
```

---

## 4. Build for Production

```bash
npm run build
```

---

## 5. Preview Production Build

```bash
npm run preview
```

---

# Customization Guide

## Edit Portfolio Content

All portfolio content is stored in one place:

```bash
src/data/portfolioData.js
```

Update:

* Text
* Experience
* Skills
* Certifications
* Links
* Achievements

Without hunting through 37 random components like an archaeological expedition.

---

## Change Theme

Inside:

```bash
src/context/ThemeContext.jsx
```

Modify:

```js
const [dark, setDark] = useState(false)
```

* `false` → Light Mode
* `true` → Dark Mode
* `undefined` → Chaos Mode

---

## Change Accent Colors

```js
const colors = {
  accent: "#2563eb",
  purple: "#7c3aed",
  teal: "#0891b2"
}
```

---

## Add New Sections

1. Create component
2. Add data
3. Import into `App.jsx`
4. Pray nothing breaks

---

# Project Structure

```bash
src/
├── components/
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

# Design Decisions

## Single Source of Truth

All portfolio data exists inside one file:

```bash
src/data/portfolioData.js
```

Because future me deserves happiness too.

---

## Custom Theme System

A fully custom theme context controls:

* Colors
* Dark/light mode
* UI consistency

Without external libraries turning the dependency tree into a Netflix documentary.

---

## Scroll Animations Without Libraries

Animations use native:

```js
IntersectionObserver
```

Meaning:

* Better performance
* Less bloat
* More control
* Fewer “why is node_modules 8GB?” moments

---

## Scroll Spy Navigation

The navbar automatically detects the active section while scrolling.

Which sounds simple until you try building it yourself.

---

# Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| npm run dev     | Start development server |
| npm run build   | Build project            |
| npm run preview | Preview production build |
| npm run lint    | Run ESLint               |

---

# Browser Support

Supports all modern browsers.

Used APIs/features:

* IntersectionObserver
* navigator.clipboard
* backdrop-filter

No polyfills included.

If Internet Explorer tries opening this project, respectfully… no.

---

# Future Improvements

* Blog integration
* Multi-language support
* Project filtering
* Better animations
* Backend CMS support
* Probably another redesign because developers are never emotionally satisfied with their portfolio

---

# Author

## Abdelrahman Mohamed Abd El-Hafez

Data Analyst | Frontend Developer | STEM Student

📍 Cairo, Egypt

* LinkedIn:
  [LinkedIn Profile](https://www.linkedin.com/in/abdelrhmanmohmed?utm_source=chatgpt.com)

* Email:
  [amohamed.datanalyst@gmail.com](mailto:amohamed.datanalyst@gmail.com)

---

### Final Note

If you like the project:

* Star the repo
* Fork it
* Use it for inspiration

If you find bugs:

* That’s not a bug
* It’s an undocumented feature
* Please open an issue anyway 😭
