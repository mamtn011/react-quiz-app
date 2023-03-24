export default function ScoreCard({ resetQuiz, totalMark }) {
  return (
    <div className="s-card">
      <h3>Result</h3>
      <p>Your total mark is: {totalMark}</p>
      <button onClick={resetQuiz}>Reset Quiz</button>
    </div>
  );
}
