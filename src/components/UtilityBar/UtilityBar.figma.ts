// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=139-17
// source=src/components/UtilityBar/UtilityBar.tsx
// component=UtilityBar
import figma from 'figma';

// UtilityBar has no Figma component properties — the "Customer login" /
// "Support" links are static text layers in this node, matching the
// component's own DEFAULT_LINKS exactly. `links` is an array of objects with
// no single-property Figma correspondence, so this is a representative
// static example relying on the component's built-in default.

export default {
  example: figma.code`<UtilityBar />`,
  imports: ['import { UtilityBar } from "src/components/UtilityBar"'],
  id: 'utility-bar',
  metadata: { nestable: true },
};
