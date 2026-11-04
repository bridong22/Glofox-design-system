// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=2190-298
// source=src/components/SectionComparisonTable/SectionComparisonTable.tsx
// component=SectionComparisonTable
import figma from 'figma';
const instance = figma.selectedInstance;

const showHeading = instance.getBoolean('Show heading');

export default {
  example: figma.code`<SectionComparisonTable showHeading={${showHeading}} />`,
  imports: ['import { SectionComparisonTable } from "src/components/SectionComparisonTable"'],
  id: 'section-comparison-table',
  metadata: { nestable: true },
};
