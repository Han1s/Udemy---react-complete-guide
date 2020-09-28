import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'random 1', age: '10' },
      { name: 'random 2', age: '20' },
      { name: 'random 3', age: '30' }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 },
      ]
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Maximilan!!')}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}></Person>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Max!')}></Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}></Person>
      </div>
    );
  }
}

export default App;
