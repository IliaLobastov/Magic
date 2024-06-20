import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from './ui/NavBar';

export default function Layout({ user, handleLogout }) {
  return (
    <Container>
      <NavBar user={user} handleLogout={handleLogout} />
      <Outlet />
    </Container>
  );
}
