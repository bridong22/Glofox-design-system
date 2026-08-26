// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=312-31
// source=src/components/Container/Container.tsx
// component=Container
import figma from 'figma';
const instance = figma.selectedInstance;

const width = instance.getEnum('Width', { Wide: 'wide', Narrow: 'narrow' });

export default {
  example: figma.code`<Container width="${width}" />`,
  imports: ['import { Container } from "src/components/Container"'],
  id: 'container',
  metadata: { nestable: true },
};
