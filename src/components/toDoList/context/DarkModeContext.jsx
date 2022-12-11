import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setIsDarkMode((prev) => !prev);
        updateDarkMode(!isDarkMode);
    };
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
    } else {
        document.documentElement.classList.remove("darkmode");
    }
}
export const useDarkMode = () => useContext(DarkModeContext);
