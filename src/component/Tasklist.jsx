// TaskList.js
import React from 'react';
import Task from './Task';

function Tasklist({ tasks, onTaskToggle, onTaskEdit, onTaskDelete }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onToggle={() => onTaskToggle(index)}
          onEdit={(newTitle) => onTaskEdit(index, newTitle)}
          onDelete={() => onTaskDelete(index)}
        />
      ))}
    </ul>
  );
}

export default Tasklist;
