import { useTheme } from "../context/ThemeContext";
import { useClipboard } from "../hooks/hooks";
import { Reveal, SectionHeader, Button } from "./ui";
import { CONTACT_INFO } from "../data/portfolioData";


function ContactField({item, copied, onCopy}) {
    const { dark, colors } = useTheme();

    const handleClick = () => {
        if (item.copyable) {
            onCopy(item.value);
        } else if (item.href) {
            window.open(item.href, "_blank", "noopener noreferrer");
        }
    }

    const subLabel = item.copyable && copied ? "✓ Copied to clipboard" : item.sub;
    const subColor = item.copyable && copied ? "#22c55e" : colors.accent;

    return (
        <div
            onClick={handleClick}
            style={{
                display:"flex",
                alignItems: "center",
                gap: 14,
                padding: "16px 20px", 
                borderRadius: 12,
                border: `1px solid ${colors.border}`,
                background: dark ? "#0f172a" : "#f8fafc",
                marginBottom: 12,
                cursor: item.copyable || item.href ? "pointer" : "default",
                transition: "0.2s"
            }}
            onMouseEnter={(e) => {
                if (item.copyable || item.href) {
                    e.currentTarget.style.borderColor = "#2563eb66";
                    e.currentTarget.style.background = dark ? "#1e293b" : "#f1f5f9";
                }
            }}
            onMouseLeave = {(e) => {
                e.currentTarget.style.borderColor = colors.border;
                e.currentTarget.style.background = dark ? "#0f172a" : "#f8fafc";
            }}
        >
            <div
                style={{
                    width: 42, 
                    height: 42,
                    borderRadius: 10,
                    background: dark ? "#1e293b":"#f1f5f9",
                    border:`1px solid ${colors.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                    flexShrink: 0,
                }}
            >
                {item.icon}
            </div>
            
            <div style={{ flex:1}}>
                <div 
                style={{
                    fontSize: 11, color: colors.muted,
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.07em",
                    marginBottom: 2,
                    fontFamily: "'Inter', sans-serif"
                }}
                >
                    {item.label}
                </div>
                <div
                style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: colors.text,
                    fontFamily: "'Inter', sans-serif"
                }}
                >
{item.value}
                </div>
            </div>

            <div
                style={{
                    fontSize: 12, 
                    color: subColor, 
                    fontFamily: "'Inter', sans-serif",
                    flexShrink: 0,
                    transition: "0.2s",
                }}
            >
{subLabel}
            </div>
        </div>
    )
};

function Contact() {
    const { colors } = useTheme();
    const [copied, copyToClipboard] = useClipboard();

    return (
        <section
            id="contact"
            style={{
                padding: "90px 24px",
                background: colors.surface,
                transition: "0.3s"
            }}
        >
            <div
                style={{ maxWidth: 680, margin: "0 auto" }}>
                <SectionHeader
                label="Get In Touch"
                title={`Let's <span style="color: ${colors.purple}">Connect</span>`}
                accentColor={colors.purple}
                />
                <Reveal delay = {0.05}>
                    <p
                    style={{
                        fontSize: 15,
                        color: colors.muted, 
                        lineHeight: 1.85,
                        marginBottom: 36,
                        fontFamily: "'Inter', sans-serif"
                    }}>
                        I'm actively looking for data analytics and data science oppurtunities.
                        Have a role, a project, or just want to talk data? My inbox is always open.
                    </p>
                </Reveal>

                <Reveal delay={0.1}>
                    <div>
                        {CONTACT_INFO.map((item) => (
                            <ContactField
                            key={item.label}
                            item={item}
                            copied={item.copyable ? copied : false}
                            onCopy={copyToClipboard}
                            />
                        ))}
                    </div>
                </Reveal>

                <Reveal delay={0.18}>
                    <div style={{ marginTop:28 }}>
                        <a
                            href="mailto:amohamed.datanalyst@gmail.com"
                            style={{ display: "block" }}
                        >
                            <Button variant="primary" style={{ width: "100%", fontSize: 15}}>
                                Send Me an Email →
                            </Button>
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}

export default Contact;

