import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class User extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: null,
      user: { name: null, money: null }
    }
  }

  handleUsername = (e) => {
    let value = e.target.value;
    this.setState({ inputValue: value });
  }

  login = (e) => {
    e.preventDefault();
    // find a user from this.props.user, set as User state
    let filteredUsers = this.props.users.filter(user => user.name === this.state.inputValue);
    if (filteredUsers.length) {
      this.setState({ user: filteredUsers[0]});
    }
  }

  render() {
    console.log(this.state);
    return (
      <Card style={{ maxWidth: '500px', margin: '0 auto', padding: '10px' }}>
        {this.state.user.name 
          ? <>
            <Card.Header>{this.state.user.name}</Card.Header>
            <Card.Body>
              <Card.Text>{this.state.user.money}</Card.Text>
              <Button onClick={() => this.props.withdraw(5, this.state.user.name)}>Withdraw 5 Dollars</Button>
            </Card.Body>
          </>
          : <Form onSubmit={this.login}>
            <Form.Control onChange={this.handleUsername} type='text' placeholder="enter username"/>
            <Button style={{margin: '10px'}} type="submit">Login</Button>
          </Form>
        }
      </Card>
    )
  }
}

export default User;