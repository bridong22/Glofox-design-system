// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=174-8
// source=src/components/FeatureListCard/FeatureListCard.tsx
// component=FeatureListCard
import figma from 'figma';
const instance = figma.selectedInstance;

const title = instance.findText('Built for fitness, not retrofitted for it').textContent;
const description = instance.findText(
  'Purpose-built for studios and gyms, with workflows designed around bookings, memberships, waivers, payments, and member engagement.'
).textContent;

export default {
  example: figma.code`<FeatureListCard title="${title}" description="${description}" />`,
  imports: ['import { FeatureListCard } from "src/components/FeatureListCard"'],
  id: 'feature-list-card',
  metadata: { nestable: true },
};
