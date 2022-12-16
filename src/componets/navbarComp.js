import React, { Component } from "react";
import {Navbar,Nav,NavDropdown,Form,Button,Container} from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel'
export default class Navbarcomp extends Component {
    render(){
        return(
            <div>
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
           
          >
            <Nav.Link href="#action1" className="left">Home</Nav.Link>
            <Nav.Link href="#action2" className="left">Link</Nav.Link>
            <Nav.Link href="#" className="left">
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 left"
              aria-label="Search"
            />
            <Button variant="outline-success" className="left">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Carousel style={{marginTop:1}}>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://t4.ftcdn.net/jpg/03/20/46/13/360_F_320461388_5Snqf6f2tRIqiWlaIzNWrCUm1Ocaqhfm.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaxkRHyu15lnisONxINaG1JovCSgN5EHxlQw&usqp=CAU"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://t4.ftcdn.net/jpg/02/30/72/41/360_F_230724124_ZWlHSZBIvqvdJQj9at15WaKRqAtCUKTu.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </div>

        )
    }
}