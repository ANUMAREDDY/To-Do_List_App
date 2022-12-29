import React from "react";
import { useState } from "react";
import "./App.css";
function App() {
  const [task, newTask] = useState("");
  const [todolist, newToDoList] = useState([]);
  const handleChange = (e) => {
    newTask(e.target.value);
  };
  const addToList = () => {
    const tasks = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
      taskName: task,
    };
    newToDoList([...todolist, tasks]);
  };

  const deleteTask = (id) => {
    const tempToDoList = todolist.filter((tasks) => {
      if (tasks.id === id) {
        return false;
      } else {
        return true;
      }
    });
    newToDoList(tempToDoList);
  };

  return (
    <div className="App">
      <div className="addTask">
        <input type="text" onChange={handleChange}></input>
        <button onClick={addToList}>Add Task</button>
      </div>
      <div className="list">
      <div className="representation">
              <h1>To do list</h1>
            </div>
        {todolist.map((value) => (
          <div>
            
            <br></br>
            <div className="task">
              <h2 style={{ color: "white" }}>{value.taskName}</h2>
              <button onClick={() => deleteTask(value.id)}>X</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
