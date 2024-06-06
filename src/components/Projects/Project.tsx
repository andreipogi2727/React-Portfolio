import React from "react";
import "./Project.css";
import ProjectBox from "./ProjectBox";
import reactVideo from "../../assets/Videos/React-Admin.mp4";
import djangoVideo from "../../assets/Videos/Django_Video.mp4";

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
          <ProjectBox
            src={reactVideo}
            name="React Admin Dashboard"
            repo="https://github.com/andreipogi2727/ReactAdmin"
          />
        </div>
        <div className="project-1">
          <ProjectBox
            src={djangoVideo}
            name="Django Blog"
            repo="https://github.com/andreipogi2727/Django_Posts"
          />
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
          <ProjectBox
            src={reactVideo}
            name="Api Journal"
            repo="https://github.com/andreipogi2727/API-Journal"
          />
        </div>
      </section>
    </div>
  );
};

export default Project;
