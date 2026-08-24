// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=158-36
// source=src/components/PromoBanner/PromoBanner.tsx
// component=PromoBanner
import figma from 'figma';
const instance = figma.selectedInstance;

const message = instance.findText('Book a demo today to boost your leads by 250%').textContent;
const ctaLabel = instance.findText('Get Free Demo', { traverseInstances: true }).textContent;

export default {
  example: figma.code`<PromoBanner message="${message}" ctaLabel="${ctaLabel}" />`,
  imports: ['import { PromoBanner } from "src/components/PromoBanner"'],
  id: 'promo-banner',
  metadata: { nestable: true },
};
