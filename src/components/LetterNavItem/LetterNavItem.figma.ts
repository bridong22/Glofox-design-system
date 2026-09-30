// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=1449-13
// source=src/components/LetterNavItem/LetterNavItem.tsx
// component=LetterNavItem
import figma from 'figma';
const instance = figma.selectedInstance;

const active = instance.getEnum('State', { Active: true, Inactive: false });

export default {
  example: figma.code`<LetterNavItem letter="A" active={${active}} />`,
  imports: ['import { LetterNavItem } from "src/components/LetterNavItem"'],
  id: 'letter-nav-item',
  metadata: { nestable: true },
};
