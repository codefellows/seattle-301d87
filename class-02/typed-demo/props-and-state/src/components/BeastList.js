import { Component } from 'react';
import Image from 'react-bootstrap/Image'

class BeastList extends Component {
  render() {
    return (
      <div id="beast-list">
        {this.props.beasts.map(beast => <Image width="200px" src={beast.image_url} onClick={() => this.props.selectBeast(beast)} />)}
      </div>
    )
  }
}

export default BeastList;