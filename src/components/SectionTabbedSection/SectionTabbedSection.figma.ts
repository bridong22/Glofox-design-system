// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/ABC-Glofox-Website-Design-System?node-id=2194-2838
// source=src/components/SectionTabbedSection/SectionTabbedSection.tsx
// component=SectionTabbedSection
import figma from 'figma';
const instance = figma.selectedInstance;

const showHeading = instance.getBoolean('Show heading');

export default {
  example: figma.code`<SectionTabbedSection showHeading={${showHeading}} />`,
  imports: ['import { SectionTabbedSection } from "src/components/SectionTabbedSection"'],
  id: 'section-tabbed-section',
  metadata: { nestable: true },
};
