// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=1299-22
// source=src/components/NumberedStep/NumberedStep.tsx
// component=NumberedStep
import figma from 'figma';
const instance = figma.selectedInstance;

function readText(layerName: string, fallback: string): string {
  const node = instance.findText(layerName);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const title = readText('Match with a Specialist', 'Match with a Specialist');
const description = readText(
  'We match you with a Glofox specialist who knows your type of business.',
  'We match you with a Glofox specialist who knows your type of business.',
);

// The step number and the Icon child's Style property aren't traversable
// via findText — this node's own description says to "swap the Icon
// instance's Style property and the badge number per step," so both keep
// the component's own defaults here.

export default {
  example: figma.code`<NumberedStep title="${title}" description="${description}" />`,
  imports: ['import { NumberedStep } from "src/components/NumberedStep"'],
  id: 'numbered-step',
  metadata: { nestable: true },
};
