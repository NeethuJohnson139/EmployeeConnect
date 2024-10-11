import React, { useState, useEffect } from "react";
import deparment from "../Assets/departmenticon.png";
import employees from "../Assets/employeescounticon.png";
import leaveapplication from "../Assets/leaveapplicationicon.png";


export const Dashboard = () => {
    return (
    <main className="majorcontainer">
        <div className="majortitle">
            <h3>ADMIN DASHBOARD</h3>
        </div>
        <div className="dashboardcards">
            <div className="singlecard">
                <div className="singlecardinner">
                    <img src={deparment} alt="Employeeconnect logo" className="homeicons" />
                    <div className="text-content">
                        <h1>8</h1>
                        <h3>DEPARTMENTS</h3>  
                    </div>
                </div>
            </div>
            <div className="singlecard">
                <div className="singlecardinner">
                    <img src={employees} alt="Employeeconnect logo" className="homeicons" />
                    <div className="text-content">
                        <h1>500</h1>
                        <h3>EMPLOYEES</h3>
                    </div>
                </div>
            </div>
            <div className="singlecard">
                <div className="singlecardinner">
                    <img src={leaveapplication} alt="Employeeconnect logo" className="homeicons" />
                    <div className="text-content">
                        <h1>10</h1>
                        <h3>LEAVE APPLICATIONS</h3>  
                    </div>
                </div>
            </div>
        </div>
        <div className="recentprojects">
            <h4 className="title">Recent Projects</h4>
            <div className="projectcards">
                <div className="singleprojectcard">                   
                    <div className="projectcontent">
                        <div className="project-header">
                            <h1>Project 1</h1>
                            <h3>MORE DETAILS</h3>
                        </div>
                        <h2>
                            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                        </h2>
                    </div>               
                </div>         
                <div className="singleprojectcard">                   
                    <div className="projectcontent">
                        <div className="project-header">
                            <h1>Project 1</h1>
                            <h3>MORE DETAILS</h3>
                        </div>
                        <h2>
                            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                        </h2>
                    </div>                
                </div>
                <div className="singleprojectcard">                   
                    <div className="projectcontent">
                        <div className="project-header">
                            <h1>Project 1</h1>
                            <h3>MORE DETAILS</h3>
                        </div>
                        <h2>
                            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                        </h2>
                    </div>               
                </div>
            </div>
            <div className="allprojectsbutton">
                <button>VIEW ALL PROJECTS INFORMATION</button>
            </div>
        </div>
    </main>
  );
};
