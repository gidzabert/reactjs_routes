import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Styles from "./css/index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
    const [showTaskAddForm, setShowTaskAddForm] = useState(false);
    const [tasks, setTask] = useState ([
        
    ]);

    useEffect (() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTask(tasksFromServer)
        }
        getTasks()
    }, [])

    const fetchTasks = async () => {
        const result = await fetch('http://localhost:3003/tasks')
        const data = await result.json();
        return data
    }

    const fetchTask = async (id) => {
        const result = await fetch(`http://localhost:3003/tasks/${id}`)
        const data = await result.json();
        return data
    }

    const addTask = async (task) => {
        const result = await fetch('http://localhost:3003/tasks', {
            method: 'POST',
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify(task),
        });

        const data = await result.json()
        setTask([...tasks, data])
        /* const id = Math.floor(Math.random() * 10000) + 1;
        const newTask = { id, ...task }
        setTask([...tasks, newTask]) */
    }

    const deleteTask = async (id) => {
        await fetch(`http://localhost:3003/tasks/${id}`, {
            method: 'DELETE',
        })
        setTask(tasks.filter((task) => task.id !== id));
    }

    const toggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id)
        const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
        const result = await fetch(`http://localhost:3003/tasks/${id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
        const data = await result.json()

        setTask(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task))
    }

    return (
        <div className="container">
            <Router>
                <Header onShowTaskAddForm={() => setShowTaskAddForm(!showTaskAddForm)} btnTitle={showTaskAddForm} />
                {showTaskAddForm && <AddTask submitTask={addTask} />}
                {
                    tasks.length > 0 ? 
                    <Tasks tasks={tasks} onDelete={deleteTask} onToggleReminder={toggleReminder} /> : 
                    <div className="task-empty">
                        No Tasks Created.
                    </div> 
                }
            </Router>
        </div>
    )
}

export default App