// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=2193-2294
// source=src/components/SectionQuoteCarousel/SectionQuoteCarousel.tsx
// component=SectionQuoteCarousel
import figma from 'figma';
const instance = figma.selectedInstance;

const showHeading = instance.getBoolean('Show heading');

export default {
  example: figma.code`<SectionQuoteCarousel showHeading={${showHeading}} />`,
  imports: ['import { SectionQuoteCarousel } from "src/components/SectionQuoteCarousel"'],
  id: 'section-quote-carousel',
  metadata: { nestable: true },
};
