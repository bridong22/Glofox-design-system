// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/ABC-Glofox-Website-Design-System?node-id=1316-2344
// source=src/components/PricingAddOns/PricingAddOns.tsx
// component=PricingAddOns
import figma from 'figma';
const instance = figma.selectedInstance;

const type = instance.getEnum('Type', { 'For purchase': 'for-purchase', Included: 'included' });

function readText(layerName: string, fallback: string): string {
  const node = instance.findText(layerName);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const title = readText('Add-ons', 'Add-ons');

export default {
  example: figma.code`<PricingAddOns type="${type}" title="${title}" />`,
  imports: ['import { PricingAddOns } from "src/components/PricingAddOns"'],
  id: 'pricing-add-ons',
  metadata: { nestable: true },
};
