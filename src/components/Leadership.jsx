// ─────────────────────────────────────────────────────────────────────────────
// Leadership.jsx
//
// REACT CONCEPTS demonstrated here:
//   - Purely presentational section — all data from portfolioData.js
//   - Component composition: SectionHeader + Reveal + card layout
//   - Inline hover effects using onMouseEnter / onMouseLeave
//   - Fragment shorthand <> </> to group elements without adding a DOM node
// ─────────────────────────────────────────────────────────────────────────────

import { useTheme } from "../context/ThemeContext";
import { Reveal, SectionHeader } from "./ui";
import { LEADERSHIP } from "../data/portfolioData";

// ── LeadershipCard ────────────────────────────────────────────────────────────
// A card for one leadership / volunteering role.
//
// Props:
//   item  - object { role, org, period, icon, desc }
//   delay - number - Reveal stagger delay
function LeadershipCard({ item, delay }) {
  const { colors } = useTheme();
  const { role, org, period, icon, desc } = item;

  return (
    <Reveal delay={delay}>
      <div
        style={{
          background: colors.card,
          border: `1px solid ${colors.border}`,
          borderRadius: 14,
          padding: 28,
          display: "flex",
          gap: 20,
          alignItems: "flex-start",
          transition: "border-color .2s, box-shadow .2s, background .3s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "#2563eb55";
          e.currentTarget.style.boxShadow = "0 4px 24px #2563eb12";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = colors.border;
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {/* Emoji icon */}
        <div style={{ fontSize: 32, flexShrink: 0, lineHeight: 1 }}>{icon}</div>

        {/* Text content */}
        <div>
          <div
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 16,
              fontWeight: 600,
              color: colors.text,
              marginBottom: 3,
            }}
          >
            {role}
          </div>

          {/* Org + period on one line */}
          <div
            style={{
              fontSize: 13,
              fontFamily: "'Inter', sans-serif",
              marginBottom: 10,
            }}
          >
            <span style={{ color: colors.accent, fontWeight: 500 }}>{org}</span>
            <span style={{ color: colors.muted }}> · {period}</span>
          </div>

          <p
            style={{
              fontSize: 14,
              color: colors.muted,
              lineHeight: 1.75,
              fontFamily: "'Inter', sans-serif",
              margin: 0,
            }}
          >
            {desc}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

// ── Leadership (section) ──────────────────────────────────────────────────────
export default function Leadership() {
  const { colors } = useTheme();

  return (
    <section
      id="leadership"
      style={{
        padding: "90px 24px",
        background: colors.bg,
        transition: "background .3s",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <SectionHeader
          label="Volunteering"
          title={`Leadership & <span style="color:${colors.accent}">Community</span>`}
          accentColor={colors.accent}
        />

        <div style={{ display: "grid", gap: 20 }}>
          {LEADERSHIP.map((item, i) => (
            <LeadershipCard
              key={item.org + item.role}
              item={item}
              delay={i * 0.09}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
