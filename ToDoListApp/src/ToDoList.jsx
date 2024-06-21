import React, { useState } from 'react';
import Items from './ToDoItems'; // Ensure you have this component

export default function List() {
  // State for the list of to-do items
  const [toDoList, setToDoList] = useState([]);
  
  // State for the current value of the input field
  const [input, setInput] = useState('');

  // Handler for input change event
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (input.trim()) { // Check if input is not empty or whitespace
      setToDoList([...toDoList, { text: input, completed: false }]); // Add the new item to the list
      setInput(''); // Clear the input field
    }
  };

  // Handler for completing an item
  const completeItem = (index) => {
    const newList = toDoList.map((item, i) => (
      i === index ? { ...item, completed: !item.completed } : item
    ));
    setToDoList(newList); // Update the state with the new list
  };

  // Handler for deleting an item from the to-do list
  const deleteItem = (index) => {
    const newList = toDoList.filter((_, i) => i !== index); // Create a new list without the deleted item
    setToDoList(newList); // Update the state with the new list
  };

  return (
    <div className="todoListMain">
      <div className="header">
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            name="todo"
            placeholder="enter task"
            value={input} // Bind the input value to the state
            onChange={handleInputChange} // Handle input changes
          />
          <button className="addBtn" type="submit">add</button>
        </form>
        <Items entries={toDoList} deleteItem={deleteItem} completeItem={completeItem} /> {/* Pass the to-do list and handlers as props */}
      </div>
    </div>
  );
}
