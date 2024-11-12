import Community from "./community";
import InnovativeLearning from "./InnovativeLearning";
import Footer from "./Footer2";
import Purpose from "./Purpose";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const handleclicklogin = () => {
    navigate("/login");
  };
  const handleclicksignup = () => {
    navigate("/signup");
  };
  return (
    <div className="h-full w-full bg-[#09141B]">
      <div className="bg-[#09141B] w-full h-[10vh] flex items-center justify-between">
        <h1 className="ml-[3vw] text-white">EduGameHub</h1>
        <div className="mr-[2vw]">
          <button className="text-white m-[2vh]">Our Team</button>
          <button
            onClick={handleclicklogin}
            id="second"
            className="border-2 border-white mx-4 bg-transparent py-[0.5vh] px-[1vw] rounded-[2vh] text-white"
          >
            Log In
          </button>
          <button
            onClick={handleclicksignup}
            id="third"
            className="border-2 border-[#D21F1F] bg-[#D21F1F] py-[0.5vh] px-[1vw] rounded-[2vh] text-white"
          >
            Join Now
          </button>
        </div>
      </div>
      <div
        className="bg-cover bg-center bg-no-repeat relative h-[80vh] w-full"
        style={{
          backgroundImage:
            "url('https://s3-alpha-sig.figma.com/img/f896/b652/372b609d38d6fb35b77830ec04155c9b?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hms4Xj6dWFg-zEqAooQia9T~WBLWISe76XJPuqai7-AAT6M5vJS6EbftKoFUfJEvkSCyUwsQu~9AQhjWyVrF9EqdXJz9-4W15ErVAVlqu9Ns4fRvlKs~nzW0xs8snYGIRzIsZ4Wx7V0SwgFsEe2oMzyLXBdcdM99K9eoQCdBpU7RPKHRVo1dFZ5jiNmw09MsyYqw3RXAlwmv3H8za~ly83vP9vBc8W1lfkTx0glmj-V3Y5krqlSQkbKCLPBDdgFweTchjBrn-GiMwnuq3vNH6mFWvtfjaFh52mCrAH4WSUmMJaC5ywTZTThgT~qKquNPBREPgKCOHz8WD3mbYXuXkA__')",
        }}
      >
        <div className="absolute bg-black bg-opacity-30 text-white flex flex-col items-center justify-center h-[80vh] w-full">
          <h1 className="text-[7vh] font-bold">
            Exploring our interactive learning platform!
          </h1>
          <p className="text-[3vh] font-light">
            Join a community of learners and educators.
          </p>
          <p className="text-[3vh] font-light">
            Experience personalized education like never before.
          </p>
          <button
            onClick={handleclicksignup}
            className="bg-[#D21F1F] h-[6vh] w-[16vw] mt-[2vh] rounded-[3vh] py-[1.7vh] flex items-center justify-center transform hover:scale-110 duration-300 hover:bg-[#de4b4b]"
          >
            Get Started Today
          </button>
        </div>
      </div>
      <InnovativeLearning />
      <Community />
      <Purpose />
      <Footer />
    </div>
  );
}
