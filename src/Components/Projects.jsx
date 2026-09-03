import ProjectCard from "./ProjectCard";
import { projects } from "../Data/Projects";

function Projects() {
  const featuredProject = projects[0];
  const remainingProjects = projects.slice(1);

  return (
    <section className="projects-section section" id="projects">
      <div className="container">

        {/* HEADER */}

        <div className="projects-header">
          <div>
            <span className="section-label">Selected work</span>

            <h2 className="projects-heading">
              Things I’ve
              <br />
              <span>built.</span>
            </h2>
          </div>

          <div className="projects-header-right">
            <p>
              A selection of projects where I’ve worked with software
              development, databases, analytics and machine learning.
            </p>

            <span className="projects-count">
              {String(projects.length).padStart(2, "0")} Projects
            </span>
          </div>
        </div>


        {/* FEATURED PROJECT */}

        <div className="featured-project">
          <ProjectCard
            {...featuredProject}
            featured
          />
        </div>


        {/* OTHER PROJECTS */}

        <div className="projects-grid">
          {remainingProjects.map((project) => (
            <ProjectCard
              key={project.number}
              {...project}
            />
          ))}
        </div>


        {/* FOOTER */}

        <div className="projects-footer">
          <span>Project archive</span>

          <div className="projects-footer-line">
            <span />
          </div>

          <span>More coming soon →</span>
        </div>

      </div>
    </section>
  );
}

export default Projects;