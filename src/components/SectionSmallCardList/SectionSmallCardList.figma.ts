// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/ABC-Glofox-Website-Design-System?node-id=2194-2770
// source=src/components/SectionSmallCardList/SectionSmallCardList.tsx
// component=SectionSmallCardList
import figma from 'figma';
const instance = figma.selectedInstance;

const showHeading = instance.getBoolean('Show heading');
const showCard4 = instance.getBoolean('Show card 4');

export default {
  example: figma.code`<SectionSmallCardList showHeading={${showHeading}} showCard4={${showCard4}} />`,
  imports: ['import { SectionSmallCardList } from "src/components/SectionSmallCardList"'],
  id: 'section-small-card-list',
  metadata: { nestable: true },
};
