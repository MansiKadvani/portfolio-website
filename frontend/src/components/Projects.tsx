import { useEffect, useState } from "react";
import { getProjects } from "../services/api";

export default function Projects() {

  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    getProjects().then(data => setProjects(data));
  }, []);

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tech">
              {project.technologies?.join(" • ")}
            </p>
            <div className="project-links">
              <a href={project.github}>GitHub</a>
              <a href={project.demo}>Live</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}