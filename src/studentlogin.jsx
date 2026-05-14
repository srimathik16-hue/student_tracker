import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function StudentLogin() {

  const navigate = useNavigate();
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    const students = JSON.parse(localStorage.getItem("students")) || [];

    const validStudent = students.find(
      (s) =>
        s.studentId === studentId &&
        s.password === password
    );

    if (validStudent) {

      localStorage.setItem("role", "student");
      localStorage.setItem("userId", studentId); // ✅ FIXED

      navigate("/view");

    } else {
      alert("Invalid Student Login");
    }
  };

  return (
    <div>
      <h1>Student Login</h1>

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

export default StudentLogin;