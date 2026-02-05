function ProjectCard({ title, description, tech }) {
    return (
        <div className="
        bg-white/5 
        border border-white/10 
        rounded-xl 
        p-6 
        transition-all 
        duration-300 
        hover:-translate-y-2 
        hover:border-blue-400 
        hover:shadow-lg 
        hover:shadow-blue-500/10
      ">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
  
        <p className="text-gray-400 text-sm mb-4">
          {description}
        </p>
  
        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 bg-white/10 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    )
  }
  
  export default ProjectCard