import React, { useState, useEffect } from "react";
import { MdAddToPhotos } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
export const Viewfeedbacks = () => {
  return (
    <main className="majorcontainer">
        <div className="majortitle">
            <h3>VIEW FEEDBACKS</h3>
        </div>
        <br/> <br/> <br/>
        <div id="departmentsection" className="departmentsection">
            <div className="departmentlist">
                <div className="departmenttable">
                    <table>
                        <thead>
                            <tr>
                                <th>EMPLOYEE ID</th>
                                <th>EMPLOYEE NAME</th>
                                <th>RAISED FEEDBACK</th>
                                <th>RAISED ON</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>hvhvh</td>
                                <td>bjkbnkn</td>
                                <td>bjkbjkbnknbjkbnknbjkbnknbjkbnkjkbnknbnknbnknbjkbnknbjkbnknbjkbnknbjkbnknbjkbnknbnkn</td>
                                <td>dd/mm/yyyy</td>
                            </tr>
                            <tr>
                                <td>hvhvh</td>
                                <td>bjkbnkn</td>
                                <td>bjkbjkbnknbjkbnknbjkbnknbjkbnkjkbnknnknbjkbnknbjkbnknbjkbnknbjkbnknbjkbnknbnkn</td>
                                <td>dd/mm/yyyy</td>
                            </tr>
                            <tr>
                                <td>hvhvh</td>
                                <td>jbjmn</td>
                                <td>bjkbjkbnknbjkbnknbjkbnknbjkbnkjkbnnknbjkbnknbjkbnknbjkbnknbjkbnknbjkbnknbnkn</td>
                                <td>dd/mm/yyyy</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
  );
};
