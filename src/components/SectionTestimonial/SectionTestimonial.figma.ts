// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/ABC-Glofox-Website-Design-System?node-id=2194-3247
// source=src/components/SectionTestimonial/SectionTestimonial.tsx
// component=SectionTestimonial
import figma from 'figma';
const instance = figma.selectedInstance;

const imageAlign = instance.getEnum('Image', { Left: 'left', Right: 'right' });
const showHeading = instance.getBoolean('Show heading');
const showImage = instance.getBoolean('Show image');
const showStoryBox = instance.getBoolean('Show story box');

export default {
  example: figma.code`<SectionTestimonial imageAlign="${imageAlign}" showHeading={${showHeading}} showImage={${showImage}} showStoryBox={${showStoryBox}} />`,
  imports: ['import { SectionTestimonial } from "src/components/SectionTestimonial"'],
  id: 'section-testimonial',
  metadata: { nestable: true },
};
