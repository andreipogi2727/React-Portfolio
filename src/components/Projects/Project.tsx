import React from "react";
import "./Project.css";
import ProjectBox from "./ProjectBox";
import reactVideo from "../../assets/Videos/React-Admin.mp4";
import djangoVideo from "../../assets/Videos/Django_Video.mp4";
import apiJournal from "../../assets/Videos/Api Journal.mp4";

const Project = () => {
  return (
    <div>
      <section id="projects">
        <h2>Checkout some of my personal work</h2>
        <h1>Projects</h1>
        <div className="project-1">
          <div className="project-1-content">
            <h2>React Admin Dashboard</h2>
            <p>Technologies: React, TypeScript, and Css</p>
            <p>
              Designed and developed a comprehensive admin dashboard using
              React, TypeScript and CSS, showcasing advanced proficiency in
              creating interactive, user-friendly web applications. Implemented
              reusable box components with interactive charts for data
              visualization, enhancing the dashboard's functionality and user
              engagement.Integrated advanced features such as row selection,
              column sorting, and item search within a table component,
              demonstrating adeptness in creating sophisticated UI components.
            </p>
          </div>
          <div>
            <ProjectBox
              src={reactVideo}
              name="React Admin Dashboard"
              repo="https://github.com/andreipogi2727/ReactAdmin"
            />
          </div>
        </div>
        <hr></hr>
        <div className="project-1">
          <ProjectBox
            src={djangoVideo}
            name="Django Blog"
            repo="https://github.com/andreipogi2727/Django_Posts"
          />
          <div className="project-1-content">
            <h2>Django Blog</h2>
            <p>
              This project is a comprehensive blog application developed using
              Django, a high-level Python web framework, Bootstrap, a popular
              front-end toolkit, and AJAX for asynchronous operations. The blog
              is designed to provide a clean, responsive, and user-friendly
              interface, while leveraging Django templates for dynamic content
              rendering and backend logic. Allows users to create, read, update,
              and delete blog posts asynchronously using AJAX, enhancing the
              user experience by avoiding full page reloads.
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="project-1">
          <div className="project-1-content">
            <h2>Api Journal</h2>
            <p>
              Full-stack web application powered by JavaScript, JSON, jQuery,
              HTML, CSS, and Node.js. This dynamic platform enables users to
              effortlessly record and store their journal entries via an
              intuitive interface. Leveraging MongoDB as the database, users can
              securely store their past entries and conveniently access them
              whenever needed. With a sleek and responsive design, this RESTful
              API Journal offers a seamless journaling experience, allowing
              users to reflect on their thoughts and experiences with ease
            </p>
          </div>
          <ProjectBox
            src={apiJournal}
            name="Api Journal"
            repo="https://github.com/andreipogi2727/API-Journal"
          />
        </div>
        <hr></hr>
      </section>
    </div>
  );
};

export default Project;
