import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/" style={{ color: 'purple' }}>
          Magic Cards
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/" className="nav-link">
            MainPage
          </NavLink>
          <Nav.Link href="#features">///</Nav.Link>
          <Nav.Link href="#pricing">///</Nav.Link>
        </Nav>
        <Nav>
          <NavLink to="/auth/signin" className="nav-link">
            Login
          </NavLink>
          <NavLink to="/auth/signup" className="nav-link">
            Sign Up
          </NavLink>
          <span className="nav-link">|</span>
          <span className="nav-link">Привет!!!</span>
          <span className="nav-link">
            <Button variant="outline-danger" size="sm">
              Logout
            </Button>
          </span>
        </Nav>
      </Container>
    </Navbar>
  );
}
