/**
 * Interactive E-Learning Platform
 * @author Gabriel Demetrios Lafis
 */

import React from 'react';

function App() {
    return (
        <div style={{padding: '20px', fontFamily: 'Arial, sans-serif'}}>
            <h1>Interactive E-Learning Platform</h1>
            <p>Created by Gabriel Demetrios Lafis</p>
            <button onClick={() => alert('Hello from Gabriel!')}>
                Click me!
            </button>
        </div>
    );
}

export default App;
