import { TemplateProvider } from "./features/template-builder/TemplateContext";
import { TemplateBuilder } from "./features/template-builder/components/TemplateBuilder";

function App() {
  return (
    <TemplateProvider>
      <TemplateBuilder />
    </TemplateProvider>
  );
}

export default App;
