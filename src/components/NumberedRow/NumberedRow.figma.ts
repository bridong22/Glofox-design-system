// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/ABC-Glofox-Website-Design-System?node-id=2189-2586
// source=src/components/NumberedRow/NumberedRow.tsx
// component=NumberedRow
import figma from 'figma';
const instance = figma.selectedInstance;

const imageAlign = instance.getEnum('Image', { Left: 'left', Right: 'right' });

export default {
  example: figma.code`<NumberedRow imageAlign="${imageAlign}" />`,
  imports: ['import { NumberedRow } from "src/components/NumberedRow"'],
  id: 'numbered-row',
  metadata: { nestable: true },
};
