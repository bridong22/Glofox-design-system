// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=455-2462
// source=src/components/NavLinkTrigger/NavLinkTrigger.tsx
// component=NavLinkTrigger
import figma from 'figma';
const instance = figma.selectedInstance;

const label = instance.getString('Label');
const state = instance.getEnum('State', { Default: false, Open: true });

export default {
  example: figma.code`<NavLinkTrigger label="${label}" open={${state}} />`,
  imports: ['import { NavLinkTrigger } from "src/components/NavLinkTrigger"'],
  id: 'nav-link-trigger',
  metadata: { nestable: true },
};
