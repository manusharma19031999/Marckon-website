import "./Benefits.css";

import { benefits } from "../../data/benefits";

import BenefitCard from "./BenefitCard";
import Reveal from "../Reveal/Reveal";

function Benefits() {
  return (
    <section className="benefits-section">
      <div className="container">
        <Reveal>
          <h2 className="benefits-heading">
            <span>Stand Out. Get Noticed. </span>

            <span className="grow-faster">Grow Faster!</span>
          </h2>
        </Reveal>

        <Reveal>
          <p className="benefits-subtitle">
            ❝ Transform everyday spaces into
            <span className="subtitle-break">
              {" "}
              memorable brand experiences ❞
            </span>
          </p>
        </Reveal>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.id} delay={index * 120}>
              <BenefitCard {...benefit} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
