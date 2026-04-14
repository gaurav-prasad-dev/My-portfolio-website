import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ProjectsSection from "./components/projectSection";
import TechTime from "./components/TechTime";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />

      <div id="home">
        <HomeSection />
      </div>

      <div id="about" >
        <AboutSection/>
      </div>

      <div id="projects" >
        <ProjectsSection/>
      </div>
 <div>
        <TechTime/>
      </div>
    
      <div id="contact" >
        <ContactSection/>
      </div>

      <Footer/>

       
    </div>
  );
}

export default App;