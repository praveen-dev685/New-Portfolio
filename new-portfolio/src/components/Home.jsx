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

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [accessGranted, setAccessGranted] = useState(false);
  const [isOnline, setIsOnline] = useState();
  const [device, setDevice] = useState();
  const [time, setTime] = useState();
  const [memory,setMemory] = useState();
  const [day,setDay] = useState("");
  const animationClose = useRef(null);



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
    if (hours >= 13) {
      val = hours - 12 + ":" + minute + " PM";
    } else {
      val = hours + ":" + minute + " AM";
    }

    setTime(val);
  }

  function Memeory(){
    if(screen.width < 767){
      setMemory("Mobile")
    }
    else if(screen.width < 1024){
        setMemory("Tablet")
    }
    else{
      setMemory("Laptop / Desktop")
    }
  }

  function TodayDate(){

    let weeks = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let date = new Date();
    let day = date.getDay();
    setDay(weeks[day].toUpperCase())

  }

  setTimeout(()=>{
    Access()
  },2000)


  function handleAnimation(){
     animationClose.current.style.backgroundColor = "red";
  }

  

  useEffect(() => {
    TodayDate();
    OnlineCheck();
    Time();
    Memeory();
  }, []);

  return (
    <div ref={animationClose}>
      <header>
        <div className="command-name">
          <h1>
            {" "}
            PRAVEEN<span>.exe</span>
          </h1>
        </div>
        <div className="granted">
            <button onClick={handleAnimation}>Break The Website</button>
        </div>
      </header>

      <div className="main-class" >
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
                    <h3><PiDevicesLight /></h3>
                  </div>
                  <div className="session-contents">
                    <h4>VIEWING BY </h4>
                    <h4>{memory} </h4>
                  </div>
                </div>
                <div className="in-sub-session">
                  <div className="session-logo">
                    <h3><FaCalendarDays /></h3>
                  </div>
                  <div className="session-contents">
                    <h4>DAY</h4>
                    <h4> {day}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="command-center">
            <div className="head-note">
              <h1>welcome</h1>
            </div>
            <div className="content-box">
              <div className="my-note">
                <h1>who i am</h1>
              </div>
              <div className="mission-note">
                <h1>mission</h1>
              </div>
            </div>
          </div>
          <div className="destination">
            <div className="navigation">
              <div className="navs">navs </div>
              <div className="navs">navs </div>
              <div className="navs">navs </div>
              <div className="navs">navs </div>
              <div className="navs">navs </div>
            </div>
            <div className="activity">
              <h1>activity</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
