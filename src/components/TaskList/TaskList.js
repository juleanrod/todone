import React from "react";
import Task from "../Task/Task";
import * as style from "./TaskList.styled";

export default function TaskList({tasks, setTasks, filteredTasks, status}) {
  return (
      <style.TaskList>
        {tasks.length !== 0 && <p>Showing ({filteredTasks.length}/{tasks.length}) tasks.</p>}
        {tasks.length === 0 && <p>You have no tasks. Add a task above!</p>}
        {filteredTasks.map(task => (
          <Task
            key={task.id} // unique id of the current task
            task={task} // the current task
            tasks={tasks} // task list
            setTasks={setTasks} // function to set task list
          />
        )).reverse()}
      </style.TaskList>
  )
}
