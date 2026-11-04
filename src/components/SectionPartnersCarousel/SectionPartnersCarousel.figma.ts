// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=2192-2005
// source=src/components/SectionPartnersCarousel/SectionPartnersCarousel.tsx
// component=SectionPartnersCarousel
import figma from 'figma';
const instance = figma.selectedInstance;

const grayscale = instance.getEnum('Grayscale', { On: true, Off: false });

export default {
  example: figma.code`<SectionPartnersCarousel grayscale={${grayscale}} />`,
  imports: ['import { SectionPartnersCarousel } from "src/components/SectionPartnersCarousel"'],
  id: 'section-partners-carousel',
  metadata: { nestable: true },
};
