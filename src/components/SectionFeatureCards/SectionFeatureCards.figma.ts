// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=2191-596
// source=src/components/SectionFeatureCards/SectionFeatureCards.tsx
// component=SectionFeatureCards
import figma from 'figma';
const instance = figma.selectedInstance;

const showHeading = instance.getBoolean('Show heading');
const showCta = instance.getBoolean('Show cta');

export default {
  example: figma.code`<SectionFeatureCards showHeading={${showHeading}} showCta={${showCta}} />`,
  imports: ['import { SectionFeatureCards } from "src/components/SectionFeatureCards"'],
  id: 'section-feature-cards',
  metadata: { nestable: true },
};
