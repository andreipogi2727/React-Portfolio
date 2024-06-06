import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Home from "./components/Home/Home.tsx";
import { Link, animateScroll as scroll } from "react-scroll";
import Navbar from "./components/Navbar";
import About from "./components/About/About.tsx";
import Project from "./components/Projects/Project.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Project />
      <section id="contact">
        <h1>Contact</h1>
        <p>Some content...</p>
      </section>
    </>
  );
}

export default App;
