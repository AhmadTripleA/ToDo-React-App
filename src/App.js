import React from 'react';
import Todo from './components/Todo.js';

function App() {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Welcome to the React To-Do Manager</h1>
            <p className="text-center">A simple React application to manage your tasks, built to learn and understand basic react structure.</p>
            <Todo />
        </div>
    );
}

export default App;
