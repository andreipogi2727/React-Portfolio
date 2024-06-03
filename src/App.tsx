import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Home from "./components/Home/Home.tsx";
import { Link, animateScroll as scroll } from "react-scroll";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="content">
        <Home />
        <br /> <br />
        <section id="about">
          <h1>About</h1>
          <p>Some content...</p>
        </section>
        <section id="services">
          <h1>Services</h1>
          <p>Some content...</p>
        </section>
        <section id="contact">
          <h1>Contact</h1>
          <p>Some content...</p>
        </section>
      </div>
    </>
  );
}

export default App;
