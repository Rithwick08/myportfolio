function Footer() {
    return (
      <footer className="border-t border-white/10 py-8 px-6 mt-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Rithwick Reddy
          </p>
  
          <p className="text-center">
            Built with React, Tailwind & a bit of patience
          </p>
        </div>
      </footer>
    )
  }
  
  export default Footer