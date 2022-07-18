import { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Pokemon extends Component {

  constructor() {
    super();
    this.state = {
      query: '',
      data: {
        name: '',
        type: '',
        sprite: ''
      },
    }
  }

  getPokemon = (e) => {
    e.preventDefault();
    let url = `https://pokeapi.co/api/v2/pokemon/${this.state.query.toLowerCase()}`;
    axios.get(url).then(response => {
      this.setState({
        name: response.data.name,
        type: response.data.types[0].type.name,
        sprite: response.data.sprites.front_shiny,
      })
    }); // creating the request
  }

  handleChange = (e) => {
    console.log(this.state);
    let { value } = e.target;
    this.setState({ query: value });
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.getPokemon}>
          <Form.Label>Search for Pokemon</Form.Label>
          <Form.Control type="text" onChange={this.handleChange} placeholder="Type Pokemon name here" />
          <Button type='submit'>Search!</Button>
        </Form>
        <Card>
          <Card.Img src={this.state.sprite} />
          <Card.Title>{this.state.name}</Card.Title>
          <Card.Text>{this.state.type}</Card.Text>
        </Card>
      </Container>
    )
  }
}

export default Pokemon;