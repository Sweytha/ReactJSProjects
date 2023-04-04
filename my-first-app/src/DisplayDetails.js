import React from "react";

const DisplayDetails = ({ details }) => {
  return (
    <div>
      <h2>User Details:</h2>
      <ul>
        <li>Name: {details.name}</li>
        <li>Email: {details.email}</li>
        <li>Phone: {details.phone}</li>
      </ul>
    </div>
  );
};

export default DisplayDetails;