// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=1299-4459
// source=src/components/ComparisonRow/ComparisonRow.tsx
// component=ComparisonRow
import figma from 'figma';
const instance = figma.selectedInstance;

function readText(layerName: string, fallback: string): string {
  const node = instance.findText(layerName);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const label = readText('Website integration', 'Website integration');

// The per-column cells (`cells` prop) are a variable-length array of
// Comparison Row content instances with no single-property correspondence
// on this node — duplicated per comparison column per this component's own
// Figma description, so the example keeps the component's own default cells.

export default {
  example: figma.code`<ComparisonRow label="${label}" />`,
  imports: ['import { ComparisonRow } from "src/components/ComparisonRow"'],
  id: 'comparison-row',
  metadata: { nestable: true },
};
