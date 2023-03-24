import AnswerCard from "./AnswerCard";

export default function QuestionCard({
  quiz,
  currentAnswer,
  currentQuestionIndex,
  quizzes,
  navigateNext,
  pickAnswer,
  correctAnswer,
  pickedAnswer,
}) {
  const isShowResult =
    pickedAnswer && currentQuestionIndex + 1 === quizzes.length;
  return (
    <div className="q-card">
      <h4>
        Question: {currentQuestionIndex + 1}/{quizzes.length}
      </h4>
      <h3>{quiz.question}</h3>
      <div className="a-card">
        {currentAnswer.map((answer, idx) => (
          <AnswerCard
            key={idx}
            answer={answer}
            pickAnswer={pickAnswer}
            correctAnswer={correctAnswer}
            pickedAnswer={pickedAnswer}
          />
        ))}
        <button onClick={navigateNext}>
          {isShowResult ? "Show Result" : "Next"}
        </button>
      </div>
      {/* next button */}
    </div>
  );
}
