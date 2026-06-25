import "./TemplateBuilder.scss";
import { BlockPicker } from "./BlockPicker";
import { PreviewPanel } from "./PreviewPanel";
import { BlockEditor } from "./BlockEditor";

export function TemplateBuilder() {
  return (
    <div className="template-builder">
      <header className="template-builder__header">
        <div className="template-builder__brand">
          <span className="template-builder__logo" aria-hidden="true" />
          <div>
            <h1 className="template-builder__title">Email Template Builder</h1>
            <p className="template-builder__subtitle">
              Compose and preview your email layout
            </p>
          </div>
        </div>
      </header>

      <div className="template-builder__body">
        <aside className="template-builder__sidebar">
          <BlockPicker />
        </aside>

        <main className="template-builder__workspace">
          <section className="template-builder__preview-section">
            <div className="template-builder__section-header">
              <h2>Preview</h2>
              <span className="template-builder__badge">Live</span>
            </div>
            <div className="template-builder__email-frame">
              <div className="template-builder__email-toolbar" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="template-builder__email-body">
                <PreviewPanel />
              </div>
            </div>
          </section>

          <section className="template-builder__editor-section">
            <div className="template-builder__section-header">
              <h2>Block editor</h2>
            </div>
            <BlockEditor />
          </section>
        </main>
      </div>
    </div>
  );
}
