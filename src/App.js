import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Hobbies from "./components/Hobbies/Hobbies";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import ProjectsandContributions from "./components/ProjectsAndContributions/ProjectsandContributions";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Experience />
      <ProjectsandContributions />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
