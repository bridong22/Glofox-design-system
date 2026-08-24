// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=157-19
// source=src/components/AvatarBadge/AvatarBadge.tsx
// component=AvatarBadge
import figma from 'figma';
const instance = figma.selectedInstance;

const initials = instance.getString('LOGO');

export default {
  example: figma.code`<AvatarBadge initials="${initials}" />`,
  imports: ['import { AvatarBadge } from "src/components/AvatarBadge"'],
  id: 'avatar-badge',
  metadata: { nestable: true },
};
