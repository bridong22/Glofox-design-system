// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=157-11
// source=src/components/LinkArrow/LinkArrow.tsx
// component=LinkArrow
import figma from 'figma';
const instance = figma.selectedInstance;

export default {
  example: figma.code`<LinkArrow href="#">See all</LinkArrow>`,
  imports: ['import { LinkArrow } from "src/components/LinkArrow"'],
  id: 'link-arrow',
  metadata: { nestable: true },
};
