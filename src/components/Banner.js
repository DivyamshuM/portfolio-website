import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200);
  const toRotate = ["Full Stack Developer", "Software Engineer", "Web Developer"];
  const period = 1500;

  const tick = useCallback(() => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(100);
    } else {
      setDelta(200);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTimeout(() => {
        setDelta(200);
      }, period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  }, [isDeleting, loopNum, text.length, toRotate, period]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker); };
  }, [delta, tick]);

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
                Full Stack Developer with 3 years of experience. Expertise in developing scalable web applications using Java, Python, C, and C++. Proficient in HTML5, CSS3, JavaScript / ES6, Angular, and Spring Boot. Skilled in database management with MongoDB and MySQL, and deploying applications on GCP, AWS, and Azure. Developing compliant financial service software, enhancing data security, and improving system performance through collaboration.
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
