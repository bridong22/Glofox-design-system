// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/ABC-Glofox-Website-Design-System?node-id=2192-1486
// source=src/components/SectionLargeCardList/SectionLargeCardList.tsx
// component=SectionLargeCardList
import figma from 'figma';
const instance = figma.selectedInstance;

const showHeading = instance.getBoolean('Show heading');
const showCard3 = instance.getBoolean('Show card 3');
const showCta = instance.getBoolean('Show cta');

export default {
  example: figma.code`<SectionLargeCardList showHeading={${showHeading}} showCard3={${showCard3}} showCta={${showCta}} />`,
  imports: ['import { SectionLargeCardList } from "src/components/SectionLargeCardList"'],
  id: 'section-large-card-list',
  metadata: { nestable: true },
};
