// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=139-184
// source=src/components/Carousel/Carousel.tsx
// component=Carousel
import figma from 'figma';

// Carousel renders a title, subtitle, and an `items` array of ResourceCard
// props, which has no single-property Figma correspondence — the nested
// Carousel Arrow, Resource Card and Pagination Dot instances are all driven
// by this array and internal slide state, not by exposed component
// properties. This is a representative static example with the array
// inlined.

export default {
  example: figma.code`<Carousel items={[{ category: 'Experience', title: 'The Best Gym Management Software 2026, Reviewed & Compared' }, { category: 'Studio', title: 'How Reform Studio Hit Break-Even in 14 Months' }]} />`,
  imports: ['import { Carousel } from "src/components/Carousel"'],
  id: 'carousel',
  metadata: { nestable: true },
};
