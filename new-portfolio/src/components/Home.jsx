import "../pages/Home.css";
import { CiLock } from "react-icons/ci";
import { PiShieldPlusBold } from "react-icons/pi";
import { IoWifiOutline } from "react-icons/io5";
import { GoServer } from "react-icons/go";
import { MdImportantDevices } from "react-icons/md";
import { RiKeyFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { WiTime8 } from "react-icons/wi";
import { PiDevicesLight } from "react-icons/pi";
import { FaCalendarDays } from "react-icons/fa6";
import { FaUserSecret } from "react-icons/fa6";
import { SlChemistry } from "react-icons/sl";
import { GrProjects } from "react-icons/gr";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { MdMenu } from "react-icons/md";
import { FaRegPaperPlane } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import HomeContent from "./HomeContent";
import Skills from "./Skills";
import Profile from "./Profile";

const Home = () => {
  const navigate = useNavigate();

  const [accessGranted, setAccessGranted] = useState(false);
  const [isOnline, setIsOnline] = useState();
  const [device, setDevice] = useState();
  const [time, setTime] = useState();
  const [memory, setMemory] = useState();
  const [day, setDay] = useState("");
  const [page, setPage] = useState(<HomeContent />);
  const letterOpen = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [letter, setLetter] = useState();
  const menuAccess = useRef();

  async function Access() {
    if (await localStorage.getItem("Access_Token")) {
      await setAccessGranted(true);
    } else {
      await setAccessGranted(false);
      navigate("/token");
    }
  }

  function OnlineCheck() {
    if (navigator.onLine) {
      setIsOnline(true);
      setDevice(navigator.platform);
    } else {
      setIsOnline(false);
    }
  }

  function Time() {
    let date = new Date();
    let hours = date.getHours();
    let minute = date.getMinutes();

    if (minute <= 10) {
      let addMin = "0" + minute;
      minute = addMin;
    }

    let val;
    if (hours >= 12) {
      val = hours - 12 + ":" + minute + " PM";
    } else {
      val = hours + ":" + minute + " AM";
    }

    setTime(val);
  }

  function Memeory() {
    if (screen.width < 767) {
      setMemory("Mobile");
    } else if (screen.width < 1024) {
      setMemory("Tablet");
    } else {
      setMemory("Laptop / Desktop");
    }
  }

  function TodayDate() {
    let weeks = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let date = new Date();
    let day = date.getDay();
    setDay(weeks[day].toUpperCase());
  }

  setTimeout(() => {
    Access();
  }, 2000);

  // function OpenLetter(){

  //   if(letter){
  //     letterOpen.current.classList.add("show-letter")
  //     set
  //   }

  // }


  function toggleMenu() {
    setIsOpen(!isOpen);

    if (!isOpen) {
      menuAccess.current.style.display = "block";
    } else {
      menuAccess.current.style.display = "none";
    }
  }

  function WidthScreen() {
    if (screen.width >= 768) {
      menuAccess.current.style.display = "block";
    }
  }

  setInterval(()=>{
    OnlineCheck();
  },1000)


 
  useEffect(() => {
    TodayDate();
    Time();
    Memeory();
    WidthScreen();
  }, []);

  return (
    <div className="controller">
      <header>
        <div className="command-name">
          <h1>
            {" "}
            PRAVEEN<span>.exe</span>
          </h1>
        </div>
        <div className="granted">
          <h1>C:\Users\Praveen\Portfolio </h1>
        </div>
       

        <div className="hamburger">
          <h1 onClick={toggleMenu}>
            {isOpen ? <AiOutlineClose /> : <MdMenu />}
          </h1>
        </div>
      </header>

      {/* <div className="show-letter">
        <div className="letter">
          <div className="title">

          </div>
          <div className="content-letter">

          </div>
        </div>
      </div> */}

      <div className="main-class">
        <div className="access-class">
          <div className="status">
            <div className="system">
              <h1>SYSTEM STATUS</h1>
              <div className="in-system">
                <div className="in-sub-system">
                  <div className="logo">
                    <h3>
                      <PiShieldPlusBold />
                    </h3>
                  </div>
                  <div className="texts">
                    <h4>SECURITY</h4>
                    <h4>{isOnline ? "SECURE" : "INSECURE"}</h4>
                  </div>
                </div>
                <div className="in-sub-system">
                  <div className="logo">
                    <h3>
                      <IoWifiOutline />
                    </h3>
                  </div>
                  <div className="texts">
                    <h4>NETWORK</h4>
                    <h4>{isOnline ? "ACTIVE" : "INACTIVE"}</h4>
                  </div>
                </div>
                <div className="in-sub-system">
                  <div className="logo">
                    <h3>
                      <GoServer />
                    </h3>
                  </div>
                  <div className="texts">
                    <h4>TOKEN </h4>
                    <h4>
                      {localStorage.getItem("Access_Token") ? "TRUE" : "FALSE"}
                    </h4>
                  </div>
                </div>
                <div className="in-sub-system">
                  <div className="logo">
                    <h3>
                      <MdImportantDevices />
                    </h3>
                  </div>
                  <div className="texts">
                    <h4>DEVICE </h4>
                    <h4>{device ? device : "ERROR"}</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="session">
              <h1>SESSION INFO</h1>
              <div className="in-session">
                <div className="in-sub-session">
                  <div className="session-logo">
                    <h3>
                      <FaUser />
                    </h3>
                  </div>
                  <div className="session-contents">
                    <h4>USER</h4>
                    <h4>{localStorage.getItem("userName")}</h4>
                  </div>
                </div>
                <div className="in-sub-session">
                  <div className="session-logo">
                    <h3>
                      <RiKeyFill />
                    </h3>
                  </div>
                  <div className="session-contents">
                    <h4>ACCESS</h4>
                    <h4>
                      {localStorage
                        .getItem("Access_Token")
                        .slice(
                          0,
                          localStorage.getItem("Access_Token").length / 2,
                        )}
                    </h4>
                  </div>
                </div>
                <div className="in-sub-session">
                  <div className="session-logo">
                    <h3>
                      <WiTime8 />
                    </h3>
                  </div>
                  <div className="session-contents">
                    <h4>LOGIN TIME</h4>
                    <h4>{time}</h4>
                  </div>
                </div>
                <div className="in-sub-session">
                  <div className="session-logo">
                    <h3>
                      <PiDevicesLight />
                    </h3>
                  </div>
                  <div className="session-contents">
                    <h4>VIEWING BY </h4>
                    <h4>{memory} </h4>
                  </div>
                </div>
                <div className="in-sub-session">
                  <div className="session-logo">
                    <h3>
                      <FaCalendarDays />
                    </h3>
                  </div>
                  <div className="session-contents">
                    <h4>DAY</h4>
                    <h4> {day}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="home-contents">{page  }</div>

          <div className="destination" ref={menuAccess}>
            <div className="navigation">
              <h1>SELECT DESTINATION</h1>
              <div className="navs" onClick={() => setPage(<HomeContent />)}>
                <div className="icons">
                  <h1>
                    <FaUserSecret />
                  </h1>
                </div>
                <div className="dest-contents">
                  <h3>DEVELOPER ID</h3>
                  <h3>Who am I ?</h3>
                </div>
              </div>
              <div className="navs" onClick={() => setPage(<Skills />)}>
                <div className="icons">
                  <h1>
                    <SlChemistry />
                  </h1>
                </div>
                <div className="dest-contents">
                  <h3>SKILL LAB</h3>
                  <h3>What I know ?</h3>
                </div>
              </div>
              <div className="navs">
                <div className="icons">
                  <h1>
                    <GrProjects />
                  </h1>
                </div>
                <div className="dest-contents">
                  <h3>PROJECT VALUT </h3>
                  <h3>What I 've built ?</h3>
                </div>
              </div>
              <div className="navs"  onClick={() => setPage(<Profile />)}>
                <div className="icons">
                  <h1>
                    <HiOutlineNewspaper />
                  </h1>
                </div>
                <div className="dest-contents">
                  <h3>ABOUT ME</h3>
                  <h3>My Professional story</h3>
                </div>
              </div>
              <div className="navs">
                <div className="icons">
                  <h1>
                    <FaRegPaperPlane />
                  </h1>
                </div>
                <div className="dest-contents">
                  <h3>CONTACT CENTER</h3>
                  <h3>Let 's connect</h3>
                </div>
              </div>
            </div>
            <div className="activity">
              <h1>SYSTEM ACTIVITY</h1>
              <div className="activities">
                <div className="names">
                  <h3>CPU USAGE</h3>
                  <h3>23%</h3>
                </div>
                <div className="names">
                  <h3>MEMORY</h3>
                  <h3>45%</h3>
                </div>
                <div className="names">
                  <h3>UPTIME</h3>
                  <h3>2d 14h 32m</h3>
                </div>
                <div className="names">
                  <h3>CONNECTIONS</h3>
                  <h3>12 Active</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
