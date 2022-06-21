import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import * as style from "./Task.styled";

export default function Task({task, tasks, setTasks}) {

  const handleDelete = (e) => {
    // filter & set the task list to all tasks that WEREN'T clicked on
    setTasks(tasks.filter(item => item.id !== task.id));
  }

  const handleComplete = (e) => {
    // map over the tasks: if the id of the item and clicked task match, then flip the complete boolean value. otherwise, leave as is.
    setTasks(tasks.map(item => (item.id === task.id) ? {...item, isComplete: !item.isComplete} : item));
  }

  const handleEdit = (e) => {
    setTasks(tasks.map(item => (item.id === task.id) ? {...item, text: e.target.value} : item));
  }

  return (
      <style.Task taskStatus={`${task.isComplete}`}>
        <button className="complete-btn" onClick={handleComplete}>
          <FontAwesomeIcon icon={faCheck} className="icon"/>
        </button>
        <input type="text" onChange={handleEdit} value={task.text}/>
        <button className="delete-btn" onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} className="icon"/>
        </button>
      </style.Task>
  );
}
