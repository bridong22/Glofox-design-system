// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/ABC-Glofox-Website-Design-System?node-id=2193-1909
// source=src/components/SectionPlanCards/SectionPlanCards.tsx
// component=SectionPlanCards
import figma from 'figma';
const instance = figma.selectedInstance;

const showHeading = instance.getBoolean('Show heading');
const showCurrencySwitcher = instance.getBoolean('Show currency switcher');
const showCompareCta = instance.getBoolean('Show compare cta');

export default {
  example: figma.code`<SectionPlanCards showHeading={${showHeading}} showCurrencySwitcher={${showCurrencySwitcher}} showCompareCta={${showCompareCta}} />`,
  imports: ['import { SectionPlanCards } from "src/components/SectionPlanCards"'],
  id: 'section-plan-cards',
  metadata: { nestable: true },
};
