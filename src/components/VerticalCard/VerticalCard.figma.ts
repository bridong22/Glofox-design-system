// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=604-4002
// source=src/components/VerticalCard/VerticalCard.tsx
// component=VerticalCard
import figma from 'figma';
const instance = figma.selectedInstance;

function readText(layerName: string, fallback: string): string {
  const node = instance.findText(layerName);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const title = readText(
  'Built for fitness, not retrofitted for it',
  'Built for fitness, not retrofitted for it',
);

export default {
  example: figma.code`<VerticalCard title="${title}" />`,
  imports: ['import { VerticalCard } from "src/components/VerticalCard"'],
  id: 'vertical-card',
  metadata: { nestable: true },
};
