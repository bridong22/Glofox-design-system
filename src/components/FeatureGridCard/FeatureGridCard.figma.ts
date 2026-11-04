// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=2189-2495
// source=src/components/FeatureGridCard/FeatureGridCard.tsx
// component=FeatureGridCard
import figma from 'figma';
const instance = figma.selectedInstance;

const showImage = instance.getBoolean('Show image');
const showSubheading = instance.getBoolean('Show subheading');
const showLink = instance.getBoolean('Show link');

function readText(layerName: string, fallback: string): string {
  const node = instance.findText(layerName);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const heading = readText('Feature heading', 'Feature heading');
const subheading = readText('Subheading', 'Subheading');
const copy = readText(
  'Short copy describing the feature and the outcome it drives for the studio.',
  'Short copy describing the feature and the outcome it drives for the studio.',
);
const linkLabel = readText('Learn more', 'Learn more');

export default {
  example: figma.code`<FeatureGridCard showImage={${showImage}} heading="${heading}" showSubheading={${showSubheading}} subheading="${subheading}" copy="${copy}" showLink={${showLink}} linkLabel="${linkLabel}" />`,
  imports: ['import { FeatureGridCard } from "src/components/FeatureGridCard"'],
  id: 'feature-grid-card',
  metadata: { nestable: true },
};
