// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=1441-1223
// source=src/components/RelatedTerms/RelatedTerms.tsx
// component=RelatedTerms
import figma from 'figma';
const instance = figma.selectedInstance;

function readText(layerName: string, fallback: string): string {
  const node = instance.findText(layerName);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const title = readText('Related terms', 'Related terms');

// The term-chip list is a variable-length, layoutWrap row per this
// component's own description ("wraps a variable number of term-link
// chips") — no single-property correspondence on this node, so the example
// keeps the component's own default terms list.

export default {
  example: figma.code`<RelatedTerms title="${title}" />`,
  imports: ['import { RelatedTerms } from "src/components/RelatedTerms"'],
  id: 'related-terms',
  metadata: { nestable: true },
};
