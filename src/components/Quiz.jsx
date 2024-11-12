import { useState, useEffect } from "react";
import axios from "axios";
import { account, databases } from "../lib/appwrite"; // Import Appwrite databases
import { useNavigate } from "react-router-dom";
export default function Quiz() {
  const navigate = useNavigate();
  const handlecourses = () => {
    navigate("/courses");
  };
  const handleleader = () => {
    navigate("/performance");
  };

  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30); // Timer state
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Fetch questions from the API
    axios
      .get(
        "https://quizapi.io/api/v1/questions?apiKey=E2jcTSKa2lgA2lQF5qDnoThJ20kyTR4S4YYCSsN5&category=react&difficulty=Medium&limit=5"
      )
      .then((response) => {
        setQuestions(response.data);
        console.log("Questions fetched successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });

    // Fetch the logged-in user's document ID
    const fetchUserId = async () => {
      try {
        const user = await account.get();
        console.log("Fetched user ID:", user.$id);
        setUserId(user.$id);
      } catch (error) {
        console.error("Error fetching user ID:", error);
      }
    };

    fetchUserId();
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion();
    }
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const updateScore = async () => {
    try {
      if (!userId) {
        throw new Error("Document ID not found");
      }

      let userDoc;
      try {
        userDoc = await databases.getDocument(
          "surya-data",
          "leader-collection",
          userId
        );
      } catch (error) {
        if (error.code === 404) {
          console.error("User document not found");
          return;
        } else {
          throw error;
        }
      }

      const newScore = parseInt(userDoc.score) + 100;
      await databases.updateDocument(
        "surya-data",
        "leader-collection",
        userId,
        {
          score: newScore,
        }
      );
      alert("Score updated successfully");
    } catch (error) {
      console.error("Error updating score:", error);
    }
  };

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    const correctAnswers = Object.entries(currentQuestion.correct_answers)
      .filter(([key, value]) => value === "true")
      .map(([key]) => key.replace("_correct", ""));
    if (correctAnswers.includes(answer)) {
      setCorrectAnswer(answer);
      updateScore(); // Update score when the correct answer is selected
    } else {
      setCorrectAnswer(correctAnswers[0]);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setCorrectAnswer(null);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setTimeLeft(30); // Reset timer
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const answers = currentQuestion?.answers
    ? Object.entries(currentQuestion.answers)
        .filter(([key, value]) => value)
        .map(([key, value]) => ({ key, value }))
    : [];

  return (
    <div className="outer-div bg-[#09141B] w-screen h-screen flex items-center flex-col justify-center">
      <div className="white-box w-[50vw] h-[70vh] border-2 border-white text-black bg-white p-[4vh] rounded-[3vh]">
        {currentQuestionIndex >= questions.length ? (
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-[4vh] font-bold">Quiz Completed!</h1>
            <button
              onClick={handlecourses}
              className="w-fit h-fit px-4 py-3 rounded-md my-6 bg-green-300 font-semibold"
            >
              Return to Courses
            </button>
            <button
              onClick={handleleader}
              className="w-fit h-fit px-4 py-2 rounded-md bg-red-300 text-zinc-700 font-semibold"
            >
              Check Leaderboard
            </button>
          </div>
        ) : (
          <>
            <div>
              <div className="quiz-time flex items-center justify-between text-[#6F6F6F]">
                <h1 className="text-[4vh] font-semibold">Quiz</h1>
                <div className="time w-[25vh] flex items-center justify-between rounded-[3vw] p-[0.9vh_1.4vh] bg-[#CEE7FB] font-semibold">
                  <p>Time left</p>
                  <div className="rounded-[3vw] p-[0.9vh_1.4vh] bg-white">
                    {timeLeft}
                  </div>
                </div>
              </div>
              <div>
                <progress
                  id="progressBar"
                  value={((currentQuestionIndex + 1) / questions.length) * 100}
                  max="100"
                  className="w-full h-[3px] bg-gray-300 rounded"
                >
                  {((currentQuestionIndex + 1) / questions.length) * 100}%
                </progress>
              </div>
            </div>
            {/* MCQs */}
            <div className="mcqs h-[54vh] flex flex-col items-center">
              {currentQuestion ? (
                <>
                  <h1 className="text-[4vh] font-bold">
                    {currentQuestionIndex + 1}. {currentQuestion.question}
                  </h1>
                  {answers.length > 0 ? (
                    answers.map(({ key, value }, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerClick(key)}
                        className={`mt-[0.5vh] h-[7.5vh] hover:bg-zinc-400 duration-300 hover:text-white w-[90%] rounded-[3vw] border-2 text-[1.3vw] ${
                          selectedAnswer === key
                            ? correctAnswer === key
                              ? "bg-green-100 border-green-500 text-black"
                              : "bg-red-100 border-red-500 text-black"
                            : correctAnswer === key
                            ? "bg-green-100 border-green-500 text-black"
                            : "bg-[#EFF7FC] border-[#DAE9F5] text-[#A1A6AA]"
                        }`}
                      >
                        {value}
                      </button>
                    ))
                  ) : (
                    <div>No answers available</div>
                  )}
                </>
              ) : (
                <div>No question available</div>
              )}
              <div className="bottom flex mt-3 items-center justify-between gap-[22vw] text-[#6F6F6F] font-medium">
                <p>
                  {currentQuestionIndex + 1} of {questions.length} Questions
                </p>
                <button
                  onClick={handleNextQuestion}
                  className="bg-[#017DFE] rounded-md px-4 py-2  text-white font-medium"
                >
                  Next Question
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
