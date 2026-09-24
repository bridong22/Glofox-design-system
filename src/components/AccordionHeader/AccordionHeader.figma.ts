// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=1319-31
// source=src/components/AccordionHeader/AccordionHeader.tsx
// component=AccordionHeader
import figma from 'figma';
const instance = figma.selectedInstance;

function readText(layerName: string, fallback: string): string {
  const node = instance.findText(layerName);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const label = readText('Growth', 'Growth');
const expanded = instance.getEnum('State', { Expanded: true, Collapsed: false });

export default {
  example: figma.code`<AccordionHeader label="${label}" defaultExpanded={${expanded}} />`,
  imports: ['import { AccordionHeader } from "src/components/AccordionHeader"'],
  id: 'accordion-header',
  metadata: { nestable: true },
};
