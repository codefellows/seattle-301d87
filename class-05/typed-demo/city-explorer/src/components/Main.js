import { Component } from 'react';
import weatherData from '../data/weather.json';
import locationData from '../data/location.json';
import restaurantData from '../data/restaurants.json';
import map from '../data/map.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Location from './Location';
import Weather from './Weather';
import Restaurants from './Restuarants';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      weather: weatherData,
      location: {
        data: locationData,
        image_url: map,
      },
      restaurants: restaurantData,
      showResults: false,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.city.value);
    // this will be where we make our request to the server, for now toggle a switch
    this.setState({ showResults: true });
  }

  render() {
    console.log(this.state);
    return (
      <div id="city-explorer-container">
        <h1>Welcome to City Explorer</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Label>Enter a City</Form.Label>
          <Form.Control type="text" name="city"/>
          <Button type="submit">Explore!</Button>
        </Form>

        {this.state.showResults && 
          <div id="results">
            <p>Results!</p>
            <Location data={this.state.location}/>
            <Weather data={this.state.weather} />
            <Restaurants data={this.state.restaurants} />
          </div>}
      </div>
    )
  }
}

export default Main;
