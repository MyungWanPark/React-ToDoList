import React from "react";
import { useDarkMode } from "../context/DarkModeContext";
import styles from "./Header.module.css";
import { HiSun, HiMoon } from "react-icons/hi";
export default function Header({
    filterType,
    onFilterChange,
    currentFilter,
}) {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    return (
        <header className={styles.header}>
            <button onClick={toggleDarkMode}>
                {isDarkMode && <HiSun />}
                {!isDarkMode && <HiMoon />}
            </button>
            <ul className={styles.filters}>
                {filterType.map((value, id) => {
                    return (
                        <li key={id}>
                            <button
                                onClick={() =>
                                    onFilterChange(value)
                                }
                                className={`${styles.filter} ${
                                    currentFilter === value &&
                                    styles.selected
                                }`}>
                                {value}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </header>
    );
}
