import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header Component", () => {
  test("renders the Header component", () => {
    render(<Header resetQuiz={() => {}} />);
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveTextContent("Back");

    const imageElements = screen.getAllByRole("img");
    expect(imageElements).toHaveLength(2);
    expect(imageElements[0]).toHaveAttribute("alt", "back");
    expect(imageElements[1]).toHaveAttribute("alt", "header-logo");
  });
});
