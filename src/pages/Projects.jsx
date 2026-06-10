import "./Projects.css";

// import projectsVideo from "../assets/videos/Projects.mp4";

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
        <source
          src="https://res.cloudinary.com/dfiy7bfoe/video/upload/q_auto/f_auto/v1781073111/Projects_j2gws4.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  );
}

export default Projects;
