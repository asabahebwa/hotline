import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Results from "./Results";

describe("Results Component", () => {
  test("renders results container", () => {
    render(
      <MemoryRouter>
        <Results score={3} total={5} resetQuiz={() => {}} />
      </MemoryRouter>
    );
    const resultsContainer = screen.getByTestId("results-container");
    expect(resultsContainer).toBeInTheDocument();
  });
});
