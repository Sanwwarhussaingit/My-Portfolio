import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
function Contact() {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div className="contact-item"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        >
          <a 
          href=""
          target="_blank"
          className="items">
            <FaSquareInstagram className="icons" />
          </a>
          <a 
          target="_blank"
          href=""
          className="items">
            <FaFacebookSquare className="icons" />
          </a>

          <a 
          href=""
          target="_blank"
          className="items">
            <FaLinkedin className="icons" />
          </a>

          <a 
          href=""
          target="_blank"
          className="items">
            <FaSquareXTwitter className="icons" />
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
      </div>
    </>
  );
}

export default Contact;
