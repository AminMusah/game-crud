import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo) return;
    if (editingIndex === null) {
      setTodos([...todos, newTodo]);
    } else {
      const newTodos = [...todos];
      newTodos[editingIndex] = newTodo;
      setTodos(newTodos);
    }
    setEditingIndex(null);
    setNewTodo('');
  }

  const handleEdit = (index) => {
    setEditingIndex(index);
    setNewTodo(todos[index]);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder={editingIndex === null ? "Add a new to-do" : "Edit to-do"}
        />
        <button type="submit">{editingIndex === null ? "Add" : "Save"}</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleEdit(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
