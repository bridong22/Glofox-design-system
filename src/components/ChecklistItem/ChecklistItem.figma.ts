// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=490-9
// source=src/components/ChecklistItem/ChecklistItem.tsx
// component=ChecklistItem
import figma from 'figma';
const instance = figma.selectedInstance;

const label = instance.getString('Label');

export default {
  example: figma.code`<ChecklistItem label="${label}" />`,
  imports: ['import { ChecklistItem } from "src/components/ChecklistItem"'],
  id: 'checklist-item',
  metadata: { nestable: true },
};
