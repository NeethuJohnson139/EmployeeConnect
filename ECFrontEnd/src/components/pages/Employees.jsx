import React, { useState, useEffect } from "react";
import { MdAddToPhotos } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
export const Employees = () => {
  return (
    <main className="majorcontainer">
        <div className="majortitle">
            <h3>EMPLOYEES</h3>
        </div>
        <div id="employeessection" className="employeessection">
            <button className="addnewemployee">
                <b><span>ADD NEW EMPLOYEE</span></b>
                &nbsp;&nbsp;&nbsp;
                <MdAddToPhotos className="addemployeeicon" />
            </button>
            <br /> <br /> <br />
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
                            <tr>
                                <td>hvhvh</td>
                                <td>jbjmn</td>
                                <td>bjbbn</td>
                                <td>bjkbnkn</td>
                                <td>dd/mm/yyyy</td>
                                <FaEdit className='editemployee' />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <RiDeleteBin5Fill className='deleteemployee'/>
                            </tr>
                            <tr>
                                <td>hvhvh</td>
                                <td>jbjmn</td>
                                <td>bjbbn</td>
                                <td>bjkbnkn</td>
                                <td>dd/mm/yyyy</td>
                                <FaEdit className='editemployee' />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <RiDeleteBin5Fill className='deleteemployee'/>
                            </tr>
                            <tr>
                                <td>hvhvh</td>
                                <td>jbjmn</td>
                                <td>bjbbn</td>
                                <td>bjkbnkn</td>
                                <td>dd/mm/yyyy</td>
                                <FaEdit className='editemployee' />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <RiDeleteBin5Fill className='deleteemployee'/>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
  );
};
