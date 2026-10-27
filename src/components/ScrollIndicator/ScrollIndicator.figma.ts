// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=1714-1067
// source=src/components/ScrollIndicator/ScrollIndicator.tsx
// component=ScrollIndicator
import figma from 'figma';
const instance = figma.selectedInstance;

// Figma enumerates this as a huge grid of static count x active x style
// combinations rather than real props — mapped to the equivalent
// count/active/style/showCountLabel values instead of reproducing each
// static instance.
const count = Number(instance.getEnum('count', { '3': 3, '4': 4, '5': 5, '6': 6 }) ?? 3);
const active = Number(
  instance.getEnum('active', { '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6 }) ?? 1,
);
const style = instance.getEnum('style', { Dash: 'dash', Dot: 'dot' });
const showCountLabel = instance.getBoolean('showCountLabel') ?? false;

export default {
  example: figma.code`<ScrollIndicator count={${count}} active={${active}} style="${style ?? 'dash'}" showCountLabel={${showCountLabel}} />`,
  imports: ['import { ScrollIndicator } from "src/components/ScrollIndicator"'],
  id: 'scroll-indicator',
  metadata: { nestable: true },
};
