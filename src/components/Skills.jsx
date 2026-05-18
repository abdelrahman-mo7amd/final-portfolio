import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Reveal, SectionHeader, SkillBar } from "./ui";
import {SKILLS, CERTIFICATIONS} from "../data/portfolioData";

function TabButton({label, isActive, onClick}) {
    const {dark, colors} = useTheme();

    return (
        <button
        onClick={onClick}
        style={{
            padding:"8px 20px",
            borderRadius:8,
            border: isActive ? "1.5px solid #2563eb" : `1.5px solid ${colors.border}`,
            background: isActive ? "#2563eb" : "transparent",
            fontFamily: "'Inter', sans-serif",
            fontSize: 13, 
            fontWeight: isActive ? 600 : 500,
            cursor: "pointer",
            transition: "all 0.15s",
        }}

        onMouseEnter={(e)=>{
            if (!isActive) {
                e.currentTarget.style.borderColor = "#2563eb88";
                e.currentTarget.style.color = dark ? "#e2e8f0" : "#1e293b";
            }
        }}
        onMouseLeave={(e)=>{
            if(!isActive) {
                e.currentTarget.style.borderColor = colors.border;
                e.currentTarget.style.color = colors.muted;
            }
        }}
        >
            {label}
        </button>
    )
}


function CertCard({cert}) {
    const {colors} = useTheme();

    return (
        <div
        style={{
            display:"flex",
            alignItems: "center",
            gap:12,
            padding: "12px 16px",
            borderRadius: 10,
            border: `1px solid ${colors.border}`,
            background: colors.card,
            transition: "0.2s"
        }}

        onMouseEnter={(e) => (e.currentTarget.style.borderColor = cert.color + "66")}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = colors.border)}
        >
            <div
            style={{
                width: 34,
                height: 34,
                borderRadius: 8,
                background: `${cert.color}1a`,
                border: `1px solid ${cert.color}33`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
                fontWeight: 700,
                color: cert.color,
                flexShrink: 0,
                fontFamily: "'Poppins', sans-serif"

            }}>
                {cert.abbr}
            </div>

            <div>
                <div style={{ fontSize: 13, fontWeight: 500, color: colors.text, fontFamily: "'Inter', sans-serif"}}>
                {cert.org}
                </div>
            </div>
        </div>
    )
}

export default function Skills() {
  const { colors } = useTheme();
  const [activeTab, setActiveTab] = useState(Object.keys(SKILLS)[0]);
  const visibleSkills = SKILLS[activeTab];

  return (
    <section
      id="skills"
      style={{
        padding: "90px 24px",
        background: colors.bg,
        transition: "background .3s",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <SectionHeader
          label="Technical Skills"
          title={`My <span style="color:${colors.purple}">Toolkit</span>`}
          accentColor={colors.purple}
        />
        <Reveal delay={0.05}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 36 }}>
            {Object.keys(SKILLS).map((tab) => (
              <TabButton
                key={tab}
                label={tab}
                isActive={activeTab === tab}
                onClick={() => setActiveTab(tab)}
              />
            ))}
          </div>
        </Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
          }}
        >
          <Reveal>
            <div>
              {visibleSkills.map((skill) => (
                <SkillBar
                  key={skill.name + activeTab}
                  name={skill.name}
                  level={skill.level}
                />
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 15,
                  fontWeight: 600,
                  color: colors.text,
                  marginBottom: 18,
                }}
              >
                Certifications
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {CERTIFICATIONS.map((cert) => (
                  <CertCard key={cert.name} cert={cert} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
