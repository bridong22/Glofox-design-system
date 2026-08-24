// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=176-8
// source=src/components/ResourceCard/ResourceCard.tsx
// component=ResourceCard
import figma from 'figma';
const instance = figma.selectedInstance;

function readText(layerName: string, fallback: string, opts?: { traverseInstances?: boolean }): string {
  const node = instance.findText(layerName, opts);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const category = readText('Experience', 'Experience');
const title = readText(
  'The Best Gym Management Software 2026, Reviewed & Compared',
  'The Best Gym Management Software 2026, Reviewed & Compared',
);
const buttonLabel = readText('Get Free Demo', 'Get Free Demo', { traverseInstances: true });

export default {
  example: figma.code`<ResourceCard category="${category}" title="${title}" buttonLabel="${buttonLabel}" />`,
  imports: ['import { ResourceCard } from "src/components/ResourceCard"'],
  id: 'resource-card',
  metadata: { nestable: true },
};
