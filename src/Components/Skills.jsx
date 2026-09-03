import { skillGroups } from "../Data/Skills";

function Skills() {
  return (
    <section className="skills-section section" id="skills">
      <div className="container">
        <div className="skills-header">
          <div>
            <span className="section-label">Skills & tools</span>

            <h2 className="skills-heading">
              Tools I use
              <br />
              <span>to build.</span>
            </h2>
          </div>

          <p className="skills-header-text">
            A practical set of technologies I’ve learned through coursework,
            projects and hands-on practice.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.number}>
              <div className="skill-group-top">
                <span>{group.number}</span>

                <span className="skill-group-arrow">↗</span>
              </div>

              <h3>{group.category}</h3>

              <p>{group.description}</p>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="skills-footer">
          <span>Continuous learning</span>

          <div className="skills-footer-line" />

          <span>Always building →</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;