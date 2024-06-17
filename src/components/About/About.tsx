import React from "react";
import "./about.css";
import reactVideo from "../../assets/react-admin.mp4";

const About = () => {
  const handleClick = () => {
    window.location.href = "https://github.com/your-repo";
  };

  return (
    <div>
      <section id="about">
        <h1>About Me</h1>
        <p>
          Hello I am Andrei I am a student at Conestoga College. Just finishing
          2nd year I've learned different tecniques, front-end and back-end
          languages, computer security, and many more.
        </p>
        <h3>asdsadsa</h3>
        <h2>Technical Skills</h2>
        <div className="skills-container">
          <div className="box">
            <h2 className="title">Frontend Developer</h2>
            <div className="content">
              <div className="column">
                <div className="item">
                  <span className="symbol">✔</span> CSS
                  <div className="label">Intermediate</div>
                </div>
                <div className="item">
                  <span className="symbol">✔</span> JavaScript
                  <div className="label">Intermediate</div>
                </div>
                <div className="item">
                  <span className="symbol">✔</span> Git
                  <div className="label">Intermediate</div>
                </div>
              </div>
              <div className="column">
                <div className="item">
                  <div className="symbol">✔</div> HTML
                  <div className="label">Intermediate</div>
                </div>
                <div className="item">
                  <div className="symbol">✔</div> Bootstrap
                  <div className="label">Intermediate</div>
                </div>
                <div className="item">
                  <span className="symbol">✔</span> React
                  <div className="label">Intermediate</div>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <h2 className="title">Backend Developer</h2>
            <div className="content">
              <div className="column">
                <div className="item">
                  <span className="symbol">✔</span> C/C++
                  <div className="label">Intermediate</div>
                </div>
                <div className="item">
                  <span className="symbol">✔</span> NodeJs
                  <div className="label">Basic</div>
                </div>
                <div className="item">
                  <span className="symbol">✔</span> Python
                  <div className="label">Intermediate</div>
                </div>
              </div>
              <div className="column">
                <div className="item">
                  <div className="symbol">✔</div> HTML
                  <div className="label">Intermediate</div>
                </div>
                <div className="item">
                  <div className="symbol">✔</div> Bootstrap
                  <div className="label">Intermediate</div>
                </div>
                <div className="item">
                  <span className="symbol">✔</span> React
                  <div className="label">Intermediate</div>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <h2 className="title">Backend Developer</h2>
            <div className="content">
              <div className="column">
                <div className="item">
                  <span className="symbol">✔</span> C/C++
                  <div className="label">Intermediate</div>
                </div>
                <div className="item">
                  <span className="symbol">✔</span> NodeJs
                  <div className="label">Basic</div>
                </div>
                <div className="item">
                  <span className="symbol">✔</span> Python
                  <div className="label">Intermediate</div>
                </div>
              </div>
              <div className="column">
                <div className="item">
                  <div className="symbol">✔</div> HTML
                  <div className="label">Intermediate</div>
                </div>
                <div className="item">
                  <div className="symbol">✔</div> Bootstrap
                  <div className="label">Intermediate</div>
                </div>
                <div className="item">
                  <span className="symbol">✔</span> React
                  <div className="label">Intermediate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
