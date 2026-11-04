// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=2193-2799
// source=src/components/SectionResources/SectionResources.tsx
// component=SectionResources
import figma from 'figma';
const instance = figma.selectedInstance;

const layout = instance.getEnum('Layout', { Default: 'default', Centered: 'centered' });
const showFilters = instance.getBoolean('Show filters');
const showHeading = instance.getBoolean('Show heading');

export default {
  example: figma.code`<SectionResources layout="${layout}" showFilters={${showFilters}} showHeading={${showHeading}} />`,
  imports: ['import { SectionResources } from "src/components/SectionResources"'],
  id: 'section-resources',
  metadata: { nestable: true },
};
