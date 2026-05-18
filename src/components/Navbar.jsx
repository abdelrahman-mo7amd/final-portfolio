import { useTheme } from "../context/ThemeContext";
import { useScrollSpy } from "../hooks/hooks";
import { NAV_IDS } from "../data/portfolioData";

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

function Navbar() {
  const { dark, toggleTheme, colors } = useTheme();
  const activeId = useScrollSpy(); // which section is currently in view

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        background: dark ? "#0f172acc" : "#ffffffcc",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: `1px solid ${colors.border}`,
        transition: "background .3s, border-color .3s",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "12px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: 18,
            letterSpacing: "-0.02em",
            cursor: "pointer",
          }}
          onClick={() => scrollTo("home")}
        >
          <span style={{ color: colors.accent }}>ABD</span>
          <span style={{ color: colors.text }}>.</span>
        </div>

        {/* Nav links */}
        <nav style={{ display: "flex", gap: 2 }}>
          {NAV_IDS.map((id) => {
            const isActive = activeId === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  background: isActive ? "#2563eb1a" : "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  fontWeight: isActive ? 600 : 500,
                  padding: "7px 15px",
                  borderRadius: 8,
                  color: isActive ? colors.accent : colors.muted,
                  textTransform: "capitalize",
                  transition: "background .15s, color .15s",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.background = dark ? "#ffffff10" : "#00000008";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.background = "none";
                }}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            );
          })}
        </nav>
          <button
            onClick={toggleTheme}
            title="Toggle light / dark mode"
            style={{
                background: dark ? "#1e293b" : "#f1f5f9",
                border: `1px solid ${colors.border}`,
                borderRadius: 8,
                padding: "7px 12px",
                cursor: "pointer",
                fontSize: 16,
                transition: "background 0.2s",
            }}
          >
            {dark ? "☀️" : "🌙"}
          </button>
      </div>
    </header>
  );
}


export default Navbar;