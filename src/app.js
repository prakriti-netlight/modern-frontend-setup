import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

const nextWord =  '<h1>Welcome to Codepub</h1>';

//Old way to write a function
function oldWay () {
    return '<h1>Hello Webpack</h1>' + nextWord
}

//Arrow function
const newWay = () => `<h1>Hello Webpack</h1>${nextWord}`;

//React Component
const reactComponent = (
   <h1>Hello Codepub</h1>
);

class ReactListComponents extends React.Component {
    render() {
        return [
            <h1 key="1">Hello Codepub</h1>,
            <h2 key="2">Hello React!</h2>
        ];
    }
}
//DOM
//root.innerHTML = newWay();

//React with rendering function
//ReactDOM.render(<ReactListComponents />, root);

//React with rendering components that return a list
ReactDOM.render(<ReactListComponents />, root);