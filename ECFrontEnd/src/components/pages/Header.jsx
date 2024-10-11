import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const handleLogoutSteps = () => {
    navigate("/");
  };

  return (
    <header className="headeritems">
        <div className="headerleft"></div>
      <div className="headerright">
        <BsPersonCircle className="profileicon" />
        &nbsp;&nbsp;
        <b><span className="profilename">LOGGEDIN NAME</span></b>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <FaSignOutAlt className="logouticon" onClick={handleLogoutSteps} />
      </div>
    </header>
  );
};
