import React from "react";

export default function Employee({ employee }) {
  return (
    <div>
      <label>Name : {employee.name}</label>
      <label>Address : {employee.address}</label>
      <label>Contact : {employee.contact}</label>
      <label>Email : {employee.email}</label>
    </div>
  );
}
