import { screen, render } from "@testing-library/react";
import Answers from "./Answers";

const renderComponent = () => {
  const answers = ["Yes", "No"];
  const nextQuestion = jest.fn();
  const increaseScore = jest.fn();
  const correct = 1;

  render(
    <Answers
      answers={answers}
      nextQuestion={nextQuestion}
      increaseScore={increaseScore}
      correct={correct}
    />
  );
  return { nextQuestion, increaseScore, answers };
};

describe("Answers Component", () => {
  test("renders the Answers component with correct text and styles", () => {
    renderComponent();

    const answerElements = screen.getAllByTestId("answer");
    expect(answerElements).toHaveLength(2);
    expect(answerElements[0]).toHaveTextContent("Yes");
    expect(answerElements[1]).toHaveTextContent("No");
  });
  test("calls nextQuestion and increaseScore on answer click", () => {
    const { nextQuestion } = renderComponent();

    const answerElements = screen.getAllByTestId("answer");
    answerElements[0].click();

    expect(nextQuestion).toHaveBeenCalled();
  });

  test("calls increaseScore when the correct answer is clicked", () => {
    const { increaseScore } = renderComponent();

    const answerElements = screen.getAllByTestId("answer");
    answerElements[0].click();

    expect(increaseScore).toHaveBeenCalled();
  });

  test("does not call increaseScore when the wrong answer is clicked", () => {
    const { nextQuestion, increaseScore } = renderComponent();

    const answerElements = screen.getAllByTestId("answer");
    answerElements[1].click();

    expect(nextQuestion).toHaveBeenCalled();
    expect(increaseScore).not.toHaveBeenCalled();
  });
});
