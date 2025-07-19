import { screen, render } from "@testing-library/react";
import Quiz from "./Quiz";

describe("Quiz Component", () => {
  test("renders question and answers correctly", () => {
    const mockNextQuestion = jest.fn();
    const mockIncreaseScore = jest.fn();
    const count = 0;
    const total = 5;
    const question = "What is the capital of France?";
    const answers = ["Yes", "No"];
    const correct = 2;
    render(
      <Quiz
        count={count}
        total={total}
        question={question}
        answers={answers}
        correct={correct}
        nextQuestion={mockNextQuestion}
        increaseScore={mockIncreaseScore}
      />
    );

    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("alt", "mask group");

    const questionCountNumber = screen.getByTestId("question-count-number");
    expect(questionCountNumber).toBeInTheDocument();
    expect(questionCountNumber).toHaveTextContent("1");

    const questionCountTotal = screen.getByTestId("question-count-total");
    expect(questionCountTotal).toBeInTheDocument();
    expect(questionCountTotal).toHaveTextContent("/5");
  });
});
