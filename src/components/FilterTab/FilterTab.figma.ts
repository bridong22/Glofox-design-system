// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=157-16
// source=src/components/FilterTab/FilterTab.tsx
// component=FilterTab
import figma from 'figma';
const instance = figma.selectedInstance;

const active = instance.getEnum('State', { Active: 'true', Inactive: 'false' });
const label = instance.getString('Filter label');

export default {
  example: figma.code`<FilterTab active={${active}}>${label}</FilterTab>`,
  imports: ['import { FilterTab } from "src/components/FilterTab"'],
  id: 'filter-tab',
  metadata: { nestable: true },
};
