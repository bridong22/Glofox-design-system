// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=1307-25
// source=src/components/ComparisonRowContent/ComparisonRowContent.tsx
// component=ComparisonRowContent
import figma from 'figma';
const instance = figma.selectedInstance;

const type = instance.getEnum('Type', { Text: 'text', Icon: 'icon' });

export default {
  example: figma.code`<ComparisonRowContent type="${type}" />`,
  imports: ['import { ComparisonRowContent } from "src/components/ComparisonRowContent"'],
  id: 'comparison-row-content',
  metadata: { nestable: true },
};
