import React from 'react';

function TodoList({ tasks, toggleTask, removeTask }) {

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
        </div>
    );
}

export default TodoList;
