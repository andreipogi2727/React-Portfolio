import React from "react";
import "./Project.css";
import ProjectBox from "./ProjectBox";
import reactVideo from "../../assets/React-Admin.mp4";

const Project = () => {
  return (
    <div>
      <section id="projects">
        <h2>Checkout some of my personal work</h2>
        <h1>Projects</h1>
        <div className="project-1">
          <div className="project-1-content">
            <h2>babsdfsdfsd</h2>
            <p>
              • Designed and developed a comprehensive admin dashboard using
              React, TypeScript and CSS, showcasing advanced proficiency in
              creating interactive, user-friendly web applications. •
              Implemented reusable box components with interactive charts for
              data visualization, enhancing the dashboard's functionality and
              user engagement. • Integrated advanced features such as row
              selection, column sorting, and item search within a table
              component, demonstrating adeptness in creating sophisticated UI
              components.
            </p>
          </div>
          <ProjectBox src={reactVideo} name="React Admin Dashboard" />
        </div>
        <div className="project-1">
          <ProjectBox src={reactVideo} name="React Admin Dashboard" />
          <div className="project-1-content">
            <h2>babsdfsdfsd</h2>
            <p>
              • Designed and developed a comprehensive admin dashboard using
              React, TypeScript and CSS, showcasing advanced proficiency in
              creating interactive, user-friendly web applications. •
              Implemented reusable box components with interactive charts for
              data visualization, enhancing the dashboard's functionality and
              user engagement. • Integrated advanced features such as row
              selection, column sorting, and item search within a table
              component, demonstrating adeptness in creating sophisticated UI
              components.
            </p>
          </div>
        </div>
        <div className="project-1">
          <div className="project-1-content">
            <h2>babsdfsdfsd</h2>
            <p>
              • Designed and developed a comprehensive admin dashboard using
              React, TypeScript and CSS, showcasing advanced proficiency in
              creating interactive, user-friendly web applications. •
              Implemented reusable box components with interactive charts for
              data visualization, enhancing the dashboard's functionality and
              user engagement. • Integrated advanced features such as row
              selection, column sorting, and item search within a table
              component, demonstrating adeptness in creating sophisticated UI
              components.
            </p>
          </div>
          <ProjectBox src={reactVideo} name="React Admin Dashboard" />
        </div>
      </section>
    </div>
  );
};

export default Project;
