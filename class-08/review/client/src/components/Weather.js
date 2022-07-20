import { Component } from 'react';
import axios from 'axios';

class Weather extends Component {
  constructor(){
    super();
    this.state = {
      lat: 0,
      lon: 0,
      searchQuery: '',
      weather: [],
      error: {},
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.getLocation();
  }

  // send request to get lat lon
  getLocation = async () => {
    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;

    try {

      let response = await axios.get(url);
      this.setState({
        lat: response.data[0].lat,
        lon: response.data[0].lon,
      }, this.getWeather); // set state can take an optional call back to run, AFTER state is set.

    } catch (e) {
      this.setState({ error: e });
    }
  }

  // send request to get weather values
  getWeather = async () => {
    let url = `http://localhost:3001/weather?lat=${this.state.lat}&lon=${this.state.lon}&searchQuery=${this.state.searchQuery}`;

    try {

      let response = await axios.get(url);
      this.setState({
        weather: response.data,
      });

    } catch (e) {
      this.setState({ error: e });
    }

  }

  render() {
    console.log(this.state);
    return(
      <>
      <h1>Weather Data!</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={(e) => this.setState({ searchQuery: e.target.value })}/>
          <button>Explore!</button>
        </form>
        <div>
          <h2>{this.state.searchQuery}</h2>
          <p>{this.state.lat}</p>
          <p>{this.state.lon}</p>
        </div>
      </>
    )
  }
}

export default Weather;