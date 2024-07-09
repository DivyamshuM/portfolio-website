// src/components/Skills.js
import React from "react";
import { skills } from "../data";

export const Skills = () => {
  return (
    <section id="skills" className="skill">
      <div className="container">
        <div className="text-center mb-5">
          <h2>Skills &amp; Technologies</h2>
          <p>

          </p>
        </div>
        <div className="row">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-6 mb-3">
              <div className="d-flex align-items-center rounded p-3" style={{ backgroundColor: '#1d1d1d', border: '1px solid #444' }}>
                <i className="bi bi-check-circle-fill text-success me-3" style={{ fontSize: "1.5rem" }}></i>
                <span className="h5 mb-0">{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



