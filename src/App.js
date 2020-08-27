import React from 'react';
import './App.css';
import UrlTester from "./UrlTester";

function App() {
    return (
        <div className="app-container">
            <header className="app-header">
                UI Deployment Debugger
            </header>
            <main className="content-container">
                <UrlTester />
            </main>
        </div>
    );
}

export default App;
