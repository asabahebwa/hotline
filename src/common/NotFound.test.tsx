import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import NotFound from "./NotFound";

describe("NotFound Component", () => {
  test("renders the NotFound component", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const headings = screen.getAllByRole("heading");
    expect(headings).toHaveLength(2);
    expect(headings[0].tagName).toBe("H1");
    expect(headings[1].tagName).toBe("H2");
    expect(headings[0]).toHaveTextContent("Error 404");
    expect(headings[1]).toHaveTextContent("Woops. Looks like this page does not exist");
  });
});
