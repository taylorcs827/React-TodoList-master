import React from 'react';

export default function Items({ entries, deleteItem, completeItem }) {
  return (
    <ul>
      {entries.map((item, index) => (
        <li key={index} className="taskItem">
          <span
            onClick={() => completeItem(index)}
            style={{
              color: item.completed ? 'grey' : 'black',
              textDecoration: item.completed ? 'line-through' : 'none',
              cursor: 'pointer'
            }}
          >
            {item.text}
          </span>
          <button 
              className="deleteBtn" 
              onClick={() => deleteItem(index)}>
                Delete
            </button>
        </li>
      ))}
    </ul>
  );
}
