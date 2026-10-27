// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=1832-5439
// source=src/components/ImageTileCard/ImageTileCard.tsx
// component=ImageTileCard
import figma from 'figma';
const instance = figma.selectedInstance;

function readText(layerName: string, fallback: string): string {
  const node = instance.findText(layerName);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const caption = readText('Caption or audience name', 'Caption or audience name');
const showArrowBadge = instance.getBoolean('Show arrow badge');

export default {
  example: figma.code`<ImageTileCard caption="${caption}" showArrowBadge={${showArrowBadge}} />`,
  imports: ['import { ImageTileCard } from "src/components/ImageTileCard"'],
  id: 'image-tile-card',
  metadata: { nestable: true },
};
