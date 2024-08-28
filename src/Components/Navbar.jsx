import { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";

function  Navbar() {

  const [isNavOpen,setIsNavOpen]=useState(false)
  const handleNavIcon = ()=>{
    // console.log('chal');
    setIsNavOpen(!isNavOpen);
    

  }



  return (
    <>
      <div className="container nav_bar" 
      data-aos="fade-down"
      data-aos-duration="1000"
      // data-aos-anchor-placement="top-center"
      // data-aos-once="true"
      // data-aos-mirror="true"
      // data-aos-delay="50"
      >
        <div className="left nav_items">SANWWAR HUSSAIN</div>
        <div className={`right ${isNavOpen ? "nav_open" : "" }`} >
          <a href="#home" className="nav_items">Home</a>
          {/* <a href="" className="nav_items">Experience</a> */}
          <a href="#skill" className="nav_items">Skills</a>
          <a href="#project" className="nav_items">Projects</a>
          <a href="#contact" className="nav_items">Contact</a>
        </div>
        <TfiMenuAlt className="nav-icon"  onClick={handleNavIcon} />

      </div>
    </>
  );
}

export default Navbar;
