export default function AnswerCard({
  answer,
  pickAnswer,
  correctAnswer,
  pickedAnswer,
}) {
  const isCorrect = pickedAnswer && answer === correctAnswer;
  const isWrong =
    pickedAnswer && answer === pickedAnswer && pickedAnswer !== correctAnswer;
  const correctClass = isCorrect ? "a-correct" : "";
  const wrongClass = isWrong ? "a-wrong" : "";
  const disabledClass = pickedAnswer && "a-disabled";
  const pickedClass = pickedAnswer && pickedAnswer === answer ? "a-picked" : "";
  return (
    <div
      className={`answer-single ${correctClass} ${wrongClass} ${disabledClass} ${pickedClass}`}
      onClick={() => pickAnswer(answer)}
    >
      {answer}
    </div>
  );
}
