// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=2192-958
// source=src/components/SectionIntegrationsCarousel/SectionIntegrationsCarousel.tsx
// component=SectionIntegrationsCarousel
import figma from 'figma';
const instance = figma.selectedInstance;

const showHeading = instance.getBoolean('Show heading');

export default {
  example: figma.code`<SectionIntegrationsCarousel showHeading={${showHeading}} />`,
  imports: ['import { SectionIntegrationsCarousel } from "src/components/SectionIntegrationsCarousel"'],
  id: 'section-integrations-carousel',
  metadata: { nestable: true },
};
