import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

function Projects() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/projects")
      .then(res => res.json())
      .then(data => {
        console.log("Projects from backend:", data);
        setProjects(data);
      })
      .catch(err => {
        console.error("Error fetching projects:", err);
      });
  }, []);

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-28 px-6 max-w-7xl mx-auto"
    >

      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-tight">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
            github={project.github}
            live={project.live}
          />
        ))}

      </div>

    </motion.section>
  );
}

export default Projects;