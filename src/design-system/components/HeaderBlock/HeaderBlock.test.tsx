import { render, screen } from "@testing-library/react";
import { HeaderBlock } from "./HeaderBlock";

describe("HeaderBlock", () => {
  it("renders the title", () => {
    render(<HeaderBlock title="Test Header" />);
    expect(
      screen.getByRole("heading", { name: "Test Header" }),
    ).toBeInTheDocument();
  });
  it("renders logo when logoUrl is provided", () => {
    render(
      <HeaderBlock
        title="Test Header"
        logoUrl="https://example.com/logo.png"
      />,
    );
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
