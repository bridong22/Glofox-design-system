// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=42-26
// source=src/components/Button/Button.tsx
// component=Button
import figma from 'figma';
const instance = figma.selectedInstance;

const label = instance.getString('Label');
const variant = instance.getEnum('Variant', {
  Primary: 'primary',
  Outline: 'outline',
  Ghost: 'ghost',
});
const size = instance.getEnum('Size', {
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
});

export default {
  example: figma.code`<Button variant="${variant}" size="${size}">${label}</Button>`,
  imports: ['import { Button } from "src/components/Button"'],
  id: 'button',
  metadata: { nestable: true },
};
