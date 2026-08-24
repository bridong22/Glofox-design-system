// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=180-1556
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma';
const instance = figma.selectedInstance;

const name = instance.getPropertyValue('Style');

export default {
  example: figma.code`<Icon name="${name}" />`,
  imports: ['import { Icon } from "src/components/Icon"'],
  id: 'icon',
  metadata: { nestable: true },
};
