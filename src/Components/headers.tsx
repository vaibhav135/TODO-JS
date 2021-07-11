import React, { useState, useEffect } from "react";
import Input from "./input";
import Task from "./task";
import "./headers.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const [taskData, setTaskData] = useState<any>([]);
  //const [obj, setObj] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setTaskData(data);
    };
    getData();
  }, [click, taskData]);

  const fetchData = async () => {
    const res = await fetch("http://127.0.0.6:5000/task");
    const data = await res.json();
    return data;
  };

  const gettingInputs = async (task: any) => {
    const res = await fetch(`http://127.0.0.6:5000/task`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    //console.log("getting tasks: " + task);
    //const id = Math.floor(Math.random() * 10000 + 1);
    //const newTask = { id, ...task };

    //console.log("new task: " + newTask);
    setTaskData([...taskData, data]);

    setClick(false);
  };
  //FaTrash
  //
  const deleteTask = async (e: any, ind: number) => {
    const res = await fetch(`http://127.0.0.6:5000/task/${ind}`, {
      method: "DELETE",
    });
    const data = await res.json();
    const index = taskData.indexOf(taskData[ind]);
    taskData.splice(index, 1);
    setTaskData([...taskData]);
    //console.log("deleteTask : " + e);
    //console.log("taskData: " + taskData[ind].id);
    //console.log("d: " + taskData.map((e) => e.id));
  };

  return (
    <div className="Main">
      <div className="Header">
        <h1> Todo in React </h1>
        <button className="AddTaskButton" onClick={() => setClick(!click)}>
          Create Task
        </button>
      </div>
      <div> {click === true ? <Input obj={gettingInputs} /> : <></>}</div>
      <div className="showData">
        {taskData.length > 1 ? (
          taskData.map((val: any, idx: number) =>
            //this is messy here
            //TODO: create another component for it
            val.id > 0 ? (
              <div key={idx} className="Task">
                <Task
                  key={val.id}
                  data={val}
                  ind={idx}
                  deleteTask={deleteTask}
                />
              </div>
            ) : (
              <> </>
            )
          )
        ) : (
          <h3> Add Some Task </h3>
        )}
      </div>
    </div>
  );
};

export default Header;
