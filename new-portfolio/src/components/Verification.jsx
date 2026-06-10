import React, { useEffect, useRef, useState } from "react";
import { MdSecurity } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "../pages/Verification.css";

const Verification = () => {
  const [verifyToken, setVerifyToken] = useState("");
  const loading = useRef(null);
  const warning = useRef(null);
  const dangerSign = useRef(null);
  const navigate = useNavigate();
  const [auth, setAuth] = useState();

  function handleVerify(e) {
    setVerifyToken(e.target.value);
  }

  async function verifyNow() {
    if ((await localStorage.getItem("Access_Token")) === verifyToken) {
      loading.current.style.backgroundColor = "lime";
      warning.current.style.color = "lime";
      dangerSign.current.style.backgroundColor = "lime";
      setTimeout(() => {
        loading.current.style.backgroundColor = "blue";
        warning.current.style.color = "blue";
      }, 3000);
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } else {
      alert("Invalid Token . Please Re-Login !!");
      loading.current.style.backgroundColor = "red";
      warning.current.style.color = "red";
      dangerSign.current.style.animation = "warning 1s linear infinite";
      setTimeout(() => {
        loading.current.style.backgroundColor = "blue";
        warning.current.style.color = "blue";
        dangerSign.current.style.animation = "none";
      }, 3000);
    }
  }

  function Timeout() {
    setTimeout(() => {
      verifyNow();
    }, 3000);
  }

  async function verifyAuthUser() {
    if (
      (await localStorage.getItem("Access_Token")) &&
      (await localStorage.getItem("userName"))
    ) {
      setAuth(true);
    } else {
      alert("You are trying to access this portfolio without login !!!");
      setAuth(false);
      navigate("/");
    }
  }

  function newToken() {
    if (
      localStorage.getItem("Access_Token") &&
      localStorage.getItem("userName")
    ) {
      navigate("/token");
    } else {
      navigate("/");
    }
  }

  useEffect(() => {
    verifyAuthUser();
  }, []);

  return (
    <>
      {auth && (
        <div className="verification-box" ref={dangerSign}>
          <div className="verification-in">
            <div className="verification-one">
              <h1 ref={warning}>
                <MdSecurity />
              </h1>
              <h2>Verify Your Access</h2>
              <h3>
                Paste the token you copied in the previous step to verify your
                Identity.
              </h3>
            </div>
            <div className="verification-two">
              <label htmlFor="token">Enter Your Token </label>
              <input
                type="password"
                id="token"
                onChange={handleVerify}
                placeholder="Paste Your Token ..."
              />
            </div>
            <div className="verification-three">
              <button onClick={Timeout} ref={loading}>
                Verify Token
              </button>
              <h3>OR</h3>
              <button onClick={newToken}>Generate New Token</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Verification;
