import InnovativeLearning from "./InnovativeLearning";
export default function HomePage() {
  return (
    <div>
      <div className="nav">
        <h1>EduGameHub</h1>
        <div>
          <button>Our Team</button>
          <button id="second">Log In</button>
          <button id= "third">Join now</button>
        </div>
      </div>
      <div className="bg">
        <div className="outer-box">
          {/* <div className="inner-box"> */}
          <h1>Exploring our interactive learning platform!</h1>
          <p>Join a community of learners and educators.</p>
          <p>Experience personalized education like never before.</p>
          <button className="hover:scale-[1.1] duration-300 hover:bg-[#de4b4b]">
            Get Started Today
          </button>
          {/* </div> */}
        </div>
      </div>
      <InnovativeLearning></InnovativeLearning>
    </div>
  );
}
