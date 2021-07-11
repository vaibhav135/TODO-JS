//singular task
import React from "react";
import "./task.css";
import { FaTrash } from "react-icons/fa";

const Task = ({
  data,
  ind,
  deleteTask,
}: {
  data: any;
  ind: number;
  deleteTask: Function;
}) => {
  //console.log("SingularData: " + data.id);
  return (
    <div className="SingularData">
      <h3>
        {" "}
        {data.taskTitle}
        <FaTrash id="del" onClick={() => deleteTask(data.id, ind)} />
      </h3>
      <p> {data.taskDesc} </p>

      <p> {data.taskRem} </p>
    </div>
  );
};

export default Task;
