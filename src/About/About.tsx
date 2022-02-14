import React, {VoidFunctionComponent} from 'react';
import {Link} from 'react-router-dom';

export const About: VoidFunctionComponent = () => {
    return <>
        <p>This app exists to demonstrate the techniques from <a href="https://davidgoss.co/blog/react-apps-as-chrome-extensions/" target="_blank" className="App-link" rel="noreferrer">this article</a> about building Chrome extensions.</p>
        <Link
            className="App-link"
            to="/"
        >
            Okay then!
        </Link>
    </>
}
