import { Component } from 'react';
import Toast from 'react-bootstrap/Toast';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SimpleForm extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: null,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.input.value);
    this.setState({ inputValue: e.target.input.value });
  }


  render() {
    return (
      <Form style={{ margin: '25px' }} onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Enter some text</Form.Label>
          <Form.Control name="input" type="text" placeholder="type something please!"/>
        </Form.Group>
        <Button type="submit">Submit</Button>
        <Toast>
          <Toast.Body>{this.state.inputValue}</Toast.Body>
        </Toast>
      </Form>
    )
  }
}

export default SimpleForm;
