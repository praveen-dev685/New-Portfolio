import React from "react";
import "../pages/HomeContent.css";
import { IoFingerPrintSharp } from "react-icons/io5";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

const HomeContent = () => {
  return (
    <>
      <div className="command-center">
        <div className="head-note">
          <h3>WELCOME TO </h3>
          <h1>DEVELOPER COMMAND CENTER</h1>
          <h4>Explore . Innovate . Secure .</h4>
        </div>
        <div className="content-box">
          <div className="my-note">
            <div className="my-home-content">
              <h1> WHO I AM ?</h1>
              <p>
                Full Stack Developer Passionate about building secure, scalable
                and user friendly web applications.
              </p>
            </div>
            <div className="fingerprint">
              <h1>
                <IoFingerPrintSharp />
              </h1>
            </div>
          </div>
          <div className="mission-note">
            <div className="mission-me">
              <h1>CURRENT MISSION</h1>
              <p>Building digital solutions that make a difference .</p>
            </div>

            <div className="rocket">
              <h1>
                <HiOutlineRocketLaunch />
              </h1>
            </div>
          </div>
          <h3 className="quote">// "Code is not just what I write , it's what I solve ." //</h3>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
