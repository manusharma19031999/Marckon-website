import { Link } from "react-router-dom";
import "./CTA.css";

import Reveal from "../Reveal/Reveal";

function CTA() {
  return (
    <section className="cta-section">
      <Reveal>
        <div className="cta-card">
          <h2 className="cta-heading">
            Next Customer Is Already Looking.
            <br />
            Make Sure They See You.
          </h2>

          <p className="cta-subheading">
            Book a Call Today and Leave Impressions
          </p>

          <Link to="/contact" className="cta-button">
            Book a free call ↗
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

export default CTA;
