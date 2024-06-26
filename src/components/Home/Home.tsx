import "./home.css";
import Andrei from "../../assets/andrei.jpg";
import Github from "../../assets/github.png";
import Linkedin from "../../assets/linkedin-logo.png";

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="home">
          <div className="leftside">
            <h1>
              Hi, <span className="text-animation"></span>
            </h1>
            <h2>I'm a Software Engineering Student</h2>
            <p>
              I am a passionate Software Engineering student just finished my
              2nd year.
            </p>
            <div className="icons">
              <a href="https://github.com/andreipogi2727">
                <img src={Github}></img>
              </a>
              <a href="https://www.linkedin.com/in/andrei-haboc-7b8583291/">
                <img src={Linkedin}></img>
              </a>
            </div>
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
