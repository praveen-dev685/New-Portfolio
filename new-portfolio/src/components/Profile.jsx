import React, { useEffect, useRef, useState } from "react";
import { FaClipboardUser } from "react-icons/fa6";
import "../pages/Profile.css";
import { FaLocationDot } from "react-icons/fa6";
import ProfileImage from "../files/pk.jpeg";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { MdEventAvailable } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import Resume from "../files/praveen-resume.pdf";

const Profile = () => {
  const [online, setOnline] = useState();
  const mode = useRef(null);



  function dateVerify() {
    const date = new Date();
    if (date.getHours() >= 22 || date.getHours() <= 6) {
      setOnline(false);
      mode.current.style.color = "red";
    } else {
      setOnline(true);
      mode.current.style.color = "white";
    }
  }

  useEffect(() => {
    dateVerify();
  });

  return (
    <>
      <div className="main-about">
        <div className="our-topic">
          <div className="icon-about">
            <h1>
              <FaClipboardUser />
            </h1>
          </div>
          <div className="about-text">
            <h1>
              About <span>ME</span>
            </h1>
            <h3>Get to know more about me and my journey.</h3>
          </div>
        </div>
        <div className="about">
          <div className="image">
            <img src={ProfileImage} alt="This is my image" loading="lazy" />
          </div>
          <div className="about-me-content">
            <div className="about-para">
              <h1>
                HI , I'M <span>PRAVEEN 👋</span>
              </h1>
              <h3>Full Stack Developer </h3>
              <p>
                A passionate Full Stack Developer with a strong foundation in
                building modern,responsive, and scalable web applications. I
                love turning ideas into real-world solutions through code and
                continuously exploring new technologies.
              </p>
            </div>
            <div className="other-abouts">
              <div className="medias">
                <div className="media-icons">
                  <h1>
                    <FaLocationDot />
                  </h1>
                </div>
                <div className="social-data">
                  <h3>LOCATION</h3>
                  <h4>Chennai,Tamilnadu,India</h4>
                </div>
              </div>
              <div className="medias">
                <div className="media-icons">
                  <h1>
                    <PiSuitcaseSimpleFill />
                  </h1>
                </div>
                <div className="social-data">
                  <h3>EXPERIENCE</h3>
                  <h4>Fresher</h4>
                </div>
              </div>
              <div className="medias">
                <div className="media-icons">
                  <h1>
                    <IoMdMail />
                  </h1>
                </div>
                <div className="social-data">
                  <h3>EMAIL</h3>
                  <h4>praveendeveloper718@gmail.com</h4>
                </div>
              </div>
              <div className="medias">
                <div className="media-icons">
                  <h1>
                    <MdEventAvailable />
                  </h1>
                </div>
                <div className="social-data">
                  <h3>STATUS</h3>
                  <h4 ref={mode}>{online ? "Online" : "Offline"}</h4>
                </div>
              </div>
              <div className="data">
                <div className="media-icons">
                  <a href={Resume} download>
                    <BsDownload /> Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
