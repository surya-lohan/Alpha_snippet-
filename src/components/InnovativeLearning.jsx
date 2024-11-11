import InnLearningComponent from "./InnLearning-component";
export default function InnovativeLearning() {
  const data = [
    {
      imgSrc: "",
      heading: "Leaderboard Traking",
      paragraph:
        "Stay motivated with our leaderboard that showcases top performers based on quiz scores and achievements.",
    },
    {
      imgSrc: "",
      heading: "Diverse Course Offerings",
      paragraph:
        "Explore a wide range of subjects, from Science to Arts, designed to cater to every learner's interests.",
    },
    {
      imgSrc: "",
      heading: "Personalized Student Profiles",
      paragraph:
        "Manage your learning journey with personalized profiles that track your progress and achievements.",
    },
    {
      imgSrc: "",
      heading: "Interactive Quizzes",
      paragraph:
        "Challenge yourself with quizzes that make learning fun and engaging across various subjects.",
    },
    {
      imgSrc: "",
      heading: "Privacy and Control",
      paragraph:
        "Choose your course access settings, ensuring your learning experience is tailored to your preferences.",
    },
    {
      imgSrc: "",
      heading: "Gamified Learning Experience",
      paragraph:
        "Experience education like never before with gamification that makes learning enjoyable and rewarding.",
    },
  ];
  return (
    <div className="platform-learning">
      <div>
        <div className="platform">
          <p>Platform Features</p>
          <h1>Innovative Learning Experience</h1>
          <p>
            Our platform offers a unique blend of interactive learning and
            personalized course options.{" "}
          </p>
          <p>Engage with quizzes and track your progress effortlessly.</p>
        </div>
        <div className="flex mt-6 gap-4 ">
          {data.map((item, index) => (
            <InnLearningComponent
              key={index}
              imgSrc={item.imgSrc}
              heading={item.heading}
              paragraph={item.paragraph}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
