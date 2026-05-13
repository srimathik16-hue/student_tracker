import React from "react";
import { useNavigate } from "react-router-dom";

function ViewStudents() {

  const navigate = useNavigate();

  const students = JSON.parse(localStorage.getItem("students")) || [];

  const role = localStorage.getItem("role");

  const studentId = localStorage.getItem("studentId");

  const handleDelete = (index) => {

    const updatedStudents = students.filter((student, i) => i !== index);

    localStorage.setItem("students", JSON.stringify(updatedStudents));

    window.location.reload();
  };

  return (
    <div>

      <h1>Student Details</h1>

      {
        students
          .filter((student) => {

            if (role === "staff") {
              return true;
            }

            return student.studentId === studentId;
          })
          .map((student, index) => (

            <div key={index} className="student-card">

              <h3>Name: {student.name}</h3>

              <h3>Department: {student.department}</h3>

              <h3>CGPA: {student.cgpa}</h3>

              {
                role === "staff" && (
                  <div>

                    <button onClick={() => navigate("/add")}>
                      Add
                    </button>

                    <button>
                      Edit
                    </button>

                    <button onClick={() => handleDelete(index)}>
                      Delete
                    </button>

                  </div>
                )
              }

              <hr />

            </div>
          ))
      }

    </div>
  );
}

export default ViewStudents;
