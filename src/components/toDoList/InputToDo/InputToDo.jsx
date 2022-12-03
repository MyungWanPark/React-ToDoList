import React, { useState } from 'react';
import { v4 as uuidv4} from 'uuid';

export default function InputToDo({onAdd}) {

  const [ text, setText ] = useState('')

  const handleChange = (e) => {
    setText(prev => e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = text.trim();
    if (input.length === 0) {
      setText('');
      return;
    }
    onAdd({
      id: uuidv4(),
      text: input,
      status: 'active'
    })
    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='write todo' onChange={handleChange} value={text} />
      <button>Add</button>
    </form>
  );
}

