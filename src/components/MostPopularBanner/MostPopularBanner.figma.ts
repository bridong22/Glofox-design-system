// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=1313-4476
// source=src/components/MostPopularBanner/MostPopularBanner.tsx
// component=MostPopularBanner
import figma from 'figma';
const instance = figma.selectedInstance;

function readText(layerName: string, fallback: string): string {
  const node = instance.findText(layerName);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const label = readText('MOST POPULAR', 'MOST POPULAR');

export default {
  example: figma.code`<MostPopularBanner label="${label}" />`,
  imports: ['import { MostPopularBanner } from "src/components/MostPopularBanner"'],
  id: 'most-popular-banner',
  metadata: { nestable: true },
};
