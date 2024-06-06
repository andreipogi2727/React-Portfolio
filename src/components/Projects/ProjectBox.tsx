import React from "react";
import newTab from "../../assets/resize.png";
import "./Project.css";

interface Props {
  name: string;
  src: string;
  repo: string;
}

const ProjectBox: React.FC<Props> = ({ name, src, repo }) => {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    const newWindow = window.open(repo, "_blank");
    if (newWindow) {
      newWindow.opener = null; // Ensures no access to window.opener
    }
  };

  return (
    <div className="project">
      <div className="project-box">
        <div className="overlay-parent">
          <video src={src} controls autoPlay loop muted></video>
          <div className="overlay">
            <div className="hover-text">
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
              >
                <div className="click-github-container">
                  <span>Github Link</span>
                  <img className="click-github" src={newTab} />
                </div>
              </a>
            </div>
          </div>
        </div>
        <p className="project-name">{name}</p>
      </div>
    </div>
  );
};

export default ProjectBox;
