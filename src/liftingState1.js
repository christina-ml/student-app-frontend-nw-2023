// https://beta.reactjs.org/learn/sharing-state-between-components
import { useState } from 'react';

export default function SyncedInputs() {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }
  
  return (
    <>
      <Input label="First input" text={text} 
        setText={setText}
        handleChange={handleChange}/>
      <Input label="Second input" text={text}
        handleChange={handleChange}
        setText={setText}
        />
    </>
  );
}

function Input({ label, text, handleChange, setText }) {

  return (
    <label>
      {label}
      {' '}
      <input
        value={text}
        onChange={handleChange}
      />
    </label>
  );
}
