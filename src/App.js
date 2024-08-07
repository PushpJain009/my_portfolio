import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Statistics from "./components/Statistics/Statistics";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Statistics />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
