import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

class Weather extends Component {

  render() {
    return (
      <Container id="weather-container">
        <h2>Weather Forecast</h2>
        {this.props.data.data.map(forecast => (
          <Card>
            <Card.Body>
              <Card.Text>Date: {forecast.datetime}</Card.Text>
              <Card.Text>High in C: {forecast.max_temp}</Card.Text>
              <Card.Text>Low in C: {forecast.min_temp}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>
    )
  }
}

export default Weather;
