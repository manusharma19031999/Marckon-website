import "./Visualizer.css";
import Reveal from "../Reveal/Reveal";

import visualizerBg from "../../assets/images/Visualizer.png";

function Visualizer() {
  return (
    <Reveal>
      <section className="visualizer-section">
        <img
          src={visualizerBg}
          alt="Digital Display Visualizer"
          className="visualizer-bg"
        />

        <div className="visualizer-content">
          <h2 className="visualizer-title">
            Curious How Your Ad Will Look on a Digital Display?
          </h2>

          <a
            href="https://marckon-visualizer.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="visualizer-btn"
          >
            Try Visualizer ↗
          </a>
        </div>
      </section>
    </Reveal>
  );
}

export default Visualizer;
