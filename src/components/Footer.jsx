import { useTheme } from "../context/ThemeContext";

function Footer() {
    const { colors } = useTheme();
    const scrollToTop = () => document.getElementById("home").scrollIntoView({ behavior: "smooth" });

    return (
        <footer
        style={{
            borderTop: `1px solid ${colors.border}`,
            padding: "28px 24px",
            background: colors.bg, 
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            transition: "0.3s",
        }}>
            <span
                style={{
                    fontSize: 13, color: colors.muted, fontFamily: "'Inter', sans-serif"
                }}
            >
        © 2025 Abdelrahman Mohamed Abd El-Hafez · Built with ❤️
            </span>

            <button onClick={scrollToTop}
            style={{
                background: "none",
                border: `1px solid ${colors.border}`,
                borderRadius: 8,
                padding: "6px 14px",
                cursor: "pointer",
                fontSize: 12,
                color: colors.muted,
                fontFamily: "'Inter', sans-serif",
                transition: "0.2s"
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor="#2563eb";
                e.currentTarget.style.color = "#2563eb";
            }}

            onMouseLeave={(e)=> {
                e.currentTarget.style.borderColor = colors.border;
                e.currentTarget.style.color = colors.muted;
            }}
            >
                ↑ Back to top
            </button>
        </footer>
    )
}

export default Footer;