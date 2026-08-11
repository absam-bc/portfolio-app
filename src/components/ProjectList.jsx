import ProjectCard from "./ProjectCard";

function ProjectList({ projects, searchTerm }) {
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="projects-section">
      <h2>Projects</h2>

      {filteredProjects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <div className="project-list">
          {filteredProjects.map((project) => (
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