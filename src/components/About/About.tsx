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
      </section>
    </div>
  );
};

export default About;
