export type BlockType = "header" | "text" | "image" | "button";

export interface HeaderBlockData {
  id: string;
  type: "header";
  title: string;
  logoUrl?: string;
  bgColor?: string;
}

export interface TextBlockData {
  id: string;
  type: "text";
  content: string;
  alignment?: "left" | "center" | "right";
}

export interface ImageBlockData {
  id: string;
  type: "image";
  src: string;
  alt: string;
  width?: string;
}

export interface ButtonBlockData {
  id: string;
  type: "button";
  label: string;
  url: string;
  variant?: "primary" | "secondary";
}
export type TemplateBlock =
  | HeaderBlockData
  | TextBlockData
  | ImageBlockData
  | ButtonBlockData;
