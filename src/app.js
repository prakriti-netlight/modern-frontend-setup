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

//Styling
const codePubStyle = {
    color: 'white',
    backgroundColor: 'black'
};

const fancyStyle = {
    padding: 10,
    margin: 'auto',
    backgroundColor: "#ffde00",
    color: "#333",
    fontFamily: "monospace",
    fontSize: 32,
    textAlign: "center"
}
//React Component
const reactComponent = (
   <h1 style={codePubStyle}>Welcome to Codepub</h1>
);

class ReactListComponents extends React.Component {
    render() {
        return [
            <h1 key="1" style={codePubStyle}>Hello Codepub</h1>,
            <h2 key="2" style={fancyStyle}>Hello React!</h2>
        ];
    }
}
//DOM
//root.innerHTML = newWay();

//React with rendering function
//ReactDOM.render(<ReactListComponents />, root);

//React with rendering components that return a list
ReactDOM.render(<ReactListComponents />, root);