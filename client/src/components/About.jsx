import { motion } from "framer-motion"

function About() {
    return (
        <motion.section
        id="about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-24 px-6 max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-tight">
          About Me
        </h2>
  
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT: Text */}
          <div className="space-y-6 text-gray-400 text-[17px] leading-relaxed">
          <p>
  I’m a Computer Science Engineer focused on building full-stack applications
  using the MERN stack, with hands-on experience in developing and working
  with AI/ML models.
</p>

<p>
  I focus on writing structured, maintainable code and building systems that
  scale well. I enjoy understanding how things work under the hood and
  continuously improving the performance and usability of my applications.
</p>
          </div>
  
          {/* RIGHT: Highlights */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-4">
            <div> MERN Stack Developer</div>
            <div> AI & ML Foundations</div>
            <div> Real-world Projects</div>
            <div> Based in India</div>
          </div>
        </div>
      </motion.section>
    )
  }
  
  export default About