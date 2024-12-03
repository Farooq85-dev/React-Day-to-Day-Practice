import { useState } from "react";

function Todo() {
  // State to hold the list of to-dos
  const [todos, setTodos] = useState([]);

  // State for input field and tracking editing
  const [input, setInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  // Handle the form submit to add or edit a todo
  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim()) {
      if (editingIndex !== null) {
        // Update the existing todo
        const updatedTodos = todos.map((todo, index) =>
          index === editingIndex ? input : todo
        );
        setTodos(updatedTodos);
        setEditingIndex(null); // Reset editing mode
      } else {
        // Add a new todo
        setTodos([...todos, input]);
      }
      setInput(""); // Clear input field
    }
  };

  // Handle the change in the input field
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Handle removing a to-do
  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  // Handle editing a to-do
  const handleEditTodo = (index) => {
    setInput(todos[index]); // Set the input field to the todo text
    setEditingIndex(index); // Mark that we're editing this todo
  };

  return (
    <div className="App">
      <h1>Simple Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter a new todo"
        />
        <button type="submit">
          {editingIndex !== null ? "Update Todo" : "Add Todo"}
        </button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleEditTodo(index)}>Edit</button>
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
