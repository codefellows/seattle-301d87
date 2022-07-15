import { Component } from "react";
//https://react-bootstrap.github.io/components/accordion/#accordion-props
import Accordion from 'react-bootstrap/Accordion';

class Header extends Component{

    render(){
        return(
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <h1 >Horned Beast By Joshua Frazer</h1>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>Well, hello there!</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        );
    }
}

export default Header;