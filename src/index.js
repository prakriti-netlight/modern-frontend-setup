import React from 'react';
import ReactDOM from 'react-dom';

import ReactListComponents from './App.jsx';

const root = document.getElementById('root');
const nextWord =  '<h1>Welcome to Codepub</h1>';

//Old way to write a function
function oldWay () {
    return '<h1>Hello Webpack</h1>' + nextWord;
}

//Arrow function
const newWay = () => `<h1>Hello Webpack</h1>${nextWord}`;

//DOM
//root.innerHTML = newWay();

//React with rendering components that return a list
ReactDOM.render(<ReactListComponents />, root);