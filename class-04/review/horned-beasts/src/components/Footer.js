import { Component } from "react";
//https://react-bootstrap.github.io/components/accordion/#accordion-props
import Accordion from 'react-bootstrap/Accordion';

class Footer extends Component{

    render(){
        return(
            <Accordion>
            <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        Author: Joshua Frazer
                    </Accordion.Header>
                    <Accordion.Body>
                        There should be a secret here.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        );
    }
}

export default Footer;