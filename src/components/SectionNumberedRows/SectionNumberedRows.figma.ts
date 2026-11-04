// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/ABC-Glofox-Website-Design-System?node-id=2192-1550
// source=src/components/SectionNumberedRows/SectionNumberedRows.tsx
// component=SectionNumberedRows
import figma from 'figma';
const instance = figma.selectedInstance;

const showHeading = instance.getBoolean('Show heading');
const showRow3 = instance.getBoolean('Show row 3');

export default {
  example: figma.code`<SectionNumberedRows showHeading={${showHeading}} showRow3={${showRow3}} />`,
  imports: ['import { SectionNumberedRows } from "src/components/SectionNumberedRows"'],
  id: 'section-numbered-rows',
  metadata: { nestable: true },
};
