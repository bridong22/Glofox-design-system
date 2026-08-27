// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=352-9
// source=src/components/Input/Input.tsx
// component=Input
import figma from 'figma';
const instance = figma.selectedInstance;

const placeholder = instance.getString('Placeholder');

// `Type=Select` is intentionally left unmapped here — it corresponds to the
// separate `src/components/Select` component, not this one. If an instance
// somehow reports `Type=Select`, `type` below just falls through to
// whatever getEnum's default/unmapped behavior is; no special-casing needed.
const type = instance.getEnum('Type', { Text: 'text', Textarea: 'textarea' });

export default {
  example: figma.code`<Input type="${type}" placeholder="${placeholder}" />`,
  imports: ['import { Input } from "src/components/Input"'],
  id: 'input',
  metadata: { nestable: true },
};
