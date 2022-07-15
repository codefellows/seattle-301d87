import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Pokemon from './Pokemon';
import PokemonForm from  './PokemonForm';

class Pokedex extends Component {
  constructor() {
    super();
    this.state = {
      list: [{
        name: 'Charizard',
        type: 'fire',
        // abilities: ["breathe fire", "swing tail"],
        hp: 1000,
        ap: 10,
      }],
      showForm: false,
      sort: null
    }
  }

  catchPokemon = (pokemon) => {
    // spread operation, puts the contents of an array or object into a new array or object
    this.setState({ list: [...this.state.list, pokemon] });
  }

  togglePokemonForm = () => {
    this.setState({ showForm: !this.state.showForm });
  }

  render() {
    return (
      <Container id="pokedex">
        <h2>Here are your Pokemon</h2>
        {this.state.list.map(pokemon => <Pokemon pokemon={pokemon} />)}
        <Button onClick={this.togglePokemonForm}>Show Form</Button>
        <PokemonForm showForm={this.state.showForm} toggleForm={this.togglePokemonForm} catchPokemon={this.catchPokemon} />
      </Container>
    )
  }
}

export default Pokedex;
