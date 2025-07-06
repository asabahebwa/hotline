import { useState } from "react";

import Swipe from "./Swipe";
import Header from "./Header";
import Quiz from "./Quiz";
import PopUp from "./PopUp";
import Results from "./Results";
import data from "../data/data";
import "../App.css";

function Home() {
  const [count, setCount] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [total] = useState<number>(data.length);
  const [showPopUp, setShowPopUp] = useState<boolean>(true);
  const [showResults, setShowResults] = useState<boolean>(false);

  const [question, setQuestion] = useState<string>(data[count].question);
  const [answers, setAnswers] = useState<string[]>([
    data[count].answers[0],
    data[count].answers[1],
  ]);
  const [correct, setCorrect] = useState<number>(data[count].correct);

  const pushData = (count: number) => {
    setQuestion(data[count].question);
    setAnswers([data[count].answers[0], data[count].answers[1]]);
    setCorrect(data[count].correct);
    setCount((prevCount) => prevCount + 1);
  };

  const handleStartQuiz = () => {
    setShowPopUp(false);
  };

  const handleResetQuiz = () => {
    setShowPopUp(true);
    setShowResults(false);
    setCount(0);
    setScore(0);
    setQuestion(data[0].question);
    setAnswers([data[0].answers[0], data[0].answers[1]]);
    setCorrect(data[0].correct);
  };

  const handleIncreaseScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const nextQuestion = () => {
    const nextCount = count + 1;
    if (nextCount >= total) {
      setShowResults(true);
    } else {
      pushData(nextCount);
    }
  };

  if (showPopUp) {
    return <PopUp startQuiz={handleStartQuiz} />;
  } else if (showResults) {
    return <Results score={score} total={total} resetQuiz={handleResetQuiz} />;
  } else {
    return (
      <>
        <Header resetQuiz={handleResetQuiz} />
        <Quiz
          question={question}
          nextQuestion={nextQuestion}
          count={count}
          total={total}
          correct={correct}
          answers={answers}
          increaseScore={handleIncreaseScore}
        />
        <Swipe />
      </>
    );
  }
}

export default Home;
