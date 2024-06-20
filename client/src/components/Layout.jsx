import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from './ui/NavBar';

export default function Layout({user}) {
  return (
    <Container>
      <NavBar user={user} />
      <Outlet />
    </Container>
  );
}
