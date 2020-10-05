import React from 'react';
import {NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


// import Container from 'react-bootstrap/Container';

const Header = () => (
  // <header>
    <div className="main-nav sticky">
    <Navbar className="page-navbar" expand="lg">
      <Navbar.Brand className="justify-content-end" ><NavLink exact to="/"> <span>
      {/* <i class="fas fa-mouse"></i>  */}
      {/* <img src={profile} alt="Iuliia"/> */}
      <span style={{ color: '#D8BFD8'}}><strong>Iuliia</strong></span>
      </span></NavLink></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      
        <Nav.Item>
         <NavLink to="/about">About</NavLink>
        </Nav.Item>         
        <Nav.Item>
          <NavLink to="/projects">Projects</NavLink>
        </Nav.Item>          
        <Nav.Item>
          <NavLink to="/contact">Contact</NavLink>
        </Nav.Item>        
      </Navbar.Collapse>
    </Navbar>  

    
    
    </div>    
  // </header>
);

export default Header;