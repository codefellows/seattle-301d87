import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Form,
  Button,
  Alert,
 } from 'react-bootstrap';

class CitySearch extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submitLocation();
  }

  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="cityName">
          <Form.Label>Where would you like to explore?</Form.Label>
          <Form.Control onChange={this.props.updateCity} type="text" placeholder="Enter a City" />
        </Form.Group>
        {this.props.hasError && 
          <>
            <Alert variant="danger">
              <strong className="mr-auto">Error {' '}</strong>
              {this.props.errorMessage}, please try another search.
            </Alert>
          </>
        }
        <Button variant="primary" type="submit">
          Explore!
        </Button>
      </Form>
    )
  }
}

export default CitySearch;
