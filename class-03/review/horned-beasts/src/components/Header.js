import { Component } from 'react';
import Alert from 'react-bootstrap/Alert';


class Header extends Component {
  render(){
    return(
      <div>
        <Alert id='h1' variant='light'>Mandy's Horned Beast Emporium</Alert>
        <Alert id='h3' variant='warning'>Vote for your favorite beast!</Alert>
      </div>
    )     
  }
}

export default Header;