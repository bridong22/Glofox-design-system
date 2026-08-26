// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=302-1032
// source=src/components/FeaturedModuleRow/FeaturedModuleRow.tsx
// component=FeaturedModuleRow
import figma from 'figma';
const instance = figma.selectedInstance;

function readText(layerName: string, fallback: string, opts?: { traverseInstances?: boolean }): string {
  const node = instance.findText(layerName, opts);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const badgeLabel = readText('Featured', 'Featured', { traverseInstances: true });
const title = readText(
  'The Complete Guide to Gym Marketing in 2026',
  'The Complete Guide to Gym Marketing in 2026',
);
const description = readText(
  "Everything from paid ads to referral programs, built for owners who don't have a marketing team — start here before the deep-dives below.",
  "Everything from paid ads to referral programs, built for owners who don't have a marketing team — start here before the deep-dives below.",
);
const buttonLabel = readText('Read More', 'Read More', { traverseInstances: true });

export default {
  example: figma.code`<FeaturedModuleRow badgeLabel="${badgeLabel}" title="${title}" description="${description}" buttonLabel="${buttonLabel}" />`,
  imports: ['import { FeaturedModuleRow } from "src/components/FeaturedModuleRow"'],
  id: 'featured-module-row',
  metadata: { nestable: true },
};
