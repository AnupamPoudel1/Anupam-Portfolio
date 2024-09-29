import Header from "./components/Header";
import Tape from "./components/Tape";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";

function App() {

  return (
    <div className="bg-primary text-text antialiased font-primary">
      <Header />
      <Hero />
      <Projects />
      <Tape />
    </div>
  )
}

export default App
