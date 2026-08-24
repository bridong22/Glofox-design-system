// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=44-6
// source=src/components/FaqItem/FaqItem.tsx
// component=FaqItem
import figma from 'figma';
const instance = figma.selectedInstance;

const question = instance.getString('Question');
const answer = instance.getString('Answer');

export default {
  example: figma.code`<FaqItem question="${question}" answer="${answer}" />`,
  imports: ['import { FaqItem } from "src/components/FaqItem"'],
  id: 'faq-item',
  metadata: { nestable: true },
};
