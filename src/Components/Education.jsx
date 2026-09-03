function Education() {
  return (
    <section className="education-section section" id="education">
      <div className="container">
        <div className="education-layout">
          <div className="education-intro">
            <span className="section-label">Education</span>

            <h2 className="education-heading">
              Where my
              <br />
              <span>journey started.</span>
            </h2>

            <p>
              My academic background gave me a foundation in programming,
              databases, artificial intelligence and data science.
            </p>
          </div>

          <div className="education-list">
            <article className="education-item">
              <div className="education-number">01</div>

              <div className="education-content">
                <span className="education-type">Bachelor's Degree</span>

                <h3>
                  B.Tech in Artificial Intelligence & Data Science
                </h3>

                <p className="education-description">
                  Studied programming, databases, data science, artificial
                  intelligence and related technologies.
                </p>

                <div className="education-details">
                  <span>AI & Data Science</span>
                  <span>Engineering</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;