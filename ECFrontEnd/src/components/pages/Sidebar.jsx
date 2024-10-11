import React from "react";
import employeeconnect_logo from "../Assets/Logo.png";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { RiNewspaperFill } from "react-icons/ri";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaGift } from "react-icons/fa6";
import { IoLogoWechat } from "react-icons/io5";
import { FaAward } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa"; 
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside id="asidebar">
      <div className="asidebartitle">
        <img src={employeeconnect_logo} alt="Employeeconnect logo" className="asidebarlogo"/>
        <h1 className="companyname">EMPLOYEECONNECT</h1>
      </div>
      <br/>
      <ul className="sidebarcontents">
        <Link to="/dashboard">
          <li className="sidebarcontentsitem">
            <MdSpaceDashboard className="sidebaricons" />&nbsp;&nbsp;&nbsp;&nbsp;OVERVIEW
          </li>
        </Link>
        <Link to="/employees">
          <li className="sidebarcontentsitem">
            <FaUserGraduate className="sidebaricons" />&nbsp;&nbsp;&nbsp;&nbsp;EMPLOYEES
          </li>
        </Link>
        <Link to="/departments">
          <li className="sidebarcontentsitem">
            <FaBuildingColumns className="sidebaricons" />&nbsp;&nbsp;&nbsp;&nbsp;DEPARTMENTS
          </li>
        </Link>
        <Link to="/salary">
          <li className="sidebarcontentsitem">
            <FaMoneyCheckDollar className="sidebaricons" />&nbsp;&nbsp;&nbsp;&nbsp;SALARY & ATTENDANCE
          </li>
        </Link>
        <Link to="/createprojects">
          <li className="sidebarcontentsitem">
            <RiNewspaperFill className="sidebaricons" />&nbsp;&nbsp;&nbsp;&nbsp;CREATE PROJECTS
          </li>
        </Link>
        <Link to="/leaveapproval">
          <li className="sidebarcontentsitem">
            <BsCalendarDateFill className="sidebaricons" />&nbsp;&nbsp;&nbsp;&nbsp;LEAVE APPROVAL
          </li>
        </Link>
        <Link to="/rewards">
          <li className="sidebarcontentsitem">
            <FaGift className="sidebaricons" />&nbsp;&nbsp;&nbsp;&nbsp;REWARDS
          </li>
        </Link>      
        <Link to="/viewfeedbacks">
          <li className="sidebarcontentsitem">
            <IoLogoWechat className="sidebaricons" />&nbsp;&nbsp;&nbsp;&nbsp;VIEW FEEDBACKS
          </li>
        </Link>
        <Link to="/awardanemployee">
          <li className="sidebarcontentsitem">
            <FaAward className="sidebaricons" />&nbsp;&nbsp;&nbsp;&nbsp;AWARD AN EMPLOYEE
          </li>
        </Link>
        <Link to="/settings">
          <li className="sidebarcontentsitem">
            <IoSettings className="sidebaricons" />&nbsp;&nbsp;&nbsp;&nbsp;SETTINGS
          </li>
        </Link>
        <Link to="/logout">
          <li className="sidebarcontentsitem">
            <FaSignOutAlt className="sidebaricons" />&nbsp;&nbsp;&nbsp;&nbsp;LOGOUT
          </li>
        </Link>
      </ul>
    </aside>
  );
};
