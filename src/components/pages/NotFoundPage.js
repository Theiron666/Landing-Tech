import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-scroll";

export const NotFoundPage = () => {
  return (
    <>
      <Container fluid>
        <Row xs={12} sm={12} md={12} lg={12}>
          <div className="not-found">
            <h1 className="animate__animated animate__fadeInLeft">404</h1>
            <p>Página no encontrada!</p>
            <div className="home__button">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <Button className="btn-404" variant="variant">
                  Volver
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};
