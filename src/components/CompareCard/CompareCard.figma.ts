// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=1829-4387
// source=src/components/CompareCard/CompareCard.tsx
// component=CompareCard
import figma from 'figma';
const instance = figma.selectedInstance;

const tone = instance.getEnum('Tone', { Sky: 'sky', Blush: 'blush' });
const showLabel = instance.getBoolean('Show label');

function readText(layerName: string, fallback: string): string {
  const node = instance.findText(layerName);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const label = readText('Label', 'Label');
const title = readText('Comparison heading', 'Comparison heading');
const bulletsRaw = readText('•  First point', '•  First point\n•  Second point\n•  Third point');
const bullets = bulletsRaw
  .split('\n')
  .map((line) => line.replace(/^•\s*/, '').trim())
  .filter(Boolean);
const bulletsArray = `[${bullets.map((bullet) => `"${bullet}"`).join(', ')}]`;

export default {
  example: figma.code`<CompareCard tone="${tone}" showLabel={${showLabel}} label="${label}" title="${title}" bullets={${bulletsArray}} />`,
  imports: ['import { CompareCard } from "src/components/CompareCard"'],
  id: 'compare-card',
  metadata: { nestable: true },
};
