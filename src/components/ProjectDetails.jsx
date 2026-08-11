import { Link, useParams } from "react-router-dom";

function ProjectDetails({ projects }) {
  const { id } = useParams();

  const project = projects.find(
    (project) => project.id.toString() === id
  );

  if (!project) {
    return (
      <main className="details-page">
        <h1>Project Not Found</h1>
        <Link to="/">Back to Projects</Link>
      </main>
    );
  }

  return (
    <main className="details-page">
      <h1>{project.title}</h1>

      <p>{project.description}</p>

      <Link to="/">Back to Projects</Link>
    </main>
  );
}

export default ProjectDetails;