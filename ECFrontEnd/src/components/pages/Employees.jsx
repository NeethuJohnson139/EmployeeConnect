import React, { useState, useEffect } from "react";
import axiosInstance from "../Utils/ServerInstance";
import { MdAddToPhotos } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

export const Employees = () => {
  const [showForm, setShowForm] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    id: "",
    name: "",
    jobTitle: "",
    dateOfJoining: "",
    status: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  //const [editIndex, setEditIndex] = useState(null);
  const [editId, setEditId] = useState(null);

  // Fetch all departments on component mount
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axiosInstance.get("/employee");
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const handleAddEmployee = () => {
    setShowForm(true);
    setIsEditing(false);
    setNewEmployee({
      id: "",
      name: "",
      jobTitle: "",
      dateOfJoining: "",
      status: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveEmployee = async () => {
    try {
      if (isEditing) {
        // Update employee
        await axiosInstance.put(`/employee/${editId}`, {
          EmployeeName: newEmployee.name,
          Jobtitle: newEmployee.jobTitle,
          DateOfjoining: newEmployee.dateOfJoining,
          Status: newEmployee.status,
        });
      } else {
        // Add employee
        await axiosInstance.post("/employee", {
          EmployeeName: newEmployee.name,
          Jobtitle: newEmployee.jobTitle,
          DateOfjoining: newEmployee.dateOfJoining,
          Status: newEmployee.status,
        });
      }
      fetchEmployees();
      setShowForm(false);
    } catch (error) {
      console.error("Error saving employee:", error);
    }
  };

  const handleEditEmployee = (id, emp) => {
    setShowForm(true);
    setIsEditing(true);
    setEditId(id);
    debugger;
    setNewEmployee({
      id: emp.employeeId,
      name: emp.employeeName,
      jobTitle: emp.jobTitle,
      dateOfJoining: emp.dateOfJoining,
      status: emp.status,
    });
  };

  const handleDeleteEmployee = async (id) => {
    try {
      await axiosInstance.delete(`/employee/${id}`);
      fetchEmployees();
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return (
    <main className="majorcontainer">
      <div className="majortitle">
        <h3>EMPLOYEES</h3>
      </div>
      <div id="employeessection" className="employeessection">
        <button className="addnewemployee" onClick={handleAddEmployee}>
          <b>
            <span>ADD NEW EMPLOYEE</span>
          </b>
          <MdAddToPhotos className="addemployeeicon" />
        </button>

        {showForm && (
          <div className="form-style">
            <input
              type="text"
              name="id"
              placeholder="Employee ID"
              value={newEmployee.id}
              onChange={handleChange}
            />
            <input
              type="text"
              name="name"
              placeholder="Employee Name"
              value={newEmployee.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              value={newEmployee.jobTitle}
              onChange={handleChange}
            />
            <input
              type="date"
              name="dateOfJoining"
              value={newEmployee.dateOfJoining}
              onChange={handleChange}
            />
            <input
              type="text"
              name="status"
              placeholder="Status"
              value={newEmployee.status}
              onChange={handleChange}
            />
            <button onClick={handleSaveEmployee}>
              {isEditing ? "Update" : "Save"}
            </button>
          </div>
        )}

        <div className="employeeslist">
          <div className="employeestable">
            <table>
              <thead>
                <tr>
                  <th>EMPLOYEE ID</th>
                  <th>EMPLOYEE NAME</th>
                  <th>JOB TITLE</th>
                  <th>DATE OF JOINING</th>
                  <th>STATUS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp, index) => (
                  <tr key={index}>
                    <td>{emp.employeeId}</td>
                    <td>{emp.employeeName}</td>
                    <td>{emp.jobTitle}</td>
                    <td>{emp.dateOfJoining}</td>
                    <td>{emp.status}</td>
                    <td>
                      <FaEdit
                        className="editemployee"
                        onClick={() => handleEditEmployee(emp.employeeId, emp)}
                      />
                      &nbsp;&nbsp;
                      <RiDeleteBin5Fill
                        className="deleteemployee"
                        onClick={() => handleDeleteEmployee(emp.employeeId)}
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
