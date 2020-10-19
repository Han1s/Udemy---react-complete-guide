import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'random 1', age: '10' },
      { id: 2, name: 'random 2', age: '20' },
      { id: 3, name: 'random 3', age: '30' }
    ]
  }

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice(); OPTION 1
    const persons = [...this.state.persons]; // OPTION 2
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    })
    
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    })
  }

  render() {
    let persons = null;
    
    if (this.state.showPersons) {
      persons = (
        <Persons 
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />
      );
    }
  
    return (
      <div className={classes.App}>
        <Cockpit 
          showPersons={this.state.showPersons} 
          persons={this.state.persons} 
          clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
