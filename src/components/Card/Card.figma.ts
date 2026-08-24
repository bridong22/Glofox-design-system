// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=42-36
// source=src/components/Card/Card.tsx
// component=Card
import figma from 'figma';
const instance = figma.selectedInstance;

const title = instance.getString('Title');
const description = instance.getString('Description');

export default {
  example: figma.code`<Card title="${title}" description="${description}" />`,
  imports: ['import { Card } from "src/components/Card"'],
  id: 'card',
  metadata: { nestable: true },
};
