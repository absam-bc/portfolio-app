function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <p>
          <strong>Technology:</strong> {project.technology}
        </p>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;