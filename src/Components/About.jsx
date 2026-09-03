function About() {
  return (
    <section className="about-section section" id="about">
      <div className="container">
        <div className="about-top">
          <span className="section-label">About me</span>

          <div className="about-heading-wrap">
            <h2 className="about-heading">
              I’m an AI & Data Science
              <br />
              graduate who enjoys
              <br />
              <span>building practical solutions.</span>
            </h2>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-intro">
            <p className="about-lead">
              I’m Ayush Bisne, a B.Tech graduate in Artificial Intelligence &
              Data Science with an interest in software development, data
              analytics and technology.
            </p>

            <p>
              I enjoy understanding problems, working with information and
              turning ideas into practical solutions. My learning journey has
              given me exposure to Java, SQL, Python, Power BI, Excel,
              databases and software testing.
            </p>

            <p>
              As a fresher, I’m looking for an opportunity where I can
              contribute to real-world projects, learn from experienced
              professionals and continue growing as an IT professional.
            </p>
          </div>

          <div className="about-cards">
            <div className="about-card">
              <span className="about-card-number">01</span>

              <div>
                <span className="about-card-label">Education</span>
                <h3>B.Tech</h3>
                <p>Artificial Intelligence & Data Science</p>
              </div>
            </div>

            <div className="about-card">
              <span className="about-card-number">02</span>

              <div>
                <span className="about-card-label">Current focus</span>
                <h3>IT & Technology</h3>
                <p>Java · SQL · Analytics · Testing</p>
              </div>
            </div>

            <div className="about-card">
              <span className="about-card-number">03</span>

              <div>
                <span className="about-card-label">Approach</span>
                <h3>Learn → Build</h3>
                <p>Practical projects and continuous learning</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-bottom">
          <span>01 / 06</span>

          <div className="about-line">
            <span />
          </div>

          <span>Keep exploring ↓</span>
        </div>
      </div>
    </section>
  );
}

export default About;