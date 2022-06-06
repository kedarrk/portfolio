import './components/Header'
import './App.css';
import "@fontsource/montserrat";
import Header from './components/Header';
import Education from './components/Education';
import Workexperience from './components/Workexperience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
function App() {
  return (
    <>
    {AOS.init()}
    <Header/>
    <div className="main-container" >
    <div className="main-div" id="education"data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="10"
    data-aos-duration="500"
    data-aos-once="true" >
    <Education />
    </div>
    <div className="main-div" id="workex" data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="10"
    data-aos-duration="500"
    data-aos-once="true">
    <Workexperience/>
    </div>
    <div className="main-div" id="skills" data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="10"
    data-aos-duration="500"
    data-aos-once="true">
    <Skills/>
    </div>
    <div className="main-div" id="projects" data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="10"
    data-aos-duration="500"
    data-aos-once="true">
    <Projects />
    </div>
    
    </div>
    <div className="contact-div" id="contact" >
    {/* <div class="custom-shape-divider-bottom-1654104229">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
    <div><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdUWcRyPkad75oJ59RkdHA_a0b_DBaZyXqS4ZxGy9n4-Ps9Gg/viewform?embedded=true" width="400" height="400" frameBorder="0" marginHeight="0" marginWidth="0" className="form">Loading…</iframe></div> */}
   <div className="bot-logo" > <div style={{cursor:"pointer"}}><a href="https://github.com/kedarrk" target="_blank"><img src="https://img.icons8.com/glyph-neue/64/undefined/github.png"  height="40px" width="40px"/></a></div><div style={{cursor:"pointer"}}><a href="https://www.linkedin.com/in/kedar-kadu-1b7a41164/" target="_blank"><img src="https://img.icons8.com/fluency/200/undefined/linkedin.png" height="40px" width="40px"/></a></div></div>
   <div style={{fontFamily:"montserrat",fontSize:"0.5em", color:"black", padding:"10px"}}>Built by Kedar Kadu</div>
    </div>
    
    </>
  );
}

export default App;
