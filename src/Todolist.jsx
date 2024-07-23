import React, { useState } from "react";
import "./App.css";

const Todolist = () => {
  const [tasks, setTasks] = useState([
    "Chest workout",
    "Back workout",
    "Shoulder workout",
  ]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() === "") return; // Prevent adding empty tasks
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTask("");
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function editTask(index) {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? editText : task
    );
    setTasks(updatedTasks);
    setEditIndex(null);
    setEditText("");
  }

  return (
    <>
      <div className="todolist">
        <h1>To Do List App</h1>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="addtask" type="submit" onClick={addTask}>
          Enter
        </button>

        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <button className="btn" onClick={() => editTask(index)}>
                    Save
                  </button>
                  <button className="btn" onClick={() => setEditIndex(null)}>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <span>{task}</span>
                  <button
                    className="btn editbtn"
                    onClick={() => {
                      setEditIndex(index);
                      setEditText(task);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn deletebtn"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todolist;
