import ProjectCard from "./ProjectCard"
import { motion } from "framer-motion"

function Projects() {
  const projects = [
    {
      title: "Optimized Online Retail Cart",
      description:
        "A full-stack retail cart system with authentication, order management, and admin controls.",
      tech: ["MongoDB", "Express", "React", "Node.js"]
    },
    {
      title: "AI/ML Regression Models",
      description:
        "Implemented regression algorithms to analyze and predict real-world datasets.",
      tech: ["Python", "Pandas", "Scikit-learn"]
    }
  ]

  return (
    <motion.section
  id="projects"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="py-24 px-6 max-w-7xl mx-auto"
>
<h2 className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-tight">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
          />
        ))}
      </div>
    </motion.section>
  )
}

export default Projects