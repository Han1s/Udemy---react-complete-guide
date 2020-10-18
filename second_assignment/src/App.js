import React from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends React.Component {
  state = {
    input: [],
  }

  changeInputHandler = (event) => {
    this.setState({
      input: event.target.value.split(''),
    })
  }

  deleteLetterHandler = (index) => {
    // We are copying, not mutating
    let newInput = [...this.state.input];
    newInput.splice(index, 1);
    this.setState({
      input: newInput,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul style={{listStyleType: 'none'}}>
            <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph)</li>
            <li>Create a new component (ValidationComponent) which receives the text length as a prop</li>
            <li>Inside the ValidationComponent, either ouput "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
            <li>Create another component (CharComponent) and style it as an inline box (css viz. lecture)</li>
            <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text as a prop</li>
            <li>When you clik a CharComponent, it should be removed from the entered text.</li>
          </ul>
          <input type='text' onChange={this.changeInputHandler} value={this.state.input.join('')}></input>
          <p>The text is <span style={{ fontWeight: 'bold' }}>{this.state.input.length}</span> characters long</p>
          <ValidationComponent inputLength={this.state.input.length}/>
          <div>
          { this.state.input.map((letter, index) => <CharComponent key={index} letter={ letter } click={this.deleteLetterHandler.bind(this, index)} />)}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
