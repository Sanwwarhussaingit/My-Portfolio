import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
// import Experience from "./Components/Experience";
import Skill from "./Components/Skill";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Aos  from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(()=>{
    Aos.init();
  },[]);
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Projects />
        <Skill />
        <Contact />
        {/* <Experience /> */}
      </div>
    </>
  );
}
export default App;
