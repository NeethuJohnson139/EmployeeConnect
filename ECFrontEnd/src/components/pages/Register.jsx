import React, { useState } from "react";
import "../css/Employeeconnect.css";
import { useNavigate } from "react-router-dom";
import employeeconnect_logo from "../Assets/Logo.png";
import { FaUserAlt } from "react-icons/fa";
import { BsEyeSlashFill } from "react-icons/bs";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail, MdDateRange, MdTitle } from "react-icons/md";

export const Register = () => {
  const [registername, setregistername] = useState("");
  const [registerpassword, setregisterpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [emailid, setemailid] = useState("");
  const [contactno, setcontactno] = useState("");
  const [dateofbirth, setdateofbirth] = useState("");
  const [dateofjoining, setdateofjoining] = useState("");
  const [jobrole, setjobrole] = useState("");
  const [department, setdepartment] = useState("");
  const [jobtitle, setjobtitle] = useState("");
  const [registererrors, setRegisterErrors] = useState({ registername: "", registerpassword: "" ,
    confirmpassword: "", emailid: "", contactno: "", dateofbirth: "", dateofjoining: "", jobrole: "",
    department: "", jobtitle: ""  });
  const navigate = useNavigate();

  const validateRegisterForm = () => {
    let formValid = true;
    let registererrors = {};

    if (!registername) {
      formValid = false;
      registererrors.registername = "Username cannot be empty";
    }

    const passwordExp = /^[A-Za-z\d]{8,}$/;
    if (!registerpassword.match(passwordExp)) {
      formValid = false;
      registererrors.registerpassword = "Password must be at least 8 characters long";
    }

    if (registerpassword !== confirmpassword) {
      formValid = false;
      registererrors.confirmpassword = "Passwords do not match!!";
    }

    const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailid.match(emailExp)) {
    formValid = false;
    registererrors.emailid = "Invalid email format";
  }

  // Contact number validation (10 digits)
  const contactExp = /^\d{10}$/;
  if (!contactno.match(contactExp)) {
    formValid = false;
    registererrors.contactno = "Contact number must be 10 digits long";
  }

  // Date of Birth validation (check if a date is selected)
  if (!dateofbirth) {
    formValid = false;
    registererrors.dateofbirth = "Please select your date of birth";
  }

  // Date of Joining validation (check if a date is selected)
  if (!dateofjoining) {
    formValid = false;
    registererrors.dateofjoining = "Please select your date of joining";
  }

  // Job Role validation (ensure a selection is made)
  if (!jobrole) {
    formValid = false;
    registererrors.jobrole = "Please select a job role";
  }

  // Department validation (ensure a selection is made)
  if (!department) {
    formValid = false;
    registererrors.department = "Please select a department";
  }

  // Job Title validation (ensure the job title is not empty)
  if (!jobtitle) {
    formValid = false;
    registererrors.jobtitle = "Job title cannot be empty";
  }
    setRegisterErrors(registererrors);
    return formValid;
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (validateRegisterForm()) {
      navigate("/");
     
    }
  };

  return (
    <div className="screen-background">
      <div className="content">
        <div className="headercontent">
          <img src={employeeconnect_logo} alt="EmployeeConnect logo" />
          <h1>EMPLOYEECONNECT</h1>
        </div>

        <div className="registersection">
          <div className="loginformbox">
            <form onSubmit={handleRegisterSubmit}>
              <h1>REGISTER HERE</h1>
              <br />
              <div className="sections">
                <div className="sectionone">
                  <div className="logininputs">
                    <input type="text" placeholder="Username" id="user_name"
                      value={registername} onChange={(e) => setregistername(e.target.value)} />
                    <FaUserAlt className="iconstyles" />
                  </div>
                  {registererrors.registername && (<span className="errormessage">{registererrors.registername}</span>)}
                  <div className="logininputs">
                    <input type="password" placeholder="Password" id="user_password" 
                      value={registerpassword} onChange={(e) => setregisterpassword(e.target.value)} />
                    <BsEyeSlashFill className="iconstyles" />
                  </div>
                  {registererrors.registerpassword && (<span className="errormessage">{registererrors.registerpassword}</span>)}
                  <div className="logininputs">
                    <input type="password" placeholder="Confirm Password"id="confirm_password" 
                      value={confirmpassword} onChange={(e) => setconfirmpassword(e.target.value)} />
                    <BsEyeSlashFill className="iconstyles" />
                  </div>
                  {registererrors.confirmpassword && (<span className="errormessage">{registererrors.confirmpassword}</span>)}
                  <div className="logininputs">
                    <input type="text" placeholder="Email ID" id="email_id"
                      value={emailid} onChange={(e) => setemailid(e.target.value)} />
                    <MdEmail className="iconstyles" />
                  </div>
                  {registererrors.emailid && (<span className="errormessage">{registererrors.emailid}</span>)}
                  <div className="logininputs">
                    <input type="tel" placeholder="Contact Number" id="contact_no" 
                      value={contactno} onChange={(e) => setcontactno(e.target.value)} />
                    <FaPhoneVolume className="iconstyles" />
                  </div>
                  {registererrors.contactno && (<span className="errormessage">{registererrors.contactno}</span>)}
                </div>
                <div className="sectiontwo">
                  <div className="logininputs">
                    <input type="text" placeholder="Date of Birth" id="dateofbirth"
                      value={dateofbirth} onChange={(e) => setdateofbirth(e.target.value)} />
                    <MdDateRange className="iconstyles" />
                  </div>
                  {registererrors.dateofbirth && (<span className="errormessage">{registererrors.dateofbirth}</span>)}
                  <div className="logininputs">
                    <input type="text" placeholder="Date of Joining"
                      id="dateofjoining" value={dateofjoining} onChange={(e) => setdateofjoining(e.target.value)} />
                    <MdDateRange className="iconstyles" />
                  </div>
                  {registererrors.dateofjoining && (<span className="errormessage">{registererrors.dateofjoining}</span>)}             
                  <div className="logininputs">
                    <select id="job_role" value={jobrole} onChange={(e) => setjobrole(e.target.value)}>
                      <option value="">Select Job Role</option>
                      <option value="Employee">Employee</option>
                      <option value="HR">HR</option>
                      <option value="Admin">Admin</option>
                    </select>
                  </div>
                  {registererrors.jobrole && (<span className="errormessage">{registererrors.jobrole}</span>)}
                  <div className="logininputs">
                    <select id="department" value={department} onChange={(e) => setdepartment(e.target.value)}>
                      <option value="">Select Department</option>
                      <option value="admin">Admin</option>
                      <option value="kitchen">Kitchen</option>
                      <option value="waiter">Waiter</option>
                      <option value="cashier">Cashier</option>
                    </select>
                  </div>
                  {registererrors.department && (<span className="errormessage">{registererrors.department}</span>)}
                  <div className="logininputs">
                    <input type="text" placeholder="Job Title"
                      id="jobtitle" value={jobtitle} onChange={(e) => setjobtitle(e.target.value)} />
                    <MdTitle className="iconstyles" />
                  </div>
                  {registererrors.jobtitle && (<span className="errormessage">{registererrors.jobtitle}</span>)}
                </div>
              </div>           
              <div className="agreeterms">
                <label>
                  <input type="checkbox" />&nbsp;&nbsp;I agree to the terms & conditions
                </label>
              </div>
              <button type="submit">REGISTER</button>
              <div className="loginlink">
                <p>
                  ALREADY HAVE AN ACCOUNT?{" "}
                  <a href="#" onClick={() => navigate("/")}>LOGIN NOW</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>    
    </div>
  );
};
