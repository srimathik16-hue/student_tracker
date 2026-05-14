import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ParentLogin() {

  const navigate = useNavigate();
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    const students = JSON.parse(localStorage.getItem("students")) || [];

    const validParent = students.find(
      (s) =>
        s.studentId === studentId &&
        s.password === password
    );

    if (validParent) {

      localStorage.setItem("role", "parent");
      localStorage.setItem("userId", studentId); // ✅ FIXED

      navigate("/view");

    } else {
      alert("Invalid Parent Login");
    }
  };

  return (
    <div>
      <h1>Parent Login</h1>

      <input
        placeholder="Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
      <button onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
}

export default ParentLogin;