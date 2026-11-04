// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=2194-2999
// source=src/components/SectionTestimonialCarousel/SectionTestimonialCarousel.tsx
// component=SectionTestimonialCarousel
import figma from 'figma';
const instance = figma.selectedInstance;

const showHeading = instance.getBoolean('Show heading');

export default {
  example: figma.code`<SectionTestimonialCarousel showHeading={${showHeading}} />`,
  imports: ['import { SectionTestimonialCarousel } from "src/components/SectionTestimonialCarousel"'],
  id: 'section-testimonial-carousel',
  metadata: { nestable: true },
};
