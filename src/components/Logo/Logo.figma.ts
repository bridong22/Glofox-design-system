// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=398-14
// source=src/components/Logo/Logo.tsx
// component=Logo
import figma from 'figma';
const instance = figma.selectedInstance;

const brand = instance.getString('Brand');

export default {
  example: figma.code`<Logo brand="${brand}" />`,
  imports: ['import { Logo } from "src/components/Logo"'],
  id: 'logo',
  metadata: { nestable: true },
};
