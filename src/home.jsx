import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";

function Home() {

  const navigate = useNavigate();

  return (
    <div className="home-container">

      <img
        src={logo}
        alt="College Logo"
        className="logo"
      />

      <h1>Student Management System</h1>

      <button onClick={() => navigate("/staff-login")}>
        Staff Login
      </button>
      <button onClick={() => navigate("/student-login")}>
        Student Login
      </button>
      <button onClick={() => navigate("/parent-login")}>
        Parent Login
      </button>

    </div>
  );
}

export default Home;