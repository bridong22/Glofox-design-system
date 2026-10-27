// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=42-49
// source=src/components/StatStrip/StatStrip.tsx
// component=StatStrip
import figma from 'figma';
const instance = figma.selectedInstance;

// Figma's master symbol (42:49) represents a single stat column — "Inner
// column fills the instance width — resize or set FILL in a row" — meant to
// be placed several-up in a row. StatStrip's `stats` array prop has no
// direct Figma property counterpart, so this example reads this one
// instance's fields and wraps them in a single-item array literal.
const showPrefix = instance.getBoolean('Show prefix');
const showDescription = instance.getBoolean('Show description');

function readText(layerName: string, fallback: string): string {
  const node = instance.findText(layerName);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const prefix = readText('up to', 'up to');
const value = readText('97%+', '97%+');
const label = readText('Collection Rates', 'Collection Rates');
const description = readText(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
);

const stats = `[{ prefix: '${prefix}', showPrefix: ${showPrefix}, value: '${value}', label: '${label}', description: '${description}', showDescription: ${showDescription} }]`;

export default {
  example: figma.code`<StatStrip stats={${stats}} />`,
  imports: ['import { StatStrip } from "src/components/StatStrip"'],
  id: 'stat-strip',
  metadata: { nestable: true },
};
