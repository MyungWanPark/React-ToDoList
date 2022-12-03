import React, { useState } from 'react';

export default function ToDoList() {
    const [ toDos, setToDos ] = useState([
        {
            id: 123,
            text: '장보기',
            status: 'active',
        },
        {
            id: 124,
            text: '주차하기',
            status: 'active',
        },
    ])

    return (
        <section>
            <ul>
                {
                    toDos.map(toDo => { 
                        return (<li key={toDo.id}>{toDo.text}</li>);
                    })
                }
            </ul>
        </section>
    );
}

