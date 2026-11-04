// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/ABC-Glofox-Website-Design-System?node-id=2189-2703
// source=src/components/MediaTextRow/MediaTextRow.tsx
// component=MediaTextRow
import figma from 'figma';
const instance = figma.selectedInstance;

const imageAlign = instance.getEnum('Image', { Left: 'left', Right: 'right' });
const align = instance.getEnum('Align', { Left: 'left', Center: 'center' });
const showList = instance.getBoolean('Show list');

export default {
  example: figma.code`<MediaTextRow imageAlign="${imageAlign}" align="${align}" showList={${showList}} />`,
  imports: ['import { MediaTextRow } from "src/components/MediaTextRow"'],
  id: 'media-text-row',
  metadata: { nestable: true },
};
