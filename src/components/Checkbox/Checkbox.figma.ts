// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=346-17
// source=src/components/Checkbox/Checkbox.tsx
// component=Checkbox
import figma from 'figma';
const instance = figma.selectedInstance;

const state = instance.getEnum('State', {
  Unchecked: 'unchecked',
  Checked: 'checked',
  Disabled: 'disabled',
});

// The Figma component only exposes a single State enum (Unchecked / Checked /
// Disabled), not separate `checked` and `disabled` booleans, so the example
// maps that one enum onto the two native HTML attributes the real
// <input type="checkbox"> element takes.
const checked = state === 'checked';
const disabled = state === 'disabled';

export default {
  example: figma.code`<Checkbox label="Send me product updates" defaultChecked={${checked}} disabled={${disabled}} />`,
  imports: ['import { Checkbox } from "src/components/Checkbox"'],
  id: 'checkbox',
  metadata: { nestable: true },
};
