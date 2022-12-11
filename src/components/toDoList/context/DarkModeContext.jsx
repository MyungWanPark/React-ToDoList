import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setIsDarkMode((prev) => !prev);
        updateDarkMode(!isDarkMode);
    };
    useEffect(() => {
        const isDark =
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)")
                    .matches);
        setIsDarkMode(isDark);
        updateDarkMode(isDark);
    }, []);
    return (
        <DarkModeContext.Provider
            value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}
function updateDarkMode(isDarkMode) {
    if (isDarkMode) {
        document.documentElement.classList.add("darkmode");
        localStorage.theme = "dark";
    } else {
        document.documentElement.classList.remove("darkmode");
        localStorage.theme = "light";
    }
}
export const useDarkMode = () => useContext(DarkModeContext);
