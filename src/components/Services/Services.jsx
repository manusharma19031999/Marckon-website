import "./Services.css";

import { services } from "../../data/services";

import ServiceCard from "./ServiceCard";
import Reveal from "../Reveal/Reveal";

function Services() {
  return (
    <section className="services-section">
      <div className="container">
        <Reveal>
          <h2 className="services-heading">Our Versatile Range</h2>
        </Reveal>

        <div className="services-grid">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 150}>
              <ServiceCard
                image={service.image}
                title={service.title}
                description={service.description}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
