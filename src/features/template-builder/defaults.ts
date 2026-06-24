import type { BlockType, TemplateBlock } from "./types";

export function createDefaultBlock(type: BlockType): TemplateBlock {
  const id = crypto.randomUUID();

  switch (type) {
    case "header":
      return { id, type: "header", title: "Your headline here" };
    case "text":
      return { id, type: "text", content: "Your text content here." };
    case "image":
      return {
        id,
        type: "image",
        src: "https://placehold.co/600x200",
        alt: "Image description",
      };
    case "button":
      return {
        id,
        type: "button",
        label: "Click here",
        url: "https://example.com",
        variant: "primary",
      };
    default: {
      const exhaustiveCheck: never = type;
      return exhaustiveCheck;
    }
  }
}
