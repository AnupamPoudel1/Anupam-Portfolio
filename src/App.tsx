import Header from "./components/Header";
import Tape from "./components/Tape";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
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
      <Contact />
      <Footer />
    </div>
  )
}

export default App
