import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const AboutPage = () => {
  return (
    <Container fluid>
      <div className="about text-center">
        <span>
          Somos una empresa encargada de ofrecer servicios informáticos y
          solucionar cualquier problema. <br /> Contamos con los mejores
          profesionales en el área, que implementan las últimas tecnologías
          manteniendo y actualizando el mismo para su correcta funcionalidad.
          <br /> Ofreciendo la mayor seguridad para que no tenga que preocuparse
          de algún tipo de fraude.
        </span>
      </div>

      <Row xs={1} sm={2} md={3} lg={5} className="justify-content-center">
        <Col>
          <div className="icon-section">
            <i className="fa-solid fa-certificate mb-4 mt-3">
              <h3 className="mt-3">Certificado</h3>
            </i>
            <p className="mb-4">
              Contamos con certificados para la correcta implementación de los
              servicios.
            </p>
          </div>
        </Col>

        <Col>
          <div className="icon-section">
            <i className="fa-solid fa-desktop mb-4 mt-3">
              <h3 className="mt-3">Tecnología</h3>
            </i>
            <p className="mb-4">
              El equipo de desarrollo de Landing Tech cuentan con una amplia
              experiencia en distintas tecnologías.
            </p>
          </div>
        </Col>

        <Col>
          <div className="icon-section">
            <i className="fa-solid fa-shield-halved mb-4 mt-3">
              <h3 className="mt-3">Seguridad</h3>
            </i>
            <p className="mb-4">
              Brindamos seguridad de punta a punta, implementando tecnologías que brindan mecanismos de seguridad. 
            </p>
          </div>
        </Col>

        <Col>
          <div className="icon-section">
            <i className="fa-solid fa-comments-dollar mb-4 mt-3">
              <h3 className="mt-3">Costo</h3>
            </i>
            <p className="mb-4">
              En Landing Tech nos adaptamos a diferentes tipos de presupuesto. Siempre dando el mejor servicio. 
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
