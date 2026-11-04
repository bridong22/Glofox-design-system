// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=2191-642
// source=src/components/SectionFeatureGrid/SectionFeatureGrid.tsx
// component=SectionFeatureGrid
import figma from 'figma';
const instance = figma.selectedInstance;

const showHeading = instance.getBoolean('Show heading');
const showRow2 = instance.getBoolean('Show row 2');

export default {
  example: figma.code`<SectionFeatureGrid showHeading={${showHeading}} showRow2={${showRow2}} />`,
  imports: ['import { SectionFeatureGrid } from "src/components/SectionFeatureGrid"'],
  id: 'section-feature-grid',
  metadata: { nestable: true },
};
