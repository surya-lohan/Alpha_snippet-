import React, { useState, useEffect } from "react";
import Categories from "./Categories";
import { databases, account } from "../lib/appwrite"; // Import account from appwrite
// import Quiz from "./Quiz";

const Courses = () => {
  const [coursedata, setCoursedata] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthentication = async () => {
    try {
      const user = await account.get();
      setIsAuthenticated(true);
      fetchEnrolledCourses(user.$id); // Fetch enrolled courses after authentication
    } catch (error) {
      console.error("User not authenticated:", error);
      window.location.href = "/login"; // Redirect to login page if not authenticated
    }
  };

  const fetchEnrolledCourses = async (userId) => {
    try {
      const userDoc = await databases.getDocument(
        "surya-data",
        "users-collection",
        userId
      );
      const enrolledCourses = userDoc.EnrolledCourses || [];
      setCoursedata((prevData) =>
        prevData.map((course) =>
          enrolledCourses.includes(course.title)
            ? { ...course, enrolled: true }
            : course
        )
      );
    } catch (error) {
      console.error("Error fetching enrolled courses:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      alert("You have been logged out.");
      window.location.href = "/login";
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleEnroll = (index, courseTitle) => {
    if (!isAuthenticated) {
      alert("You need to be logged in to enroll in a course.");
      window.location.href = "/login";
      return;
    }

    alert(`You are enrolled in the course: ${courseTitle}`);
    setCoursedata((prevData) =>
      prevData.map((course, i) =>
        i === index ? { ...course, enrolled: true } : course
      )
    );
    handleEnrollLocal(courseTitle);
  };

  const handleEnrollLocal = async (courseName) => {
    try {
      const user = await account.get(); // Get the current logged-in user
      const userId = user.$id;

      // Fetch the user document to get existing EnrolledCourses
      const userDoc = await databases.getDocument(
        "surya-data",
        "users-collection",
        userId
      );
      const enrolledCourses = userDoc.EnrolledCourses || []; // Existing courses or an empty array

      // Add the new course to EnrolledCourses array
      const updatedCourses = [...enrolledCourses, courseName];

      // Update the user's document with the new list of enrolled courses
      await databases.updateDocument("surya-data", "users-collection", userId, {
        EnrolledCourses: updatedCourses,
      });

      console.log("Course enrolled successfully:", courseName);
    } catch (error) {
      console.error("Error enrolling in course:", error);
    }
  };

  const Data = async () => {
    // Your async code here
    try {
      const response = await databases.listDocuments(
        "surya-data",
        "course-data"
      );

      const courseData = response.documents.map((doc) => ({
        title: doc.title,
        duration: doc.duration,
        rating: doc.rating || "N/A",
        img: doc.img,
      }));

      setCoursedata(courseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    checkAuthentication();
    Data();
  }, []);

  return (
    <div className="flex">
      <div className="w-[10%] h-screen text-white bg-[#383838]">
        <ul>
          <li>X</li>
          <li>y</li>
          <li>z</li>
          <li>1</li>
        </ul>
        <button onClick={handleLogout}>Log out</button>
      </div>
      <div className="min-h-screen w-[90%] p-5  bg-[#09141B] ">
        <div>
          <h1 className=" text-white text-3xl">Featured Courses</h1>
          <div className="flex gap-8 p-4 text-white">
            {coursedata.map((course, index) => (
              <div
                key={index}
                className="rounded-xl bg-[#060e13] hover:scale-[1.1] duration-300 drop-shadow-xl shadow-xl border border-white relative text-white min-h-[40vh] overflow-hidden w-[20vw]"
              >
                <img className="w-full h-[65%] " src="" alt="" />
                <div className="rounded-[50%] absolute left-[20%] top-[38%] bg-white h-[4vh] w-[2vw]"></div>
                <div className="rounded-[50%] absolute right-[8%] top-[5%] bg-white h-[4vh] w-[2vw]"></div>
                <div className="flex flex-col p-2 ">
                  <h3 className="text-sm m-4">{course.title}</h3>
                  <div className="flex ml-4 justify-evenly gap-4">
                    <i className="ri-time-line"></i>
                    <h4 className="text-sm">{course.duration}</h4>
                    <i className="ri-star-fill"></i>
                    <h4 className="text-sm">{course.rating}</h4>
                    <button
                      className="h-[4vh] w-[4vw] hover:scale-[1.2] duration-300 text-sm rounded-full bg-red-200 "
                      onClick={() => handleEnroll(index, course.title)}
                    >
                      {course.enrolled ? "Enrolled" : "Enroll"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Categories />
      </div>
    </div>
  );
};
export default Courses;