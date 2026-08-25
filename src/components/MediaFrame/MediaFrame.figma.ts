// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=252-27
// source=src/components/MediaFrame/MediaFrame.tsx
// component=MediaFrame
import figma from 'figma';
const instance = figma.selectedInstance;

const ratio = instance.getEnum('Ratio', { Hero: 'hero', Card: 'card', Square: 'square' });

export default {
  example: figma.code`<MediaFrame ratio="${ratio}" />`,
  imports: ['import { MediaFrame } from "src/components/MediaFrame"'],
  id: 'media-frame',
  metadata: { nestable: true },
};
