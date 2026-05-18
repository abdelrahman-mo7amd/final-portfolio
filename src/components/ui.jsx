// ─────────────────────────────────────────────────────────────────────────────
// ui.jsx  —  Shared / primitive UI components
//
// REACT CONCEPT: Reusable Components & Props
// These are "dumb" (presentational) components — they receive props and render
// UI. They hold no business logic. Any section can import and use them.
//
// Keeping shared pieces here avoids copy-pasting and makes global style
// changes a single-file edit.
// ─────────────────────────────────────────────────────────────────────────────

import { useInView } from "../hooks/hooks";
import { useTheme } from "../context/ThemeContext";

// ── Reveal ────────────────────────────────────────────────────────────────────
// Wraps any content and fades + slides it in when it enters the viewport.
//
// Props:
//   children - ReactNode  - the content to animate
//   delay    - number     - seconds to wait before the animation starts
//
// Usage:
//   <Reveal delay={0.1}>
//     <p>This will animate in on scroll</p>
//   </Reveal>
export function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(24px)",
        // delay is used so staggered children don't all animate at once
        transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ── SectionHeader ─────────────────────────────────────────────────────────────
// Renders the label + title block that appears at the top of each section.
//
// Props:
//   label      - string  - small uppercase label above the title
//   title      - string  - main heading (can contain an <span> for color)
//   accentColor - string - color for the label text
//
// Note: `dangerouslySetInnerHTML` is used so you can pass HTML like:
//   "Where I've <span style='color:#2563eb'>Made Impact</span>"
// Only use this with trusted content you control — never with user input.
export function SectionHeader({ label, title, accentColor }) {
  const { colors } = useTheme();

  return (
    <Reveal>
      <div style={{ marginBottom: 48 }}>
        <span
          style={{
            display: "block",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontFamily: "'Inter', sans-serif",
            color: accentColor,
            marginBottom: 8,
          }}
        >
          {label}
        </span>
        <h2
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(26px, 4vw, 36px)",
            lineHeight: 1.2,
            color: colors.text,
            margin: 0,
          }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
    </Reveal>
  );
}

// ── SkillBar ──────────────────────────────────────────────────────────────────
// Animated progress bar for a single skill.
// The bar width animates from 0 → level% when the bar scrolls into view.
//
// Props:
//   name  - string  - skill name label
//   level - number  - 0–100, percentage fill
export function SkillBar({ name, level }) {
  const { colors } = useTheme();
  // Use a lower threshold so bars start animating a bit earlier
  const [ref, visible] = useInView(0.05);

  return (
    <div ref={ref} style={{ marginBottom: 16 }}>
      {/* Label row */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
        <span
          style={{
            fontSize: 14,
            fontWeight: 500,
            fontFamily: "'Poppins', sans-serif",
            color: colors.text,
          }}
        >
          {name}
        </span>
        <span style={{ fontSize: 12, color: colors.muted, fontFamily: "'Inter', sans-serif" }}>
          {level}%
        </span>
      </div>

      {/* Track */}
      <div
        style={{
          height: 7,
          borderRadius: 99,
          background: colors.border,
          overflow: "hidden",
        }}
      >
        {/* Fill — width animates once visible becomes true */}
        <div
          style={{
            height: "100%",
            borderRadius: 99,
            background: "linear-gradient(90deg, #2563eb, #7c3aed)",
            width: visible ? `${level}%` : "0%",
            transition: "width 0.85s cubic-bezier(.4, 0, .2, 1)",
          }}
        />
      </div>
    </div>
  );
}

// ── StatCard ──────────────────────────────────────────────────────────────────
// Small card showing a big value + small label. Used in the Hero section.
//
// Props:
//   value - string  - the big number/text (e.g. "2+")
//   label - string  - description below it (e.g. "Years Exp.")
export function StatCard({ value, label }) {
  const { colors } = useTheme();

  return (
    <div
      style={{
        background: colors.card,
        border: `1px solid ${colors.border}`,
        borderRadius: 14,
        padding: "18px 22px",
        minWidth: 110,
        textAlign: "center",
        transition: "background .3s, border-color .3s",
      }}
    >
      <div
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 24,
          fontWeight: 800,
          color: colors.accent,
        }}
      >
        {value}
      </div>
      <div style={{ fontSize: 11, color: colors.muted, marginTop: 4, fontWeight: 500, lineHeight: 1.3 }}>
        {label}
      </div>
    </div>
  );
}

// ── Button ────────────────────────────────────────────────────────────────────
// Reusable button with two variants: "primary" (filled blue) and "ghost" (outlined).
//
// Props:
//   variant  - "primary" | "ghost"
//   onClick  - function
//   children - ReactNode
//   style    - optional inline style overrides
export function Button({ variant = "primary", onClick, children, style = {} }) {
  const { colors } = useTheme();

  const base = {
    display: "inline-block",
    padding: "11px 28px",
    borderRadius: 9,
    cursor: "pointer",
    fontFamily: "'Poppins', sans-serif",
    fontSize: 14,
    fontWeight: 600,
    transition: "transform .15s, box-shadow .15s, border-color .15s, color .15s",
    border: "none",
    ...style,
  };

  if (variant === "primary") {
    return (
      <button
        onClick={onClick}
        style={{
          ...base,
          background: "#2563eb",
          color: "#fff",
          boxShadow: "0 4px 14px #2563eb44",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 8px 24px #2563eb55";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "none";
          e.currentTarget.style.boxShadow = "0 4px 14px #2563eb44";
        }}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      style={{
        ...base,
        background: "transparent",
        color: colors.text,
        border: `1.5px solid ${colors.border}`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#2563eb";
        e.currentTarget.style.color = "#2563eb";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = colors.border;
        e.currentTarget.style.color = colors.text;
      }}
    >
      {children}
    </button>
  );
}
