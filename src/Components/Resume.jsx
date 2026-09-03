function Resume() {
  const resumeUrl = `${import.meta.env.BASE_URL}resume/ayush-bisne-resume.pdf`;

  return (
    <section className="resume-section section" id="resume">
      <div className="container">
        <div className="resume-wrapper">
          <div className="resume-number">
            {/* <span>06</span> */}
            <span>Resume</span>
          </div>

          <div className="resume-content">
            <span className="section-label">My resume</span>

            <h2>
              Want to know
              <br />
              <span>more about me?</span>
            </h2>

            <p>
              Explore my education, technical skills, projects and experience
              in a concise resume.
            </p>

            <div className="resume-actions">
              <a
                href="resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-button"
              >
                View Resume
                <span>↗</span>
              </a>

              <a
                href="/resume.pdf"
                download="Ayush-Bisne-Resume.pdf"
                className="resume-button resume-button-outline"
              >
                Download CV
                <span>↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;