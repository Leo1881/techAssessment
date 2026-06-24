import { render, screen } from "@testing-library/react";
import { ImageBlock } from "./ImageBlock";

describe("ImageBlock", () => {
  it("renders an image with alt text", () => {
    render(
      <ImageBlock src="https://example.com/image.png" alt="Product photo" />,
    );
    expect(
      screen.getByRole("img", { name: "Product photo" }),
    ).toBeInTheDocument();
  });
  it("applies custom width when width prop is provided", () => {
    render(
      <ImageBlock
        src="https://example.com/image.png"
        alt="Product photo"
        width="50%"
      />,
    );
    const image = screen.getByRole("img", { name: "Product photo" });
    expect(image).toHaveStyle({ width: "50%" });
  });
});
