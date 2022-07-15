import { Component } from "react";
import HornedBeast from './HornedBeast'
import Form from 'react-bootstrap/Form';

//https://react-bootstrap.github.io/layout/grid
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {currentBeasts: this.props.beasts};
    }

    filterBeasts(searchTerm){
        //strip whitespace from input, ignore capitalization in the regex 
        const regEx = new RegExp(searchTerm.replace(/\s*/g,""),  "i");
        return this.props.beasts.filter(b => regEx.test(b.title.replace(/\s*/g,"")) || regEx.test(b.keyword));
    }

    handleSearchInput = (e) => {
        console.log(e.target.value);
        let newBeasts = this.filterBeasts(e.target.value);
        this.setState({currentBeasts: newBeasts});
    }
    
    //I could have returned just a ul here, but thought why not leave it open for adding things in the future
    render(){
        return(
            <Container fluid>
                <Form style={{display: "flex", alignItems: "center", justifyContent: "center",  marginTop: "0.5rem"}}>
                    <Form.Label style={{fontWeight: "bold", fontSize: "200%"}}>Search: </Form.Label>
                    <Form.Control type="input" onChange={this.handleSearchInput} style={{width: "70%", marginLeft: "0.5rem", border: "solid blue 1px"}}/>
                </Form>
                        
                {/* fits as many children as it can in a single row, each size attribute determines how many columns should be displayed at different break points */}
                <Row xs={1} sm={2} md={3} lg={4} xl={5}>
                    {this.state.currentBeasts.map(b => 
                        <Col key={b._id.toString()} style = {{marginTop: '1rem'}}>
                            <HornedBeast 
                                handlePicClick={this.props.handlePicClick}
                                title={b.title}
                                image_url={b.image_url}
                                description={b.description}
                            />
                        </Col>
                    )}
                </Row>  
            </Container>
        );
    }
}

export default Main;