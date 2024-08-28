import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
function HomeContact() {
  return (
    <>
        <div className="home-contact-container" data-aos="fade-up-left">
        <a 
          href="https://www.linkedin.com/in/sanwwar-hussain-047430284/"
          target="_blank"
          className="items">
            <FaLinkedin className="icons" />
          </a>

          {/* git */}
          <a 
          href="https://github.com/Sanwwarhussaingit"
          target="_blank"
          className="items">
            <FaGithubSquare className="icons" />
          </a>
          {/* mail */}
          <a 
          href="mailto:sanwwarbca@gmail.com"
          target="_blank"
          className="items">
            <IoMdMailUnread className="icons" />
          </a>
        </div>

      
    </>
  )
}

export default HomeContact
