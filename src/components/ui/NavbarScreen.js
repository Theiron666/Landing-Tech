import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link as LinkScroll } from "react-scroll"
import { Link } from "react-router-dom";

export const NavbarScreen = () => {
  const [ isActive, setActive ] = useState( false );

  const toggle = () => {
    setActive( !isActive );
  };

  return (
    <>
      <Navbar collapseOnSelect className="nav__main" variant="dark" expand="sm">
        <Container>
          <Link
            as={ Link }
            to="/" 
            className="nav__logo"
            >
            Landing Tech
          </Link>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={ toggle }
            className={ isActive ? "change" : null }
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                to="/"
                as={ Link }
                className="nav__links" 
                href="#pricing"
                onClick={ toggle }
                >
                Home
              </Nav.Link>

              <Nav.Link
                to="contact" spy={ true } smooth={ true } offset={ 50 } duration={ 500 } 
                as={ LinkScroll }
                className="nav__links"
                href="#pricing"
                onClick={ toggle }
              >
                Contacto
              </Nav.Link>

              <Nav.Link
                to="about" spy={ true } smooth={ true } offset={ 50 } duration={ 500 } 
                as={ LinkScroll }
                className="nav__links"
                href="#pricing"
                onClick={ toggle }
              >
                Acerca de
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
