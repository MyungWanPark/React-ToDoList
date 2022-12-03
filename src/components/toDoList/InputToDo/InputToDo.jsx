import React, { useState } from 'react';

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
      id: 'unique',
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

