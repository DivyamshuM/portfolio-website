import { Col } from "react-bootstrap";
import githubIcon from "../assets/img/github.svg"; // Make sure you have the correct path to github.svg

export const ProjectCard = ({ title, description, imgUrl, githubLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="proj-links">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub Link" />
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
