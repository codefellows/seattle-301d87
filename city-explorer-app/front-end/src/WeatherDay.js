import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class WeatherDay extends React.Component {
  render() {
    console.log('weather day', this.props)
    return(
      <div id="weather">
        <Card style={{ width: '18rem' }}>
          <Card.Header>{this.props.day.time}</Card.Header>
          <Card.Body>
            <Card.Title>{this.props.day.forecast}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default WeatherDay;
