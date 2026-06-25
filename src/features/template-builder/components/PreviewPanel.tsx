import {
  HeaderBlock,
  TextBlock,
  ImageBlock,
  ButtonBlock,
} from "../../../design-system/components";
import type { TemplateBlock } from "../types";
import { useTemplate } from "../TemplateContext";

export function PreviewPanel() {
  const { blocks, selectedBlockId, removeBlock, selectBlock } = useTemplate();

  if (blocks.length === 0) {
    return (
      <p className="preview-panel__empty">
        Add blocks from the sidebar to start building your template
      </p>
    );
  }

  return (
    <div className="preview-panel__blocks">
      {blocks.map((block) => (
        <div
          key={block.id}
          className={`preview-panel__block${
            block.id === selectedBlockId ? " preview-panel__block--selected" : ""
          }`}
          onClick={() => selectBlock(block.id)}
        >
          {renderBlock(block)}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              removeBlock(block.id);
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

function renderBlock(block: TemplateBlock) {
  switch (block.type) {
    case "header":
      return (
        <HeaderBlock
          title={block.title}
          logoUrl={block.logoUrl}
          bgColor={block.bgColor}
        />
      );
    case "text":
      return <TextBlock content={block.content} alignment={block.alignment} />;
    case "image":
      return <ImageBlock src={block.src} alt={block.alt} width={block.width} />;
    case "button":
      return (
        <ButtonBlock
          label={block.label}
          url={block.url}
          variant={block.variant}
        />
      );
    default: {
      const exhaustiveCheck: never = block;
      return exhaustiveCheck;
    }
  }
}
