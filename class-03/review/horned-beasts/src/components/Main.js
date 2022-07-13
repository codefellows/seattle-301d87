import { Component } from 'react';
import list from '../data.json';
import HornedBeast from './HornedBeast.js';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      beastList: list,
    }
  }

  render(){
    return(
      <div id='main'>
        {this.state.beastList.map(n =>
          <HornedBeast
            title={n.title}
            image_url={n.image_url}
            description={n.description} />
          )}
      </div>
    )
  }
}
export default Main;

