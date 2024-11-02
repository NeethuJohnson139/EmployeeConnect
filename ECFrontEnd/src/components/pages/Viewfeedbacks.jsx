import React, { useState, useEffect } from "react";
import axiosInstance from "../Utils/ServerInstance";
import { RiDeleteBin5Fill } from "react-icons/ri";

export const Viewfeedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  // Fetch all feedbacks on component mount
  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await axiosInstance.get("/feedback");
      setFeedbacks(response.data);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    }
  };

  const handleDeleteFeedback = async (id) => {
    try {
      await axiosInstance.delete(`/feedback/${id}`);
      fetchFeedbacks(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting feedback:", error);
    }
  };

  return (
    <main className="majorcontainer">
      <div className="majortitle">
        <h3>VIEW FEEDBACKS</h3>
      </div>
      <br /> <br /> <br />
      <div id="departmentsection" className="departmentsection">
        <div className="departmentlist">
          <div className="departmenttable">
            <table>
              <thead>
                <tr>
                  <th>FEEDBACK ID</th>
                  <th>SENDER ID</th>
                  <th>RECEIVER ID</th>
                  <th>FEEDBACK TEXT</th>
                  <th>RATING</th>
                  <th>SUBMITTED AT</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {feedbacks.map((feedback) => (
                  <tr key={feedback.feedbackId}>
                    <td>{feedback.feedbackId}</td>
                    <td>{feedback.senderId}</td>
                    <td>{feedback.receiverId}</td>
                    <td>{feedback.feedbackText}</td>
                    <td>{feedback.rating}</td>
                    <td>{new Date(feedback.submittedAt).toLocaleString()}</td>
                    <td>
                      <RiDeleteBin5Fill
                        className="deletefeedback"
                        onClick={() => handleDeleteFeedback(feedback.feedbackId)}
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
