import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Result from "./Result";

const renderComponent = () => {
  const score = 3;
  const total = 5;
  render(
    <MemoryRouter>
      <Result score={score} total={total} />
    </MemoryRouter>
  );
};

describe("Result Component", () => {
  test("renders result message for a healthy relationship", () => {
    const score = 5;
    const total = 5;
    render(
      <MemoryRouter>
        <Result score={score} total={total} />
      </MemoryRouter>
    );

    const resultMessage = screen.getByText("A HEALTHY RELATIONSHIP");
    expect(resultMessage).toBeInTheDocument();
  });

  test("renders result message for abusive relationship", () => {
    const score = 1;
    const total = 5;
    render(
      <MemoryRouter>
        <Result score={score} total={total} />
      </MemoryRouter>
    );

    const resultMessage = screen.getByText("AN ABUSIVE RELATIONSHIP");
    expect(resultMessage).toBeInTheDocument();
  });

  test("renders result message for unhealthy relationship", () => {
    renderComponent();

    const resultMessage = screen.getByText("AN UNHEALTHY RELATIONSHIP");
    expect(resultMessage).toBeInTheDocument();
  });

  test("renders thought text", () => {
    renderComponent();

    const thoughtText = screen.getByText("You might be thinking ...");
    expect(thoughtText).toBeInTheDocument();
  });

  test("renders help text", () => {
    renderComponent();

    const helpText = screen.getByText("We want to help you go through this:");
    expect(helpText).toBeInTheDocument();
  });
});
