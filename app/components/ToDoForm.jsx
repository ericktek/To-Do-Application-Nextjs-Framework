'use client'

import React, { useState } from 'react';

const ToDoForm = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto px-4 py-2">
      <div className="flex items-center border-b-2 border-teal-500 py-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a task"
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        />
        <button
          type="submit"
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default ToDoForm;
