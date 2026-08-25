// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=243-10
// source=src/components/AvatarBadge/AvatarBadge.tsx
// component=AvatarBadge
import figma from 'figma';
const instance = figma.selectedInstance;

const type = instance.getEnum('Type', {
  Logo: 'logo',
  Initials: 'initials',
});

export default {
  example: figma.code`<AvatarBadge type="${type}" />`,
  imports: ['import { AvatarBadge } from "src/components/AvatarBadge"'],
  id: 'avatar-badge',
  metadata: { nestable: true },
};
