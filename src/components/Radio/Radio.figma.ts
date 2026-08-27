// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=346-26
// source=src/components/Radio/Radio.tsx
// component=Radio
import figma from 'figma';
const instance = figma.selectedInstance;

const state = instance.getEnum('State', {
  Unselected: 'unselected',
  Selected: 'selected',
  Disabled: 'disabled',
});

// The Figma component only exposes a single State enum (Unselected /
// Selected / Disabled) — backed by three flattened image assets rather than
// live boolean props — so the example maps that one enum onto the two
// native HTML attributes the real <input type="radio"> element takes.
const checked = state === 'selected';
const disabled = state === 'disabled';

export default {
  example: figma.code`<Radio label="Monthly" defaultChecked={${checked}} disabled={${disabled}} />`,
  imports: ['import { Radio } from "src/components/Radio"'],
  id: 'radio',
  metadata: { nestable: true },
};
