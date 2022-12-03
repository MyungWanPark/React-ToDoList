import React, { useState } from 'react';
import InputToDo from './InputToDo/InputToDo';

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
    ]);
    
    const handleAdd = (text) => {
      setToDos([...toDos, text])
    }
    return (
      <div>
        <section>
          <ul>   
            {
              toDos.map(toDo => { 
                return (<li key={toDo.id}>{toDo.text}</li>);
              })
            }
          </ul>
        </section>
        <InputToDo onAdd={handleAdd}/>
      </div>
    );
}

