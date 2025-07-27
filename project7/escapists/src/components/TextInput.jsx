import React, { useState } from 'react';

export default function TextInput({ title = "Enter text:", onChange }) {
  const [text, setText] = useState('');
  const id = crypto.randomUUID(); 

  const handleChange = (e) => {
    setText(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 300, fontSize: 24}}>
      <label style={{ marginBottom: 6, fontWeight: 'bold' }} htmlFor={id}>{title}</label>
      <input
        id={id}
        type="text"
        value={text}
        onChange={handleChange}
        style={{
          padding: '8px',
          fontSize: '16px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />
    </div>
  );
}