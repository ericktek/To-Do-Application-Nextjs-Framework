'use client'
import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

const Home = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => (
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => (
      todo.id === id ? { ...todo, text: newText } : todo
    )));
  };

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between justify-center items-center max-w-6xl mx-auto px-4 h-screen">
    <div className="flex flex-col text-center lg:text-left">
      <h1 className="font-extrabold text-7xl lg:text-8xl">To Do List</h1>
      <p className="font-light text-xl lg:text-2xl mt-4 lg:mt-6 lg:ml-6">Simple To Do Application</p>
    </div>

    <div className="w-full max-w-xl bg-white shadow-lg rounded-lg overflow-hidden mt-8 lg:mt-0">
      <div className="px-6 py-4">
        <h1 className="text-gray-800 font-bold text-2xl mt-3">ToDo App</h1>
      </div>
      <ToDoForm onAdd={addTodo} />
      <ToDoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} onEdit={editTodo} />
    </div>
  </div>

  );
};

export default Home;