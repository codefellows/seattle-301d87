import React from 'react';

class Yelp extends React.Component {
  render() {
    return(
      <>
      <h2>Yelp</h2>
      {this.props.yelp.length && this.props.yelp.map((business, idx) => (
        <div key={idx}>
          <p>{business.name}</p>
          <a href={business.url}><img src={business.image_url} width={200} alt={business.name} /></a>
          <p>Price: {business.price}</p>
          <p>Rating: {business.rating}</p>
        </div>
      ))
      }
      </>
    )
  }
}

export default Yelp;
