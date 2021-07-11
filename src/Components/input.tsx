import React, { useState, useEffect } from "react";
import "./input.css";

const Input = ({ obj }: { obj: any }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [taskRem, setTaskRem] = useState("");

  function settingInputs(e: any) {
    e.preventDefault();
    obj({ taskTitle, taskDesc, taskRem });
    setTaskTitle("");
    setTaskDesc("");
    setTaskRem("");
  }

  return (
    <div className="InputDiv">
      {" "}
      <form className="InputForm" onSubmit={settingInputs}>
        <div id="clone1">
          <label> Task Title </label>
          <input
            type="text"
            className="taskTitle"
            onChange={(e) => setTaskTitle(e.target.value)}
          />
        </div>
        <br />
        <div id="clone1">
          <label> Task Description </label>
          <textarea
            className="taskDesc"
            onChange={(e) => setTaskDesc(e.target.value)}
          />
        </div>
        <br />
        <div id="clone1">
          <label> Completion Date </label>
          <input
            type="date"
            onChange={(e) => setTaskRem(e.currentTarget.value)}
          />
        </div>
        <input type="submit" value="Add Task" />
      </form>{" "}
    </div>
  );
};

export default Input;
