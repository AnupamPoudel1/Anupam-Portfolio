import Header from "./components/Header";
import Tape from "./components/Tape";
import About from "./pages/About";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";

function App() {

  return (
    <div className="bg-primary text-text antialiased font-primary">
      <Header />
      <Hero />
      <Projects />
      <Tape />
      <Testimonials />
      <About />
    </div>
  )
}

export default App
