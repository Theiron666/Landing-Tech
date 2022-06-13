import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-scroll";

import { AboutPage } from "./AboutPage";
import { ContactPage } from "./ContactPage";
import { CardsContent } from "../card/CardsContent";

import img0 from "../../assets/carousel/0.jpg";
import img1 from "../../assets/main/main.png";
import img2 from "../../assets/carousel/1.jpg";

export const HomePage = () => {
  return (
    <>
      <div className="home__main">
        <Container fluid>
          <Row xs={ 1 } sm={ 1 } md={ 2 }>
            <Col lg={ 6 }>
              <div className="home__text__section">
                <h1 className="animate__animated animate__fadeInLeft">
                  Bienvenido a Landing Tech
                </h1>
                <p className="animate__animated animate__fadeIn">
                  Si estás necesitando tu propio sitio web, estás en el lugar{" "}
                  indicado, contamos <br /> con los mejores profesionales
                  utilizando las últimas tecnologías ya sea para aplicaciones de
                  escritorio, mobile y webs. <br /> Si estás interesado no dudes
                  en contactarnos.
                </p>

                <div className="home__button">
                  <Link
                    to="contact"
                    spy={ true }
                    smooth={ true }
                    offset={ 50 }
                    duration={ 500 }
                  >
                    <Button className="btn-1" variant="variant">
                      Contactar
                    </Button>{" "}
                  </Link>
                  <Button className="btn-learn-more" variant="outline">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Ver más</span>
                  </Button>{" "}
                </div>
              </div>
            </Col>

            <Col xs={ 12 } md={ 6 } lg={ 6 }>
              <div className="home__banner animate__animated animate__pulse">
                <img src={ img1 } alt="" />
              </div>
            </Col>
          </Row>

          <div className="icon-arrow mt-2 home__arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="50"
              fill="currentColor"
              className="bi bi-arrow-down-short"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
            </svg>
          </div>
        </Container>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
          <path
            fill="#e8e8e8"
            d="M0,0L80,10.7C160,21,320,43,480,74.7C640,107,800,149,960,144C1120,139,1280,85,1360,58.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="slider text-center p-5">
        <h2 className="text-dark">Nuestros servicios</h2>
      </div>

      <CardsContent />

      <div className="slider" id="about">
        <img src={ img2 } alt="" />
        <h2>Nosotros</h2>
      </div>

      <AboutPage />

      <div className="slider" id="contact">
        <img src={ img0 } alt="" />
        <h2>Contactanos</h2>
      </div>

      <div className="text-banner text-center mt-5">
        <h5>!Pedí tu presupuesto ahora mismo!</h5>
      </div>

      <ContactPage />
    </>
  );
};
