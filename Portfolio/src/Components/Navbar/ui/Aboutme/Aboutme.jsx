import React from "react";
import './Aboutme.css'
const Aboutme = () => {
  return (
    <>
      <div className="aboutwrapper">
        <div className="intro">
          <h2>About Me</h2>
          <p>
            I'm Muhammad Sudais — a self-taught frontend developer focused on
            building modern, responsive web applications with React.I enjoy
            turning ideas into clean, functional interfaces with strong
            attention to detail, usability, and performance.
          </p>
        </div>
        <div className="Education">
          <h2>Education</h2>
          <ul>
            <li>
              <strong>BS Software Engineering</strong>
              <br />
              Abdul Wali Khan University (2024 – 2028)
            </li>

            <li>
              <strong>Intermediate in Computer Science</strong>
              <br />
              The Himalaya College (2022 – 2024)
            </li>

            <li>
              <strong>Matriculation</strong>
              <br />
              The Lighthouse School System (2021 – 2022)
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
