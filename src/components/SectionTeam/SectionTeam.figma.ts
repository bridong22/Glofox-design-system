// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=2194-2868
// source=src/components/SectionTeam/SectionTeam.tsx
// component=SectionTeam
import figma from 'figma';
const instance = figma.selectedInstance;

const showHeading = instance.getBoolean('Show heading');
const showRow2 = instance.getBoolean('Show row 2');

export default {
  example: figma.code`<SectionTeam showHeading={${showHeading}} showRow2={${showRow2}} />`,
  imports: ['import { SectionTeam } from "src/components/SectionTeam"'],
  id: 'section-team',
  metadata: { nestable: true },
};
