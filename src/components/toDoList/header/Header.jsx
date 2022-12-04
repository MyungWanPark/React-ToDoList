import React from 'react';

export default function Header({filterType, onFilterChange, currentFilter}) {
  return (
    <header>
      <ul>
        {
          filterType.map((value, id) => <li key={id}><button onClick={() => onFilterChange(value)}>{value}</button></li>)
        }
      </ul>
    </header>
  );
}

