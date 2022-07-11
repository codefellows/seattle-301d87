import { Component } from 'react';
import Row from './Row';

class Grid extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <>
        <Row value="Jacob" />
        <Row value="Cameron"/>
        <Row value="Adrian" />
      </>
    )
  }
}

export default Grid;
