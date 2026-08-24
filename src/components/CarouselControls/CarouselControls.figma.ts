// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=157-261
// source=src/components/CarouselControls/CarouselControls.tsx
// component=CarouselControls
import figma from 'figma';
const instance = figma.selectedInstance;

// CarouselControls has no Figma component properties — the nested Linear
// Progress Track and Carousel Arrow (prev/next) instances are fixed content
// baked into the component. `progress`, `prevDisabled` and `nextDisabled`
// are not backed by Figma properties, so this example relies on the
// component's own defaults.

export default {
  example: figma.code`<CarouselControls />`,
  imports: ['import { CarouselControls } from "src/components/CarouselControls"'],
  id: 'carousel-controls',
  metadata: { nestable: true },
};
