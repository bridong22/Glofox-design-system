// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=176-8
// source=src/components/ResourceCard/ResourceCard.tsx
// component=ResourceCard
import figma from 'figma';
const instance = figma.selectedInstance;

const category = instance.findText('Experience').textContent;
const title = instance.findText(
  'The Best Gym Management Software 2026, Reviewed & Compared'
).textContent;
const buttonLabel = instance.findText('Get Free Demo', { traverseInstances: true }).textContent;

export default {
  example: figma.code`<ResourceCard category="${category}" title="${title}" buttonLabel="${buttonLabel}" />`,
  imports: ['import { ResourceCard } from "src/components/ResourceCard"'],
  id: 'resource-card',
  metadata: { nestable: true },
};
