// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=455-18
// source=src/components/NavMenuItem/NavMenuItem.tsx
// component=NavMenuItem
import figma from 'figma';
const instance = figma.selectedInstance;

const title = instance.getString('Title');
const description = instance.getString('Description');
const showDescription = instance.getBoolean('Show description');

export default {
  example: figma.code`<NavMenuItem href="#" title="${title}" description="${description}" showDescription={${showDescription}} />`,
  imports: ['import { NavMenuItem } from "src/components/NavMenuItem"'],
  id: 'nav-menu-item',
  metadata: { nestable: true },
};
