import "../pages/Lock.css";
import { MdLockOutline } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import Token from "./Token";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Lock() {
  const navigation = useNavigate();

  const [user, setUser] = useState("");
  const [notalreadyUser,setnotAlreadyUser] = useState();


    async function checking(){
        let userNameHere = await localStorage.getItem("userName");
        if(await userNameHere){
            setnotAlreadyUser(false)
            navigation("/token");
        }
        else{
            setnotAlreadyUser(true)
        }
    }



  function handleUser(e) {
    setUser(e.target.value.toUpperCase().replace("  ","."));
  }

  function NextPage() {
    if (user && user.length >= 5) {
      localStorage.setItem("userName", user);
      navigation("/token");
    }
    else{
        alert("Please Enter Your Name on this field !!!")
    }
  }

  useEffect(()=>{
    checking();
  },[])

  return (
    <>
      {notalreadyUser && (
        <div className="lock-box">
        <div className="lock-in">
          <div className="lock-image">
            <h1 className="lock-img">
              <MdLockOutline />
            </h1>
          </div>
          <div className="lock-contents">
            <h3 className="welcome">Welcome Back !</h3>
            <h4>This portfolio is protected</h4>
            <h5>
              <FaUser /> Please enter your username to continue
            </h5>
            <input type="text" onChange={handleUser} value={user} placeholder="Name with minimum 5 characters"/>
            <div className="btns">
              <button onClick={NextPage}>CONTINUE <FaArrowRightLong /></button>
            </div>
          </div>
        </div>
      </div>

      )}
    </>
  );
}
