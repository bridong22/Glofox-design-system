// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=1313-2826
// source=src/components/HighlightItem/HighlightItem.tsx
// component=HighlightItem
import figma from 'figma';
const instance = figma.selectedInstance;

function readText(layerName: string, fallback: string): string {
  const node = instance.findText(layerName);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const title = readText(
  'ABC XLerate automated sales engagement',
  'ABC XLerate automated sales engagement',
);
const description = readText(
  'Automate custom email & SMS outreach to convert trials and reduce member churn.',
  'Automate custom email & SMS outreach to convert trials and reduce member churn.',
);

export default {
  example: figma.code`<HighlightItem title="${title}" description="${description}" />`,
  imports: ['import { HighlightItem } from "src/components/HighlightItem"'],
  id: 'highlight-item',
  metadata: { nestable: true },
};
