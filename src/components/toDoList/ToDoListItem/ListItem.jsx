import React from "react";
import { BsTrash } from "react-icons/bs";
import styles from "./ListItem.module.css";

export default function ListItem({ toDo, onUpdate, onDelete }) {
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
                id={`${toDo.id}`}
                checked={toDo.status === "completed"}
                onChange={handleChange}
                className={styles.input}
            />
            <label
                htmlFor={`${toDo.id}`}
                className={styles.text}>
                {toDo.text}
            </label>
            <button
                className={styles.button}
                onClick={handleDelete}>
                <BsTrash />
            </button>
        </li>
    );
}
