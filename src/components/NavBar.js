'use client';

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
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
            Sign Out THIS WILL ERROR OUT DONT USE IT
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
