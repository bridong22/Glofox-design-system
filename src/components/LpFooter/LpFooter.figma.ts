// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=2026-234
// source=src/components/LpFooter/LpFooter.tsx
// component=LpFooter
import figma from 'figma';
const instance = figma.selectedInstance;

const breakpoint = instance.getEnum('Breakpoint', { Desktop: 'desktop', Mobile: 'mobile' });

function readText(layerName: string, fallback: string): string {
  const node = instance.findText(layerName);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const copyrightText = readText(
  '© 2026 ABC Fitness Solutions, LLC or its affiliates. All rights reserved.',
  '© 2026 ABC Fitness Solutions, LLC or its affiliates. All rights reserved.',
);

export default {
  example: figma.code`<LpFooter breakpoint="${breakpoint}" copyrightText="${copyrightText}" />`,
  imports: ['import { LpFooter } from "src/components/LpFooter"'],
  id: 'lp-footer',
  metadata: { nestable: true },
};
