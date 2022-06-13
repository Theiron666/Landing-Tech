import React from "react";
import { Button, Card, CardGroup, Row } from "react-bootstrap";

import img0 from "../../assets/card/0.jpg";
import img1 from "../../assets/card/1.png";
import img2 from "../../assets/card/2.jpg";

export const CardsContent = () => {
  return (
    <CardGroup className="card__main">
      <Row
        xs={1}
        sm={2}
        md={3}
        lg={4}
        xl={6}
        className="g-0 m-3 mt-2 justify-content-center"
      >
        <Card
          border="light"
          className="card__home m-3"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1300"
        >
          <Card.Img variant="top" src={img0} />
          <Card.Body>
            <Card.Text className="p p-2">
              Páginas web con diseño responsive para todas las plataformas.
              Llevá tu emprendimiento al sector tecnológico.
            </Card.Text>
          </Card.Body>
          <div className="text-center">
            <Button className="btn-card" variant="m-2 mb-4">
              Ver
            </Button>
          </div>
        </Card>
        <Card
          border="light"
          className="card__home m-3"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1300"
        >
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Text className="p p-2">
              Aplicación movil, ideal para aquellos que ya cuenten con una
              página web y quieran expandir su actividad a otro extremo.
            </Card.Text>
          </Card.Body>
          <div className="text-center ">
            <Button className="btn-card" variant="m-2 mb-4">
              Ver
            </Button>
          </div>
        </Card>
        <Card
          border="light"
          className="card__home m-3"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1300"
        >
          <Card.Img variant="top" src={img2} />
          <Card.Body>
            <Card.Text className="p p-2">
              Es interesante como una página web como puede impactar
              positivamente a su emprendimiento, ya sea para encontrar nuevos
              clientes o tener más presencialidad.
            </Card.Text>
          </Card.Body>
          <div className="text-center">
            <Button className="btn-card" variant="m-2 mb-4">
              Ver
            </Button>
          </div>
        </Card>
      </Row>
    </CardGroup>
  );
};
