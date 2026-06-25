import { useTemplate } from "../TemplateContext";
import type { BlockType } from "../types";

const BLOCK_OPTIONS: {
  type: BlockType;
  label: string;
  description: string;
  icon: string;
}[] = [
  {
    type: "header",
    label: "Header",
    description: "Title with optional logo",
    icon: "H",
  },
  {
    type: "text",
    label: "Text",
    description: "Paragraph body copy",
    icon: "T",
  },
  {
    type: "image",
    label: "Image",
    description: "Full-width visual",
    icon: "I",
  },
  {
    type: "button",
    label: "Button",
    description: "Call-to-action link",
    icon: "B",
  },
];

export function BlockPicker() {
  const { addBlock } = useTemplate();

  return (
    <section className="block-picker">
      <h2 className="block-picker__title">Content blocks</h2>
      <p className="block-picker__hint">Add blocks to build your email</p>
      <ul className="block-picker__list">
        {BLOCK_OPTIONS.map(({ type, label, description, icon }) => (
          <li key={type} className="block-picker__item">
            <div className="block-picker__icon" aria-hidden="true">{icon}</div>
            <div className="block-picker__info">
              <span className="block-picker__label">{label}</span>
              <span className="block-picker__description">{description}</span>
            </div>
            <button
              type="button"
              className="block-picker__add"
              aria-label={`Add ${label} block`}
              onClick={() => addBlock(type)}
            >
              +
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
