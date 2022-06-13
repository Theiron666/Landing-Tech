import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer__main pt-5">
      <div className="">
        <Container fluid>
          <Row>
            <Col lg={4}>
              <div className="mt-5">
                <h3>Landing Tech</h3>
                <p>En Landing Tech, El cliente siempre tiene la razón.</p>
              </div>
            </Col>

            <Col lg={3}>
              <div className="mt-3">
                <h5 className="mb-3">Contacto</h5>
                <ul>
                  <li className="mb-2">
                    <i className="fa-solid fa-phone ico"></i>
                    <span>1112345678</span>
                  </li>

                  <li className="mb-2">
                    <i className="fa-solid fa-envelope ico"></i>
                    <span>LandingTech@hotmail.com</span>
                  </li>

                  <li className="mb-2">
                    <i className="fa-solid fa-location-dot"></i>
                    <span>Argentina</span>
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={3}>
              <div className="mt-3 text-center">
                <h5 className="mb-3">Servicios</h5>
                <ul>
                  <li className="mb-2">
                    <span>Desarrollo web</span>
                  </li>
                  <li className="mb-2">
                    <span>Aplicaciones mobile</span>
                  </li>
                  <li className="mb-2">
                    <span>Soporte técnico</span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="span-copyright text-center py-3 mt-3">
        © 2022 Copyright Landing Tech
      </div>

      <div className="span-developer text-center py-3">
        <span>{`${"</> Developer Cristian J Martin"}`}</span>
      </div>
    </footer>
  );
};
