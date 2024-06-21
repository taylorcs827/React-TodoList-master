import React from "react";
import List from './ToDoList';
import './App.css';

export default function App() {
    return (
        <div className="app">
            <h1 className="header">TO DO LIST</h1>
            <List />
        </div>
    );
}
