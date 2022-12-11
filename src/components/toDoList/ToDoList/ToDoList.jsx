import React, { useState } from "react";
import { useEffect } from "react";
import InputToDo from "../InputToDo/InputToDo";
import ListItem from "../ToDoListItem/ListItem";
import styles from "./ToDoList.module.css";

export default function ToDoList({ currentFilter }) {
    const [toDos, setToDos] = useState(() =>
        readToDosFromLocalStorage(),
    );

    const handleAdd = (text) => {
        setToDos([...toDos, text]);
    };
    const handleUpdate = (updatedItem) => {
        setToDos(
            toDos.map((toDo) =>
                toDo.id === updatedItem.id ? updatedItem : toDo,
            ),
        );
    };
    const handleDelete = (deletedItem) => {
        setToDos(toDos.filter((toDo) => toDo !== deletedItem));
    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(toDos));
    }, [toDos]);

    const filteredItem = getFilteredItem(currentFilter, toDos);
    return (
        <section className={styles.container}>
            <ul className={styles.unorderList}>
                {filteredItem.map((toDo) => {
                    return (
                        <ListItem
                            key={toDo.id}
                            toDo={toDo}
                            onUpdate={handleUpdate}
                            onDelete={handleDelete}
                        />
                    );
                })}
            </ul>
            <InputToDo onAdd={handleAdd} />
        </section>
    );
}

const getFilteredItem = (filterType, toDos) => {
    if (filterType === "all") {
        return toDos;
    }
    return toDos.filter((value) => value.status === filterType);
};

function readToDosFromLocalStorage() {
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
}
