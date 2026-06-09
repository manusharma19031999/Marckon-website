// import "./Hero.css";
// import heroVideo from "../../assets/videos/Hero Video.mp4";

// function Hero() {
//   return (
//     <section className="hero">
//       <div className="container">
//         <div className="hero-content">
//           <h1 className="hero-title">Digital Display Excellence.</h1>

//           <p className="hero-subtitle">
//             Showcase your business with stunning installations.
//           </p>
//         </div>

//         <div className="hero-video-wrapper">
//           <video className="hero-video" autoPlay muted loop playsInline preload="auto" fetchpriority="high">
//             <source src={heroVideo} type="video/mp4" />
//           </video>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;

import "./Hero.css";

import heroDesktop from "../../assets/videos/Hero Video.mp4";
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
          <video className="hero-video" autoPlay muted loop playsInline>
            <source src={heroDesktop} type="video/mp4" />
          </video>
        </div>

        {/* Mobile Video */}

        <div className="hero-video-wrapper mobile-video">
          <video className="hero-video" autoPlay muted loop playsInline>
            <source src={heroMobile} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

export default Hero;
