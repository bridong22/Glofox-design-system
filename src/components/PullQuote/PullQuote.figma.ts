// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=44-2
// source=src/components/PullQuote/PullQuote.tsx
// component=PullQuote
import figma from 'figma';
const instance = figma.selectedInstance;

const quote = instance.getString('Quote');
const name = instance.getString('Name');
const role = instance.getString('Role');

export default {
  example: figma.code`<PullQuote quote="${quote}" name="${name}" role="${role}" />`,
  imports: ['import { PullQuote } from "src/components/PullQuote"'],
  id: 'pull-quote',
  metadata: { nestable: true },
};
