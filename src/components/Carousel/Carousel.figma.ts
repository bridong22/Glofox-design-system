// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=139-184
// source=src/components/Carousel/Carousel.tsx
// component=Carousel
import figma from 'figma';

// Carousel takes a single `items` array prop (each with src/alt), which has
// no single-property Figma correspondence — the nested Carousel Arrow,
// Image Placeholder Block and Pagination Dot instances are all driven by
// this array and internal slide state, not by exposed component properties.
// This is a representative static example with the array inlined.

export default {
  example: figma.code`<Carousel items={[{ src: '/images/placeholder-1.jpg', alt: 'Who We Serve' }, { src: '/images/placeholder-2.jpg', alt: 'Built for class-led fitness businesses of all kinds, from independent studios to growing gym brands.' }]} />`,
  imports: ['import { Carousel } from "src/components/Carousel"'],
  id: 'carousel',
  metadata: { nestable: true },
};
