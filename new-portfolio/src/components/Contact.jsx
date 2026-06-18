import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
import "../pages/Contact.css"

const Contact = () => {
  return (
    <>
      <div className="main-contact">
        <div className="in-contact">
          <div className="grid-contact">
            <div className="sub-contact">
              <div className="contact-icon">
                <h2><FaPhoneSquareAlt /></h2>
              </div>
              <div className="contact-content">
                <h3>PHONE</h3>
                <h3>+91 9655384579</h3>
              </div>
            </div>
            <div className="sub-contact">
              <div className="contact-icon">
                <h2><IoMdMail /></h2>
              </div>
              <div className="contact-content">
                <h3>E-MAIL</h3>
                <a href="mailto : praveendeveloper718@gmail.com" className="links">MAIL ME </a>
              </div>
            </div>
            <div className="sub-contact">
              <div className="contact-icon">
                <h2><FaLinkedin /></h2>
              </div>
              <div className="contact-content">
                <h3>LINKEDIN</h3>
                <Link to="http://www.linkedin.com/in/praveen-ke" className="links">FOLLOW AND CONTACT</Link>
              </div>
            </div>
            <div className="sub-contact">
              <div className="contact-icon">
                <h2><BsGithub /></h2>
              </div>
              <div className="contact-content">
                <h3>GITHUB</h3>
                <Link  to="https://github.com/praveen-dev685" className="links">SEE MY PROJECTS</Link>
              </div>
            </div>
            <div className="sub-contact">
              <div className="contact-icon">
                <h2><FaLocationDot /></h2>
              </div>
              <div className="contact-content">
                <h3>LOCATION</h3>
                <h3>CHENNNAI , TAMILNADU</h3>
              </div>
            </div>
            <div className="sub-contact">
              <div className="contact-icon">
                <h2><TfiWorld /></h2>
              </div>
              <div className="contact-content">
                <h3>SEE MY PORTFOLIO</h3>
                <Link to="https://praveen-personals-portfolio.netlify.app/" className="links">PORTFOLIO</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
