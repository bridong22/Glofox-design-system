// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=1289-19
// source=src/components/FeatureListItem/FeatureListItem.tsx
// component=FeatureListItem
import figma from 'figma';
const instance = figma.selectedInstance;

function readText(layerName: string, fallback: string): string {
  const node = instance.findText(layerName);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const title = readText('Feature Title', 'Feature Title');
const description = readText('Feature Description.', 'Feature Description.');

// The Icon child's Style property isn't traversable via findText — this
// node's own description says to "swap the Icon instance's Style property
// per use," so iconName just keeps the component's own default.

export default {
  example: figma.code`<FeatureListItem title="${title}" description="${description}" />`,
  imports: ['import { FeatureListItem } from "src/components/FeatureListItem"'],
  id: 'feature-list-item',
  metadata: { nestable: true },
};
