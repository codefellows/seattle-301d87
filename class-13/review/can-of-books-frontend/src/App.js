import { Component } from 'react';
import './App.css';
import axios from 'axios';

const URL = 'http://localhost:3030';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      loading: false,
    }
  }

  componentDidMount() {
    this.fetchBook();
  }

  fetchBook = () => {
    this.setState({ loading: true }, () => {
      axios.get(`${URL}/books`)
        .then(response => {
          this.setState({
            list: response.data,
            loading: false,
          });
        })
        .catch(() => {
          this.setState({ loading: false });
        });
    })

  }

  removeBook = (id) => {
    this.setState({
      loading: true,
    }, () => {
      axios.delete(`${URL}/books/${id}`)
        .then(response => {
          console.log(response.data);
          let newList = this.state.list.filter(book => book._id !== id);
          this.setState({
            list: newList,
            loading: false
          });
        }).catch(error => {
          console.log(error);
          this.setState({ loading: false });
        });
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        {this.state.list.map(book => {
          return <div key={book._id}>
            <p>{book.title}</p>
            <button disabled={this.state.loading} onClick={() => this.removeBook(book._id)}>Delete this book</button>
            </div>
        })}
      </div>
    );
  }
}

export default App;
