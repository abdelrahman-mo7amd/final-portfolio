// ─────────────────────────────────────────────────────────────────────────────
// hooks.js
//
// REACT CONCEPT: Custom Hooks
// A custom hook is just a regular function whose name starts with "use".
// It can call other hooks (useState, useEffect, useRef) internally.
// The goal: extract reusable stateful logic out of components.
//
// Rules of hooks (always apply):
//   - Only call hooks at the TOP LEVEL of a function (not inside if/loops)
//   - Only call hooks from React functions (components or other hooks)
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect, useRef } from "react";
import { NAV_IDS } from "../data/portfolioData";

// ── useTyping ─────────────────────────────────────────────────────────────────
// Cycles through an array of strings, typing and deleting each one.
//
// Parameters:
//   words  - string[]  - the words to cycle through
//   speed  - number    - ms per character when typing
//   pause  - number    - ms to wait at the end of a word before deleting
//
// Returns: string  - the current visible text
export function useTyping(words, speed = 85, pause = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Still typing: add one more character
        const next = currentWord.slice(0, text.length + 1);
        setText(next);

        // Finished typing the full word → wait, then start deleting
        if (next === currentWord) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        // Deleting: remove one character
        const next = currentWord.slice(0, text.length - 1);
        setText(next);

        // Fully deleted → move to next word
        if (next === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? speed / 2 : speed); // delete faster than type

    return () => clearTimeout(timeout); // cleanup: cancel if re-runs
  }, [text, isDeleting, wordIndex, words, speed, pause]);

  return text;
}

// ── useInView ─────────────────────────────────────────────────────────────────
// Detects when an element enters the viewport using IntersectionObserver.
// Used for scroll-triggered animations: fade in, slide up, skill bars, etc.
//
// Parameters:
//   threshold - number (0–1) - how much of the element must be visible
//
// Returns: [ref, isVisible]
//   ref       - attach this to the DOM element you want to observe
//   isVisible - boolean, becomes true once the element enters view (stays true)
export function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Once visible, stop observing (animation plays once)
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect(); // cleanup on unmount
  }, [threshold]);

  return [ref, isVisible];
}

// ── useScrollSpy ──────────────────────────────────────────────────────────────
// Watches scroll position and returns the ID of the section currently in view.
// Used by the Navbar to highlight the active nav link.
//
// Returns: string  - the ID of the active section (e.g. "experience")
export function useScrollSpy() {
  const [activeId, setActiveId] = useState(NAV_IDS[0]);

  useEffect(() => {
    const handleScroll = () => {
      // Walk the sections in reverse; the first one whose top is above the
      // "fold" (accounting for navbar height) is considered "active".
      const found = [...NAV_IDS].reverse().find((id) => {
        const el = document.getElementById(id);
        return el && window.scrollY + 140 >= el.offsetTop;
      });
      if (found) setActiveId(found);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeId;
}

// ── useClipboard ──────────────────────────────────────────────────────────────
// Copies a string to the clipboard and shows a temporary "copied" state.
//
// Returns: [copied, copyToClipboard]
//   copied          - boolean, true for `duration` ms after copying
//   copyToClipboard - function(text) → copies text and sets copied=true
export function useClipboard(duration = 2200) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard?.writeText(text).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), duration);
  };

  return [copied, copyToClipboard];
}
