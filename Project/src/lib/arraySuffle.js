export default function shuffle(quiz) {
  const answer = [quiz.correct_answer, ...quiz.incorrect_answers];
  let currentIndex = answer.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [answer[currentIndex], answer[randomIndex]] = [
      answer[randomIndex],
      answer[currentIndex],
    ];
  }

  return answer;
}
