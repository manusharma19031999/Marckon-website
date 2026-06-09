import "./AboutCompany.css";

import Reveal from "../Reveal/Reveal";

import companyLogo from "../../assets/images/CompanyLogo.png";
import companyBg from "../../assets/images/CompanyBg.avif";

function AboutCompany() {
  return (
    <Reveal>
      <section className="about-company-section">
        <div
          className="about-company-card"
          style={{
            backgroundImage: `url(${companyBg})`,
          }}
        >
          <div className="about-grid">
            <div className="about-logo-column">
              <img src={companyLogo} alt="Marckon" className="company-logo" />
            </div>

            <div className="about-content-column">
              <h2 className="about-heading">About Our Company</h2>

              <div className="about-content">
                <p>
                  Marckon is a digital display solutions company dedicated to
                  helping businesses communicate more effectively in a
                  digital-first world. We provide a wide range of innovative
                  display solutions, including digital standees, wall-mounted
                  displays, outdoor digital signage, and customized display
                  systems designed to enhance visibility and customer
                  engagement.
                </p>

                <p>
                  As digital signage continues to transform the way
                  organizations connect with their audiences, our mission is to
                  make modern display technology accessible, reliable, and
                  impactful for businesses across industries. From retail stores
                  and corporate offices to hospitality, healthcare, and
                  educational institutions, our solutions help deliver the right
                  message at the right place and time.
                </p>

                <p>
                  Driven by innovation, quality, and customer satisfaction,
                  Marckon is committed to helping businesses create stronger
                  brand experiences, improve communication, and stay ahead in an
                  increasingly connected world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

export default AboutCompany;
