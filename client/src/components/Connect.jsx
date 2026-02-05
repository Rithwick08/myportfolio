import { motion } from "framer-motion"

function Connect() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-28 px-6 max-w-5xl mx-auto text-center"
    >
      <h2 className="text-4xl font-bold mb-6">
        Let’s Connect
      </h2>

      <p className="text-gray-400 mb-12 text-lg">
        Want to collaborate or know more about my work?  
        Reach out through any of the platforms below.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <a
          href="mailto:rithwickreddy@example.com"
          className="px-8 py-4 border border-white/20 rounded-full hover:border-blue-400 hover:text-blue-400 transition"
        >
          Email
        </a>

        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
          className="px-8 py-4 border border-white/20 rounded-full hover:border-blue-400 hover:text-blue-400 transition"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noreferrer"
          className="px-8 py-4 border border-white/20 rounded-full hover:border-blue-400 hover:text-blue-400 transition"
        >
          LinkedIn
        </a>
      </div>
    </motion.section>
  )
}

export default Connect