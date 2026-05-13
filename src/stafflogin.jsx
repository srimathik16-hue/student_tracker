import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";

function StaffLogin() {

  const navigate = useNavigate();

  const [staffId, setStaffId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (staffId === "" || password === "") {

      alert("Please Enter Staff ID and Password");

      return;
    }

    localStorage.setItem("role", "staff");

    navigate("/view");
  };

  return (
    <div className="login-container">

      <img
        src={logo}
        alt="College Logo"
        className="logo"
      />

      <h1>Staff Login</h1>

      <input
        type="text"
        placeholder="Enter Staff ID"
        value={staffId}
        onChange={(e) => setStaffId(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        Login
      </button>

      <br /><br />

      <button onClick={() => navigate(-1)}>
        Back
      </button>

    </div>
  );
}

export default StaffLogin;