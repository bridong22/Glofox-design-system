// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=2205-19732
// source=src/components/CtaGroup/CtaGroup.tsx
// component=CtaGroup
import figma from 'figma';
const instance = figma.selectedInstance;

const align = instance.getEnum('Align', { Center: 'center', Left: 'left' });
const showSecondary = instance.getBoolean('Show secondary');

function readText(layerName: string, fallback: string, opts?: { traverseInstances?: boolean }): string {
  const node = instance.findText(layerName, opts);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const primaryLabel = readText('Get Free Demo', 'Get Free Demo', { traverseInstances: true });
const secondaryLabel = readText('Get Free Demo', 'Get Free Demo', { traverseInstances: true });

export default {
  example: figma.code`<CtaGroup align="${align}" primaryLabel="${primaryLabel}" showSecondary={${showSecondary}} secondaryLabel="${secondaryLabel}" />`,
  imports: ['import { CtaGroup } from "src/components/CtaGroup"'],
  id: 'cta-group',
  metadata: { nestable: true },
};
