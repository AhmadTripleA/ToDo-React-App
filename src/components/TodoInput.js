import React from "react";

export default function TodoInput({ addTask, newTaskText, setNewTaskText }) {

    const handleNewTaskChange = (event) => {
        setNewTaskText(event.target.value);
    };

    return (
        <div className="container mt-3">
            <h2 className="mb-3">Add a New Task</h2>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Add new task" value={newTaskText} onChange={handleNewTaskChange} />
                <div className="input-group-append">
                    <button className="btn btn-primary" onClick={addTask}>Add Task</button>
                </div>
            </div>
        </div>
    );
}