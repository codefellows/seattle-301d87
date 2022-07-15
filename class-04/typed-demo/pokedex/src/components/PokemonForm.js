import { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class PokemonForm extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      type: null,
      ap: null,
      hp: null,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    let { name, type, hp, ap } = e.target;
    this.props.catchPokemon({
      name: name.value,
      type: type.value,
      ap: ap.value,
      hp: hp.value,
    });
  }
  
  handleInput = (e) => {
   let {name, value} = e.target;
   this.setState({ [name]: value });
  }

  render() {
    console.log(this.state);
    return (
      <Modal show={this.props.showForm} onHide={this.props.toggleForm}>
        <Modal.Header closeButton>
          <Modal.Title>Catch a Pokemon!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Control type="text" name="name" onChange={this.handleInput}/>
            <Form.Control type="text" name="type" onChange={this.handleInput} />
            <Form.Control type="text" name="hp" onChange={this.handleInput} />
            <Form.Control type="text" name="ap" onChange={this.handleInput} />
            <Button type="submit">Submit</Button>
          </Form>
        </Modal.Body>
      </Modal>
    )
  }
}

export default PokemonForm;
