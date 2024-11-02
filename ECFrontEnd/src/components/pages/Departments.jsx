import React, { useState, useEffect } from "react";
import axiosInstance from "../Utils/ServerInstance";
import { MdAddToPhotos } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

export const Departments = () => {
  const [showForm, setShowForm] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [newDepartment, setNewDepartment] = useState({
    id: "",
    name: "",
    addedDate: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Fetch all departments on component mount
  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await axiosInstance.get("/department");
      setDepartments(response.data);
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  };

  const handleAddDepartment = () => {
    setShowForm(true);
    setIsEditing(false);
    setNewDepartment({ id: "", name: "", addedDate: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDepartment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveDepartment = async () => {
    try {
      if (isEditing) {
        // Update department
        await axiosInstance.put(`/department/${editId}`, {
          departmentName: newDepartment.name,
          addedDate: newDepartment.addedDate,
        });
      } else {
        // Add department
        await axiosInstance.post("/department", {
          DepartmentName: newDepartment.name,
          AddedDate: newDepartment.addedDate,
        });
      }
      fetchDepartments();
      setShowForm(false);
    } catch (error) {
      console.error("Error saving department:", error);
    }
  };

  const handleEditDepartment = (id, dept) => {
    setShowForm(true);
    setIsEditing(true);
    setEditId(id);
    setNewDepartment({
      id: dept.departmentId,
      name: dept.departmentName,
      addedDate: dept.addedDate,
    });
  };

  const handleDeleteDepartment = async (id) => {
    try {
      await axiosInstance.delete(`/department/${id}`);
      fetchDepartments();
    } catch (error) {
      console.error("Error deleting department:", error);
    }
  };

  return (
    <main className="majorcontainer">
      <div className="majortitle">
        <h3>DEPARTMENTS</h3>
      </div>
      <div id="departmentsection" className="departmentsection">
        <button className="addnewdepartment" onClick={handleAddDepartment}>
          <b>
            <span>ADD NEW DEPARTMENT</span>
          </b>
          <MdAddToPhotos className="adddepartmenticon" />
        </button>

        {showForm && (
          <div className="form-style">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Department Name"
              value={newDepartment.name}
              onChange={handleChange}
            />

            <input
              type="date"
              id="addedDate"
              name="addedDate"
              value={newDepartment.addedDate}
              onChange={handleChange}
            />

            <button onClick={handleSaveDepartment}>
              {isEditing ? "Update" : "Save"}
            </button>
          </div>
        )}

        <div className="departmentlist">
          <div className="departmenttable">
            <table>
              <thead>
                <tr>
                  <th>DEPARTMENT ID</th>
                  <th>DEPARTMENT NAME</th>
                  <th>ADDED DATE</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {departments.map((dept) => (
                  <tr key={dept.departmentId}>
                    <td>{dept.departmentId}</td>
                    <td>{dept.departmentName}</td>
                    <td>{dept.addedDate}</td>
                    <td>
                      <FaEdit
                        className="editdepartment"
                        onClick={() =>
                          handleEditDepartment(dept.departmentId, dept)
                        }
                      />
                      &nbsp;&nbsp;
                      <RiDeleteBin5Fill
                        className="deletedepartment"
                        onClick={() =>
                          handleDeleteDepartment(dept.departmentId)
                        }
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
