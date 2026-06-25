import { fireEvent, render, screen } from "@testing-library/react";
import { TemplateProvider, useTemplate } from "./TemplateContext";

function ContextHarness() {
  const { blocks, selectedBlockId, addBlock, removeBlock, updateBlock } =
    useTemplate();
  const firstBlock = blocks[0];

  return (
    <div>
      <div data-testid="block-count">{blocks.length}</div>
      <div data-testid="selected">{selectedBlockId ?? "none"}</div>
      {firstBlock?.type === "header" && (
        <div data-testid="first-title">{firstBlock.title}</div>
      )}
      <button type="button" onClick={() => addBlock("header")}>
        Add header
      </button>
      <button type="button" onClick={() => addBlock("text")}>
        Add text
      </button>
      {firstBlock && (
        <button type="button" onClick={() => removeBlock(firstBlock.id)}>
          Remove first
        </button>
      )}
      {firstBlock?.type === "header" && (
        <button
          type="button"
          onClick={() => updateBlock(firstBlock.id, { title: "Updated title" })}
        >
          Update title
        </button>
      )}
    </div>
  );
}

function renderWithProvider() {
  return render(
    <TemplateProvider>
      <ContextHarness />
    </TemplateProvider>,
  );
}

describe("TemplateContext", () => {
  beforeEach(() => {
    vi.stubGlobal("crypto", {
      randomUUID: vi
        .fn()
        .mockReturnValueOnce("block-1")
        .mockReturnValueOnce("block-2"),
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("adds a block and selects it", () => {
    renderWithProvider();

    fireEvent.click(screen.getByRole("button", { name: "Add header" }));

    expect(screen.getByTestId("block-count")).toHaveTextContent("1");
    expect(screen.getByTestId("selected")).toHaveTextContent("block-1");
  });

  it("removes a block and clears selection when the selected block is removed", () => {
    renderWithProvider();

    fireEvent.click(screen.getByRole("button", { name: "Add header" }));
    fireEvent.click(screen.getByRole("button", { name: "Remove first" }));

    expect(screen.getByTestId("block-count")).toHaveTextContent("0");
    expect(screen.getByTestId("selected")).toHaveTextContent("none");
  });

  it("updates block data", () => {
    renderWithProvider();

    fireEvent.click(screen.getByRole("button", { name: "Add header" }));
    fireEvent.click(screen.getByRole("button", { name: "Update title" }));

    expect(screen.getByTestId("first-title")).toHaveTextContent("Updated title");
  });

  it("throws when useTemplate is used outside TemplateProvider", () => {
    function BadConsumer() {
      useTemplate();
      return null;
    }

    expect(() => render(<BadConsumer />)).toThrow(
      "useTemplate must be used within a TemplateProvider",
    );
  });
});
