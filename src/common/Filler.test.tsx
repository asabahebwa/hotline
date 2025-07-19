import { screen, render } from "@testing-library/react";
import Filler from "./Filler";

describe("Filler Component", () => {
  test("renders the Filler component with correct styles", () => {
    const result = 75;
    render(<Filler result={result} />);

    const fillerElement = screen.getByTestId("filler");
    expect(fillerElement).toBeInTheDocument();
    expect(fillerElement).toHaveStyle({
      width: "75%",
      background: "#FBFBFB",
    });
  });
});
