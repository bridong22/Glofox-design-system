// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=42-49
// source=src/components/StatStrip/StatStrip.tsx
// component=StatStrip
import figma from 'figma';
const instance = figma.selectedInstance;

// StatStrip's `stats` prop is an array, which has no direct Figma property
// counterpart. The three value/label pairs are visible as named text layers
// (not exposed as component properties), so we read them dynamically via
// findText and assemble a representative array literal for the example.
function readText(layerName, fallback) {
  const node = instance.findText(layerName);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const stat1Value = readText('30k+', '30k+');
const stat1Label = readText('Studios & gyms', 'Studios & gyms');
const stat2Value = readText('4.5/5', '4.5/5');
const stat2Label = readText('Capterra rating', 'Capterra rating');
const stat3Value = readText('4.4/5', '4.4/5');
const stat3Label = readText('G2 rating', 'G2 rating');

const stats = `[{ value: '${stat1Value}', label: '${stat1Label}' }, { value: '${stat2Value}', label: '${stat2Label}' }, { value: '${stat3Value}', label: '${stat3Label}' }]`;

export default {
  example: figma.code`<StatStrip stats={${stats}} />`,
  imports: ['import { StatStrip } from "src/components/StatStrip"'],
  id: 'stat-strip',
  metadata: { nestable: true },
};
