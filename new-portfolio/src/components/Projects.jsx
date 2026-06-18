import React, { useRef, useState } from "react";
import Authentication from "../files/Authentication.png";
import Portfolio from "../files/Portfolio.png";
import JavascriptProjectsCollection from "../files/Javascript Projects Collection.png";
import PythonProjectsCollections from "../files/Python Projects Collection.png";
import HouseSalesandRentalWebsite from "../files/House Sales and Rental Website.png";
import TamilnaduCultureWebsite from "../files/Tamilnadu Culture Website.png";
import "../pages/Projects.css";

const Projects = () => {


 

  const [values, setValue] = useState([
    {
      img: Authentication,
      projectName: "Authentication",
      description:
        "A secure user authentication system that allows users to register, log in, and manage their accounts safely. It includes authentication validation and protected access control features.",
    },
    {
      img: Portfolio,
      projectName: "Portfolio",
      description:
        "A personal portfolio website showcasing skills, projects, certificates, and contact information. Designed to highlight professional experience and technical expertise.",
    },
    {
      img: JavascriptProjectsCollection,
      projectName: "Javascript Projects Collection",
      description:
        "A collection of JavaScript projects demonstrating DOM manipulation, event handling, and interactive web features. Built to strengthen core JavaScript development skills.",
    },
    {
      img: PythonProjectsCollections,
      projectName: "Python Projects Collections",
      description:
        "A collection of Python applications covering problem solving, automation, and object-oriented programming concepts. Developed to improve backend and programming fundamentals.",
    },
    {
      img: HouseSalesandRentalWebsite,
      projectName: "House Sales and Rental Website",
      description:
        "A real estate website that helps users browse houses available for sale and rent. Features property listings, details, and a user-friendly interface.",
    },
    {
      img: TamilnaduCultureWebsite,
      projectName: "Tamilnadu Culture Website",
      description:
        "A cultural website presenting the traditions, festivals, food, and heritage of Tamil Nadu. Designed to educate users about the state's rich cultural identity.",
    },
    {
      img: TamilnaduCultureWebsite,
      projectName: "Tamilnadu Culture Website",
      description:
        "A cultural website presenting the traditions, festivals, food, and heritage of Tamil Nadu. Designed to educate users about the state's rich cultural identity.",
    },
  ]);
  const [num, setNum] = useState(0);
  if (values.length - 1 == num) {
    setNum(0);
  }

  return (
    <>
      <div className="main-project-box">
        <div className="val">
          <div className="project-box">
            <img src={values[num].img} alt="" loading="lazy" />
            <h3>{values[num].projectName}</h3>
            <h3>{values[num].description}</h3>
          </div>
          <button onClick={() => setNum(num + 1)}>Next</button>
        </div>
      </div>
    </>
  );
};

export default Projects;
