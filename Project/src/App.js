import QuestionCard from "./components/QuestionCard";
import ScoreCard from "./components/ScoreCard";
import shuffle from "./lib/arraySuffle";
import { useState } from "react";
function App() {
  const [quizzes, setQuizzes] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [startQuiz, setStartQuiz] = useState(false);
  const [endQuiz, setEndQuiz] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [totalMark, setTotalMark] = useState(0);
  const [correctAnswer, setCorrecttAnswer] = useState(null);
  const [pickedAnswer, setPickedAnswer] = useState(null);

  // fetching quizzes (question and ans) from API
  const fetchData = async () => {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple"
    );
    const { results } = await res.json();
    const initialResult = results[currentQuestionIndex];
    // storing results in state
    setQuizzes(results);
    // define loaded 'true' when data loaded
    setLoaded(true);
    // define startQuiz 'true' when clicked on start quiz btn
    setStartQuiz(true);
    // getting answers for initial question and suffle them
    setCurrentAnswer(shuffle(initialResult));
    // getting correct answers for initial question
    setCorrecttAnswer(initialResult.correct_answer);
  };
  // function for next button from QuestionCard
  const navigateNext = () => {
    const currentQuizIndex = currentQuestionIndex + 1;
    const validQuestionIndex = currentQuizIndex < quizzes.length;
    if (validQuestionIndex) {
      setCurrentQuestionIndex(currentQuizIndex);
      const question = quizzes[currentQuizIndex];
      setCurrentAnswer(shuffle(question));
      setPickedAnswer(null);
      setCorrecttAnswer(question.correct_answer);
    } else {
      setEndQuiz(true);
    }
  };
  // picking answer when clicked on it
  const pickAnswer = (answer) => {
    setPickedAnswer(answer);
    if (answer === correctAnswer) {
      setTotalMark((prevMark) => prevMark + 1);
    }
  };
  // reset quiz
  const resetQuiz = () => {
    setQuizzes(null);
    setCurrentQuestionIndex(0);
    setLoaded(false);
    setStartQuiz(false);
    setEndQuiz(false);
    setCurrentAnswer(null);
    setTotalMark(0);
    setCorrecttAnswer(null);
    setPickedAnswer(null);
  };

  return (
    <div className="main">
      {!startQuiz && <button onClick={fetchData}>Start Quiz</button>}
      {loaded && !endQuiz && (
        <QuestionCard
          quiz={quizzes[currentQuestionIndex]}
          currentAnswer={currentAnswer}
          currentQuestionIndex={currentQuestionIndex}
          quizzes={quizzes}
          navigateNext={navigateNext}
          pickAnswer={pickAnswer}
          correctAnswer={correctAnswer}
          pickedAnswer={pickedAnswer}
        />
      )}
      {endQuiz && <ScoreCard resetQuiz={resetQuiz} totalMark={totalMark} />}
    </div>
  );
}

export default App;
