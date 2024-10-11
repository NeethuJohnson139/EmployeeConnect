import React, { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";

export const SalarynAttendance = () => {
  return (
    <main className="majorcontainer">
        <div className="majortitle">
            <h3>SALARY AND ATTENDANCE</h3>
        </div>
        <br/><br/><br/><br/>
        <div className="salaryinfosection">
            <div className="salaryinputs">
                <label>Select Employee : &nbsp;&nbsp;&nbsp;</label>
                <select id="staff_type" required>
                    <option value="#">Select Employee</option>
                    <option value="All">All</option>
                    <option value="pending">pending</option>
                    <option value="delivered">delivered</option>
                </select>
            </div>
            <div className="salaryinputs">
                <label>Start Date : &nbsp;&nbsp;&nbsp;</label>
                <input type="date" placeholder="From Date" id="fromdate" value=""/>
            </div>
            <div className="salaryinputs">
                <label>End Date : &nbsp;&nbsp;&nbsp;</label>
                <input type="date" placeholder="To Date" id="todate" value=""/>
            </div>
            <br /> 
            <button type="submit">VIEW DETAILS</button>
        </div>

        <div className="salaryinfosection">
            <div className="salaryoutputs">
                <label>Employee ID &nbsp;&nbsp;&nbsp;</label>
                <label>1234567890123456789&nbsp;&nbsp;&nbsp;</label>  
            </div>
            <div className="salaryoutputs">
                <label>Start Date &nbsp;&nbsp;&nbsp;</label>
                <label>dd/mm/yyyy&nbsp;&nbsp;&nbsp;</label>
            </div>
            <div className="salaryoutputs">
                <label>End Date &nbsp;&nbsp;&nbsp;</label>
                <label>dd/mm/yyyy&nbsp;&nbsp;&nbsp;</label>
            </div>
            <div className="salaryoutputs">
                <label>Hourly Rate &nbsp;&nbsp;&nbsp;</label>
                <label>1234567890123456789&nbsp;&nbsp;&nbsp;</label>
            </div>
            <div className="salaryoutputs">
                <label>Total Hours Worked &nbsp;&nbsp;&nbsp;</label>
                <label>1234567890123456789&nbsp;&nbsp;&nbsp;</label>
            </div>
            <div className="salaryoutputs">
                <label>Total Pay &nbsp;&nbsp;&nbsp;</label>
                <label>1234567890123456789&nbsp;&nbsp;&nbsp;</label>
            </div>
            <br /> 
            <button type="submit">UPDATE DETAILS</button>
        </div>


    </main>
  );
};
