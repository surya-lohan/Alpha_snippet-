import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp.jsx";
import Login from "./components/Login.jsx";
import HomePage from "./components/HomePage.jsx";
import Community from "./components/Community.jsx";
import Purpose from "./components/Purpose.jsx";
import Courses from "./components/Courses.jsx";
// import Performers from "./components/Performers.jsx";
import StudentProfile from "./components/StudentProfile.jsx";
import Peform from "./components/Peform.jsx";
const App = () => {
  return (
    <>
      {/* <HomePage></HomePage>
      <Community />
      <Purpose />
      <Footer2></Footer2> */}
    
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/profile" element={<StudentProfile />} />
        <Route path="/performance" element={<Peform />} />
      </Routes>
      
    </>
  );
};

export default App;
