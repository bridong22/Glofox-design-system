// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=387-20
// source=src/components/DropdownOption/DropdownOption.tsx
// component=DropdownOption
import figma from 'figma';
const instance = figma.selectedInstance;

const state = instance.getEnum('State', {
  Default: 'default',
  Hover: 'hover',
  Selected: 'selected',
});

// Hover is a real CSS :hover pseudo-class in the codebase component (a
// transient interaction state, not a prop), so it can't be represented as a
// literal example prop — only the `selected` boolean, which reflects actual
// selection state a consumer would pass in, maps onto the component's API.
const selected = state === 'selected';

export default {
  example: figma.code`<DropdownOption label="Yoga Studio" selected={${selected}} />`,
  imports: ['import { DropdownOption } from "src/components/DropdownOption"'],
  id: 'dropdown-option',
  metadata: { nestable: true },
};
