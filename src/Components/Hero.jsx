import { siteData } from "../Data/Site";
import portraitImage from "../assets/Projects/ayush-portrait.jpg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid" />

      <div className="container hero-content">
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span className="status-dot" />
            Open to IT opportunities
          </div>

          <h1>
            Hi, I'm{" "}
            <span className="hero-name">{siteData.name.split(" ")[0]}</span>
            <br />
            <span className="hero-outline">Aspiring Java Devloper.</span>
          </h1>

          <p className="hero-description">
            {siteData.headline}. I’m interested in Java, SQL, data analytics
            and building practical technology solutions.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              View Projects
              <span>↗</span>
            </a>

            <p>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
              >
                View Resume
              </a>
            </p>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-frame portrait-live">
            {/* <div className="portrait-glow" /> */}

            <img
              src={portraitImage}
              alt="Portrait of Ayush Bisne"
              className="portrait"
            />

            <div className="portrait-badge">
              <span>✦</span>
              Building & Learning
            </div>
          </div>
        </div>
      </div>

      <div className="container hero-bottom">
        <div>
          <span>Based in India</span>
        </div>

        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <span className="scroll-arrow">↓</span>
        </div>

        <div className="hero-socials">
          <a href={siteData.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>

          <a href={siteData.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
