import { useState } from "react";
import "./Todo.css"

export default function Todo() {
  const [task, setTask] = useState([]);
  const [inputTask, setInputTask] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  function AddTask() {
    if (inputTask.trim() !== "") {
      //check the input filed if any value is in input filed
      setTask([...task, inputTask]);
      setInputTask(""); // clear input after adding task
    }
  }




  function DeleteTask(index) {
    const updatedTaskList = [...task];
    updatedTaskList.splice(index, 1); // delete the specific task
    setTask(updatedTaskList);
  }



  return (
    <div className="main-container">
      <h1 className="heading">React To-Do-app</h1>
      <div className="input-div">
        <input
          className="main-input"
          type="text"
          placeholder="add task"
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
        ></input>
        <button className="add-button" onClick={AddTask}>
          Add Task
        </button>
      </div>

      <div className="ul-div">
        <ul className="ul-tag">
          {task.map((data, index) => (
            <li className="li-tag" key={index}>
              {editIndex === index ? (
                <div className="li-div">
                  <input
                    className="editInput"
                    type="text"
                    value={data}
                    onChange={(e) => {
                      const updatedTaskList = [...task];
                      updatedTaskList[index] = e.target.value;
                      setTask(updatedTaskList);
                    }}
                  />
                  <button
                    className="saveBtn"
                    onClick={() => {
                      setEditIndex(-1); // Exit edit mode
                    }}
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div className="edit-div">
                  {data}
                  <button
                    className="editBtn"
                    onClick={() => {
                      setEditIndex(index); // Enter edit mode
                    }}>
                    Edit
                  </button>

                  <button
                    className="DeleteBtn"
                    onClick={() => DeleteTask(index)}>
                    Delete
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
