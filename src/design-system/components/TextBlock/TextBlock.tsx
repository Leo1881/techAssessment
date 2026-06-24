import { memo } from "react";
import "./TextBlock.scss";
export type TextAlignment = "left" | "center" | "right";

export interface TextBlockProps {
  content: string;
  alignment?: TextAlignment;
}

export const TextBlock = memo(function TextBlock({
  content,
  alignment,
}: TextBlockProps) {
  return (
    <p className="text-block" style={{ textAlign: alignment }}>
      {content}
    </p>
  );
});
