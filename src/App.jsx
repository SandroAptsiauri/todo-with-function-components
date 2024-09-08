import React, { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const completeTask = (index) => {
    const taskToComplete = tasks[index];
    setTasks(tasks.filter((_, i) => i !== index));
    setCompletedTasks([...completedTasks, taskToComplete]);
  };

  const deleteTask = (index) => {
    setCompletedTasks(completedTasks.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          ref={inputRef}
          onChange={handleInputChange}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="task-lists">
        <div className="tasks">
          <h2>To do</h2>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => completeTask(index)}>Done</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="completed-tasks">
          <h2>Done</h2>
          <ul>
            {completedTasks.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => deleteTask(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
