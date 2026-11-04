// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/ABC-Glofox-Website-Design-System?node-id=2179-784
// source=src/components/MediaVideo/MediaVideo.tsx
// component=MediaVideo
import figma from 'figma';
const instance = figma.selectedInstance;

const showPlayButton = instance.getBoolean('Show play button');

export default {
  example: figma.code`<MediaVideo showPlayButton={${showPlayButton}} />`,
  imports: ['import { MediaVideo } from "src/components/MediaVideo"'],
  id: 'media-video',
  metadata: { nestable: true },
};
