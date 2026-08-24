// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=140-16
// source=src/components/TabPill/TabPill.tsx
// component=TabPill
import figma from 'figma';
const instance = figma.selectedInstance;

const active = instance.getEnum('State', { Active: 'true', Inactive: 'false' });
const label = instance.getString('Tab label');

export default {
  example: figma.code`<TabPill active={${active}}>${label}</TabPill>`,
  imports: ['import { TabPill } from "src/components/TabPill"'],
  id: 'tab-pill',
  metadata: { nestable: true },
};
