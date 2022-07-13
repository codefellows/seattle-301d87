import { Component } from 'react';
import User from './User';

class Bank extends Component {

  constructor() {
    super();
    this.state = {
      totalMoney: 1000,
      users: [
        {name: 'Bob', money: 5},
        {name: 'Mary', money: 10}
      ]
    }
  }

  // takes money from user, gives back to the bank
  withdrawal = (money, name) => {
    // find user object
    let filteredUsers = this.state.users.filter(user => user.name === name);
    if (filteredUsers.length) {

      filteredUsers[0].money = filteredUsers[0].money - money;
      let updatedUsers = this.state.users.map(user => {
        if (user.name === filteredUsers[0].name) {
          return filteredUsers[0];
        }
        return user;
      });

      this.setState({
        totalMoney: this.state.totalMoney + money,
        users: updatedUsers
      });
    }
  }

  // take money from bank, give to user
  deposit = (money, name) => {

  }

  render() {
    return(
      <div id="bank-container">
        <h2>Welcome to the React Bank</h2>
        <p>Total Money Available {this.state.totalMoney}</p> 
        <User users={this.state.users} withdraw={this.withdrawal} deposit={this.deposit} />
      </div>
    )
  }
}

export default Bank;
