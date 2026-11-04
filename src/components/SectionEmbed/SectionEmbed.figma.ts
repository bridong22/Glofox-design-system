// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/ABC-Glofox-Website-Design-System?node-id=2191-460
// source=src/components/SectionEmbed/SectionEmbed.tsx
// component=SectionEmbed
import figma from 'figma';
const instance = figma.selectedInstance;

const width = instance.getEnum('Width', { Contained: 'contained', Wide: 'wide', Full: 'full' });
const aspect = instance.getEnum('Aspect', { '16:9': '16:9', '4:3': '4:3', '1:1': '1:1' });
const showHeading = instance.getBoolean('Show heading');

export default {
  example: figma.code`<SectionEmbed width="${width}" aspect="${aspect}" showHeading={${showHeading}} />`,
  imports: ['import { SectionEmbed } from "src/components/SectionEmbed"'],
  id: 'section-embed',
  metadata: { nestable: true },
};
