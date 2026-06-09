import "./Hero.css";

// import heroDesktop from "../../../public/Hero Video.mp4";
// import heroMobile from "../../../public/HeroM.mp4";

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

        {/* <div className="hero-video-wrapper desktop-video"> */}
        <div className="hero-video-wrapper ">
          {/* <video className="hero-video" autoPlay muted loop playsInline>
            <source src={heroDesktop} type="video/mp4" />
          </video>
        </div> */}

          {/* Mobile Video */}

          {/* <div className="hero-video-wrapper mobile-video">
          <video className="hero-video" autoPlay muted loop playsInline>
            <source src={heroMobile} type="video/mp4" />
          </video> */}

          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            fetchPriority="high"
          >
            <source
              media="(max-width: 768px)"
              // src={heroMobile}
              src="/videos/HeroM.mp4"
              type="video/mp4"
            />

            <source
              media="(min-width: 769px)"
              // src={heroDesktop}
              src="/videos/Hero Video.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
}

export default Hero;
