import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./home";
import AddStudent from "./addstudent";
import ViewStudents from "./viewstudent";

import StaffLogin from "./stafflogin";
import StudentLogin from "./studentlogin";
import ParentLogin from "./parentlogin";

import "./App.css";

function App() {
  return (
    <Router>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/staff-login" element={<StaffLogin />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/parent-login" element={<ParentLogin />} />

        <Route path="/add" element={<AddStudent />} />
        <Route path="/view" element={<ViewStudents />} />

      </Routes>

    </Router>
  );
}

export default App;