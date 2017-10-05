import React from 'react';
import styles from './App.css';

//Styling
const codePubStyle = {
    color: 'white',
    backgroundColor: 'black'
};

const fancyStyle = {
    padding: 10,
    margin: 'auto',
    backgroundColor: '#ffde00',
    color: '#333',
    fontFamily: 'monospace',
    fontSize: 32,
    textAlign: 'center'
};


//React Functional Component
const reactComponent = (<h1 style={codePubStyle}>Welcome to Codepub!</h1>);

//React Class component
export default class ReactListComponents extends React.Component {
    render() {
        return [
            <h1 key="1" style={fancyStyle}>Hello Codepub!</h1>,
            <h2 key="2" className={styles.header}>Hello React with CSS modules!</h2>
        ];
    }
}