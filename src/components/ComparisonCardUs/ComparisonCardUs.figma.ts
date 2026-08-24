// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=177-8
// source=src/components/ComparisonCardUs/ComparisonCardUs.tsx
// component=ComparisonCardUs
import figma from 'figma';
const instance = figma.selectedInstance;

const title = instance.findText('ABC Glofox').textContent;
const description = instance.findText(
  'Glofox keeps your members inside your brand at every touchpoint — booking, payments, and communication all live in one app.'
).textContent;

export default {
  example: figma.code`<ComparisonCardUs title="${title}" description="${description}" />`,
  imports: ['import { ComparisonCardUs } from "src/components/ComparisonCardUs"'],
  id: 'comparison-card-us',
  metadata: { nestable: true },
};
