// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=177-11
// source=src/components/ComparisonCardCompetitor/ComparisonCardCompetitor.tsx
// component=ComparisonCardCompetitor
import figma from 'figma';
const instance = figma.selectedInstance;

const title = instance.findText('Competitor').textContent;
const description = instance.findText(
  'Glofox keeps your members inside your brand at every touchpoint — booking, payments, and communication all live in one app.'
).textContent;

export default {
  example: figma.code`<ComparisonCardCompetitor title="${title}" description="${description}" />`,
  imports: ['import { ComparisonCardCompetitor } from "src/components/ComparisonCardCompetitor"'],
  id: 'comparison-card-competitor',
  metadata: { nestable: true },
};
