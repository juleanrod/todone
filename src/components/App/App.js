import React, { useState, useEffect } from "react";

// components
import Header from "../Header/Header";
import Input from "../Input/Input";
import Filter from "../Filter/Filter";
import TaskList from "../TaskList/TaskList";

// import component styles
import { ThemeProvider } from "styled-components";
import * as theme from "../../config/theme";
import * as style from "./App.styled"

export default function App() {
    const [userInput, setUserInput] = useState("");
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("tasks");
        return JSON.parse(saved) || []; 
    });
    const [status, setStatus] = useState("All");
    const [filteredTasks, setFilteredTasks] = useState([]);

    // save tasks in local storage every time it updates
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    // filter the tasks every time the tasks or status updates
    useEffect(() => {
        // filter tasks by completion status
        let filtered;
        switch(status) {
            case 'Complete':
                filtered = tasks.filter(item => item.isComplete === true);
                break;
            case 'Incomplete':
                filtered = tasks.filter(item => item.isComplete === false);
                break;
            default:
                filtered = tasks;
                break;
        }
        // sort tasks by completion status
        // task list is rendered in reverse, so completed tasks come after incomplete tasks
        let sorted = filtered.sort((a, b) => {return b.isComplete - a.isComplete});
        setFilteredTasks(sorted);
    }, [tasks, status])

    return (
        <ThemeProvider theme={theme}>
        <style.App>
            <Header />
            <Input
                userInput={userInput}
                setUserInput={setUserInput}
                tasks={tasks}
                setTasks={setTasks}
            />
            <Filter
                status={status}
                setStatus={setStatus}
            />
            <TaskList 
                tasks={tasks}
                setTasks={setTasks}
                filteredTasks={filteredTasks}
                status={status}
            />
        </style.App>
        </ThemeProvider>
    )
}
