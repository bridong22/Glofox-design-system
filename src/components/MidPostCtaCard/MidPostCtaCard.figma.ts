// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=245-20
// source=src/components/MidPostCtaCard/MidPostCtaCard.tsx
// component=MidPostCtaCard
import figma from 'figma';
const instance = figma.selectedInstance;

function readText(layerName: string, fallback: string, opts?: { traverseInstances?: boolean }): string {
  const node = instance.findText(layerName, opts);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const eyebrow = readText('FOR PILATES STUDIOS', 'FOR PILATES STUDIOS');
const body = readText(
  'See how ABC Glofox keeps reformers full and billing automatic — class caps, waitlists and recurring payments in one system.',
  'See how ABC Glofox keeps reformers full and billing automatic — class caps, waitlists and recurring payments in one system.',
);

// The nested Button instance's label layer is named "Get Free Demo" (its
// default text) regardless of the override characters used in this
// instance, so search by that fixed layer name and read its live content.
const ctaLabel = readText('Get Free Demo', 'Get a Free Demo', { traverseInstances: true });

export default {
  example: figma.code`<MidPostCtaCard eyebrow="${eyebrow}" body="${body}" ctaLabel="${ctaLabel}" />`,
  imports: ['import { MidPostCtaCard } from "src/components/MidPostCtaCard"'],
  id: 'mid-post-cta-card',
  metadata: { nestable: true },
};
