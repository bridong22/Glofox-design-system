// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=177-11
// source=src/components/ComparisonCardCompetitor/ComparisonCardCompetitor.tsx
// component=ComparisonCardCompetitor
import figma from 'figma';
const instance = figma.selectedInstance;

function readText(layerName: string, fallback: string): string {
  const node = instance.findText(layerName);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const title = readText('Competitor', 'Competitor');
const description = readText(
  'Glofox keeps your members inside your brand at every touchpoint — booking, payments, and communication all live in one app.',
  'Glofox keeps your members inside your brand at every touchpoint — booking, payments, and communication all live in one app.',
);

export default {
  example: figma.code`<ComparisonCardCompetitor title="${title}" description="${description}" />`,
  imports: ['import { ComparisonCardCompetitor } from "src/components/ComparisonCardCompetitor"'],
  id: 'comparison-card-competitor',
  metadata: { nestable: true },
};
