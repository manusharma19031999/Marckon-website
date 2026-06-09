import "./Hero.css";

import heroDesktop from "../../assets/videos/HeroVideo.mp4";
import heroMobile from "../../assets/videos/HeroM.mp4";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Digital Display Excellence.</h1>

          <p className="hero-subtitle">
            Showcase your business with stunning installations.
          </p>
        </div>

        {/* Desktop Video */}

        <div className="hero-video-wrapper desktop-video">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            fetchPriority="high"
          >
            <source src={heroDesktop} type="video/mp4" />
          </video>
        </div>

        {/* Mobile Video */}

        <div className="hero-video-wrapper mobile-video">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            fetchPriority="high"
          >
            <source src={heroMobile} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

export default Hero;
