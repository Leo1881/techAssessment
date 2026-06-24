import { useTemplate } from "../TemplateContext";
import type { BlockType } from "../types";

const BLOCK_OPTIONS: { type: BlockType; label: string }[] = [
  { type: "header", label: "Header" },
  { type: "text", label: "Text" },
  { type: "image", label: "Image" },
  { type: "button", label: "Button" },
];

export function BlockPicker() {
  const { addBlock } = useTemplate();

  return (
    <section>
      <h2>Add blocks</h2>
      <ul className="block-picker__list">
        {BLOCK_OPTIONS.map(({ type, label }) => (
          <li key={type} className="block-picker__item">
            <span>{label}</span>
            <button type="button" onClick={() => addBlock(type)}>
              Add
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
