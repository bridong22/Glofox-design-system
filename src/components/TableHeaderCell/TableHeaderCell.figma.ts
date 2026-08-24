// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=141-30
// source=src/components/TableHeaderCell/TableHeaderCell.tsx
// component=TableHeaderCell
import figma from 'figma';
const instance = figma.selectedInstance;

const children = instance.getString('Column heading');

export default {
  example: figma.code`<TableHeaderCell>${children}</TableHeaderCell>`,
  imports: ['import { TableHeaderCell } from "src/components/TableHeaderCell"'],
  id: 'table-header-cell',
  metadata: { nestable: true },
};
