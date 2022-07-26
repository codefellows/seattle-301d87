import { Component } from 'react';
import axios from 'axios';

const URL = process.env.REACT_APP_API_URL;

class Pokemon extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      name: '',
      type: '',
      hp: 0,
      ap: 0,
    }
  }

  componentDidMount() {
    console.log(URL);
    this.fetchPokemon();
  }

  fetchPokemon = () => {
    axios.get(`${URL}/pokemon`)
      .then(response => {
        console.log(response);
        this.setState({ list: response.data });
      });
  }

  addPokemon = (e) => {
    e.preventDefault();
    let pokemon = {
      name: this.state.name,
      type: this.state.type,
      ap: this.state.ap,
      hp: this.state.hp,
    }
    axios.post(`${URL}/pokemon`, pokemon)
      .then(response => {
        console.log(response);
        this.setState({ list: [...this.state.list, response.data] });
      });
  }

  handleChange = (e) => {
    let {name, value} = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <>
        <form onSubmit={this.addPokemon}>
          <input type='text' name="name" onChange={this.handleChange}/>
          <input type='text' name="type" onChange={this.handleChange} />
          <input type='number' name="hp" onChange={this.handleChange} />
          <input type='number' name="ap" onChange={this.handleChange} />
          <button type="submit">Create Pokemon</button>
        </form>
        <ul>
          {this.state.list.map(pokemon => <li>{pokemon.name}</li>)}
        </ul>
      </>
    )
  }
}

export default Pokemon;
