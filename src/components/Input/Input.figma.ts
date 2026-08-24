// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=42-34
// source=src/components/Input/Input.tsx
// component=Input
import figma from 'figma';
const instance = figma.selectedInstance;

const placeholder = instance.getString('Placeholder');

export default {
  example: figma.code`<Input placeholder="${placeholder}" />`,
  imports: ['import { Input } from "src/components/Input"'],
  id: 'input',
  metadata: { nestable: true },
};
