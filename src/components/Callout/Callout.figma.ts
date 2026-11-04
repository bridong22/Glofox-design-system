// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/ABC-Glofox-Website-Design-System?node-id=2275-73
// source=src/components/Callout/Callout.tsx
// component=Callout
import figma from 'figma';
const instance = figma.selectedInstance;

const style = instance.getEnum('Style', { Accent: 'accent', Subtle: 'subtle' });
const showTitle = instance.getBoolean('Show title');
const showLink = instance.getBoolean('Show link');

function readText(layerName: string, fallback: string): string {
  const node = instance.findText(layerName);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const title = readText('Callout title', 'Callout title');
const text = readText(
  'Short supporting text that highlights a key point next to the comparison.',
  'Short supporting text that highlights a key point next to the comparison.',
);

export default {
  example: figma.code`<Callout style="${style}" showTitle={${showTitle}} title="${title}" text="${text}" showLink={${showLink}} />`,
  imports: ['import { Callout } from "src/components/Callout"'],
  id: 'callout',
  metadata: { nestable: true },
};
