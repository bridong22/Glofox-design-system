// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=141-35
// source=src/components/TableCell/TableCell.tsx
// component=TableCell
import figma from 'figma';
const instance = figma.selectedInstance;

const highlighted = instance.getEnum('Column', {
  Standard: false,
  Highlighted: true,
});
const children = instance.getString('Cell content');

export default {
  example: figma.code`<TableCell ${highlighted ? 'highlighted' : ''}>${children}</TableCell>`,
  imports: ['import { TableCell } from "src/components/TableCell"'],
  id: 'table-cell',
  metadata: { nestable: true },
};
