import React, { useState, useEffect } from "react";
import axiosInstance from "../Utils/ServerInstance";
import { MdAddToPhotos } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

export const Createprojects = () => {
  const [showForm, setShowForm] = useState(false);
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    projectId: "",
    projectName: "",
    description: "",
    startDate: "",
    endDate: "",
    managerId: "",
    status: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Fetch all projects on component mount
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

  const handleAddProject = () => {
    setShowForm(true);
    setIsEditing(false);
    setNewProject({
      projectId: "",
      projectName: "",
      description: "",
      startDate: "",
      endDate: "",
      managerId: "",
      status: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveProject = async () => {
    try {
      if (isEditing) {
        // Update project
        await axiosInstance.put(`/project/${editId}`, newProject);
      } else {
        // Add project
        debugger;
        await axiosInstance.post("/project", {
          // ProjectId: null,
          ProjectName: newProject.projectName,
          Description: newProject.description,
          StartDate: newProject.startDate,
          EndDate: newProject.endDate,
          ManagerId: newProject.managerId,
          Status: newProject.status,
          // CreatedAt: newProject.CreatedAt,
        });
      }
      fetchProjects();
      setShowForm(false);
    } catch (error) {
      console.error("Error saving project:", error);
    }
  };

  const handleEditProject = (id, project) => {
    setShowForm(true);
    setIsEditing(true);
    setEditId(id);
    setNewProject({ ...project });
  };

  const handleDeleteProject = async (id) => {
    try {
      await axiosInstance.delete(`/project/${id}`);
      fetchProjects();
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return (
    <main className="majorcontainer">
      <div className="majortitle">
        <h3>PROJECTS</h3>
      </div>
      <div id="departmentsection" className="departmentsection">
        <button className="addnewdepartment" onClick={handleAddProject}>
          <b>
            <span>ADD NEW PROJECT</span>
          </b>
          <MdAddToPhotos className="addprojecticon" />
        </button>

        {showForm && (
          <div className="form-style">
            <input
              type="text"
              name="projectName"
              placeholder="Project Name"
              value={newProject.projectName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={newProject.description}
              onChange={handleChange}
            />
            <input
              type="date"
              name="startDate"
              value={newProject.startDate}
              onChange={handleChange}
            />
            <input
              type="date"
              name="endDate"
              value={newProject.endDate}
              onChange={handleChange}
            />
            <input
              type="text"
              name="managerId"
              placeholder="Manager ID"
              value={newProject.managerId}
              onChange={handleChange}
            />
            <input
              type="text"
              name="status"
              placeholder="Status"
              value={newProject.status}
              onChange={handleChange}
            />
            <button onClick={handleSaveProject}>
              {isEditing ? "Update" : "Save"}
            </button>
          </div>
        )}

<div className="departmentlist">
<div className="departmenttable">
            <table>
              <thead>
                <tr>
                  <th>Project ID</th>
                  <th>Project Name</th>
                  <th>Description</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Manager ID</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr key={index}>
                    <td>{project.projectId}</td>
                    <td>{project.projectName}</td>
                    <td>{project.description}</td>
                    <td>{project.startDate}</td>
                    <td>{project.endDate}</td>
                    <td>{project.managerId}</td>
                    <td>{project.status}</td>
                    <td>
                      <FaEdit
                        className="editproject"
                        onClick={() =>
                          handleEditProject(project.projectId, project)
                        }
                      />
                      &nbsp;&nbsp;
                      <RiDeleteBin5Fill
                        className="deleteproject"
                        onClick={() => handleDeleteProject(project.projectId)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};
