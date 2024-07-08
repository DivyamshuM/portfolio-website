import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Software Engineer", "Full Stack Developer", "Web Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker); };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1 className="header-text" style={{ fontSize: '2em' }}>
              Hi there!
              <br />
              I'm Divyamshu Mandadi
              <br />
              <span className="wrap" style={{ marginTop: '1em', display: 'block' }}>{text}</span>
            </h1>
          </Col>
          <Col xs={12} md={6} xl={5} className="d-flex justify-content-end">
            <div>
              <p>About Me!</p>
              <p className="text-white">
                Full Stack Developer with 3 years of experience. Expertise in developing scalable web applications using Java, achieving a 20% increase in user engagement. Proficient in HTML5, CSS3, JavaScript / ES6, Angular, and Spring Boot. Proven in database management with MongoDB and MySQL, and deploying applications on GCP and AWS, reducing application downtime by 30%. Developing compliant financial service software, enhancing data security, and improving system performance through collaboration.
              </p>
              <button onClick={() => window.open('https://www.linkedin.com/in/DivyamshuMandadi')}>
                Let's Connect!
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
