import { screen, render } from "@testing-library/react";

import PopUpLogo from "./PopUpLogo";

describe("PopUpLogo Component", () => {
  test("renders the PopUpLogo component with correct image", () => {
    render(<PopUpLogo />);

    const logo = screen.getByRole("img");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("alt", "logo");
    expect(logo).toHaveAttribute("width", "150px");
    expect(logo).toHaveAttribute("height", "143.88px");
  });
});
