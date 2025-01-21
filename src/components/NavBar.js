'use client';

import React from 'react';
import { Navbar, Container, Nav, Offcanvas, Button } from 'react-bootstrap';
import Link from 'next/link';
import { signOut } from '../utils/auth';

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand={false}>
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">NAV or Logo IDK</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-start flex-grow-1 pe-3">
              <Link className="nav-link" href="/">
                Home
              </Link>
              <Link className="nav-link" href="/booking">
                Booking
              </Link>
              <Link className="nav-link" href="/booking/new">
                Create Booking
              </Link>
              <Link className="nav-link" href="/event">
                Events
              </Link>
            </Nav>
            <Button variant="warning" onClick={signOut}>
              Sign Out DONT WORK ER
            </Button>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Navbar.Brand href="/">LOGO GOES HERE AND CHANGE COLOR NOT PINK</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
