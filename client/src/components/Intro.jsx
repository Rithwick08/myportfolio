import { useEffect } from "react"

function Intro() {
  useEffect(() => {
    console.log("Intro component loaded");

    fetch("http://127.0.0.1:5000/api/test")
      .then(res => res.json())
      .then(data => {
        console.log("Backend response:", data);
      })
      .catch(err => {
        console.error("Fetch error:", err);
      });

  }, []);

    return (
        <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-32"
      >
        <div className="text-center max-w-3xl">
          <p className="text-blue-400 text-sm uppercase tracking-widest mb-4">
            MERN Stack Developer
          </p>
  
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Hi, I’m <span className="text-blue-400">Rithwick</span>
          </h1>
  
          <p className="mt-6 text-gray-400 text-lg">
            I build modern web applications using MongoDB, Express, React, and Node.js.
            Passionate about clean UI, scalable backend, and real-world projects.
          </p>
  
          <div className="mt-10 flex gap-6 justify-center">
          <a
  href="#projects"
  className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold transition hover:scale-105"
>
  View Projects
</a>

<a
  href="#contact"
  className="px-8 py-3 border border-white/30 hover:border-white rounded-full font-semibold transition hover:scale-105"
>
  Contact Me
</a>
          </div>
        </div>
      </section>
    )
  }
  
  export default Intro