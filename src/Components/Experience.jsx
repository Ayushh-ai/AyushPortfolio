function Experience() {
  return (
    <section className="experience-section section" id="experience">
      <div className="container">
        <div className="experience-header">
          <span className="section-label">Experience</span>

          <h2 className="experience-heading">
            Learning through
            <br />
            <span>real projects.</span>
          </h2>
        </div>

        <div className="experience-card">
          <div className="experience-meta">
            <span>01</span>
            <span>Internship</span>
          </div>

          <div className="experience-main">
            <h3>Data Analyst Intern</h3>

            <p className="experience-company">
               Inditronics Pvt.Ltd
            </p>

            <p className="experience-description">
              Worked with data-related tasks including data extraction,
              cleaning, analysis and dashboard preparation using tools such as
              Excel and Power BI.
            </p>

            <div className="experience-tags">
              <span>Data Analysis</span>
              <span>Excel</span>
              <span>Power BI</span>
              <span>Data Cleaning</span>
            </div>
          </div>

          <div className="experience-status">
            <span>Hands-on experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;