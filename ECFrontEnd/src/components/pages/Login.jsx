import React, { useState } from "react";
import "../css/Employeeconnect.css";
import { useNavigate } from "react-router-dom";
import employeeconnect_logo from "../Assets/Logo.png";
import { FaUserAlt } from "react-icons/fa";
import { BsEyeSlashFill } from "react-icons/bs";
import axiosInstance from "../Utils/ServerInstance"; // Adjust the path as necessary

export const Login = () => {
  const [loginname, setloginname] = useState("");
  const [loginpassword, setloginpassword] = useState("");
  const [loginerrors, setLoginErrors] = useState({
    loginname: "",
    loginpassword: "",
  });
  const navigate = useNavigate();

  const validateLoginForm = () => {
    let formValid = true;
    let loginerrors = {};

    if (!loginname) {
      formValid = false;
      loginerrors.loginname = "Username cannot be empty";
    }

    // const passwordExp = /^[A-Za-z\d]{8,}$/;
    // if (!loginpassword.match(passwordExp)) {
    //   formValid = false;
    //   loginerrors.loginpassword = "Password must be at least 8 characters long";
    // }

    setLoginErrors(loginerrors);
    return formValid;
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (validateLoginForm()) {
      try {
        const response = await axiosInstance.post("/User/login", {
          username: loginname,
          password: loginpassword,
        });

        // Handle successful login
        console.log("Login successful:", response.data);

        navigate("/dashboard"); // Navigate to the dashboard or desired route
      } catch (error) {
        console.error("Login failed:", error);
        setLoginErrors({
          ...loginerrors,
          loginpassword: "Invalid username or password.",
        });
      }
    }
  };

  return (
    <div className="screen-background">
      <div className="content">
        <div className="headercontent">
          <img src={employeeconnect_logo} alt="EmployeeConnect logo" />
          <h1>EMPLOYEECONNECT</h1>
        </div>

        <div className="loginsection">
          <div className="loginformbox">
            <form onSubmit={handleLoginSubmit}>
              <h1>LOGIN HERE</h1>
              <br />
              <div className="logininputs">
                <input
                  type="text"
                  placeholder="Username"
                  id="user_name"
                  value={loginname}
                  onChange={(e) => setloginname(e.target.value)}
                />
                <FaUserAlt className="iconstyles" />
              </div>
              {loginerrors.loginname && (
                <span className="errormessage">{loginerrors.loginname}</span>
              )}
              <div className="logininputs">
                <input
                  type="password"
                  placeholder="Password"
                  id="user_password"
                  value={loginpassword}
                  onChange={(e) => setloginpassword(e.target.value)}
                />
                <BsEyeSlashFill className="iconstyles" />
              </div>
              {loginerrors.loginpassword && (
                <span className="errormessage">
                  {loginerrors.loginpassword}
                </span>
              )}
              <div className="forgotpassword">
                <a href="#">Forgot password?</a>
              </div>
              <button type="submit">LOGIN</button>
              <div className="registerlink">
                <p>
                  DONT HAVE AN ACCOUNT?{" "}
                  <a href="#" onClick={() => navigate("/register")}>
                    REGISTER HERE
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
