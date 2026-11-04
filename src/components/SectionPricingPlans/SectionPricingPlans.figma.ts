// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/ABC-Glofox-Website-Design-System?node-id=2193-2191
// source=src/components/SectionPricingPlans/SectionPricingPlans.tsx
// component=SectionPricingPlans
import figma from 'figma';
const instance = figma.selectedInstance;

const showHeading = instance.getBoolean('Show heading');

export default {
  example: figma.code`<SectionPricingPlans showHeading={${showHeading}} />`,
  imports: ['import { SectionPricingPlans } from "src/components/SectionPricingPlans"'],
  id: 'section-pricing-plans',
  metadata: { nestable: true },
};
