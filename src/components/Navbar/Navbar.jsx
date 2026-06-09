import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo">
          MARCKON
        </Link>

        <nav className="desktop-nav">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>

        <Link to="/contact" className="quote-btn">
          Get Quote
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
