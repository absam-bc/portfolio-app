import { useState } from "react";

function AddProject({ setProjects }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      return;
    }

    const newProject = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
    };

    setProjects((currentProjects) => {
      return [...currentProjects, newProject];
    });

    setTitle("");
    setDescription("");
  }

  return (
    <section className="add-project">
      <h2>Add a Project</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Project Title
        </label>

        <input
          id="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Enter project title"
        />

        <label htmlFor="description">
          Description
        </label>

        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Enter project description"
        />

        <button type="submit">
          Add Project
        </button>
      </form>
    </section>
  );
}

export default AddProject;