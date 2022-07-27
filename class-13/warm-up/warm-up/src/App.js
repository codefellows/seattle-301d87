import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    this.state = {
      name = "Susan Sample",
      age = {},
      pets = { "Fido", "Mr Whiskers"}
    };
  }

  hadBirthday = () => {
    this.setState(age: age++);
  };

  render() {
    <h2>{this.name}</h2>
    <h3 onClick={this.hadBirthday}>Current Age: {this.state.age}</h3>
    <h4>Pets</h4>
    <ul>
      {
        this.state.pets.forEach( (pet) => {
          <li>{pets}</li>
        })
      }
    </ul>
  }
}

export default App;
