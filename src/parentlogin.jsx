import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";

function ParentLogin() {

  const navigate = useNavigate();

  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (studentId === "" || password === "") {

      alert("Please Enter Student ID and Password");

      return;
    }

    const students =
      JSON.parse(localStorage.getItem("students")) || [];

    const validParent = students.find(
      (student) =>
        student.studentId === studentId &&
        student.password === password
    );

    if (validParent) {

      localStorage.setItem("role", "parent");

      localStorage.setItem("studentId", studentId);

      navigate("/view");

    } else {

      alert("Invalid Student ID or Password");
    }
  };

  return (
    <div className="login-container">

      <img
        src={logo}
        alt="College Logo"
        className="logo"
      />

      <h1>Parent Login</h1>

      <input
        type="text"
        placeholder="Enter Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        View Details
      </button>

      <br /><br />

      <button onClick={() => navigate(-1)}>
        Back
      </button>

    </div>
  );
}

export default ParentLogin;