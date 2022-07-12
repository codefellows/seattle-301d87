import { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Header extends Component {
  constructor(props) {
    super(props);
    // state gets intialized right here
    this.state = {
      title: props.title,
      url: 'http://pokeapi.com'
    }
  }

  handleUrl(url) {
    this.setState({ url: url }); // takes an object with a property to replace / set the current state with
  }

  handleTitle = (e) => {
    console.log(e.target);
    this.setState({ title: 'Another Title' });
  }

  render() {
    // this.state.url = 'http://google.com'; this works but dont do it.
    return (
      <div id="header">
        <h1>{this.props.title}</h1>
        <h2>{this.state.title}</h2>
        <Button onClick={this.handleTitle}>Change title State</Button>
        <Button onClick={() => this.handleUrl('http://google.com')} variant="secondary">Update Url</Button>
        <Button variant="link" href={this.state.url}>Take me to my {this.state.url}!</Button>
      </div>
    )
  }
}

export default Header;