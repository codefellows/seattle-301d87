import { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

class Pokemon extends Component {

  constructor() {
    super();
    this.state ={
      list: []
    }
  }

  fetchPokemon = async () => {
    if (this.props.auth0.isAuthenticated) {
      let res = await this.props.auth0.getIdTokenClaims();
  
      let token = res.__raw; // attach to request to server!
  
      // request to backend
      console.log(token);
      let response = await axios.get('http://localhost:3001/pokemon', {headers: {"Authorization": `Bearer ${token}`}});
      console.log(response);
    }
  }

  render() {
    return (
      <div>
        {this.state.list.map(pokemon => (
          <p>{pokemon.name}</p>
        ))}
        {this.props.auth0.isAuthenticated && <button onClick={this.fetchPokemon}>Get Pokemon</button>}
      </div>
    )
  }
}

export default withAuth0(Pokemon);
