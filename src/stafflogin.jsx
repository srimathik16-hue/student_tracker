import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function StaffLogin() {

  const navigate = useNavigate();
  const [staffId, setStaffId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (staffId === "" || password === "") {
      alert("Enter Staff ID and Password");
      return;
    }

    localStorage.setItem("role", "staff");

    navigate("/view");
  };

  return (
    <div>
      <h1>Staff Login</h1>

      <input
        placeholder="Staff ID"
        value={staffId}
        onChange={(e) => setStaffId(e.target.value)}
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

export default StaffLogin;