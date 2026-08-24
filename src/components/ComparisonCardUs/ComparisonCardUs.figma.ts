// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=177-8
// source=src/components/ComparisonCardUs/ComparisonCardUs.tsx
// component=ComparisonCardUs
import figma from 'figma';
const instance = figma.selectedInstance;

function readText(layerName: string, fallback: string): string {
  const node = instance.findText(layerName);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const title = readText('ABC Glofox', 'ABC Glofox');
const description = readText(
  'Glofox keeps your members inside your brand at every touchpoint — booking, payments, and communication all live in one app.',
  'Glofox keeps your members inside your brand at every touchpoint — booking, payments, and communication all live in one app.',
);

export default {
  example: figma.code`<ComparisonCardUs title="${title}" description="${description}" />`,
  imports: ['import { ComparisonCardUs } from "src/components/ComparisonCardUs"'],
  id: 'comparison-card-us',
  metadata: { nestable: true },
};
