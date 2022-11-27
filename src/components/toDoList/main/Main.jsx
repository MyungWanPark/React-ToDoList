import React, { useState } from 'react';
import List from './List';
import styles from './Main.module.css'

export default function Main() {
    const [ text, setText ] = useState('');
    const [ list , setList ] = useState([]);
    
    const handleInput = (e) => {
        setText(prev => e.target.value);
    }

    const handleClick = (e) => {
        setList(prev => [...prev, text]);
        setText(prev => '');
    }
    
    return (
        <div className={styles.inputTag}>
            {list.map((item, id) => <List key={id} value={item}/>)}
            <input type="text" onInput={handleInput} value={text} />
            <button onClick={handleClick}>Add</button>
        </div>
    );
}

