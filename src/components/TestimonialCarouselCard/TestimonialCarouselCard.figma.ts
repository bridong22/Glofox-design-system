// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=2029-637
// source=src/components/TestimonialCarouselCard/TestimonialCarouselCard.tsx
// component=TestimonialCarouselCard
import figma from 'figma';
const instance = figma.selectedInstance;

const showHeader = instance.getBoolean('Show header');
const showLogoMarquee = instance.getBoolean('Show logo marquee');

export default {
  example: figma.code`<TestimonialCarouselCard showHeader={${showHeader}} showLogoMarquee={${showLogoMarquee}} />`,
  imports: ['import { TestimonialCarouselCard } from "src/components/TestimonialCarouselCard"'],
  id: 'testimonial-carousel-card',
  metadata: { nestable: true },
};
