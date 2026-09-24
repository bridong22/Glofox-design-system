// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=1314-4729
// source=src/components/PricingCard/PricingCard.tsx
// component=PricingCard
import figma from 'figma';
const instance = figma.selectedInstance;

const style = instance.getEnum('Style', { Default: 'default', Popular: 'popular' });

function readText(layerName: string, fallback: string): string {
  const node = instance.findText(layerName);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const planName = readText('Essential', 'Essential');
const planDescription = readText(
  'Core tools to launch and run your fitness business',
  'Core tools to launch and run your fitness business',
);

// Price, feature list, and the extras block (add-ons list or Highlight
// Section) vary per plan and have no single-property correspondence on
// this node — content varies by design, not by variant, per this
// component's own description — so the example keeps the component's own
// defaults for those.

export default {
  example: figma.code`<PricingCard style="${style}" planName="${planName}" planDescription="${planDescription}" />`,
  imports: ['import { PricingCard } from "src/components/PricingCard"'],
  id: 'pricing-card',
  metadata: { nestable: true },
};
