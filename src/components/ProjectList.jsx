import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>

      <p>
        Showing {projects.length} project
        {projects.length !== 1 ? "s" : ""}
      </p>

      {projects.length === 0 ? (
        <p className="no-projects">
          No projects found. Try another search.
        </p>
      ) : (
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProjectList;