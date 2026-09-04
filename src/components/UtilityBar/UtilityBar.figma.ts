// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=600-3897
// source=src/components/UtilityBar/UtilityBar.tsx
// component=UtilityBar
import figma from 'figma';
const instance = figma.selectedInstance;

// The "Customer login" / "Support" links are static text layers in this
// node, matching the component's own DEFAULT_LINKS exactly. `links` is an
// array of objects with no single-property Figma correspondence, so this is
// a representative static example relying on the component's built-in
// default, with the Type variant mapped to the `type` prop.

const type = instance.getEnum('Type', { Dark: 'dark', Light: 'light' });

export default {
  example: figma.code`<UtilityBar type="${type}" />`,
  imports: ['import { UtilityBar } from "src/components/UtilityBar"'],
  id: 'utility-bar',
  metadata: { nestable: true },
};
