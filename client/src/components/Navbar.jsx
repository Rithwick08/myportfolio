function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold tracking-wide">
            rithwickreddy<span className="text-blue-400">.in</span>
          </h1>
  
          <ul className="hidden md:flex gap-8 text-sm font-medium">
  <li>
    <a href="#home" className="hover:text-blue-400 transition-colors duration-200">
      Home
    </a>
  </li>
  <li>
    <a href="#projects" className="hover:text-blue-400 transition-colors duration-200">
      Projects
    </a>
  </li>
  <li>
    <a href="#about" className="hover:text-blue-400 transition-colors duration-200">
      About
    </a>
  </li>
  <li>
  <a href="#contact" className="hover:text-blue-400 transition-colors duration-200">
    Connect
  </a>
</li>
</ul>
        </div>
      </nav>
    )
  }
  
  export default Navbar