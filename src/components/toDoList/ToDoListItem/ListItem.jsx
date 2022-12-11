import React from "react";
import { BsTrash } from "react-icons/bs";
import styles from "./ListItem.module.css";

export default function ListItem({ toDo, onUpdate, onDelete }) {
    const { id, status, text } = toDo;
    const handleChange = (e) => {
        const status = e.target.checked ? "completed" : "active";
        onUpdate({
            ...toDo,
            status,
        });
    };

    const handleDelete = () => {
        onDelete(toDo);
    };

    return (
        <li className={styles.listItem}>
            <input
                type="checkbox"
                id={id}
                checked={status === "completed"}
                onChange={handleChange}
                className={styles.input}
            />
            <label htmlFor={id} className={styles.text}>
                {text}
            </label>
            <button
                className={styles.button}
                onClick={handleDelete}>
                <BsTrash />
            </button>
        </li>
    );
}
