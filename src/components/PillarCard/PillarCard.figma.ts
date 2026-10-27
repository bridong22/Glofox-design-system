// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=1832-6053
// source=src/components/PillarCard/PillarCard.tsx
// component=PillarCard
import figma from 'figma';
const instance = figma.selectedInstance;

const imagePosition = instance.getEnum('Image position', { Right: 'right', Left: 'left' });

function readText(layerName: string, fallback: string, opts?: { traverseInstances?: boolean }): string {
  const node = instance.findText(layerName, opts);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const keyword = readText('Keyword', 'Keyword');
const subtitle = readText('Pillar subtitle in one line', 'Pillar subtitle in one line');
const description = readText(
  'Two to three sentences that explain what this pillar covers and why it matters to the customer.',
  'Two to three sentences that explain what this pillar covers and why it matters to the customer.',
);
const showLink = instance.getBoolean('Show link');
const linkLabel = readText('Read More', 'Read More', { traverseInstances: true });

export default {
  example: figma.code`<PillarCard imagePosition="${imagePosition}" keyword="${keyword}" subtitle="${subtitle}" description="${description}" showLink={${showLink}} linkLabel="${linkLabel}" />`,
  imports: ['import { PillarCard } from "src/components/PillarCard"'],
  id: 'pillar-card',
  metadata: { nestable: true },
};
