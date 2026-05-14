import React from "react";
import { useNavigate } from "react-router-dom";

function ViewStudents() {

  const navigate = useNavigate();

  const students = JSON.parse(localStorage.getItem("students")) || [];
  const role = localStorage.getItem("role");
  const userId = localStorage.getItem("userId");

  const filtered = students.filter((s) => {

    if (role === "staff") return true;

    if (role === "student") return s.studentId === userId;

    if (role === "parent") return s.studentId === userId;

    return false;
  });

  const handleDelete = (index) => {
    const updated = students.filter((_, i) => i !== index);
    localStorage.setItem("students", JSON.stringify(updated));
    window.location.reload();
  };

  return (
    <div>
      <h1>Student Details</h1>

      {filtered.length === 0 ? (
        <p>No Data Found</p>
      ) : (
        filtered.map((s, i) => (
          <div key={i}>

            <h3>Name: {s.name}</h3>
            <h3>Dept: {s.department}</h3>
            <h3>CGPA: {s.cgpa}</h3>

            {role === "staff" && (
              <>
                <button onClick={() => navigate("/add")}>Add</button>
                <button>Edit</button>
                <button onClick={() => handleDelete(i)}>Delete</button>
              </>
            )}

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default ViewStudents;