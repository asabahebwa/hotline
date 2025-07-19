import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import PopUpHeader from "./PopUpHeader";

describe("PopUpHeader Component", () => {
  test("renders the PopUpHeader component with correct link and image", () => {
    render(
      <MemoryRouter>
        <PopUpHeader />
      </MemoryRouter>
    );

    const headerElement = screen.getByRole("banner");
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveClass("header");
    expect(headerElement).toHaveTextContent("Back to website");

    const backLink = screen.getByRole("link", { name: /back to website/i });
    expect(backLink).toBeInTheDocument();
    expect(backLink).toHaveAttribute("href", "https://www.thehotline.org/");

    const backImage = screen.getByRole("img");
    expect(backImage).toBeInTheDocument();
    expect(backImage).toHaveAttribute("alt", "back");

    expect(backImage).toHaveAttribute("width", "20");
    expect(backImage).toHaveAttribute("height", "20");
  });
});
