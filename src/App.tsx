import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home/Home.tsx";
import Navbar from "./components/Navbar";
import About from "./components/About/About.tsx";
import Project from "./components/Projects/Project.tsx";
import Contact from "./components/Contact/Contact.tsx";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
      <div className="footer">
        <p>@Andrei 2024</p>
      </div>
    </div>
  );
}

export default App;
