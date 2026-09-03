import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import FocusAreas from "./Components/FocusAreas";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <FocusAreas />

        <About />

        <Skills />

        <Experience />

        <Education />

        <Projects />

        <Resume />

        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;