import { render, screen } from "@testing-library/react";
import { TextBlock } from "./TextBlock";

describe("TextBlock", () => {
  it("renders the content", () => {
    render(<TextBlock content="Hello world" />);
    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });
  it("applies center alignment when alignment prop is center", () => {
    render(<TextBlock content="Centered text" alignment="center" />);
    const paragraph = screen.getByText("Centered text");
    expect(paragraph).toHaveStyle({ textAlign: "center" });
  });
});
