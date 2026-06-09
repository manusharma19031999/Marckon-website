import { useEffect, useState } from "react";
import "./ProjectCarousel.css";

import { projects } from "../../data/projects";

function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = projects.length;

  const prevIndex = (currentIndex - 1 + total) % total;

  const nextIndex = (currentIndex + 1) % total;

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 3000);

    return () => clearInterval(interval);
  }, [paused, total]);

  return (
    <section className="project-carousel-section">
      <div
        className="project-carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button
          className="carousel-arrow left"
          onClick={goToPrev}
          aria-label="Previous Project"
        >
          &#10094;
        </button>

        <div className="carousel-track">
          <div className="carousel-side">
            <img src={projects[prevIndex].image} alt="" />
          </div>

          <div className="carousel-main">
            <img
              src={projects[currentIndex].image}
              alt={`Project ${currentIndex + 1}`}
            />
          </div>

          <div className="carousel-side">
            <img src={projects[nextIndex].image} alt="" />
          </div>
        </div>

        <button
          className="carousel-arrow right"
          onClick={goToNext}
          aria-label="Next Project"
        >
          &#10095;
        </button>
      </div>

      <div className="carousel-dots">
        {projects.map((_, index) => (
          <button
            key={index}
            className={index === currentIndex ? "dot active" : "dot"}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectCarousel;
