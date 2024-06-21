import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home/Home.tsx";
import Navbar from "./components/Navbar";
import About from "./components/About/About.tsx";
import Project from "./components/Projects/Project.tsx";
import Contact from "./components/Contact/Contact.tsx";

function App() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      // Update state with new sizes
      setScreenSize({
        width: newWidth,
        height: newHeight,
      });

      // Log the screen sizes
      console.log(
        `Width: ${newWidth}px, Height: ${newHeight}px Screen Size: ${screenSize}`
      );
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

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
