import { Component } from 'react';
import axios from 'axios';

class Location extends Component {
  constructor() {
    super();
    this.state = {
      lat: 0.00,
      lon: 0.00,
      name: '',
      error: { status: null, message: null }
    }
  }

  getLocation = (query) => {
    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${query}&format=json`

    // try {

    axios.get(url)
      .then(response => {
        console.log(response);
        this.setState({
          lat: response.data[0].lat,
          lon: response.data[0].lon,
          name: response.data[0].display_name,
          error: { status: null, message: null } 
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          lat: 0,
          lon: 0,
          name: '',
          error: {
            status: error.response.status,
            message: error.response.data.error,
          }
        });
      });

    // } catch (error) {

    //   console.log(error);
    //   this.setState({
    //     lat: 0,
    //     lon: 0,
    //     name: '',
    //     error: {
    //       status: error.response.status,
    //       message: error.response.data.error,
    //     }
    //   });
    // }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.getLocation(e.target.city.value);
  }

  render() {
    console.log(this.state);
    return(
      <>
        <h1>City Explorer App</h1>
        <form onSubmit={this.handleSubmit}>
          <input name="city" />
          <button type="submit">Submit Button</button>
        </form>
        {this.state.name && <div id="city-display">
          <h2>City Name: {this.state.name}</h2>
          <p>Latitude: {this.state.lat}</p>
          <p>Longitude: {this.state.lon}</p>
        </div>}
        {this.state.error.status && <div id="city-error">
          <h2>Error: {this.state.error.message}</h2>
        </div>}
      </>
    )
  }
}

export default Location;
