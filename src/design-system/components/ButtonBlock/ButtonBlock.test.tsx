import { render, screen } from "@testing-library/react";
import { ButtonBlock } from "./ButtonBlock";

describe("ButtonBlock", () => {
  it("renders a link with the label", () => {
    render(<ButtonBlock label="Click me" url="https://example.com" />);
    const link = screen.getByRole("link", { name: "Click me" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://example.com");
  });
  it("applies secondary variant class when variant is secondary", () => {
    render(
      <ButtonBlock
        label="Learn More"
        url="https://example.com"
        variant="secondary"
      />,
    );
    const link = screen.getByRole("link", { name: "Learn More" });
    expect(link).toHaveClass("button-block--secondary");
  });
});
