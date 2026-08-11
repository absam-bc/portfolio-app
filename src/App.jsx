import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import AddProject from "./components/AddProject";
import ProjectList from "./components/ProjectList";
import ProjectDetails from "./components/ProjectDetails";
import Footer from "./components/Footer";

function App() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <section className="hero">
                <h1>My Project Portfolio</h1>
                <p>
                  Welcome to my project portfolio. Explore the projects
                  I have created.
                </p>
              </section>

              <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />

              <AddProject setProjects={setProjects} />

              <ProjectList
                projects={projects}
                searchTerm={searchTerm}
              />
            </main>
          }
        />

        <Route
          path="/projects/:id"
          element={<ProjectDetails projects={projects} />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;