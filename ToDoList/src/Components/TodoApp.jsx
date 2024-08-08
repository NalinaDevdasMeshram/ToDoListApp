import { useState } from "react";
import styles from "./TodoApp.module.css";
const TodoApp = () => {
  const [userInput, setUserInput] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const handleSubmit = (e) => {
    setMainTask([...mainTask, { userInput }]);
    e.preventDefault();
    setUserInput("");
    // console.log(setMainTask);
  };
  let rendertask = <h4>No task Available</h4>;
  if (mainTask.length > 0) {
    mainTask.map((t, i) => {
      console.log(i);
      return (
        <div key={i}>
          <h4>{t.userInput}</h4>
        </div>
      );
    });
  }
  // mainTask.map((t, i) => {
  //   console.log(i);
  //   return (
  //     <div key={i}>
  //       <h4>{t.userInput}</h4>
  //     </div>
  //   );
  // });
  const handledelete = (i) => {
    const task = [...mainTask];
    task.splice(i, 1);
    setMainTask(task);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>TODO LIST</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add items.."
          value={userInput}
          onChange={(e) => setUserInput(e.target.userInput)}
        />
        <div className={styles.btndiv}>
          <button className={styles.addbtn}>ADD</button>
        </div>
      </form>
      <hr />
      <div className={styles.divbox}>
        <div>{rendertask}</div>
        <button
          className={styles.deletebtn}
          onClick={() => {
            handledelete(i);
          }}
        >
          Delete
        </button>
        <button className={styles.editbtn}>Edit</button>
      </div>
    </div>
  );
};

export default TodoApp;
