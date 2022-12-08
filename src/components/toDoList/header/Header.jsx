import React from 'react';
import styles from './Header.module.css'

export default function Header({filterType, onFilterChange, currentFilter}) {
  return (
    <header className={styles.header}>
      <ul className={styles.filters}>
        {
          filterType.map((value, id) => {
            return (
              <li key={id}>
                <button onClick={() => onFilterChange(value)} className={`${styles.filter} ${currentFilter === value && styles.selected}`}>{value}</button>
              </li>
            )
        })
        }
      </ul>
    </header>
  );
}

