import React, { useState, useEffect } from "react";
import { databases, account } from "../lib/appwrite"; // Import account and databases from appwrite

export default function ProfilePart2() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const user = await account.get();
        const userDoc = await databases.getDocument(
          "surya-data",
          "users-collection",
          user.$id
        );
        setEnrolledCourses(userDoc.EnrolledCourses || []);
      } catch (error) {
        console.error("Error fetching enrolled courses:", error);
      }
    };

    fetchEnrolledCourses();
  }, []);

  return (
    <div className="w-full flex justify-between items-center">
      <div className="mr-8">
        {/* First Section - Personal Details */}
        <div className="bg-gradient-to-r from-[#24C8E0] via-[#B41C84] to-[#144389] w-[32vw] h-[19vh] p-[1vh] rounded-[2vh] m-[2vh]">
          <h1 className="text-white font-medium ml-[1vh]">Personal Details</h1>
          <button className="w-[90%] bg-white rounded-[2vw] m-[0.5vh] flex items-center justify-center text-gray-400 text-[2vh] h-[22%]">
            Add interests
          </button>
          <button className="w-[90%] bg-white rounded-[2vw] m-[0.5vh] flex items-center justify-center text-gray-400 text-[2vh] h-[22%]">
            Update profile
          </button>
          <button className="w-[90%] bg-white rounded-[2vw] m-[0.5vh] flex items-center justify-center text-gray-400 text-[2vh] h-[22%]">
            Add preferences
          </button>
        </div>

        {/* Second Section - Gallery */}
        <div className="bg-gradient-to-r from-[#24C8E0] via-[#B41C84] to-[#144389] w-[32vw] min-h-[38vh] m-[2vh] p-[1.5vh] rounded-[2vh]">
          <h1 className="text-white font-medium">Gallery</h1>
          <div className="grid grid-cols-2 gap-x-[1vh] gap-y-[1vw]">
            <div className="h-[110px] w-full bg-white rounded-[2vh]"></div>
            <div className="h-[110px] w-full bg-white rounded-[2vh]"></div>
            <div className="h-[110px] w-full bg-white rounded-[2vh]"></div>
            <div className="h-[110px] w-full bg-white rounded-[2vh]"></div>
          </div>
        </div>
      </div>

      {/* Activity Section */}
      <div className="mr-[8vw]">
        {/* Enrolled Section */}
        <div className="flex items-center justify-start bg-antiquewhite bg-gradient-to-r from-[#24C8E0] via-[#B41C84] to-[#144389] h-[19vh] p-[1vh] rounded-[3vh] m-[2vh] w-[60vw]">
          {enrolledCourses.map((course, index) => (
            <div
              key={index}
              className="w-[15vw] h-[13vh] rounded-[3vh] bg-[rgba(254,254,254,0.6)] flex items-end justify-center text-black font-medium text-lg m-[2vh]"
            >
              <p>{course}</p>
            </div>
          ))}
          <button className="bg-[#D11E1E] rounded-full px-6 py-2 text-sm font-semibold text-white border-none cursor-pointer">
            More
          </button>
        </div>

        {/* Activity Box */}
        <div className="bg-gradient-to-r from-[#24C8E0] via-[#B41C84] to-[#144389] h-[38vh] rounded-[3vh] m-[2vh] w-[60vw] text-white">
          <div className="p-[1.5vh]">
            <div className="flex flex-row gap-[2vh] items-center">
              <div className="border-2 border-white h-[7vh] w-[7vh] rounded-full"></div>
              <div>
                <h3>Excited about learning</h3>
                <p>Just now</p>
              </div>
            </div>
            <p className="pl-[2vh] mt-2">
              Explore the world of gamified education. Join me in the quest for
              knowledge and fun! Let's level up together!
            </p>
          </div>
          <div className="flex items-center justify-between px-[2vh]">
            <div className="h-[22vh] w-[28%] rounded-[3vh] bg-white"></div>
            <div className="h-[22vh] w-[28%] rounded-[3vh] bg-white"></div>
            <div className="h-[22vh] w-[28%] rounded-[3vh] bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
