import React, { useState } from 'react';

function Todo() {
    const [tasks, setTasks] = useState([
        { id: 1, text: "Understand react infrastructure", completed: false },
        { id: 2, text: "Understand props", completed: false },
        { id: 3, text: "Understand state management", completed: false },
        { id: 4, text: "Understand component communications", completed: false }
    ]);
    const [newTaskText, setNewTaskText] = useState('');

    const toggleTask = (id) => {
        const newTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(newTasks);
    };

    const handleNewTaskChange = (event) => {
        setNewTaskText(event.target.value);
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
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
    }

    return (
        <div className="container mt-3">
            <h2 className="mb-3">Todo List</h2>
            <ul className="list-group mb-3">
                {tasks.map(task => (
                    <li key={task.id} className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'list-group-item-secondary' : ''}`}>
                        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                            {task.text}
                        </span>
                        <div className="button-group">
                            <button className={`btn ${task.completed ? 'btn-success' : 'btn-outline-success'} mr-1`} onClick={() => toggleTask(task.id)}>
                                {task.completed ? 'Undo' : 'Complete'}
                            </button>
                            <button className="btn btn-danger" onClick={() => removeTask(task.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Add new task" value={newTaskText} onChange={handleNewTaskChange} />
                <div className="input-group-append">
                    <button className="btn btn-primary" onClick={addTask}>Add Task</button>
                </div>
            </div>
        </div>
    );
}

export default Todo;
