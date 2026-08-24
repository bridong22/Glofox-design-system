// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=210-655
// source=src/components/Badge/Badge.tsx
// component=Badge
import figma from 'figma';
const instance = figma.selectedInstance;

const size = instance.getEnum('Size', { small: 'small', Large: 'large' });

export default {
  example: figma.code`<Badge size="${size}">Solutions | Manage My Business</Badge>`,
  imports: ['import { Badge } from "src/components/Badge"'],
  id: 'badge',
  metadata: { nestable: true },
};
