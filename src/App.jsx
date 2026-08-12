import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A simple website that shows my projects and skills.",
      technology: "React",
      link: "https://github.com/",
    },
    {
      id: 2,
      title: "E-Commerce Website",
      description:
        "A simple website for displaying and selling products.",
      technology: "HTML, CSS, JavaScript",
      link: "https://github.com/",
    },
    {
      id: 3,
      title: "Blog Website",
      description:
        "A simple blog website where users can read different articles.",
      technology: "React",
      link: "https://github.com/",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  function addProject(newProject) {
    setProjects((currentProjects) => [
      ...currentProjects,
      newProject,
    ]);
  }

  const filteredProjects = projects.filter((project) => {
    const search = searchTerm.toLowerCase();

    return (
      project.title.toLowerCase().includes(search) ||
      project.description.toLowerCase().includes(search) ||
      project.technology.toLowerCase().includes(search)
    );
  });

  return (
    <div className="app">
      <Header />

      <main>
        <section className="hero" id="home">
          <p className="welcome">MY PORTFOLIO</p>

          <h2>Welcome to My Portfolio</h2>

          <p>
            This website shows some of the projects I have
            worked on while learning web development.
          </p>
        </section>

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <ProjectList projects={filteredProjects} />

        <ProjectForm addProject={addProject} />
      </main>

      <footer id="contact">
        <p>© 2026 My Portfolio</p>
      </footer>
    </div>
  );
}

export default App;