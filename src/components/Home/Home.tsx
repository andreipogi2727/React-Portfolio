import React from "react";
import "./home.css";
import Andrei from "../../assets/andrei.jpg";

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="home">
          <div className="leftside">
            <h1>Hi, It's Andrei</h1>
            <h2>I'm a Software Engineering Student</h2>
            <p>
              I am a passionate Developer trying to find a Co-op placement at
              the momment. My future plans are to improve my skills and
              hopefully land a job hehe
              asdasdasdasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
            </p>
          </div>
          <div className="icons">
            <a href="https://github.com/andreipogi2727"></a>
          </div>
          <div className="rightside">
            <img className="picture" src={Andrei}></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
