import { useTemplate } from "../TemplateContext";
import type { BlockType } from "../types";

const BLOCK_TYPE_LABELS: Record<BlockType, string> = {
  header: "Header",
  text: "Text",
  image: "Image",
  button: "Button",
};

export function BlockEditor() {
  const { blocks, selectedBlockId, updateBlock } = useTemplate();

  const selectedBlock = blocks.find((block) => block.id === selectedBlockId);

  if (!selectedBlock) {
    return (
      <div className="block-editor__empty">
        <p className="block-editor__empty-title">No block selected</p>
        <p className="block-editor__hint">
          Click a block in the preview to edit its content
        </p>
      </div>
    );
  }

  return (
    <section className="block-editor">
      <div className="block-editor__header">
        <span className="block-editor__type">{BLOCK_TYPE_LABELS[selectedBlock.type]}</span>
        <span className="block-editor__status">Editing</span>
      </div>

      <div className="block-editor__fields">
        {selectedBlock.type === "header" && (
          <>
            <label className="block-editor__field">
              <span className="block-editor__label">Title</span>
              <input
                className="block-editor__input"
                type="text"
                value={selectedBlock.title}
                onChange={(e) =>
                  updateBlock(selectedBlock.id, { title: e.target.value })
                }
              />
            </label>
            <label className="block-editor__field">
              <span className="block-editor__label">Logo URL</span>
              <input
                className="block-editor__input"
                type="text"
                placeholder="https://example.com/logo.png"
                value={selectedBlock.logoUrl ?? ""}
                onChange={(e) =>
                  updateBlock(selectedBlock.id, { logoUrl: e.target.value })
                }
              />
            </label>
            <label className="block-editor__field">
              <span className="block-editor__label">Background colour</span>
              <input
                className="block-editor__input"
                type="text"
                placeholder="#00b4d8"
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
            <label className="block-editor__field">
              <span className="block-editor__label">Content</span>
              <textarea
                className="block-editor__textarea"
                rows={4}
                value={selectedBlock.content}
                onChange={(e) =>
                  updateBlock(selectedBlock.id, { content: e.target.value })
                }
              />
            </label>
            <label className="block-editor__field">
              <span className="block-editor__label">Alignment</span>
              <select
                className="block-editor__select"
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
            <label className="block-editor__field">
              <span className="block-editor__label">Image URL</span>
              <input
                className="block-editor__input"
                type="text"
                value={selectedBlock.src}
                onChange={(e) =>
                  updateBlock(selectedBlock.id, { src: e.target.value })
                }
              />
            </label>
            <label className="block-editor__field">
              <span className="block-editor__label">Alt text</span>
              <input
                className="block-editor__input"
                type="text"
                value={selectedBlock.alt}
                onChange={(e) =>
                  updateBlock(selectedBlock.id, { alt: e.target.value })
                }
              />
            </label>
            <label className="block-editor__field">
              <span className="block-editor__label">Width</span>
              <input
                className="block-editor__input"
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
            <label className="block-editor__field">
              <span className="block-editor__label">Label</span>
              <input
                className="block-editor__input"
                type="text"
                value={selectedBlock.label}
                onChange={(e) =>
                  updateBlock(selectedBlock.id, { label: e.target.value })
                }
              />
            </label>
            <label className="block-editor__field">
              <span className="block-editor__label">URL</span>
              <input
                className="block-editor__input"
                type="text"
                value={selectedBlock.url}
                onChange={(e) =>
                  updateBlock(selectedBlock.id, { url: e.target.value })
                }
              />
            </label>
            <label className="block-editor__field">
              <span className="block-editor__label">Variant</span>
              <select
                className="block-editor__select"
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
      </div>
    </section>
  );
}
