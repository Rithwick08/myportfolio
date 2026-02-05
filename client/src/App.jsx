import Navbar from "./components/Navbar"
import Intro from "./components/Intro"
import Projects from "./components/Projects"
import About from "./components/About"
import Connect from "./components/Connect"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Intro />
      <Projects />
      <About />
      <Connect/>
      <Footer />
    </div>
  )
}

export default App