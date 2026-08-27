// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=398-2014
// source=src/components/LogoBar/LogoBar.tsx
// component=LogoBar
import figma from 'figma';

// LogoBar has no Figma component properties — its 8 logo slots are static
// content in this node, matching the component's own default (`brands`)
// exactly: Jazzercise, Rumble, F45, AKT, StretchLab, Spartans, Club
// Pilates, Snap Fitness 24/7. `brands` is an array with no single-property
// Figma correspondence, so this is a representative static example that
// relies on the component's built-in default rather than dynamic
// extraction.

export default {
  example: figma.code`<LogoBar />`,
  imports: ['import { LogoBar } from "src/components/LogoBar"'],
  id: 'logo-bar',
  metadata: { nestable: true },
};
