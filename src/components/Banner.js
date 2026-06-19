import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1 className="header-text" style={{ fontSize: '2em' }}>
              Hi there!
              <br />
              I'm Divyamshu Mandadi
            </h1>
          </Col>
          <Col xs={12} md={6} xl={5} className="d-flex justify-content-end">
            <div>
              <p>About Me!</p>
              <button>
                Let's Connect!
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
