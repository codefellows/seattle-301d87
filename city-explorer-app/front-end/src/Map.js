import React from 'react';
import Image from 'react-bootstrap/Image';

class Map extends React.Component {
  render() {
    return(
      <Image src={this.props.img_url} alt={this.props.city} title={this.props.city} rounded fluid />
    )
  }
}

export default Map;
