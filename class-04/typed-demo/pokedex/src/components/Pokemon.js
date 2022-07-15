import { Component } from 'react';
import Card from 'react-bootstrap/Card';

class Pokemon extends Component {
  
  render() {
    return (
      <Card id="pokemon-container" style={{maxWidth: '300px'}}>
        <Card.Header>
          <Card.Title>{this.props.pokemon.name}</Card.Title>  
        </Card.Header>
        <Card.Body>
          <Card.Text>Type: {this.props.pokemon.type}</Card.Text>
          <Card.Text>Health Points: {this.props.pokemon.hp}</Card.Text>
          <Card.Text>Attack Points: {this.props.pokemon.ap}</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default Pokemon;

