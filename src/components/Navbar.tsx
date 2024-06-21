import { Link } from "react-scroll";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="home" className="home-link" smooth={true} duration={500}>
        Andrei <span className="haboc">Haboc</span>
      </Link>
      <div className="links">
        <Link to="about" className="about-link" smooth={true} duration={500}>
          About
        </Link>
        <Link
          to="projects"
          className="projects-link"
          smooth={true}
          duration={500}
        >
          Projects
        </Link>
        <Link
          to="contact"
          className="contact-link"
          smooth={true}
          duration={500}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
