import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Hou comment: if you delete serviceWorker.js from your src folder, you'd have to remove the line below as well that's referencing the file. Otherwise, your app will not compile.
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// Hou comment: remove the code below after removing serviceWorker.js
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Hou comment: consider deleting setupTests.js because that file is not being used anyway
