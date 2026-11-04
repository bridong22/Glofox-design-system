// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/ABC-Glofox-Website-Design-System?node-id=2191-595
// source=src/components/SectionFaq/SectionFaq.tsx
// component=SectionFaq
import figma from 'figma';
const instance = figma.selectedInstance;

const showHeading = instance.getBoolean('Show heading');
const style = instance.getEnum('Style', { Outline: 'outline', Solid: 'solid' });
const columns = instance.getEnum('Columns', { '1': 1, '2': 2 });

export default {
  example: figma.code`<SectionFaq showHeading={${showHeading}} style="${style}" columns={${columns}} />`,
  imports: ['import { SectionFaq } from "src/components/SectionFaq"'],
  id: 'section-faq',
  metadata: { nestable: true },
};
