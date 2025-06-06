import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1_image.png";
import projImg2 from "../assets/img/project2_image.png";
import projImg3 from "../assets/img/project3_image.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Smart Task Organizer",
      description: "Node.js, Express.js, React, JavaScript, Tailwind, MongoDB",
      imgUrl: projImg1,
      githubLink: "https://github.com/DivyamshuM/to-do-list-with-friends"
    },
    {
      title: "Employee Management System",
      description: "Java, Spring Boot, React, Bootstrap",
      imgUrl: projImg2,
      githubLink: "https://github.com/DivyamshuM/employee-management-system"
    },
    {
      title: "Library Room Availability",
      description: "JavaScript, Libcal API",
      imgUrl: projImg3,
      githubLink: "https://github.com/DivyamshuM/LibraryRoomAvailability"
    },
  ];

  return (
    <section className="project" id="projects" style={{ backgroundColor: 'black' }}>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};



