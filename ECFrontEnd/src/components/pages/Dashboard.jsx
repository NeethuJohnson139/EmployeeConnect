import React, { useState, useEffect } from "react";
import axiosInstance from "../Utils/ServerInstance";
import deparment from "../Assets/departmenticon.png";
import employees from "../Assets/employeescounticon.png";
import leaveapplication from "../Assets/leaveapplicationicon.png";

export const Dashboard = () => {
  // const [projects, setProjects] = useState([
  //   {
  //     name: "Project 1",
  //     description: "This is the description for Project 1",
  //     startDate: "2023-01-01",
  //     endDate: "2023-06-01",
  //     status: "In Progress",
  //     createdAt: "2023-01-01",
  //     expanded: false, // Individual expanded state
  //   },
  //   {
  //     name: "Project 2",
  //     description: "This is the description for Project 2",
  //     startDate: "2023-02-01",
  //     endDate: "2023-07-01",
  //     status: "Completed",
  //     createdAt: "2023-02-01",
  //     expanded: false, // Individual expanded state
  //   },
  //   {
  //     name: "Project 3",
  //     description: "This is the description for Project 3",
  //     startDate: "2023-03-01",
  //     endDate: "2023-08-01",
  //     status: "In Progress",
  //     createdAt: "2023-03-01",
  //     expanded: false, // Individual expanded state
  //   },
  // ]);

  // Fetch all projects on component mount

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axiosInstance.get("/project");
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const toggleDetails = (index) => {
    setProjects((prevProjects) =>
      prevProjects.map((project, i) =>
        i === index ? { ...project, expanded: !project.expanded } : project
      )
    );
  };

  return (
    <main className="majorcontainer">
      <div className="majortitle">
        <h3>ADMIN DASHBOARD</h3>
      </div>
      <div className="dashboardcards">
        <div className="singlecard">
          <div className="singlecardinner">
            <img src={deparment} alt="Department icon" className="homeicons" />
            <div className="text-content">
              <h1>8</h1>
              <h3>DEPARTMENTS</h3>
            </div>
          </div>
        </div>
        <div className="singlecard">
          <div className="singlecardinner">
            <img src={employees} alt="Employees icon" className="homeicons" />
            <div className="text-content">
              <h1>500</h1>
              <h3>EMPLOYEES</h3>
            </div>
          </div>
        </div>
        <div className="singlecard">
          <div className="singlecardinner">
            <img
              src={leaveapplication}
              alt="Leave application icon"
              className="homeicons"
            />
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
          {projects.map((project, index) => (
            <div className="singleprojectcard" key={index}>
              <div className="projectcontent">
                <div className="project-header">
                  <h1>{project.name}</h1>
                  <h3
                    onClick={() => toggleDetails(index)}
                    style={{ cursor: "pointer", color: "#fff" }}
                  >
                    {project.expanded ? "LESS DETAILS" : "MORE DETAILS"}
                  </h3>
                </div>
                <p>
                  <strong>Description:</strong> {project.description}
                </p>
                <p>
                  <strong>Start Date:</strong> {project.startDate}
                </p>
                <p>
                  <strong>End Date:</strong> {project.endDate}
                </p>

                {project.expanded && (
                  <div className="more-details">
                    <p>
                      <strong>Status:</strong> {project.status}
                    </p>
                    <p>
                      <strong>Created At:</strong> {project.createdAt}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="allprojectsbutton">
          <button>VIEW ALL PROJECTS INFORMATION</button>
        </div>
      </div>
    </main>
  );
};
