// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=1327-26
// source=src/components/StepIndicator/StepIndicator.tsx
// component=StepIndicator
import figma from 'figma';
const instance = figma.selectedInstance;

const state = instance.getEnum('State', {
  Upcoming: 'upcoming',
  Active: 'active',
  Completed: 'completed',
});

export default {
  example: figma.code`<StepIndicator state="${state}" />`,
  imports: ['import { StepIndicator } from "src/components/StepIndicator"'],
  id: 'step-indicator',
  metadata: { nestable: true },
};
