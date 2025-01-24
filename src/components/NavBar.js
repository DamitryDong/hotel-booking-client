'use client';

import '../styles/globals.css';
import React from 'react';
import { Navbar, Container, Nav, Offcanvas, Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand={false}>
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel" style={{ paddingLeft: '15px' }}>
              NAV or Logo IDK
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-start flex-grow-1 pe-3">
              <Button className="nav-link custom-nav-link" href="/" data-content="Home Screen">
                Home
              </Button>
              <Button className="nav-link custom-nav-link" href="/booking" data-content="Current Bookings">
                Booking
              </Button>
              <Button className="nav-link custom-nav-link" href="/booking/new" data-content="New Booking">
                Create Booking
              </Button>
              <Button className="nav-link custom-nav-link" href="/event" data-content="Check Events">
                Events
              </Button>
              <Button className="nav-link custom-nav-link" onClick={signOut} data-content="Sign Out">
                Sign Out
              </Button>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Navbar.Brand href="/">LOGO GOES HERE AND CHANGE COLOR NOT PINK</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
