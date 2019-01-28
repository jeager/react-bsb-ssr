import React from 'react';
import ReactDOM, { hydrate } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const state = window.__STATE__;
delete window.__STATE__;

hydrate(<App initialProps={state}/>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
