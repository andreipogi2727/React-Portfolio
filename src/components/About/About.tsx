import React from "react";
import "./about.css";
import reactVideo from "../../assets/react-admin.mp4";

const About = () => {
  const handleClick = () => {
    window.location.href = "https://github.com/your-repo";
  };

  return (
    <div>
      <section className="about" id="about">
        <h1>About Me</h1>
        <p>
          As I conclude my second year at Conestoga College, I am filled with a
          profound sense of accomplishment and excitement for the future. My
          journey in the Software Engineering Technology program has been both
          challenging and rewarding, providing me with a solid foundation in web
          development, programming, and system design. Over the past two years,
          I have honed my skills in various technologies such as JavaScript,
          Python, React, Node.js, C, C++, C#, and MySQL, and have successfully
          applied these skills in numerous academic projects. My coursework has
          also covered crucial topics like object-oriented programming, agile
          development, computer security, and data structures, equipping me with
          a comprehensive understanding of the software development lifecycle.
          Additionally, I have gained some experience in Android Studio and ARM
          assembly, further broadening my technical expertise. This diverse
          skill set has not only enhanced my technical abilities but also
          nurtured my passion for solving complex problems and creating
          user-friendly solutions. As I look ahead to my final year, I am eager
          to further expand my knowledge, engage in more collaborative projects,
          and continue to grow both personally and professionally.
        </p>
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
            <h2 className="title">Other</h2>
            <div className="content">
              <div className="column">
                <div className="item">
                  <span className="symbol">✔</span> Linux
                  <div className="label">Intermediate</div>
                </div>
                <div className="item">
                  <span className="symbol">✔</span> Android
                  <div className="label">Basic</div>
                </div>
                <div className="item">
                  <span className="symbol">✔</span> Security
                  <div className="label">Intermediate</div>
                </div>
              </div>
              <div className="column">
                <div className="item">
                  <div className="symbol">✔</div>Python
                  <div className="label">Intermediate</div>
                </div>
                <div className="item">
                  <div className="symbol">✔</div> ARM
                  <div className="label">Basic</div>
                </div>
                <div className="item">
                  <span className="symbol">✔</span> MongoDB
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
                  <div className="label">Novice</div>
                </div>
                <div className="item">
                  <span className="symbol">✔</span> Php
                  <div className="label">Intermediate</div>
                </div>
              </div>
              <div className="column">
                <div className="item">
                  <div className="symbol">✔</div> C#
                  <div className="label">Intermediate</div>
                </div>
                <div className="item">
                  <div className="symbol">✔</div> .Net
                  <div className="label">Basic</div>
                </div>
                <div className="item">
                  <span className="symbol">✔</span> MySql
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
