import React from 'react';
import { BsTrash } from 'react-icons/bs';

export default function ListItem({toDo, onUpdate, onDelete}) {
  
  const handleChange = (e) => {
    const status = e.target.checked? 'completed' : 'active';
    onUpdate({
      ...toDo,
      status,
    })
  }

  const handleDelete = () => {
    onDelete(toDo);
  } 
  
  return (
    <li>
      <input type="checkbox" id={`${toDo.id}`} checked={toDo.status === 'completed'} onChange={handleChange}/>
      <label htmlFor={`${toDo.id}`}>{toDo.text}</label>
      <button onClick={handleDelete}><BsTrash /></button>
    </li>
  );
}

