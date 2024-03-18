import React from 'react'
import {Navbar,Container,Nav,  } from 'react-bootstrap'
import logo from "../../assets/logo.png"
import "./menu.css"

const Menu = () => {
  return (
    <Navbar expand="lg" className="menu_bg">
    <Container>
      <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About us</Nav.Link>
          <Nav.Link href="#link">Features</Nav.Link>
          <Nav.Link href="#link">Pricing</Nav.Link>
          <Nav.Link href="#link">FAQ work</Nav.Link>
          <Nav.Link href="#link">Blog</Nav.Link>
        </Nav>
        <div className="con">
        <a href="#">Contact us</a>
        </div>
      </Navbar.Collapse>
    </Container>
   
  </Navbar>
  )
}

export default Menu
