import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ todos, onToggle, onDelete, onEdit }) => {
  return (
    <div className="divide-y divide-gray-200 px-4">
      {todos.map(todo => (
        <ToDo key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default ToDoList;
