import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    userName: 'Eric',
  }

  handleNameChange = (event) => {
    this.setState({
      userName: event.target.value,
    })
  } 

  render() {
    return (
      <div>
        <UserInput  onChange={this.handleNameChange.bind(this)} value={this.state.userName}/>
        <UserOutput name={this.state.userName} />
        <UserOutput name={this.state.userName} />
        <UserOutput name={this.state.userName} />
      </div>
    );
  }
}

export default App;

