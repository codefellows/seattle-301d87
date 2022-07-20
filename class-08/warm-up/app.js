import React from 'react';
import Form from 'react-bootstrap/Form';
const axios = require('axios').default

const SERVER = 'http://localhost:3001';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bananas: '',
    }
  }

  handleBanana = (e) => {
    e.preventDefault();
    let url = `http://localhost:3001/bananas`;
    axios.get(url).then(
      response => {
        this.setState({
          bananas: response.data
      })
    })
  }

  // a function that runs right before anything is rendered in the browser
  componentDidMount() {
    this.handleBanana();
  }

  render() {
    this.handleBanana();
    return (
      <div className="app">
        <h1>Bananas!</h1>
        <Form onSubmit = {this.handleBanana} className='search'>
          <Button type='submit' className='submit'>Bananas?!</Button>
        </Form>
        {this.state.bananas && 
          <p>{this.state.bananas}</p>
        }
      </div>
    )
  }
}


export default App;