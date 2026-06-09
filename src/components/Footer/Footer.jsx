import { Link } from "react-router-dom";
import "./Footer.css";

import logo from "../../assets/images/CompanyLogo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Desktop Logo */}

        <div className="footer-logo">
          <img src={logo} alt="Marckon" />
        </div>

        {/* Products */}

        <div className="footer-column">
          <h4>Products</h4>

          <p>Digital Standee</p>
          <p>Wall Display</p>
          <p>Outdoor Display</p>
        </div>

        {/* Company */}

        <div className="footer-column">
          <h4>Company</h4>

          <p>About</p>

          <Link to="/projects">Projects</Link>

          <Link to="/contact">Contact Us</Link>
        </div>

        {/* Support */}

        <div className="footer-column">
          <h4>Support</h4>

          <p>FAQs</p>
          <p>Installation</p>

          <Link to="/contact">Get Quote</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Visioned and Crafted by Manu Sharma</p>

        <p>© All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
