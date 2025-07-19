import { screen, render } from "@testing-library/react";
import Swipe from "./Swipe";

describe("Swipe Component", () => {
  test("renders the swipe component with the icons", () => {
    render(<Swipe />);

    const swipeContainerElement = screen.getByTestId("swipe");
    expect(swipeContainerElement).toBeInTheDocument();

    const icons = screen.getAllByRole("img");
    expect(icons).toHaveLength(2);
    expect(icons[0]).toHaveAttribute("alt", "swipe");
    expect(icons[1]).toHaveAttribute("alt", "hide");
  });
});
