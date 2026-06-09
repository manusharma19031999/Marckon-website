import "./Projects.css";

import projectsVideo from "../assets/videos/Projects.mp4";

function Projects() {
  return (
    <section className="projects-page">
      <video
        className="projects-video"
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        <source src={projectsVideo} type="video/mp4" />
      </video>
    </section>
  );
}

export default Projects;
