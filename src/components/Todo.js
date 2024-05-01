import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoArchive from "./TodoArchive";
import TodoInput from "./TodoInput";

function Todo() {
    const [tasks, setTasks] = useState([
        { id: 1, text: "Understand react infrastructure", completed: false },
        { id: 2, text: "Understand props", completed: false },
        { id: 3, text: "Understand state management", completed: false },
        { id: 4, text: "Understand component communications", completed: false }
    ]);
    const [newTaskText, setNewTaskText] = useState('');
    const [archiveList, setArchiveList] = useState([]);

    const toggleTask = (id) => {
        const newTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(newTasks);
    };

    const addTask = () => {
        if (newTaskText.trim() !== '') {
            const newTask = {
                id: tasks.length + 1, // Simple ID assignment, consider using a more robust method in production
                text: newTaskText,
                completed: false
            };
            setTasks([...tasks, newTask]);
            setNewTaskText(''); // Clear the input after adding
        }
    };

    const removeTask = (id) => {
        const archivedTask = tasks.find(task => task.id === id);
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
        addToArchive(archivedTask);
    }

    function addToArchive(archivedTask) {
        setArchiveList([...archiveList, archivedTask]);
    }

    return (
        <>
            <TodoInput
                addTask={addTask}
                newTaskText={newTaskText}
                setNewTaskText={setNewTaskText}
            />
            <TodoList
                tasks={tasks}
                toggleTask={toggleTask}
                removeTask={removeTask}
            />
            <TodoArchive
                archiveList={archiveList}
            />
        </>
    )
}

export default Todo;