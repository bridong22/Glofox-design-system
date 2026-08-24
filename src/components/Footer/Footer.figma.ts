// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=44-1745
// source=src/components/Footer/Footer.tsx
// component=Footer
import figma from 'figma';
const instance = figma.selectedInstance;

// Footer has no Figma component properties — all nav-grid columns, social
// icons, legal links and the copyright line are static content in this node,
// and they match the component's own defaults (DEFAULT_COLUMNS,
// DEFAULT_SOCIAL_LINKS, DEFAULT_LEGAL_LINKS, DEFAULT_COPYRIGHT_TEXT) exactly.
// `columns`, `socialLinks` and `legalLinks` are arrays of objects with no
// single-property Figma correspondence, so this is a representative static
// example that relies on the component's built-in defaults rather than
// dynamic extraction.

export default {
  example: figma.code`<Footer />`,
  imports: ['import { Footer } from "src/components/Footer"'],
  id: 'footer',
  metadata: { nestable: true },
};
