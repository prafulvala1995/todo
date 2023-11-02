
import React, { useState, useEffect } from 'react';
// import TaskList from './askList';
import Tasklist from './component/Tasklist';


function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      const updatedTasks = [
        ...tasks,
        {
          title: newTask,
          completed: false,
        },
      ];
      setTasks(updatedTasks);
      saveTasksToLocalStorage(updatedTasks);
      setNewTask('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const editTask = (index, newTitle) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].title = newTitle;
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'uncompleted') return !task.completed;
    return false;
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
      <Tasklist
        tasks={filteredTasks}
        onTaskToggle={toggleTask}
        onTaskEdit={editTask}
        onTaskDelete={deleteTask}
      />
    </div>
  );
}

export default App;
