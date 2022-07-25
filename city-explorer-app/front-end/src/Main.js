import React from 'react';
import axios from 'axios';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import CitySearch from './CitySearch';
import LatLon from './LatLon';
import Map from './Map';
import Movies from './Movies';
import Weather from './Weather';
import Yelp from './Yelp';

const storage = {};
console.log({storage})

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayError: false,
      displayMap: false,
      errorMessage: '',
      latitude: '',
      location: '',
      longitude: '',
      movies: [],
      searchQuery: '',
      weather: [],
      yelp: []
    }
  }

  updateCity = (e) => {
    this.setState({ searchQuery: e.target.value });
  }

  submitLocation = async () => {
    if(storage[this.state.searchQuery] === undefined){
      console.log('getting location from API')
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_MAP_KEY}&q=${this.state.searchQuery}&format=json`;
      let location;
      try {
        location = await axios.get(url);
        console.log('successfully got location', {location})
        this.setState({ 
          location: location.data[0].display_name,
          latitude: location.data[0].lat, 
          longitude: location.data[0].lon, 
          displayMap: true,
          displayError: false });
        storage[this.state.searchQuery] = location.data[0];        
      } catch(error) {
        this.setState({ 
          displayMap: false,
          displayError: true,
          errorMessage: error.response.status + ': ' + error.response.data.error });
        } 
      } else {
        console.log('getting location information from the storage');
        this.setState({
          location: storage[this.state.searchQuery].display_name,
          latitude: storage[this.state.searchQuery].lat,
          longitude: storage[this.state.searchQuery].lon,
          displayMap: true,
          displayError: false
        })
      }
      this.getWeather();
      this.getMovies(); 
      this.getYelp();
    }
    
    getWeather = async () => {
      try{
        const weather = await axios.get(`${process.env.REACT_APP_SERVER_URL}/weather`, {params: {lat: this.state.latitude, lon: this.state.longitude} } );
        this.setState({
          weather: weather.data
        });
      } catch(error){
        console.log('weather error', error)
        this.setState({
          displayMap: false,
          displayError: true,
          errorMessage: error.response && error.response.status + ': ' + error.response.data.error 
        })
      }
    } 
    
    getMovies = async () => {
      try{
        const movies = await axios.get(`${process.env.REACT_APP_SERVER_URL}/movies`, {params: {city:this.state.searchQuery}});
        this.setState({
          movies: movies.data
        });
      } catch(error){
        this.setState({
          displayMap: false,
          displayError: true,
          errorMessage: error.response && error.response.status + ': ' + error.response.data.error 
        });
      }
    } 

    getYelp = async () => {
      try{
        const yelp = await axios.get(`${process.env.REACT_APP_SERVER_URL}/yelp`, {params: {searchQuery: this.state.searchQuery}});
        this.setState({
          yelp: yelp.data
        });
      } catch(error) {
        this.setState({
          displayMap: false,
          displayError: true,
          errorMessage: error.response && error.response.status + ': ' + error.response.data.error 
        });
      }
    }

  render() {    
    return(
      <Container fluid>
        <Row>
          <Col>
            <CitySearch 
              updateCity={this.updateCity}
              submitLocation={this.submitLocation}
              hasError={this.state.displayError}
              errorMessage={this.state.errorMessage}
            />
          </Col>
        </Row>
        {this.state.displayMap && 
          <>
            <Row>
              <Col>
                <LatLon
                  city={this.state.location}
                  query={this.state.searchQuery}
                  lat={this.state.latitude}
                  lon={this.state.longitude}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Map
                  img_url={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_MAP_KEY}&center=${this.state.latitude},${this.state.longitude}&size=${window.innerWidth}x300&format=jpg&zoom=12`}
                  city={this.state.location}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Weather
                  weather={this.state.weather}
                />
                </Col>
                <Col>
                <Movies
                  movies={this.state.movies}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Yelp
                  yelp={this.state.yelp}
                />
              </Col>
            </Row>
          </>
        }
      </Container>
    )
  }
}

export default Main;
