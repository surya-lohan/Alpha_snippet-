export default function InnLearningComponent({ imgSrc, heading, paragraph }) {
  return (
    <div className=" flex-row ">
      <div className="text-white hover:scale-[1.1] duration-300 w-[50%] h-fit flex flex-col w-fit p-4">
        <div className="flex flex-col gap-4">
          <div className="">
            <img src={imgSrc} alt="img" className="" />
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-2">{heading}</h1>
            <p className="text-gray-700">{paragraph}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
