import { screen, render } from "@testing-library/react";
import Help from "./Help";

describe("Help Component", () => {
  test("renders the Help component with correct text and image", () => {
    const imgSrc = "path/to/image.png";
    const textHeadline = "Need Help?";
    const textParagraph = "If you need assistance, please contact support.";
    const background = "#f0f0f0";

    render(
      <Help
        imgSrc={imgSrc}
        textHeadline={textHeadline}
        textParagraph={textParagraph}
        background={background}
      />
    );

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", imgSrc);
    expect(image).toHaveAttribute("alt", "help-icon");

    const headline = screen.getByText(textHeadline);
    expect(headline).toBeInTheDocument();
    expect(headline.tagName).toBe("P");

    const paragraph = screen.getByText(textParagraph);
    expect(paragraph).toBeInTheDocument();
    expect(paragraph.tagName).toBe("P");
  });
});
