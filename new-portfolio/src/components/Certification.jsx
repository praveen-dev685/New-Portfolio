import React, { useRef, useState } from "react";
import HackerrankPython from "../files/hpy.jpeg"
import Hackerrankcss from "../files/hcss1.jpeg"
import Udemypython from "../files/upy.jpeg"
import Udemyjavascript from "../files/ujs.png"
import "../pages/Certification.css";

const Projects = () => {


 

  const [certificatesValues, setCertificateValues] = useState([
    {
      img: HackerrankPython,
      projectName: "Hackerrank Python",
    },
    {
      img: Hackerrankcss,
      projectName: "Hackerrank css",
     
    },
    {
      img: Udemypython,
      projectName: "Udemy Python",
     
    },
    {
      img: Udemyjavascript,
      projectName: "Udemy Javascript",
     
    },
    {
   
      img: Udemyjavascript,
      projectName: "Udemy Javascript",
     
    },
   
    
  ]);
  const [num1, setNum1] = useState(0);
  if (certificatesValues.length - 1 == num1) {
    setNum1(0);
  }

  return (
    <>
      <div className="main-certificates-box">
        <div className="val1">
          <div className="certificates-box">
            <img src={certificatesValues[num1].img} alt="" loading="lazy" />
            <h3>{certificatesValues[num1].projectName}</h3>
          </div>
          <button onClick={() => setNum1(num1 + 1)}>Next</button>
        </div>
      </div>
    </>
  );
};

export default Projects;
