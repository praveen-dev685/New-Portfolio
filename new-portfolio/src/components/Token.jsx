import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoShieldLock } from "react-icons/go";
import { FaRegCopy } from "react-icons/fa";
import { GrCircleInformation } from "react-icons/gr";
import "../pages/Token.css"

const Token = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(localStorage.getItem("userName"));
  const [verification, setVerification] = useState(false);
  const [token, setToken] = useState();
  const tokenSets = ["-9XK4-A7M2-7B2E", "-A7M2-7B2E", "-7B2E", "-9XK4-A7M2"];
  const btnCopy = useRef(null);

  function assignToken(user) {
    if (user.length >= 5 && user.length <= 10) {
      setToken(user + tokenSets[0]);
      localStorage.setItem("Access_Token", user + tokenSets[0]);
    } else if (user.length >= 11 && user.length <= 15) {
      setToken(user + tokenSets[1]);
      localStorage.setItem("Access_Token", user + tokenSets[2]);
    } else if (user.length >= 16 && user.length <= 20) {
      setToken(user + tokenSets[2]);
      localStorage.setItem("Access_Token", user + tokenSets[3]);
    } else {
      setToken(user + tokenSets[3]);
      localStorage.setItem("Access_Token", user + tokenSets[4]);
    }
  }

  async function verify() {
    if (await localStorage.getItem("userName")) {
      await setVerification(true);
      await assignToken(user);
    } else {
      await localStorage.removeItem("Access_Token");
      setVerification(false);
      alert("You not have a username . Please enter your Username First !!!");
      navigate("/");
    }
  }

  function copyToken() {
    navigator.clipboard.writeText(localStorage.getItem("Access_Token")).then(()=>{
        btnCopy.current.innerText = "Copied !";
    }).catch((err)=>{
        alert(err)
    })
  }

  function tokenVerification(){
    if(localStorage.getItem("Access_Token")){
      navigate("/verification")
    }
    else{
      alert("Please Copy Token or Login !!!")
    }
  }

  useEffect(() => {
    verify();
  }, []);

  return (
    <>
      <div className="token-box">
        <div className="token-in">
          <div className="token-first-page">
            <h1>
              <GoShieldLock className="shield" />
            </h1>
            <h2>Your Access Token is Ready !</h2>
            <h3>Copy the token below and proceed to the verification page.</h3>
          </div>
          <div className="token-second-page">
            <h3>
              Hello, <span>{user ? user : "guest"}</span>
            </h3>
            <div className="copy_text">
              <input
                type="password"
                readOnly={true}
                value={
                  localStorage.getItem("Access_Token")
                    ? localStorage.getItem("Access_Token")
                    : "No Token"
                }
              />
                <button onClick={copyToken} ref={btnCopy} title="Copy It" ><FaRegCopy /> Copy</button>
            </div>
          </div>
          <div className="token-third-page">
            <p>
              <GrCircleInformation className="inform"/> Keep the token safe . You will need to
              paste it on next page <br />
              to verify your access.
            </p>
            <button onClick={tokenVerification} >Proceed to Verify</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Token;
