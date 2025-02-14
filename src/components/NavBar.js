/* eslint-disable @next/next/no-img-element */

'use client';

import '../styles/globals.css';
import React from 'react';
import { Navbar, Container, Nav, Offcanvas, Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';

function MyNavbar() {
  return (
    <div className="navbardivforsticky">
      <Navbar expand={false}>
        <Container fluid>
          <Navbar.Toggle />
          <Navbar.Offcanvas>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel" style={{ paddingLeft: '2px' }}>
                <div>
                  <img src="\images/cowboy-hat-illustration-png.webp" alt="logo" style={{ height: '30px', width: 'auto' }} />
                  <strong style={{ color: 'white' }}>Navigations</strong>
                </div>
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
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
