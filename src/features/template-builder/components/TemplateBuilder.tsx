import "./TemplateBuilder.scss";
import { BlockPicker } from "./BlockPicker";
import { PreviewPanel } from "./PreviewPanel";
import { BlockEditor } from "./BlockEditor";

export function TemplateBuilder() {
  return (
    <div className="template-builder">
      <aside className="template-builder__sidebar">
        <BlockPicker />
      </aside>
      <main className="template-builder__preview">
        <div className="template-builder__preview-inner">
          <PreviewPanel />
          <BlockEditor />
        </div>
      </main>
    </div>
  );
}
