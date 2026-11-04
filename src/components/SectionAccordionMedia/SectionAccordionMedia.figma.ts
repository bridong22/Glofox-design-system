// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/ABC-Glofox-Website-Design-System?node-id=2190-212
// source=src/components/SectionAccordionMedia/SectionAccordionMedia.tsx
// component=SectionAccordionMedia
import figma from 'figma';
const instance = figma.selectedInstance;

const imageAlign = instance.getEnum('Image', { Left: 'left', Right: 'right' });
const showHeading = instance.getBoolean('Show heading');
const showCta = instance.getBoolean('Show cta');

export default {
  example: figma.code`<SectionAccordionMedia imageAlign="${imageAlign}" showHeading={${showHeading}} showCta={${showCta}} />`,
  imports: ['import { SectionAccordionMedia } from "src/components/SectionAccordionMedia"'],
  id: 'section-accordion-media',
  metadata: { nestable: true },
};
