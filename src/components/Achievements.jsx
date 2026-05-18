import { useTheme } from '../context/ThemeContext';
import { Reveal, SectionHeader } from "./ui";
import { ACHIEVEMENTS } from '../data/portfolioData'

function AchievementRow({ achievement, delay }) {
    const {colors} = useTheme();
    const {rank, event, year, icon} = achievement;

    return (
        <Reveal delay={delay}>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    padding: "16px 22px",
                    borderRadius: 12,
                    border: `1px solid ${colors.border}`,
                    background: colors.card,
                    marginBottom: 12,
                    transition: "0.2s",
                    cursor: "default"
                }}
                onMouseEnter={(e)=> {
                    e.currentTarget.style.borderColor = "#2563eb55";
                    e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = colors.border;
                    e.currentTarget.style.transform = "translateX(0)";
                }}
            >
                <span style={{ fontSize: 26, flexShrink: 0 }}>{icon}</span>
                <div style={{ flex:1 }}>
                    <div
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 15,
                            fontWeight: 600, 
                            color: colors.text
                        }}
                    >
                    {rank}
                    </div>
                    <div
                        style={{
                            fontSize: 13, 
                            color : colors.muted,
                            fontFamily: "'Inter', sans-serif",
                            marginTop: 2,
                        }}
                    >
                        {event}
                    </div>
                </div>
                <span 
                style={{
                    fontSize: 12,
                    background: colors.surface,
                    border: `1px solid ${colors.border}`,
                    borderRadius: 6, 
                    padding: "4px 11px",
                    color: colors.muted,
                    flexShrink: 0,
                    fontFamily: "'Inter', sans-serif",
                }}>
                    {year}
                </span>
            </div>
        </Reveal>
    );
}


function InfoCard({ label, items, accentColor }) {
    const { colors } = useTheme();

    return (
        <div
            style={{
                background: colors.card,
                border: `1px solid ${colors.border}`,
                borderRadius: 14, 
                padding: 28, 
                transition: "0.2s",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = accentColor + "55";
                e.currentTarget.style.boxShadow = "none";
            }}
        >
            <div
            style={{
                fontSize: 11,
                fontWeight:600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: accentColor,
                marginBottom: 12,
                fontFamily: "'Inter', sans-serif",
            }}
            >
                {label}
            </div>
            {items.map((item) => (
                <div
                    key={item}
                    style={{
                        fontSize: 14, 
                        color: colors.muted,
                        lineHeight: 1.75,
                        fontFamily: "'Inter', sans-serif"
                    }}
                >{item}</div>
            ))}
        </div>
    )
}


function Achievements() {
    const { colors } = useTheme();

    return (
        <section
            id="achievements"
            style={{
                padding: "90px 24px",
                background: colors.surface,
                transition: "background 0.3s",
            }}
        >
            <div style={{maxWidth: 960, margin: "0 auto"}}>
                <SectionHeader
                    label="Awards & Competitions"
                    title={`Key <span style="color:${colors.teal}">Achievements</span>`}
                    accentColor={colors.teal}
                />

                {ACHIEVEMENTS.map((achievement,i)=> (
                    <AchievementRow
                        key={achievement.event}
                        achievement={achievement}
                        delay={i * 0.07}
                    />
                ))}

                <div 
                style ={{
                    display: 'grid',
                    gridTemplateColumns: "1fr 1fr",
                    gap: 20,
                    marginTop: 40
                }}>
                    <Reveal delay={0.2}>
                        <InfoCard
                        label="Languages"
                        items={["🇦🇪 Arabic — Native", "🇬🇧 English — Fluent"]}
                        accentColor={colors.teal}
                        />
                    </Reveal>

                    <Reveal delay={0.25}>
                        <InfoCard
                        label="Education"
                        items={[
                            "Preparatory School Certificate",
                            "Egyptian Ministry of Education · 2025"
                        ]}
                        accentColor={colors.teal}
                        />
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

export default Achievements;