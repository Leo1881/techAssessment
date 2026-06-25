import { memo } from "react";
import "./ImageBlock.scss";

export interface ImageBlockProps {
  src: string;
  alt: string;
  width?: string;
}

export const ImageBlock = memo(function ImageBlock({
  src,
  alt,
  width = "100%",
}: ImageBlockProps) {
  return (
    <div className="image-block-wrapper">
      <img className="image-block" src={src} alt={alt} style={{ width }} />
    </div>
  );
});
