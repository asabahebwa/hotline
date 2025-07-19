import { screen, render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Home from "./Home";

jest.mock("../data/data", () => [
  {
    question: "Question 1",
    answers: ["Yes", "No"],
    correct: 1,
  },
  {
    question: "Question 2",
    answers: ["Yes", "No"],
    correct: 2,
  },
]);

const renderComponent = () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
};

describe("Home Component", () => {
  test("renders PopUp on initial load", () => {
    renderComponent();
    expect(screen.getByText(/Start Now/)).toBeInTheDocument();
  });

  test("starts the quiz when PopUp is dismissed", () => {
    renderComponent();
    fireEvent.click(screen.getByText(/Start Now/i));
    expect(screen.getByText("Question 1")).toBeInTheDocument();
  });

  test("advances to the next question", () => {
    renderComponent();
    fireEvent.click(screen.getByText(/Start Now/i));
    fireEvent.click(screen.getByText("Yes"));
    expect(screen.getByText("Question 2")).toBeInTheDocument();
  });

  test("shows Results after final question", () => {
    renderComponent();
    fireEvent.click(screen.getByText(/Start Now/i));
    fireEvent.click(screen.getByText("Yes"));
    fireEvent.click(screen.getByText("No"));
    expect(screen.getByText(/It looks like you are in/i)).toBeInTheDocument();
  });
  test("resets the quiz from Results", () => {
    renderComponent();
    fireEvent.click(screen.getByText(/Start Now/i));
    fireEvent.click(screen.getByText("Yes"));
    fireEvent.click(screen.getByText("No"));
    fireEvent.click(screen.getByText(/Back/i));
    expect(screen.getByText(/Start Now/)).toBeInTheDocument();
  });
});
