// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/ABC-Glofox-Website-Design-System?node-id=2192-819
// source=src/components/SectionTextAndImage/SectionTextAndImage.tsx
// component=SectionTextAndImage
import figma from 'figma';
const instance = figma.selectedInstance;

const align = instance.getEnum('Align', { Left: 'left', Center: 'center' });
const showHeading = instance.getBoolean('Show heading');
const showRow3 = instance.getBoolean('Show row 3');

export default {
  example: figma.code`<SectionTextAndImage align="${align}" showHeading={${showHeading}} showRow3={${showRow3}} />`,
  imports: ['import { SectionTextAndImage } from "src/components/SectionTextAndImage"'],
  id: 'section-text-and-image',
  metadata: { nestable: true },
};
