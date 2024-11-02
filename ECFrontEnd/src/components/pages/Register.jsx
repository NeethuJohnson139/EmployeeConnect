import React, { useState } from "react";
import "../css/Employeeconnect.css";
import { useNavigate } from "react-router-dom";
import employeeconnect_logo from "../Assets/Logo.png";
import { FaUserAlt } from "react-icons/fa";
import { BsEyeSlashFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import axiosInstance from "../Utils/ServerInstance";

export const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    firstName: "",
    lastName: "",
    dateOfJoining: "",
    profilePicture: null,
  });
  const [registerErrors, setRegisterErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const validateRegisterForm = () => {
    const errors = {};
    let formValid = true;

    if (!formData.username) {
      formValid = false;
      errors.username = "Username cannot be empty";
    }

    if (!formData.password || formData.password.length < 8) {
      formValid = false;
      errors.password = "Password must be at least 8 characters long";
    }

    if (formData.password !== formData.confirmPassword) {
      formValid = false;
      errors.confirmPassword = "Passwords do not match";
    }

    const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailExp.test(formData.email)) {
      formValid = false;
      errors.email = "Invalid email format";
    }

    if (!formData.firstName) {
      formValid = false;
      errors.firstName = "First name cannot be empty";
    }

    if (!formData.lastName) {
      formValid = false;
      errors.lastName = "Last name cannot be empty";
    }

    if (!formData.dateOfJoining) {
      formValid = false;
      errors.dateOfJoining = "Please select your date of joining";
    }

    // if (!formData.profilePicture) {
    //   formValid = false;
    //   errors.profilePicture = "Please upload a profile picture";
    // }

    setRegisterErrors(errors);
    return formValid;
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (validateRegisterForm()) {
      try {
        const formDataToSend = new FormData();
        // Append form data
        formDataToSend.append("username", formData.username);
        formDataToSend.append("PasswordHash", formData.password);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("firstName", formData.firstName);
        formDataToSend.append("lastName", formData.lastName);
        formDataToSend.append("dateOfJoining", formData.dateOfJoining);
        // if (formData.profilePicture) {
        //   formDataToSend.append("profilePicture", formData.profilePicture);
        // }

        // Make the API call to register
        const response = await axiosInstance.post(
          "/User/Register",
          formDataToSend
        );
        // Handle successful registration
        console.log("Registration successful:", response.data);
        navigate("/"); // Navigate to the home page or desired route
      } catch (error) {
        console.error("Registration failed:", error);
        setRegisterErrors({ api: "Registration failed. Please try again." });
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

        <div className="registersection">
          <div className="loginformbox">
            <form onSubmit={handleRegisterSubmit}>
              <h1>REGISTER HERE</h1>
              <br />
              {registerErrors.api && (
                <span className="errormessage">{registerErrors.api}</span>
              )}
              <div className="logininputs">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                />
                <FaUserAlt className="iconstyles" />
                {registerErrors.username && (
                  <span className="errormessage">
                    {registerErrors.username}
                  </span>
                )}
              </div>

              <div className="logininputs">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <BsEyeSlashFill className="iconstyles" />
                {registerErrors.password && (
                  <span className="errormessage">
                    {registerErrors.password}
                  </span>
                )}
              </div>

              <div className="logininputs">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <BsEyeSlashFill className="iconstyles" />
                {registerErrors.confirmPassword && (
                  <span className="errormessage">
                    {registerErrors.confirmPassword}
                  </span>
                )}
              </div>

              <div className="logininputs">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <MdEmail className="iconstyles" />
                {registerErrors.email && (
                  <span className="errormessage">{registerErrors.email}</span>
                )}
              </div>

              <div className="logininputs">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {registerErrors.firstName && (
                  <span className="errormessage">
                    {registerErrors.firstName}
                  </span>
                )}
              </div>

              <div className="logininputs">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {registerErrors.lastName && (
                  <span className="errormessage">
                    {registerErrors.lastName}
                  </span>
                )}
              </div>

              <div className="logininputs">
                <input
                  type="date"
                  name="dateOfJoining"
                  placeholder="Date of Joining"
                  value={formData.dateOfJoining}
                  onChange={handleChange}
                />
                {registerErrors.dateOfJoining && (
                  <span className="errormessage">
                    {registerErrors.dateOfJoining}
                  </span>
                )}
              </div>

              {/* <div className="logininputs">
                <input
                  type="file"
                  name="profilePicture"
                  accept="image/*"
                  onChange={handleChange}
                />
                {registerErrors.profilePicture && (
                  <span className="errormessage">
                    {registerErrors.profilePicture}
                  </span>
                )}
              </div> */}

              <button type="submit" className="loginbutton">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
