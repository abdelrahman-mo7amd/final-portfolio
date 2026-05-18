// ─────────────────────────────────────────────────────────────────────────────
// index.jsx  —  Application entry point
//
// REACT CONCEPT: ReactDOM.createRoot
// This is the single line that mounts your React app onto the real HTML page.
// It finds the <div id="root"> in index.html and hands it to React.
// Everything from this point on is managed by React's virtual DOM.
// ─────────────────────────────────────────────────────────────────────────────

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Find the <div id="root"> in your public/index.html
const rootElement = document.getElementById("root");

// Create a React root and render the App component tree into it.
// React 18+ uses createRoot instead of the old ReactDOM.render().
ReactDOM.createRoot(rootElement).render(
  // StrictMode runs your components twice in development to catch side effects.
  // It has no effect in production builds.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
