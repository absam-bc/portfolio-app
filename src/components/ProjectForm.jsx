import { useState } from "react";

function ProjectForm({ addProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [technology, setTechnology] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !title ||
      !description ||
      !technology ||
      !image ||
      !link
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const newProject = {
      id: Date.now(),
      title,
      description,
      technology,
      image,
      link,
    };

    addProject(newProject);

    setTitle("");
    setDescription("");
    setTechnology("");
    setImage("");
    setLink("");
  }

  return (
    <section className="form-section">
      <h2>Add a New Project</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <textarea
          placeholder="Project description"
          value={description}
          onChange={(event) =>
            setDescription(event.target.value)
          }
        />

        <input
          type="text"
          placeholder="Technology used"
          value={technology}
          onChange={(event) =>
            setTechnology(event.target.value)
          }
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />

        <input
          type="text"
          placeholder="Project URL"
          value={link}
          onChange={(event) => setLink(event.target.value)}
        />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
}

export default ProjectForm;