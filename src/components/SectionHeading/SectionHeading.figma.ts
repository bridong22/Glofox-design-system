// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=287-241
// source=src/components/SectionHeading/SectionHeading.tsx
// component=SectionHeading
import figma from 'figma';
const instance = figma.selectedInstance;

const eyebrow = instance.getString('Eyebrow');
const title = instance.getString('Title');
const subtitle = instance.getString('Subtitle');
const align = instance.getEnum('Align', {
  Center: 'center',
  Left: 'left',
  Right: 'right',
});
const size = instance.getEnum('Size', {
  Medium: 'medium',
  Small: 'small',
  Large: 'large',
});

export default {
  example: figma.code`<SectionHeading eyebrow="${eyebrow}" title="${title}" subtitle="${subtitle}" align="${align}" size="${size}" />`,
  imports: ['import { SectionHeading } from "src/components/SectionHeading"'],
  id: 'section-heading',
  metadata: { nestable: true },
};
