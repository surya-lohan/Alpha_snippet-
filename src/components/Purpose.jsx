import React from "react";

const Purpose = () => {
  return (
    <>
      <div className="text-[#D1FAE5] w-full h-screen p-[5vh] flex justify-center items-center gap-[48px] mb-[3vh] bg-[#09141B]">
        <div className="flex flex-row justify-center items-center p-[48px_0] gap-[74px] w-[584px] min-w-[280px] max-w-[600px] h-[619px] bg-[url('./assets/imagepou.svg')] rounded-md overflow-hidden bg-cover hover:scale-[1.1] duration-300 "></div>
        <div className="w-[584px] h-[141px]  flex-col  text-[36px] text-[#D1FAE5] flex items-center justify-center ">
          <h2 className="font-bold">Our Purpose :</h2>
          <p className="mt-3 ml-[10%]">
            We aim to provide accessible and engaging education for everyone,
            fostering a love for learning.
          </p>
        </div>
      </div>
      <hr className="w-[100%] bg-zinc-100 min-h-[1px] max-md:max-w-full" />
    </>
  );
};

export default Purpose;
