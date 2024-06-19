import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import NavBar from './ui/Navbar';

export default function Layout() {
  return (
    <Container>
      <Row className="justify-content-center align-item-center">
        <NavBar />
        <Outlet />
      </Row>
    </Container>
  );
}
