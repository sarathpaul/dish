import React, {Component} from "react";
import {Navbar,Nav,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
class Header extends Component{
    render(){
        return(
            <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Dishes</Navbar.Brand>
            <Nav className="me-auto">
              {/* <Link className="nav-link" to="/">Home</Link> */}
              <Link className="nav-link" to="/Login">Login</Link>
              {/* <Link className="nav-link" to="/Foods">Foods</Link> */}
            </Nav>
            </Container>
          </Navbar>
        )
    }
}
export default Header;