import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'; // Исправлено импортирование Button
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; // Исправлено импортирование Navbar
import { NavLink } from 'react-router-dom';
import '../styleCSS/NavBar.css'; // Импортируем файл стилей
import useStore from '../store';
// import useStore from '../store';

export default function NavBar() {
  const user = useStore((state) => state.user);
  console.log(user);
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="brand" style={{ color: '#ff6347' }}>
          {/* <img
            src="../styleCSS/Magic_the_gathering-card_back.jpg"
            alt="Magic: The Gathering"
            className="brand-logo"
          /> */}
          Magic Cards
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link" style={{ color: '#ff6347' }}>
              MainPage
            </NavLink>
            <Nav.Link href="#features" style={{ color: '#ff6347' }}>
              ///
            </Nav.Link>
            <Nav.Link href="#pricing" style={{ color: '#ff6347' }}>
              ///
            </Nav.Link>
            <NavLink to="/basket" className="nav-link" style={{ color: '#ff6347' }}>
              Корзина
            </NavLink>
          </Nav>
          <Nav>
            {user.status === 'guest' && (
              <NavLink
                to="/auth/signin"
                className="nav-link"
                style={{ color: '#ff6347' }}
              >
                Login
                <NavLink
                  to="/auth/signup"
                  className="nav-link"
                  style={{ color: '#ff6347' }}
                >
                  Sign Up
                </NavLink>
              </NavLink>
            )}
            <span className="nav-link separator" style={{ color: '#ff6347' }}>
              |
            </span>
            <span className="nav-link" style={{ color: '#ff6347' }}>
              {`Привет, ${user.data ? user.data.name : 'гость'} `}
            </span>
            {user.status === 'logged' && (
            <span className="nav-link">
              <Button variant="outline-danger" size="sm">
                Logout
              </Button>
            </span>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
