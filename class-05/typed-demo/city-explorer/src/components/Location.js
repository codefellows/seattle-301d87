import { Component} from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

class Location extends Component {

  render() {
    return (
      <Container>
        <Image style={{ width: '80%' }} src={this.props.data.image_url}/>
        <section>
          <p>Name: {this.props.data.data.formatted_query}</p>
          <p>Lat: {this.props.data.data.latitude}</p>
          <p>Lon: {this.props.data.data.longitude}</p>
        </section>
      </Container>
    )
  }
}

export default Location;