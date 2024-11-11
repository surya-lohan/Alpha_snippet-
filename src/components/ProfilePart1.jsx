import React from "react";

const ProfilePart1 = ({ userName }) => {
  return (
    <>
      <div className="p-4  relative">
        <div className="min-h-[40vh] w-full">
          <div className="h-[25vh] rounded-2xl w-full bg-white"></div>
          <div>
            <span className="bg-red-100 absolute rounded-2xl inline-block h-[16vh] w-[8vw] bottom-16 left-10 ">
              <img src="" alt="" />
            </span>
            <div className="flex justify-between p-2 items-center">
              <div className="text-white flex flex-col items-center justify-center font-semibold ml-36">
                <h1 className="text-xl">{userName}</h1>
                <h3 className="text-xs">Interactive Learning</h3>
              </div>
              <div className="text-white flex  gap-4">
                <button className="bg-[#D11E1E] hover:bg-[#ea4d4d] rounded-full px-6 py-2 text-sm font-semibold">
                  Customise
                </button>
                <button className="bg-[#D11E1E] hover:bg-[#ea4d4d] rounded-full px-8 py-2 text-sm font-semibold">
                  Chat
                </button>
              </div>
            </div>
            <div className="flex justify-evenly items-center w-[40%] mt-8">
              <button className="bg-[#D11E1E] hover:bg-[#ea4d4d] rounded-full px-4 text-white py-1 text-xs font-semibold">
                Lessons
              </button>
              <button className="bg-[#D11E1E] hover:bg-[#ea4d4d] rounded-full px-4 text-white py-1 text-xs font-semibold">
                Info
              </button>
              <button className="bg-[#D11E1E] hover:bg-[#ea4d4d] rounded-full px-4 text-white py-1 text-xs font-semibold">
                Gallery
              </button>
              <button className="bg-[#D11E1E] hover:bg-[#ea4d4d] rounded-full px-4 text-white py-1 text-xs font-semibold">
                Clips
              </button>
              <button className="bg-[#D11E1E] hover:bg-[#ea4d4d] rounded-full px-4 text-white py-1 text-xs font-semibold">
                Classmates
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePart1;
