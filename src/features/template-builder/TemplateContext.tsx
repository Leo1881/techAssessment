import { createContext, useContext, useState, type ReactNode } from "react";
import type { BlockType, TemplateBlock } from "./types";
import { createDefaultBlock } from "./defaults";

interface TemplateContextValue {
  blocks: TemplateBlock[];
  selectedBlockId: string | null;
  addBlock: (type: BlockType) => void;
  updateBlock: (id: string, updates: Partial<TemplateBlock>) => void;
  removeBlock: (id: string) => void;
  selectBlock: (id: string | null) => void;
}

const TemplateContext = createContext<TemplateContextValue | undefined>(
  undefined,
);

export function TemplateProvider({ children }: { children: ReactNode }) {
  const [blocks, setBlocks] = useState<TemplateBlock[]>([]);
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);

  const addBlock = (type: BlockType) => {
    const newBlock = createDefaultBlock(type);
    setBlocks((prev) => [...prev, newBlock]);
    setSelectedBlockId(newBlock.id);
  };

  const updateBlock = (id: string, updates: Partial<TemplateBlock>) => {
    setBlocks((prev) =>
      prev.map((block) =>
        block.id === id ? ({ ...block, ...updates } as TemplateBlock) : block,
      ),
    );
  };

  const removeBlock = (id: string) => {
    setBlocks((prev) => prev.filter((block) => block.id !== id));
    setSelectedBlockId((prev) => (prev === id ? null : prev));
  };

  const selectBlock = (id: string | null) => {
    setSelectedBlockId(id);
  };

  return (
    <TemplateContext.Provider
      value={{
        blocks,
        selectedBlockId,
        addBlock,
        updateBlock,
        removeBlock,
        selectBlock,
      }}
    >
      {children}
    </TemplateContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTemplate() {
  const context = useContext(TemplateContext);
  if (!context) {
    throw new Error("useTemplate must be used within a TemplateProvider");
  }
  return context;
}
