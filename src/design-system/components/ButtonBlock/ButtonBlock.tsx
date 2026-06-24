import { memo } from "react";
import "./ButtonBlock.scss";

export type ButtonVariant = "primary" | "secondary";

export interface ButtonBlockProps {
  label: string;
  url: string;
  variant?: ButtonVariant;
}

export const ButtonBlock = memo(function ButtonBlock({
  label,
  url,
  variant = "primary",
}: ButtonBlockProps) {
  return (
    <a href={url} className={`button-block button-block--${variant}`}>
      {label}
    </a>
  );
});
