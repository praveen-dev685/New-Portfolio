import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import MyImage from "../files/pk.jpeg";
import "../pages/Home.css";

const Home = () => {
  const navigate = useNavigate();

  const [access, setAccess] = useState();
  const [chance, setChance] = useState(0);
  const [local,setLocal] = useState(localStorage.setItem("chance", chance));
  const [attempt,setattempt] = useState();
  let dates = new Date();

  async function CheckAccess() {
    if (
      (await localStorage.getItem("userName")) &&
      (await localStorage.getItem("Access_Token"))
    ) {
      await setAccess(true);
    } else if (
      (await localStorage.getItem("userName")) ||
      (await localStorage.getItem("Access_Token"))
    ) {
      await setAccess(false);
      navigate("/verification");
    } else {
      await setAccess(false);
      navigate("/");
    }
  }

  function handleCount() {
    setChance(chance + 1);
    if(chance == 3){
        alert("Security Broken");
        console.log(attempt)
        setChance(3);
    }
  }

//   function AttemptChances(){


    
//   }

  useEffect(() => {
    CheckAccess();
  }, []);

  return (
    <>
      {access && (
        <div className="full-home">
          <header>
            <div className="name-box">
              <div className="name-big">
                <h1>PK</h1>
              </div>
              <div className="name-small">
                <h4>Praveen Kumar</h4>
                <h4>Full Stack Developer</h4>
              </div>
              
            </div>
            <div className="nav">
              <nav>
                <NavLink className="nav-tags" to="/home">Home</NavLink>
                <NavLink className="nav-tags" to="/about">About</NavLink>
                <NavLink className="nav-tags" to="/skills">Skills</NavLink>
                <NavLink className="nav-tags" to="/certification">Certification</NavLink>
                <NavLink className="nav-tags" to="/contact">Contact Us</NavLink>
                <NavLink className="nav-tags" to="/projects">Projects</NavLink>
              </nav>

            </div>
          </header>

          <div className="home-box">
            <div className="home-in">
              <div className="home-profile-img">
                <img src={MyImage} alt="This is Praveen Kumar" loading="lazy" />
              </div>
              <div className="content-controller">
                <div className="home-contents">

                    <h3>Hello , {localStorage.getItem("userName")}</h3>
                    <h1> <span>Its me ,</span>Praveen Kumar </h1>
                    <h2>Full Stack Developer</h2>

              </div>
              <div className="btns-fun">
                <button>Explore Me</button>
                <button>My Resume</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
