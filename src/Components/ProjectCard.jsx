function ProjectCard({
  number,
  title,
  category,
  description,
  technologies,
  image,
  github,
  demo,
  featured = false,
}) {
  return (
    <article className={`project-card ${featured ? "project-featured" : ""}`}>
      <div className="project-image-wrapper">
        <img
         src={image}
         alt={`${title} project`}
         className="project-image"
         loading={featured ? "eager" : "lazy"}
         />

        <div className="project-image-overlay">
          <span>{category}</span>
        </div>
      </div>

      <div className="project-card-content">
        <div className="project-card-top">
          <span className="project-number">{number}</span>

          <span className="project-category">{category}</span>
        </div>

        <h3>{title}</h3>

        <p>{description}</p>

        <div className="project-technologies">
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-links">
          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              GitHub
              <span>↗</span>
            </a>
          ) : (
            <span className="project-link project-link-disabled">
              GitHub soon
            </span>
          )}

          {demo ? (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Live Demo
              <span>↗</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;