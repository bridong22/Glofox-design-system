// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=198-2070
// source=src/components/CategoryChip/CategoryChip.tsx
// component=CategoryChip
import figma from 'figma';
const instance = figma.selectedInstance;

export default {
  example: figma.code`<CategoryChip>Marketing</CategoryChip>`,
  imports: ['import { CategoryChip } from "src/components/CategoryChip"'],
  id: 'category-chip',
  metadata: { nestable: true },
};
