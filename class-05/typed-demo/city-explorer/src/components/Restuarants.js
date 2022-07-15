import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

class Restaurants extends Component {

  render() {
    return (
      <Container id="restaurant-container">
        <h2>Restaurant Info</h2>
        {this.props.data.map(restaurant => (
          <Card>
            <Card.Title>Name: {restaurant.restaurant}</Card.Title>
            <Card.Text>Cuisines: {restaurant.cuisines}</Card.Text>
            <Card.Text>Cuisines: {restaurant.locality}</Card.Text>
          </Card>
        ))}
      </Container>
    )
  }
}

export default Restaurants;
