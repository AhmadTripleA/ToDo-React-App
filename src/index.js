import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

// Setting up the root element where the React app will be mounted
const rootElement = document.getElementById('root');

// Using the modern React 18+ syntax with createRoot
const root = ReactDOM.createRoot(rootElement);

// Rendering the App component using the root.render method
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
