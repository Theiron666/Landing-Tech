import React from "react";
import Iframe from "react-iframe";

import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";

export const ContactPage = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const { name, email, service, message } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };
  return (
    <>
      <Container fluid>
        <Row lg={2}>
          <div className="form__container mb-5 mt-3">
            <Form
              className="form__main text-center p-4"
              action="#!"
              onSubmit={handleSubmit}
            >
              <p className="h4 mb-3 mt-4">Contacto</p>

              <input
                autoComplete="off"
                className="form-control mb-4 p-2"
                id="defaultContactFormName"
                name="name"
                placeholder="Nombre"
                type="text"
                value={name}
                onChange={handleInputChange}
              />

              <input
                autoComplete="off"
                className="form-control mb-4 p-2"
                id="defaultContactFormEmail"
                name="email"
                placeholder="E-mail"
                value={email}
                type="email"
                onChange={handleInputChange}
              />

              <Form.Select
                aria-label="Default select example"
                className="form-control mb-4 p-2"
                value={service}
                name="service"
                onChange={handleInputChange}
              >
                <option>Servicio</option>
                <option value="Página web">Página web</option>
                <option value="Aplicación Mobile">Aplicación Mobile</option>
                <option value="Aplicación Desktop">Aplicación Desktop</option>
              </Form.Select>

              <div className="form-group">
                <textarea
                  name="message"
                  value={message}
                  type="text"
                  className="form-control  p-2"
                  id="exampleFormControlTextarea2"
                  rows="3"
                  placeholder="Mensaje"
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <Button className="mt-5" type="submit" variant="variant">
                Enviar
              </Button>
            </Form>
          </div>

          <div>
            <Row xs={1} lg={1}>
              <Col xs={6} lg={6}>
                <div className="contact-section text-center">
                  <i className="circle whatsapp fa-brands fa-whatsapp"></i>
                  <h5 className="mt-2">Envianos un Whatsapp</h5>
                  <span>1112346789</span>
                </div>
              </Col>
              <Col xs={6} lg={6}>
                <div className="contact-section text-center">
                  <i className="circle email fa-solid fa-envelope"></i>
                  <h5 className="mt-2">Envianos un mail</h5>
                  <span className="text-center">LandingTech@hotmail.com</span>
                </div>
              </Col>
              
              <Iframe
                className="mt-4 mb-4 px-4"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8623.341794503724!2d-58.38997052441978!3d-34.60523040383349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacf15e9735b%3A0x1cc9e1023f2a8255!2sCarlos%20Pellegrini!5e0!3m2!1ses-419!2sar!4v1650569540987!5m2!1ses-419!2sar"
                width="700"
                height="400"
                loading="lazy"
              />
            </Row>
          </div>
        </Row>
      </Container>
    </>
  );
};
