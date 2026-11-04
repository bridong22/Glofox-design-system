// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/ABC-Glofox-Website-Design-System?node-id=2190-213
// source=src/components/SectionComparisonColumns/SectionComparisonColumns.tsx
// component=SectionComparisonColumns
import figma from 'figma';
const instance = figma.selectedInstance;

const showHeading = instance.getBoolean('Show heading');
const showColumn3 = instance.getBoolean('Show column 3');
const showCallouts = instance.getBoolean('Show callouts');

export default {
  example: figma.code`<SectionComparisonColumns showHeading={${showHeading}} showColumn3={${showColumn3}} showCallouts={${showCallouts}} />`,
  imports: ['import { SectionComparisonColumns } from "src/components/SectionComparisonColumns"'],
  id: 'section-comparison-columns',
  metadata: { nestable: true },
};
