'use client'
import React, { useState } from 'react';

const ToDo = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(todo.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex items-center justify-between py-2">
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
      />
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="ml-3 block w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
        />
      ) : (
        <label className="ml-3 block text-gray-900">
          <span className={`text-lg ${todo.completed ? 'line-through' : ''}`}>
            {todo.text}
          </span>
        </label>
      )}
    </div>
    <div className="flex items-center space-x-2">
      <button
        onClick={handleEdit}
        className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 text-white py-1 px-2 rounded"
      >
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button
        onClick={() => onDelete(todo.id)}
        className="flex-shrink-0 bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
      >
        Delete
      </button>
    </div>
  </div>
  );
};

export default ToDo;
