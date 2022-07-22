import { Component } from 'react';
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Weather from './Weather';
const axios = require('axios').default;


class CityInfo extends Component {

   constructor() {
      super();
      this.state = {
        searchQuery: '',
        location: '',
        show: 'none',
        icon: '',
        mapImage: '',
        errorMessage: '',
        showAlert: false,
        weather: '',
        movies: ''
      }
   }

  handleCitySearch = (e) => {
    e.preventDefault();
    const url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;
    axios.get(url).then(
      response => {
        console.log(response);
        let obj = response.data[0];
        this.setState({
          show: 'show',
          location: obj.display_name,
          lat: obj.lat,
          lon: obj.lon,
          icon: obj.icon,
          mapImage: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${obj.lat},${obj.lon}&zoom=12&size=400x400&format=png`
        })
      })
      .catch((error) => {
        const errorMessage = `${error.response.data.error}. ${error.message} (${error.code}).`;
        this.setState({showAlert: true, errorMessage: errorMessage})
      })
  }

  handleWeather = (e) => {
    e.preventDefault();
    const url = `${process.env.REACT_APP_API_URL}/weather?city=${this.state.searchQuery}`;
    axios.get(url).then(
      response => {
        console.log(response);
        this.setState({
          weather: response,
        })
      })
      .catch((error) => {
        const errorMessage = `${error.response.data.error}. ${error.message} (${error.code}).`;
        this.setState({showAlert: true, errorMessage: errorMessage})
      })
  }

  handleMovies = (e) => {
    e.preventDefault();
    const url = `${process.env.REACT_APP_API_URL}/movies?query=${this.state.searchQuery}`;
    axios.get(url).then(
      response => {
        console.log(response);
        this.setState({
          movies: response,
        })
      })
      .catch((error) => {
        const errorMessage = `${error.response.data.error}. ${error.message} (${error.code}).`;
        this.setState({ showAlert: true, errorMessage: errorMessage })
      })
  }

   handleChange = (e) => {
    let { value } = e.target;
    value.toLowerCase();
    this.setState({ searchQuery: value })
    console.log(value);
   }

   render() {
    return (
      <Container className='searchAndCard'>
        
        <Form onSubmit = {this.handleCitySearch} className='search'>
          <Form.Control type='text' onChange={this.handleChange} placeholder='Input city name' />
          <Button type='submit' className='submit'>Explore!</Button>
        </Form>
        
        <Card className='mapCard' style={{ width: '40rem'}}>
          <Card.Img variant ="top" src={this.state.mapImage} />
          <Card.Body>
            <Card.Title>{this.state.location}</Card.Title>
            <div className='holder'>
              <Card.Text>Latitude: {this.state.lat}</Card.Text>
              <Card.Text>Longitude: {this.state.lon}</Card.Text>
            </div>
            <div>
            <Form onSubmit = {this.handleWeather}>
          <Button type='submit' className='submit'>Weather!</Button>
            </Form>
            <Form onSubmit = {this.handleMovies}>
          <Button type='submit' className='submit'>Movies!</Button>
            </Form>
            </div>
          </Card.Body>
        </Card>

        {/* This seems like a wearther feature we can build*/}
        {/* <Row>
          {this.state.weather && (this.state.weather.data.map(element =>
            <Col key={element.date}>
              <Card>
                <Card.Body>
                  <Card.Title>{element.date}</Card.Title>
                  <Card.Text>{element.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row> */}
        <Weather data={this.state.weather} />

        <Row>
          {this.state.movies && (this.state.movies.data.map(element =>
            <Col key={element.title + element.image_url}>
              <Card>
              <Card.Img variant="top" width='20px'
                src={element.image_url}
                alt={element.title}
                className = "image"
                />
                <Card.Body>
                  <Card.Title>{element.title}</Card.Title>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Movie Summary</Accordion.Header>
                      <Accordion.Body>{element.overview}</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Movie Information</Accordion.Header>
                      <Accordion.Body>
                      <ListGroup as="ol" numbered>
                        <ListGroup.Item variant="info">Released on: {element.released_on}</ListGroup.Item>
                        <ListGroup.Item variant="info">Viewer Rating: {element.average_votes}</ListGroup.Item>
                        <ListGroup.Item variant="info">Number of Votes: {element.total_votes}</ListGroup.Item>
                        <ListGroup.Item variant="info">Popularity Score: {element.popularity}</ListGroup.Item>
                        </ListGroup>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Alert show={this.state.showAlert} variant="danger" onClose={() => this.setState({ showAlert: false })} dismissible>
          <Alert.Heading>
            Input was invalid. Option: Check spelling.
          </Alert.Heading>
          {this.state.errorMessage}
        </Alert>
      </Container>
    )
   }
}

export default CityInfo;