# Glofox Design System

React component library generated from the [Glofox Web Design System](https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System) Figma file.

## Stack

- React 18 + TypeScript
- CSS Modules for styling, driven by design tokens in `src/tokens/tokens.css`
- Vite (library mode) for the publishable build
- Storybook for visual docs/QA of every component and variant
- [Figma Code Connect](https://www.figma.com/code-connect-docs/) linking each component to its Figma node

## Getting started

```bash
npm install
npm run dev        # Storybook at http://localhost:6006
npm run build       # builds dist/ (ESM + CJS + type declarations)
npm run typecheck
```

## Structure

```
src/
  tokens/            # design tokens (colors, spacing, radius, type) as CSS custom properties
  components/
    <ComponentName>/
      <ComponentName>.tsx
      <ComponentName>.module.css
      <ComponentName>.stories.tsx
      <ComponentName>.figma.tsx   # Code Connect mapping (Dev Mode ↔ this file)
      index.ts
  index.ts           # public barrel export
figma/
  manifest.json      # snapshot of Figma component nodes this repo tracks, used for resync diffing
docs/
  figma-resync.md    # how design changes in Figma make their way into this repo
```

## Icons

The Figma sprite sheet's icon set is the Feather icon set, which [lucide-react](https://lucide.dev/)
maintains as a 1:1 named fork. Rather than hand-authoring ~280 icon components, `src/components/Icon`
wraps `lucide-react` and maps a Figma icon's `Style` variant name straight to the matching lucide icon:

```tsx
<Icon name="chevron-right" size={16} />
```

## Keeping this in sync with Figma

**There is no native Figma feature that automatically rewrites a git repo when a design
changes.** This repo uses two complementary mechanisms instead — see
[`docs/figma-resync.md`](docs/figma-resync.md) for the full explanation:

1. **Code Connect** — Figma Dev Mode shows this repo's real code snippet for each component
   instead of an auto-generated guess. Republish after code changes with `npm run figma:connect`.
2. **Scheduled resync** — a daily automated check (and an on-demand "resync the design system
   from Figma" request) diffs the live Figma file against `figma/manifest.json` and updates any
   component whose design changed, then commits and pushes.

## Contributing a component by hand

Follow the pattern of any existing component folder: typed props matching the Figma component's
properties, CSS Modules referencing `src/tokens/tokens.css` custom properties wherever a value
matches a token, a Storybook story per meaningful variant, and a barrel `index.ts` export.
