// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=2127-16355
// source=src/components/ComparisonTableCompact/ComparisonTableCompact.tsx
// component=ComparisonTableCompact
import figma from 'figma';
const instance = figma.selectedInstance;

// The row count and per-cell values aren't exposed as top-level component
// properties (each row/cell is a nested instance instead), so this example
// reads only the header text and renders with the component's own
// representative defaults rather than reconstructing every row dynamically.
function readText(layerName: string, fallback: string, opts?: { traverseInstances?: boolean }): string {
  const node = instance.findText(layerName, opts);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const featureHeading = readText('Why Choose ABC Glofox?', 'Why Choose ABC Glofox?', { traverseInstances: true });
const competitorName = readText('Mindbody', 'Mindbody', { traverseInstances: true });

export default {
  example: figma.code`<ComparisonTableCompact featureHeading="${featureHeading}" competitorNames={["${competitorName}"]} />`,
  imports: ['import { ComparisonTableCompact } from "src/components/ComparisonTableCompact"'],
  id: 'comparison-table-compact',
  metadata: { nestable: true },
};
