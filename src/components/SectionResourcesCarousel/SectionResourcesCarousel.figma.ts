// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=2193-2362
// source=src/components/SectionResourcesCarousel/SectionResourcesCarousel.tsx
// component=SectionResourcesCarousel
import figma from 'figma';
const instance = figma.selectedInstance;

const showHeading = instance.getBoolean('Show heading');

export default {
  example: figma.code`<SectionResourcesCarousel showHeading={${showHeading}} />`,
  imports: ['import { SectionResourcesCarousel } from "src/components/SectionResourcesCarousel"'],
  id: 'section-resources-carousel',
  metadata: { nestable: true },
};
