// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=140-21
// source=src/components/CarouselArrow/CarouselArrow.tsx
// component=CarouselArrow
import figma from 'figma';
const instance = figma.selectedInstance;

const direction = instance.getEnum('Direction', { Prev: 'prev', Next: 'next' });

export default {
  example: figma.code`<CarouselArrow direction="${direction}" />`,
  imports: ['import { CarouselArrow } from "src/components/CarouselArrow"'],
  id: 'carousel-arrow',
  metadata: { nestable: true },
};
