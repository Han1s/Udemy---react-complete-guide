import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App,js] constructor');
  }

  state = {
    persons: [
      { id: 1, name: 'random 1', age: '10' },
      { id: 2, name: 'random 2', age: '20' },
      { id: 3, name: 'random 3', age: '30' }
    ]
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerviedStateFromProps', props);
    return state;
  }

  conponentWillMount() {
    console.log('[App.js] componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
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
    console.log('[App.js] render');
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
          title={this.props.appTitle}
          showPersons={this.state.showPersons} 
          persons={this.state.persons} 
          clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
