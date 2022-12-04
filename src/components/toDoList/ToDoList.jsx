import React, { useState } from 'react';
import InputToDo from './InputToDo/InputToDo';
import ListItem from './ToDoListItem/ListItem';

export default function ToDoList({currentFilter}) {
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
    const handleUpdate = (updatedItem) => {
      setToDos(toDos.map(toDo => toDo.id === updatedItem.id ? updatedItem : toDo));
    }
    const handleDelete = (deletedItem) => {
      setToDos(toDos.filter(toDo => toDo !== deletedItem));
    }
    
    const filteredItem = getFilteredItem(currentFilter, toDos);
    return (
      <div>
        <section>
          <ul>   
            {
              filteredItem.map(toDo => { 
                return <ListItem key={toDo.id} toDo={toDo} onUpdate={handleUpdate} onDelete={handleDelete}/>
              })
            }
          </ul>
        </section>
        <InputToDo onAdd={handleAdd}/>
      </div>
    );
}

const getFilteredItem = (filterType, toDos) => {
  if (filterType === 'all') {
    return toDos;
  } 
  return toDos.filter(value => value.status === filterType);
}