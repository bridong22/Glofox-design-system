// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=157-17
// source=src/components/CategoryIconBadge/CategoryIconBadge.tsx
// component=CategoryIconBadge
import figma from 'figma';
const instance = figma.selectedInstance;

const children = instance.getString('▤');

export default {
  example: figma.code`<CategoryIconBadge icon="calendar">${children}</CategoryIconBadge>`,
  imports: ['import { CategoryIconBadge } from "src/components/CategoryIconBadge"'],
  id: 'category-icon-badge',
  metadata: { nestable: true },
};
