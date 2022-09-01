import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({task}) {
  const {deleteTask} = useContext(TaskContext);
  
  return (
    <div className="bg-gray-600 text-white p-4 rounded-md" key={task.id}>
      <h1 className="text-xl font-bold capitalize"> {task.title} </h1>
      <p className="text-sm text-gray-300">{task.description}</p>
      <button className="bg-red-500 px-2 py-1 mt4 rounded-md hover:bg-red-400 " onClick={() => deleteTask(task.id)}>Eliminar</button>
    </div>
  );
}

export default TaskCard;
