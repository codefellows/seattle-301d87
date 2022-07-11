import { Component } from 'react';
import './Row.css';

class Row extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="row">
        <p>I am a Row</p>
        <p>{this.props.value}</p>
      </div>
    )
  }
}

export default Row;