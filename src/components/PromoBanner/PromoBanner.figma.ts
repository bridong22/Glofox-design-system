// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=158-36
// source=src/components/PromoBanner/PromoBanner.tsx
// component=PromoBanner
import figma from 'figma';
const instance = figma.selectedInstance;

function readText(layerName: string, fallback: string, opts?: { traverseInstances?: boolean }): string {
  const node = instance.findText(layerName, opts);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const message = readText('Book a demo today to boost your leads by 250%', 'Book a demo today to boost your leads by 250%');
const ctaLabel = readText('Get Free Demo', 'Get Free Demo', { traverseInstances: true });

export default {
  example: figma.code`<PromoBanner message="${message}" ctaLabel="${ctaLabel}" />`,
  imports: ['import { PromoBanner } from "src/components/PromoBanner"'],
  id: 'promo-banner',
  metadata: { nestable: true },
};
