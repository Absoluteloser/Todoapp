

import { useState, useEffect } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleAddClick = () => {
    setTodos([...todos, input]);
    setInput('');
  };

  const deleteInput = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  useEffect(() => {
    // You can add some effect here if needed
    return () => {
      // You can add some cleanup here if needed
    };
  }, []); // Add an empty dependency array to prevent infinite re-renders

  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          {todo}
          <button onClick={() => deleteInput(index)}>Delete todo item</button>
        </div>
      ))}
      <input type="text" value={input} onChange={handleInput} />
      <button onClick={handleAddClick}>Add to do</button>
    </div>
  );
};

export default Todo;