import { Component } from 'react';
import list from '../data.json';
import BeastList from './BeastList';
import Results from './Results';

class Main extends Component {
  constructor() {
    console.log(list);
    super();
    this.state = {
      currentBeast: { image_url: null },
      beastList: list,
    }
  }

  selectCurrentBeast = (beast) => {
    this.setState({ currentBeast: beast });
  }

  render() {
    console.log(this.state.currentBeast);
    return (
      <div id="main">
        <Results currentBeast={this.state.currentBeast}/>
        <BeastList beasts={this.state.beastList} selectBeast={this.selectCurrentBeast} />
      </div>
    )
  }
}

export default Main;
