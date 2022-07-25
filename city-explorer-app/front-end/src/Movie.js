import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class Movie extends React.Component {
  render() {
    return(
      <div id="weather">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{this.props.movie.title}</Card.Title>
            <Card.Img variant="top" src={this.props.movie.imageUrl} />
            <Card.Text>Released: {this.props.movie.releasedOn}</Card.Text>
            <Card.Text>{this.props.movie.overview}</Card.Text>
            <Card.Text>Rated {this.props.movie.averageVotes} with {this.props.movie.totalVotes} votes</Card.Text>
            <Card.Text>Ranked {this.props.movie.popularity}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default Movie;
