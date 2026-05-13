import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddStudent() {

  const [studentId, setStudentId] = useState("");
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [cgpa, setCgpa] = useState("");

  const handleAdd = () => {

    const student = {
      studentId,
      name,
      password,
      department,
      cgpa
    };

    const oldStudents =
      JSON.parse(localStorage.getItem("students")) || [];

    oldStudents.push(student);

    localStorage.setItem(
      "students",
      JSON.stringify(oldStudents)
    );

    alert("Student Added Successfully");

    setStudentId("");
    setName("");
    setPassword("");
    setDepartment("");
    setCgpa("");
  };

  return (
    <div className="container">

      <h1>Add Student</h1>

      <input
        type="text"
        placeholder="Enter Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />
      <button onClick={() => navigate(-1)}>
          Back
      </button>


      <input
        type="text"
        placeholder="Enter Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter CGPA"
        value={cgpa}
        onChange={(e) => setCgpa(e.target.value)}
      />

      <button onClick={handleAdd}>
        Add Student
      </button>

    </div>
  );
}

export default AddStudent;