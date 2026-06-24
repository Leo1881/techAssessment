import { useTemplate } from "../TemplateContext";

export function BlockEditor() {
  const { blocks, selectedBlockId, updateBlock } = useTemplate();

  const selectedBlock = blocks.find((block) => block.id === selectedBlockId);

  if (!selectedBlock) {
    return (
      <p className="block-editor__hint">
        Select a block in the preview to edit its content
      </p>
    );
  }

  return (
    <section className="block-editor">
      <h2>Edit block</h2>
      {selectedBlock.type === "header" && (
        <>
          <label>
            Title
            <input
              type="text"
              value={selectedBlock.title}
              onChange={(e) =>
                updateBlock(selectedBlock.id, { title: e.target.value })
              }
            />
          </label>
          <label>
            Logo URL
            <input
              type="text"
              value={selectedBlock.logoUrl ?? ""}
              onChange={(e) =>
                updateBlock(selectedBlock.id, { logoUrl: e.target.value })
              }
            />
          </label>
          <label>
            Background colour
            <input
              type="text"
              value={selectedBlock.bgColor ?? ""}
              onChange={(e) =>
                updateBlock(selectedBlock.id, { bgColor: e.target.value })
              }
            />
          </label>
        </>
      )}
      {selectedBlock.type === "text" && (
        <>
          <label>
            Content
            <textarea
              value={selectedBlock.content}
              onChange={(e) =>
                updateBlock(selectedBlock.id, { content: e.target.value })
              }
            />
          </label>
          <label>
            Alignment
            <select
              value={selectedBlock.alignment ?? "left"}
              onChange={(e) =>
                updateBlock(selectedBlock.id, {
                  alignment: e.target.value as "left" | "center" | "right",
                })
              }
            >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select>
          </label>
        </>
      )}
      {selectedBlock.type === "image" && (
        <>
          <label>
            Image URL
            <input
              type="text"
              value={selectedBlock.src}
              onChange={(e) =>
                updateBlock(selectedBlock.id, { src: e.target.value })
              }
            />
          </label>
          <label>
            Alt text
            <input
              type="text"
              value={selectedBlock.alt}
              onChange={(e) =>
                updateBlock(selectedBlock.id, { alt: e.target.value })
              }
            />
          </label>
          <label>
            Width
            <input
              type="text"
              value={selectedBlock.width ?? "100%"}
              onChange={(e) =>
                updateBlock(selectedBlock.id, { width: e.target.value })
              }
            />
          </label>
        </>
      )}
      {selectedBlock.type === "button" && (
        <>
          <label>
            Label
            <input
              type="text"
              value={selectedBlock.label}
              onChange={(e) =>
                updateBlock(selectedBlock.id, { label: e.target.value })
              }
            />
          </label>
          <label>
            URL
            <input
              type="text"
              value={selectedBlock.url}
              onChange={(e) =>
                updateBlock(selectedBlock.id, { url: e.target.value })
              }
            />
          </label>
          <label>
            Variant
            <select
              value={selectedBlock.variant ?? "primary"}
              onChange={(e) =>
                updateBlock(selectedBlock.id, {
                  variant: e.target.value as "primary" | "secondary",
                })
              }
            >
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
            </select>
          </label>
        </>
      )}
    </section>
  );
}
