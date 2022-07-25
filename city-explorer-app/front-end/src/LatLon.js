import React from 'react';

class LatLon extends React.Component {
  render() {
    return(
      <>
        <h2>Learn about {this.props.city}</h2>
        <p>
          {this.props.query.replace(/\w\S*/g, w => w.charAt(0).toUpperCase() + w.substr(1).toLowerCase())} {' '}
          is located at {this.props.lat} by {this.props.lon}
        </p>
      </>
    )
  }
}

export default LatLon;
