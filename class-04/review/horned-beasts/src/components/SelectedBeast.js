import { Component } from "react";
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends Component {

    render(){
        return(
            <Modal show={this.props.showing} onHide={this.props.closeModal} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={this.props.picURL} alt={this.props.title} style={{width: "100%"}}></img>
                </Modal.Body>
            </Modal>
        );
    }
}

export default SelectedBeast