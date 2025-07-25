import "../styles/Answers.css";

type AnswersProps = {
  nextQuestion: () => void;
  answers: string[];
  correct: number;
  increaseScore: () => void;
};

function Answers({
  nextQuestion,
  answers,
  correct,
  increaseScore,
}: AnswersProps) {
  const checkAnswer = (answer: string) => {
    const correctAnswer = answers[correct - 1];

    if (correctAnswer === answer) {
      increaseScore();
    }
    nextQuestion();
  };

  return (
    <div className="answers">
      <div
        data-testid="answer"
        className="answer"
        onClick={() => checkAnswer(answers[0])}
      >
        {answers[0]}
      </div>
      <div
        data-testid="answer"
        className="answer"
        onClick={() => checkAnswer(answers[1])}
      >
        {answers[1]}
      </div>
    </div>
  );
}

export default Answers;
