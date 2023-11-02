// Task.js
import React, { useState } from 'react';

function Task({ task, onToggle, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(editedTitle);
    setIsEditing(false);
  };

  return (

    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={onToggle}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <>
          <span>{task.title}</span>
          <button onClick={handleEditClick}>Edit</button>
        </>
      )}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default Task;
