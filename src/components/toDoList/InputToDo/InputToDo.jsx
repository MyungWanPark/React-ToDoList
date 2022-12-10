import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./InputToDo.module.css";

export default function InputToDo({ onAdd }) {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText((prev) => e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const input = text.trim();
        if (input.length === 0) {
            setText("");
            return;
        }
        onAdd({
            id: uuidv4(),
            text: input,
            status: "active",
        });
        setText("");
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type="text"
                placeholder="write todo"
                onChange={handleChange}
                value={text}
                className={styles.input}
            />
            <button className={styles.btn}>Add</button>
        </form>
    );
}
