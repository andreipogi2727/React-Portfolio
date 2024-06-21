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
            <hr></hr>
            <div className="technologies-content">
              <span className="technologies">React</span>
              <span className="technologies">TypeScript</span>
              <span className="technologies">CSS</span>
              <span className="technologies">Recharts</span>
            </div>
            <p>
              Designed and developed a comprehensive admin dashboard,
              demonstrating advanced proficiency in creating interactive,
              user-friendly web applications. Implemented reusable components
              with interactive charts for data visualization, significantly
              enhancing the dashboard's functionality and user engagement.
              Integrated advanced features such as row selection, column
              sorting, and item search within a table component, showcasing
              adeptness in creating sophisticated and intuitive UI components.
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
            <hr></hr>
            <div className="technologies-content">
              <span className="technologies">Python</span>
              <span className="technologies">Django</span>
              <span className="technologies">JavaScript</span>
              <span className="technologies">CSS</span>
              <span className="technologies">Bootstrap</span>
            </div>
            <p>
              This project is a comprehensive blog application designed to
              provide a clean, responsive, and user-friendly interface. The blog
              leverages dynamic content rendering and efficient backend logic to
              deliver a seamless user experience. Users can create, read,
              update, and delete blog posts asynchronously using AJAX, enhancing
              the user experience by avoiding full page reloads. The application
              effectively combines functionality and aesthetics to ensure an
              engaging and smooth user interaction.
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="project-1">
          <div className="project-1-content">
            <h2>Api Journal</h2>
            <hr></hr>
            <div className="technologies-content">
              <span className="technologies">JavaScript</span>
              <span className="technologies">NodeJs</span>
              <span className="technologies">CSS</span>
              <span className="technologies">MongoDB</span>
              <span className="technologies">Express</span>
              <span className="technologies">jQuery</span>
            </div>
            <p>
              This full-stack web application allows users to effortlessly
              record and store their journal entries through an intuitive
              interface. Leveraging a RESTful architecture and JSON for data
              interchange, it provides a secure environment for storing past
              entries, ensuring easy and convenient access. The platform employs
              AJAX for smooth, asynchronous operations, offering a sleek and
              responsive design. This journal application delivers a seamless
              and engaging experience, enabling users to reflect on their
              thoughts and experiences with ease.
            </p>
          </div>
          <ProjectBox
            src={apiJournal}
            name="Api Journal"
            repo="https://github.com/andreipogi2727/API-Journal"
          />
        </div>
        <hr></hr>
        <div className="no-video">
          <div className="project-1">
            <div className="project-1-content">
              <h2>Transport Management System</h2>
              <hr></hr>
              <div className="technologies-content">
                <span className="technologies">C#</span>
                <span className="technologies">WPF</span>
                <span className="technologies">MySql</span>
              </div>
              <p>
                Developed a comprehensive Transport Management System,
                integrating live generated values from a remote client database.
                This system serves as a crucial intermediary between clients and
                carriers, facilitating efficient logistics management. Key
                features include advanced security measures such as password
                hashing, ensuring robust data protection. The project was
                meticulously planned using UML, implementing a clear structure
                for scalability and maintenance. The system includes a
                sophisticated user management system with three-tier user
                groups, ensuring role-based access control. Additionally, a
                client invoicing feature was integrated to streamline billing
                processes. The project was developed following the MVVM pattern
                to separate the presentation layer from the business logic,
                enhancing maintainability and testability. Agile Methodology was
                employed throughout development, ensuring continuous improvement
                and client feedback integration. Test-Driven Development
                practices were utilized to guarantee system reliability and
                reduce bugs. This project not only demonstrates expertise in
                security, architectural design, and agile software development
                practices but also showcases a commitment to delivering
                efficient logistics solutions.
              </p>
            </div>
          </div>
          <div className="project-1">
            <div className="project-1-content">
              <h2>Portfolio Website</h2>
              <hr></hr>
              <div className="technologies-content">
                <span className="technologies">React</span>
                <span className="technologies">TypeScript</span>
                <span className="technologies">CSS</span>
              </div>
              <p>
                Welcome to my personal portfolio! This project helped me to
                further enhance my skills in frontend development, allowing me
                to create a seamless user interface with easy navigation and
                interaction. Leveraging React's component-based architecture, I
                designed an intuitive layout that ensures a professional and
                modern user experience. TypeScript adds an extra layer of type
                safety and code readability, making the application robust and
                maintainable. The responsive design, crafted with CSS, ensures
                accessibility across various devices and screen sizes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
