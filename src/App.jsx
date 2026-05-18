// ─────────────────────────────────────────────────────────────────────────────
// App.jsx  —  Root component
//
// REACT CONCEPT: Component Composition
// App.jsx is the "root" of your component tree. It doesn't do much itself —
// it just composes (assembles) all the section components in order.
//
// The ThemeProvider wraps everything so any descendant can call useTheme().
//
// Component tree:
//   App
//   └── ThemeProvider          (provides dark/light context)
//       ├── Navbar             (fixed header, scroll spy, theme toggle)
//       ├── Hero               (animated hero with typing effect)
//       ├── Experience         (accordion job cards)
//       ├── Skills             (tab switcher + animated bars + certs)
//       ├── Achievements       (award rows + info cards)
//       ├── Leadership         (volunteering cards)
//       ├── Contact            (clickable contact fields)
//       └── Footer             (copyright + back to top)
// ─────────────────────────────────────────────────────────────────────────────

import { ThemeProvider } from "./context/ThemeContext";
import Navbar        from "./components/Navbar";
import Hero          from "./components/Hero";
import Experience    from "./components/Experience";
import Skills        from "./components/Skills";
import Achievements  from "./components/Achievements";
import Leadership    from "./components/Leadership";
import Contact       from "./components/Contact";
import Footer        from "./components/Footer";
import "./styles/global.css";

export default function () {
  return (
    // ThemeProvider must wrap everything that needs theme access.
    // It renders a React Context that all children can subscribe to via useTheme().
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Achievements />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
