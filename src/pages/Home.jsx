import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Visualizer from "../components/Visualizer/Visualizer";
import Benefits from "../components/Benefits/Benefits";
import AboutCompany from "../components/About/AboutCompany";
import ProjectCarousel from "../components/ProjectCarousel/ProjectCarousel";
import FAQ from "../components/FAQ/FAQ";
import CTA from "../components/CTA/CTA";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Visualizer />
      <Benefits />
      <AboutCompany />
      <ProjectCarousel />
      <FAQ />
      <CTA />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
