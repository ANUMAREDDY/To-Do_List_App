import React from "react";
import { useState } from "react";
import "./App.css";
function App() {
  const [task, newTask] = useState("");
  const [todolist, newToDoList] = useState([]);
  const [complete, newComplete] = useState(false);
  const handleChange = (e) => {
    newTask(e.target.value);
  };
  const addToList = () => {
    const tasks = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
      taskName: task,
      complete: false,
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
  const changeColor =()=>{

    newComplete(true);
  }

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
            <div style={{backgroundColor: complete?"green":"#FF2400"}}className="task">
              <h2 style={{ color: "white" }}>{value.taskName}</h2>
              <div> </div>
              <button className=".button" style={{backgroundColor:"white"}}onClick={changeColor}>Done</button>
              <button className=".button" onClick={() => deleteTask(value.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
