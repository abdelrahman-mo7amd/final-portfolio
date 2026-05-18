import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Reveal, SectionHeader } from "./ui";
import { EXPERIENCE } from "../data/portfolioData";

function ExperienceCard({ exp, index }) {
  const { dark } = useTheme();
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const textPrimary  = dark ? "rgba(255,255,255,0.92)" : "#0f172a";
  const textMuted    = dark ? "rgba(255,255,255,0.42)" : "rgba(15,23,42,0.48)";
  const borderSubtle = dark ? "rgba(255,255,255,0.07)" : "rgba(15,23,42,0.08)";
  const borderHover  = exp.color + (dark ? "55" : "44");
  const glassBg      = dark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.68)";
  const glassBgHover = dark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.92)";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 14,
        border: `1px solid ${hovered ? borderHover : borderSubtle}`,
        background: hovered ? glassBgHover : glassBg,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        overflow: "hidden",
        transition: "border-color .3s, background .3s, transform .3s, box-shadow .3s",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 12px 40px ${exp.color}18`
          : "none",
        cursor: "default",
      }}
    >
      {/* Accent left bar */}
      <div style={{
        position: "absolute",
        left: 0, top: 0, bottom: 0,
        width: hovered ? 3 : 0,
        background: exp.color,
        borderRadius: "0 2px 2px 0",
        transition: "width .3s ease",
      }} />

      {/* Card header */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "22px 26px 20px 26px",
        gap: 16,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, minWidth: 0 }}>
          {/* Logo badge */}
          <div style={{
            width: 46, height: 46, flexShrink: 0,
            borderRadius: 12,
            background: exp.color + (dark ? "18" : "14"),
            border: `1px solid ${exp.color}${dark ? "44" : "33"}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 13, fontWeight: 700, color: exp.color,
            fontFamily: "'Poppins', sans-serif",
            transition: "transform .3s, box-shadow .3s",
            transform: hovered ? "scale(1.06)" : "scale(1)",
            boxShadow: hovered ? `0 4px 14px ${exp.color}33` : "none",
          }}>
            {exp.company.slice(0, 2).toUpperCase()}
          </div>

          <div style={{ minWidth: 0 }}>
            <div style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 15, fontWeight: 700,
              color: textPrimary, marginBottom: 3,
              letterSpacing: "-0.01em",
              whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
            }}>
              {exp.role}
            </div>
            <div style={{
              fontSize: 12, color: textMuted,
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.01em",
            }}>
              {exp.company}
              <span style={{
                display: "inline-block", width: 3, height: 3,
                borderRadius: "50%", background: textMuted,
                margin: "0 6px 1px", verticalAlign: "middle",
              }} />
              {exp.period}
            </div>
          </div>
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(p => !p)}
          style={{
            flexShrink: 0, width: 30, height: 30, borderRadius: "50%",
            border: `1px solid ${hovered ? borderHover : borderSubtle}`,
            background: "none", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: hovered ? exp.color : textMuted,
            fontSize: 13, lineHeight: 1,
            transition: "transform .28s ease, color .25s, border-color .25s",
            transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
          }}
          aria-label="Toggle details"
        >
          ▾
        </button>
      </div>

      {/* Expandable bullets */}
      <div style={{
        maxHeight: expanded ? 600 : 0,
        overflow: "hidden",
        transition: "max-height .38s cubic-bezier(0.4,0,0.2,1)",
      }}>
        <div style={{
          padding: "2px 26px 22px 26px",
          borderTop: `1px solid ${borderSubtle}`,
        }}>
          <ul style={{
            listStyle: "none", margin: 0, padding: 0,
            marginTop: 16, display: "flex", flexDirection: "column", gap: 10,
          }}>
            {exp.bullets.map((bullet, i) => (
              <li key={i} style={{
                display: "flex", gap: 10,
                fontSize: 13, lineHeight: 1.8,
                color: textMuted, fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
              }}>
                <span style={{
                  color: exp.color, fontWeight: 700,
                  flexShrink: 0, marginTop: 3, fontSize: 11,
                  letterSpacing: "0.05em",
                }}>—</span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ─── Experience Section ─────────────────────────────────────── */
function Experience() {
  const { dark } = useTheme();

  const textPrimary  = dark ? "rgba(255,255,255,0.92)" : "#0f172a";
  const textMuted    = dark ? "rgba(255,255,255,0.35)" : "rgba(15,23,42,0.42)";
  const borderSubtle = dark ? "rgba(255,255,255,0.07)" : "rgba(15,23,42,0.08)";
  const sectionBg    = dark ? "#060c1a" : "#f3f6ff";

  return (
    <section
      id="experience"
      style={{
        padding: "100px 24px",
        background: sectionBg,
        transition: "background .4s",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial bg accent */}
      <div style={{
        position: "absolute",
        width: 600, height: 600,
        borderRadius: "50%",
        background: dark
          ? "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)"
          : "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)",
        top: "-100px", right: "-100px",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 960, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Section header */}
        <Reveal>
          <div style={{ marginBottom: 60 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              marginBottom: 16,
            }}>
              <div style={{
                width: 24, height: "0.5px",
                background: dark ? "rgba(129,140,248,0.6)" : "rgba(37,99,235,0.5)",
              }} />
              <span style={{
                fontSize: 11, fontWeight: 600, letterSpacing: "0.1em",
                textTransform: "uppercase", color: dark ? "#818cf8" : "#2563eb",
                fontFamily: "'Inter', sans-serif",
              }}>Work Experience</span>
            </div>
            <h2 style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(30px, 4vw, 48px)",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              color: textPrimary,
              margin: 0,
            }}>
              Where I've{" "}
              <span style={{
                color: dark ? "#818cf8" : "#2563eb",
              }}>Made Impact</span>
            </h2>
          </div>
        </Reveal>

        {/* Two-column grid on wider screens */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))",
          gap: 14,
        }}>
          {EXPERIENCE.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 0.07}>
              <ExperienceCard exp={exp} index={i} />
            </Reveal>
          ))}
        </div>

        {/* Bottom label */}
        <Reveal delay={0.3}>
          <div style={{
            display: "flex", alignItems: "center", gap: 12,
            marginTop: 48,
          }}>
            <div style={{
              height: "0.5px", flex: 1,
              background: borderSubtle,
            }} />
            <span style={{
              fontSize: 11, color: textMuted,
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500, letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}>
              {EXPERIENCE.length} positions
            </span>
            <div style={{
              height: "0.5px", flex: 1,
              background: borderSubtle,
            }} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Experience;