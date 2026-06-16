import React from "react";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { VscVscode } from "react-icons/vsc";
import { SiNotion } from "react-icons/si";
import { SiGithubcopilot } from "react-icons/si";
import "../pages/Skills.css";

const Skills = () => {
  const colors = [
    { name: "HTML", color: "#E34F26" },
    { name: "CSS", color: "#663399" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "React", color: "#61DAFB" },
    { name: "Python", color: "#3776AB" },
    { name: "Django", color: "#09fc09" },
    { name: "API", color: "#FF6C37" },
    { name: "MySQL", color: "#4479A1" },
    { name: "VS Code", color: "#007ACC" },

  ];

  return (
    <>
      <div className="main-skills-box">
        <h1>MY SKILLS</h1>
        <div className="skills-box">
          <div className="frontend-box">
            <div className="front-skills">
              <div className="frontend-icon">
                <h1 title="HTML">
                  <IoLogoHtml5 style={colors[0]}/>
                </h1>
              </div>
            </div>
            <div className="front-skills">
              <div className="frontend-icon">
                <h1 title="CSS">
                  <FaCss3Alt style={colors[1]} />
                </h1>
              </div>
            </div>
            <div className="front-skills">
              <div className="frontend-icon">
                <h1 title="JAVASCRIPT">
                  <SiJavascript style={colors[2]} />
                </h1>
              </div>
            </div>
            <div className="front-skills">
              <div className="frontend-icon">
                <h1 title="REACT JS">
                  <FaReact style={colors[3]} />
                </h1>
              </div>
            </div>
          </div>
          <div className="backend-box">
            <div className="backend-skills">
              <div className="backend-icon">
                <h1 title="PYTHON">
                  <SiPython style={colors[4]} />
                </h1>
              </div>
            </div>
            <div className="backend-skills">
              <div className="backend-icon">
                <h1 title="DJNAGO">
                  <DiDjango style={colors[5]}/>
                </h1>
              </div>
            </div>
            <div className="backend-skills">
              <div className="backend-icon">
                <h1 title="REST API">
                  <TbApi style={colors[6]}/>
                </h1>
              </div>
            </div>
            <div className="backend-skills">
              <div className="backend-icon">
                <h1 title="MYSQL">
                  <SiMysql style={colors[7]} />
                </h1>
              </div>
            </div>
          </div>
          <div className="tools-box">
            <div className="tools-skills">
              <div className="tools-icon">
                <h1 title="GITHUB">
                  <BsGithub />
                </h1>
              </div>
            </div>
            <div className="tools-skills">
              <div className="tools-icon">
                <h1 title="VISUAL STUDIO CODE">
                  <VscVscode style={colors[8]} />
                </h1>
              </div>
            </div>
            <div className="tools-skills">
              <div className="tools-icon">
                <h1 title="NOTION">
                  <SiNotion/>
                </h1>
              </div>
            </div>
            <div className="tools-skills">
              <div className="tools-icon">
                <h1 title="GITHUB CO-PILOT">
                  <SiGithubcopilot />
                </h1>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Skills;
