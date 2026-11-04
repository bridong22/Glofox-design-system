// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/ABC-Glofox-Website-Design-System?node-id=2194-2698
// source=src/components/SectionServices/SectionServices.tsx
// component=SectionServices
import figma from 'figma';
const instance = figma.selectedInstance;

const showHeading = instance.getBoolean('Show heading');
const showRow2 = instance.getBoolean('Show row 2');

export default {
  example: figma.code`<SectionServices showHeading={${showHeading}} showRow2={${showRow2}} />`,
  imports: ['import { SectionServices } from "src/components/SectionServices"'],
  id: 'section-services',
  metadata: { nestable: true },
};
