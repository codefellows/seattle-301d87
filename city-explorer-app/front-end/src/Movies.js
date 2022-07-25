import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck';
import Movie from './Movie';

class Movies extends React.Component {
  render() {
    return(
      <div id="movies">
        <CardDeck style={{ width: '18rem' }}>
          <h3>Movies:</h3>
          {this.props.movies.length && this.props.movies.map((movie, idx) => (
            <Movie
              key={idx}
              movie={movie}
            />
          ))
          }
        </CardDeck>
      </div>
    )
  }
}

export default Movies;
