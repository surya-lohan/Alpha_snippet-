export default function InnLearningComponent({ imgSrc, heading, paragraph }) {
  return (
    <div className=" flex">
      <div className="text-white hover:scale-[1.1] duration-300 h-fit flex flex-col p-4">
        <div className="flex flex-col gap-4">
          <div className="">
            <img src={imgSrc} alt="img" class="w-[4vw] rounded-md" />
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
