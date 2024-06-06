import React from "react";

interface Props {
  name: string;
  src: string;
}

const ProjectBox = ({ name, src }: Props) => {
  return (
    <div className="project">
      <div className="project-box">
        <div className="overlay-parent">
          <video src={src} controls autoPlay loop muted></video>
          <div className="overlay">
            <div className="hover-text">
              <a>Go to Repo</a>
            </div>
          </div>
        </div>
        <p className="project-name">{name}</p>
      </div>
    </div>
  );
};

export default ProjectBox;
