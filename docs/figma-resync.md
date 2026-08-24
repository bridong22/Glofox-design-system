# Keeping this library in sync with Figma

Figma has no built-in mechanism that pushes design edits into a git repository.
What this repo actually has is two complementary pieces:

1. **Code Connect** (`figma.config.json`, `src/components/**/*.figma.tsx`) — makes Figma's
   Dev Mode show *this repo's real code* when a designer or engineer inspects a component,
   instead of Figma's auto-generated guess. This is one-directional (code → Figma's Dev Mode
   display) and only updates when someone runs `npm run figma:connect` to republish the mapping.
2. **The resync process below** — the actual mechanism that pulls new/changed Figma designs
   into this repo. It's agent-driven (a Claude session with Figma MCP access), not a webhook,
   because Figma doesn't offer a webhook this repo can consume without an Enterprise plan and a
   public endpoint. A scheduled Routine runs it automatically; you can also trigger it manually
   at any time by asking Claude to "resync the design system from Figma".

## What the resync process does

The source of truth for "what's already been built" is `figma/manifest.json` — one entry per
Figma component/component-set node, with its `assetKey` (Figma's content hash for that node,
which changes whenever the node's design changes) and the local `componentDir` it maps to.

Each run:

1. Call `list_file_components_for_code_connect` for fileKey `uQ9lsXJuQx9CVTdkJTVtCc`.
2. Diff the result against `figma/manifest.json`:
   - **New `nodeId`** not in the manifest → a new component was added in Figma. Build it
     following the conventions in this README, add it to the manifest.
   - **Changed `assetKey`** for an existing `nodeId` → that component's design changed.
     Re-run `get_design_context` on it, update the corresponding `componentDir`'s `.tsx`/
     `.module.css`, and update the manifest's `assetKey`.
   - **`nodeId` removed from Figma** → flag it in the summary; don't delete code automatically
     (it may still be in use downstream).
3. Re-check `get_variable_defs` on a sample of components for token drift (colors, radii,
   spacing, type). Update `src/tokens/tokens.css` / `tokens.ts` if values changed.
4. Run `npm run typecheck` and `npm run build` to make sure nothing broke.
5. Commit with a message summarizing what changed, push to the working branch.
6. Post a short summary (components added/updated/flagged) back to the user.

If the diff is empty, do nothing and don't post a summary (the scheduled Routine should be
silent on no-op runs).

## Manual resync

Ask Claude in this repo: "resync the design system from Figma" — it will run the steps above
on demand.
