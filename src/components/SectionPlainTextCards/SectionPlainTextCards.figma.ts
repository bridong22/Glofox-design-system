// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/ABC-Glofox-Website-Design-System?node-id=2192-2063
// source=src/components/SectionPlainTextCards/SectionPlainTextCards.tsx
// component=SectionPlainTextCards
import figma from 'figma';
const instance = figma.selectedInstance;

const showHeading = instance.getBoolean('Show heading');
const tone = instance.getEnum('Tone', { Sky: 'sky', Blush: 'blush', Outline: 'outline' });

export default {
  example: figma.code`<SectionPlainTextCards showHeading={${showHeading}} tone="${tone}" />`,
  imports: ['import { SectionPlainTextCards } from "src/components/SectionPlainTextCards"'],
  id: 'section-plain-text-cards',
  metadata: { nestable: true },
};
