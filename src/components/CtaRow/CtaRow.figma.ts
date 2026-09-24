// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=1314-4784
// source=src/components/CtaRow/CtaRow.tsx
// component=CtaRow
import figma from 'figma';
const instance = figma.selectedInstance;

function readText(layerName: string, fallback: string, opts?: { traverseInstances?: boolean }): string {
  const node = instance.findText(layerName, opts);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const title = readText('Enterprise', 'Enterprise');
const description = readText(
  'Scalable solutions for growing fitness brands. Contact us to discuss a custom enterprise plan with the tools and support you need to manage and expand your multi-location or franchise operations.',
  'Scalable solutions for growing fitness brands. Contact us to discuss a custom enterprise plan with the tools and support you need to manage and expand your multi-location or franchise operations.',
);
const buttonLabel = readText('Contact us', 'Contact us', { traverseInstances: true });

export default {
  example: figma.code`<CtaRow title="${title}" description="${description}" buttonLabel="${buttonLabel}" />`,
  imports: ['import { CtaRow } from "src/components/CtaRow"'],
  id: 'cta-row',
  metadata: { nestable: true },
};
