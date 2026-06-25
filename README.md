# Email Template Builder

A React email template builder for the Everlytic frontend developer assessment. Compose email layouts from reusable content blocks (Header, Text, Image, Button) with a live preview and per-block editor.

## Getting Started

```bash
npm install
npm run dev          # http://localhost:5173
npm run storybook    # http://localhost:6006
npm test             # unit tests (Vitest + React Testing Library)
npm run build
```

## Approach

The brief specified Angular, Signals, and a `TemplateService`. This project uses **React** with an equivalent architecture:

| Brief (Angular) | This project (React) |
|-----------------|----------------------|
| Design system components | `src/design-system/components/` |
| `TemplateService` + Signals | `TemplateContext` + `useTemplate` |
| Feature module | `src/features/template-builder/` |
| Storybook | Component stories for each block |
| Vitest / RTL | Unit + integration tests |

**Design system** — Four presentational block components (`HeaderBlock`, `TextBlock`, `ImageBlock`, `ButtonBlock`) live in the design system with SCSS tokens, Storybook stories, and unit tests. They are dumb components: props in, markup out.

**State** — `TemplateProvider` holds the block list and selected block ID. Actions (`addBlock`, `updateBlock`, `removeBlock`, `selectBlock`) mirror what a service would expose in Angular. Block defaults are created via `createDefaultBlock()` with an exhaustive switch over `BlockType`.

**UI** — `TemplateBuilder` is a two-panel layout: sidebar (`BlockPicker`) to add blocks, and a preview column (`PreviewPanel` + `BlockEditor`). Selecting a block in the preview opens its editor; changes flow through `updateBlock` and re-render the preview immediately.

## Assumptions

- **React instead of Angular** — chosen for familiarity; patterns map directly to the brief’s structure.
- **No persistence** — templates live in memory only; no save/load or API.
- **No drag-and-drop reorder** — blocks append in add order; reordering was out of scope for the time box.
- **Placeholder image** — new image blocks use `placehold.co` as a default `src`.
- **Email-safe HTML** — blocks use semantic markup (header, paragraphs, links) but this is a layout composer, not a full MIME/HTML email pipeline.

## Tests

```bash
npm test
```

- **Component tests** — each design-system block (render, key props).
- **`TemplateContext.test.tsx`** — add/remove blocks, update data, provider guard.
- **`TemplateBuilder.test.tsx`** — integration: add header → edit title → preview updates.

## What I’d improve with more time

- Drag-and-drop reordering in the preview
- Visual block picker (icons/thumbnails) instead of text list
- Persist templates to `localStorage` or an API
- Export as HTML snippet suitable for email clients
- Stronger accessibility (focus management when selecting/removing blocks)
- Shared form field components in the design system for the block editor
- E2E tests with Playwright for the full builder flow

## Project structure

```
src/
  design-system/          # tokens, shared styles, block components
  features/
    template-builder/     # context, types, builder UI
  stories/                # Storybook welcome story
  test/setup.ts           # jest-dom for Vitest
```
