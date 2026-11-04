// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/ABC-Glofox-Website-Design-System?node-id=2191-834
// source=src/components/SectionFeaturesTabs/SectionFeaturesTabs.tsx
// component=SectionFeaturesTabs
import figma from 'figma';
const instance = figma.selectedInstance;

const media = instance.getEnum('Media', { Image: 'image', Video: 'video' });
const showHeading = instance.getBoolean('Show heading');

export default {
  example: figma.code`<SectionFeaturesTabs media="${media}" showHeading={${showHeading}} />`,
  imports: ['import { SectionFeaturesTabs } from "src/components/SectionFeaturesTabs"'],
  id: 'section-features-tabs',
  metadata: { nestable: true },
};
