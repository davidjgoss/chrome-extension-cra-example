import React, {useEffect, useState} from 'react';
import wordCount from 'word-count';
import {resolveContent} from './helpers/chrome';
import logo from './logo.svg';
import './App.css';

function App() {
    const [count, setCount] = useState<number>(0)
    useEffect(() => {
        resolveContent().then(content => setCount(wordCount(content)))
    }, [])
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    There are <code>{count}</code> words on this page.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
