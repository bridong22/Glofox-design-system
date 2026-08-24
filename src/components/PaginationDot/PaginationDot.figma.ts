// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=140-26
// source=src/components/PaginationDot/PaginationDot.tsx
// component=PaginationDot
import figma from 'figma';
const instance = figma.selectedInstance;

const active = instance.getEnum('State', { Active: 'true', Inactive: 'false' });

export default {
  example: figma.code`<PaginationDot active={${active}} />`,
  imports: ['import { PaginationDot } from "src/components/PaginationDot"'],
  id: 'pagination-dot',
  metadata: { nestable: true },
};
