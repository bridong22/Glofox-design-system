// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=2193-2800
// source=src/components/SectionServicesCarousel/SectionServicesCarousel.tsx
// component=SectionServicesCarousel
import figma from 'figma';
const instance = figma.selectedInstance;

const showHeading = instance.getBoolean('Show heading');

export default {
  example: figma.code`<SectionServicesCarousel showHeading={${showHeading}} />`,
  imports: ['import { SectionServicesCarousel } from "src/components/SectionServicesCarousel"'],
  id: 'section-services-carousel',
  metadata: { nestable: true },
};
