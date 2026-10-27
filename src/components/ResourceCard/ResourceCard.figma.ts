// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=1829-4438
// source=src/components/ResourceCard/ResourceCard.tsx
// component=ResourceCard
import figma from 'figma';
const instance = figma.selectedInstance;

function readText(layerName: string, fallback: string, opts?: { traverseInstances?: boolean }): string {
  const node = instance.findText(layerName, opts);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const surface = instance.getEnum('Surface', { Card: 'card', Plain: 'plain' });
const showEyebrow = instance.getBoolean('Show eyebrow');
const category = readText('Experience', 'Experience');
const meta = readText('24 Jun 2025 • 10 min read', '24 Jun 2025 • 10 min read');
const title = readText('Card title goes here', 'Card title goes here');
const description = readText(
  'Short supporting description, one to three lines. Explain the benefit, not the feature.',
  'Short supporting description, one to three lines. Explain the benefit, not the feature.',
);
const showLink = instance.getBoolean('Show link');
const buttonLabel = readText('Read More', 'Read More', { traverseInstances: true });

export default {
  example: figma.code`<ResourceCard surface="${surface}" showEyebrow={${showEyebrow}} category="${category}" meta="${meta}" title="${title}" description="${description}" showLink={${showLink}} buttonLabel="${buttonLabel}" />`,
  imports: ['import { ResourceCard } from "src/components/ResourceCard"'],
  id: 'resource-card',
  metadata: { nestable: true },
};
