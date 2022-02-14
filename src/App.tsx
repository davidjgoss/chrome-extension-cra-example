import React from 'react';
import {
    HashRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import './App.css';
import { About } from './About';
import { Main } from './Main';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
