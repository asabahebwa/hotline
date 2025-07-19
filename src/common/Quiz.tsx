import Answers from "./Answers";
import maskGroup from "../assets/img/MaskGroup.svg";
import "../styles/Quiz.css";

type QuizProps = {
  count: number;
  total: number;
  question: string;
  answers: string[];
  correct: number;
  nextQuestion: () => void;
  increaseScore: () => void;
};

function Quiz({
  count,
  total,
  question,
  answers,
  correct,
  nextQuestion,
  increaseScore,
}: QuizProps) {
  return (
    <div className="quiz">
      <div className="mask-group">
        <img src={maskGroup} alt="mask group" className="mask-group-img" />
        <div className="question-count">
          <span
            data-testid="question-count-number"
            className="question-count-number"
          >
            {count + 1}
          </span>
          <span
            data-testid="question-count-total"
            className="question-count-total"
          >
            /{total}
          </span>
        </div>
      </div>
      <div className="question">{question}</div>
      <Answers
        nextQuestion={nextQuestion}
        answers={answers}
        correct={correct}
        increaseScore={increaseScore}
      />
    </div>
  );
}

export default Quiz;
