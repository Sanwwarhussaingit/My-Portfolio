import { useEffect, useRef } from "react";
import pdf from "../pdf/MyRESUME.pdf";

// import "aos/dist/aos.css";

// import hero from "./Data/hero.json";
import Typed from "typed.js";
import HomeContact from "./HomeContact";

function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "welcome to my portfolio",
        "Frontend Develeper",
        "Responsive Design",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      // showCursor: false
    };

    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
    <HomeContact/>
      <div className="container home" id="home">

        <div className="objective" data-aos="zoom-in-up" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>
          <p>
            I am a passionate and dedicated frontend developer with a strong foundation in HTML, CSS, and JavaScript. I have experience working with various front-end frameworks such as React, Angular, and Vue.js. I am skilled in responsive design and cross-browser compatibility. I am always eager to learn new technologies and contribute to the community.
          </p>
          <a
            href={pdf}
            download="resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        {/* <div className="right" data-aos="fade-up-left" data-aos-duration="1000">
          <div className="img">
            <img src={`/assets/${hero.imgSrc}`} alt="image" />
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Home;
