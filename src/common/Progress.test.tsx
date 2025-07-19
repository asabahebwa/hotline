import { screen, render } from "@testing-library/react";
import Progress from "./Progress";

describe("Progress Component", () => {
  test("renders the Progress component with correct headers and Filler", () => {
    const result = 75;
    render(<Progress result={result} />);

    const progressText = screen.getByText(/Healthy/);
    expect(progressText).toBeInTheDocument();

    const unhealthyText = screen.getByText(/Unhealthy/);
    expect(unhealthyText).toBeInTheDocument();

    const abusiveText = screen.getByText(/Abusive/);
    expect(abusiveText).toBeInTheDocument();

    const trackerElement = screen.getByTestId("tracker");
    expect(trackerElement).toBeInTheDocument();
  });
});
