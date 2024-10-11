import React, { useState, useEffect } from "react";
import { MdAddToPhotos } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";


export const Departments = () => {
  
  return (
    <main className="majorcontainer">
        <div className="majortitle">
            <h3>DEPARTMENTS</h3>
        </div>
        <div id="departmentsection" className="departmentsection">
            <button className="addnewdepartment">
                <b><span>ADD NEW DEPARTMENT</span></b>
                &nbsp;&nbsp;&nbsp;
                <MdAddToPhotos className="adddepartmenticon" />
            </button>
            <br /> <br /> <br />
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
                            <tr>
                                <td>hvhvh</td>
                                <td>bjkbnkn</td>
                                <td>dd/mm/yyyy</td>
                                <td>
                                  <FaEdit className='editdepartment' />
                                </td>
                            </tr>
                            <tr>
                                <td>hvhvh</td>
                                <td>bjkbnkn</td>
                                <td>dd/mm/yyyy</td>
                                <td>
                                  <FaEdit className='editdepartment' />
                                </td>
                            </tr>
                            <tr>
                                <td>hvhvh</td>
                                <td>jbjmn</td>
                                <td>dd/mm/yyyy</td>
                                <td>
                                  <FaEdit className='editdepartment' />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
  );
};
