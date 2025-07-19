import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import PopUp from "./PopUp";

const renderComponent = () => {
  const startQuizMock = jest.fn();
  render(
    <MemoryRouter>
      <PopUp startQuiz={startQuizMock} />
    </MemoryRouter>
  );
  return {
    startQuizMock,
  };
};

describe("PopUp Component", () => {
  test("renders the PopUp component with correct text", () => {
    renderComponent();

    const headingElement = screen.getByText("Is this abuse?");
    expect(headingElement).toBeInTheDocument();

    const textElement1 = screen.getByText(
      "Answer a few questions that find out if you are at risk of being in an abusive relationship"
    );
    expect(textElement1).toBeInTheDocument();

    const textElement2 = screen.getByText(
      "Sometimes even if you think your relationship is healthy it can hide signs of abuse from one of the partners. We'll help you identify and eal with those"
    );
    expect(textElement2).toBeInTheDocument();

    const startTextElement = screen.getByText("or talk with us");
    expect(startTextElement).toBeInTheDocument();
  });

  test("calls startQuiz function when Start Now button is clicked", async () => {
    const { startQuizMock } = renderComponent();

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("Start Now");

    await user.click(buttonElement);
    expect(startQuizMock).toHaveBeenCalledTimes(1);
  });
});
