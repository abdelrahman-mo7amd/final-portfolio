import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
    const [dark, setDark] = useState(false);
    const toggleTheme = () => setDark((prev) => !prev);

    const colors = {
        bg:       dark ? "#0f172a" : "#ffffff",
        surface:  dark ? "#1e293b" : "#f8fafc",
        card:     dark ? "#1e293b" : "#ffffff",
        border:   dark ? "#334155" : "#e2e8f0",
        text:     dark ? "#f1f5f9" : "#0f172a",
        muted:    dark ? "#94a3b8" : "#64748b",
        accent:   "#2563eb",
        purple:   "#7c3aed",
        teal:     "#0891b2",
    };

    return (
    <ThemeContext.Provider value={{ dark, toggleTheme, colors }}>
        {children}
    </ThemeContext.Provider>
    );
}


export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
    return ctx;
}