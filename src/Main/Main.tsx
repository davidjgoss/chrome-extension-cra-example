import React, {useEffect, useState, VoidFunctionComponent} from 'react';
import {Link} from 'react-router-dom';
import wordCount from 'word-count';
import logo from '../logo.svg';
import {resolveContent} from '../helpers/chrome';

export const Main: VoidFunctionComponent = () => {
    const [count, setCount] = useState<number>(0)
    useEffect(() => {
        resolveContent().then(content => setCount(wordCount(content)))
    }, [])
    return <>
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
            There are <code>{count}</code> words on this page.
        </p>
        <Link
            className="App-link"
            to="/about"
        >
            About this Extension
        </Link>
    </>
}
