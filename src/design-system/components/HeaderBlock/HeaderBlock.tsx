import { memo } from "react";
import "./HeaderBlock.scss";
export interface HeaderBlockProps {
  title: string;
  logoUrl?: string;
  bgColor?: string;
}

export const HeaderBlock = memo(function HeaderBlock({
  title,
  logoUrl,
  bgColor,
}: HeaderBlockProps) {
  return (
    <header style={{ backgroundColor: bgColor }} className="header-block">
      {logoUrl && <img src={logoUrl} alt="Logo" />}
      <h1>{title}</h1>
    </header>
  );
});
