function ProjectCard({ title, description, tech, github, live }) {
  return (<a
    href={github}
    target="_blank"
    rel="noreferrer"
    className="block group"
  >
    <div
      className="
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
        cursor-pointer
      "
    >
  
      <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-400 transition">
        {title}
      </h3>
  
      <p className="text-gray-400 text-base mb-4 leading-relaxed">
        {description}
      </p>
  
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span
            key={index}
            className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full"
          >
            {item}
          </span>
        ))}
      </div>
  
      <div className="text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition">
        View Project →
      </div>
  
    </div>
  </a>);
}

export default ProjectCard;