// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=174-8
// source=src/components/FeatureListCard/FeatureListCard.tsx
// component=FeatureListCard
import figma from 'figma';
const instance = figma.selectedInstance;

function readText(layerName: string, fallback: string): string {
  const node = instance.findText(layerName);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const title = readText('Built for fitness, not retrofitted for it', 'Built for fitness, not retrofitted for it');
const description = readText(
  'Purpose-built for studios and gyms, with workflows designed around bookings, memberships, waivers, payments, and member engagement.',
  'Purpose-built for studios and gyms, with workflows designed around bookings, memberships, waivers, payments, and member engagement.',
);

export default {
  example: figma.code`<FeatureListCard title="${title}" description="${description}" />`,
  imports: ['import { FeatureListCard } from "src/components/FeatureListCard"'],
  id: 'feature-list-card',
  metadata: { nestable: true },
};
