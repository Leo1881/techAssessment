import { fireEvent, render, screen } from "@testing-library/react";
import { TemplateProvider } from "../TemplateContext";
import { TemplateBuilder } from "./TemplateBuilder";

function renderBuilder() {
  return render(
    <TemplateProvider>
      <TemplateBuilder />
    </TemplateProvider>,
  );
}

describe("TemplateBuilder", () => {
  beforeEach(() => {
    vi.stubGlobal("crypto", {
      randomUUID: vi.fn().mockReturnValue("block-1"),
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("updates the preview when a header title is edited", () => {
    renderBuilder();

    fireEvent.click(screen.getByRole("button", { name: "Add Header block" }));

    expect(
      screen.getByRole("heading", { name: "Your headline here" }),
    ).toBeInTheDocument();

    const titleInput = screen.getByLabelText("Title");
    fireEvent.change(titleInput, {
      target: { value: "Welcome to Everlytic" },
    });

    expect(
      screen.getByRole("heading", { name: "Welcome to Everlytic" }),
    ).toBeInTheDocument();
  });
});
