// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=2051-22863
// source=src/components/CarouselTag/CarouselTag.tsx
// component=CarouselTag
import figma from 'figma';
const instance = figma.selectedInstance;

function readText(layerName: string, fallback: string): string {
  const node = instance.findText(layerName);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const score = readText('100%', '100%');
const description = readText('Improvement description', 'Improvement description');

export default {
  example: figma.code`<CarouselTag score="${score}" description="${description}" />`,
  imports: ['import { CarouselTag } from "src/components/CarouselTag"'],
  id: 'carousel-tag',
  metadata: { nestable: true },
};
