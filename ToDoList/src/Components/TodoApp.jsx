import { useState } from "react";
import styles from "./TodoApp.module.css";
const TodoApp = () => {
  const [userInput, setUserInput] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() === "") return;
    setMainTask([...mainTask, { userInput }]);
    setUserInput("");
  };

  const handledelete = (i) => {
    const updatetask = mainTask.filter((_, index) => index !== i);
    setMainTask(updatetask);
  };
  const handleEdit = (i) => {
    const taskDescription = prompt(
      "Please add the Description:",
      mainTask[i].userInput
    );
    if (taskDescription !== null && taskDescription.trim() !== "") {
      const newTask = [...mainTask];
      newTask[i].userInput = taskDescription;
      setMainTask(newTask);
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>TODO LIST</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add items.."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <div className={styles.btndiv}>
          <button className={styles.addbtn}>ADD</button>
        </div>
      </form>
      <hr />
      {mainTask.length > 0 ? (
        mainTask.map((task, i) => (
          <div key={i} className={styles.divbox}>
            <h4>{task.userInput}</h4>
            <button
              className={styles.deletebtn}
              onClick={() => handledelete(i)}
            >
              Delete
            </button>
            <button className={styles.editbtn} onClick={() => handleEdit(i)}>
              Edit
            </button>
          </div>
        ))
      ) : (
        <h4>No Task Avaible</h4>
      )}
    </div>
  );
};

export default TodoApp;
