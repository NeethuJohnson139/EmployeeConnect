import React, { useState, useEffect } from "react";
export const Leaveapproval = () => {
  return (
    <main className="majorcontainer">
        <div className="majortitle">
            <h3>LEAVE APPROVAL</h3>
        </div>
        <div id="leavesection" className="leavesection">
            <div className="leavelist">
                <div className="leavetable">
                    <table>
                        <thead>
                            <tr>
                                <th>LEAVE ID</th>
                                <th>EMPLOYEE NAME</th>
                                <th>LEAVE TYPE</th>
                                <th>START DATE</th>
                                <th>END DATE</th>
                                <th>REASON</th>
                                <th>REQUESTED ON</th>
                                <th>STATUS</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>12</td>
                                <td>bjkbnkn</td>
                                <td>bjkbnkn</td>
                                <td>dd/mm/yyyy</td>
                                <td>dd/mm/yyyy</td>
                                <td>bjkbnkn</td>
                                <td>dd/mm/yyyy</td>
                                <td>Pending</td>
                                <td>
                                  <button className="approveleave">APPROVE</button>
                                  <button className="rejectleave">REJECT</button>
                                </td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>bjkbnkn</td>
                                <td>bjkbnkn</td>
                                <td>dd/mm/yyyy</td>
                                <td>dd/mm/yyyy</td>
                                <td>bjkbnkn</td>
                                <td>dd/mm/yyyy</td>
                                <td>Pending</td>
                                <td>
                                    <button className="approveleave">APPROVE</button>
                                    <button className="rejectleave">REJECT</button>
                                </td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>bjkbnkn</td>
                                <td>bjkbnkn</td>
                                <td>dd/mm/yyyy</td>
                                <td>dd/mm/yyyy</td>
                                <td>bjkbnkn</td>
                                <td>dd/mm/yyyy</td>
                                <td>Pending</td>
                                <td>
                                    <button className="approveleave">APPROVE</button>
                                    <button className="rejectleave">REJECT</button>
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
