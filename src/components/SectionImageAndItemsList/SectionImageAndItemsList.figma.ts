// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/ABC-Glofox-Website-Design-System?node-id=2192-914
// source=src/components/SectionImageAndItemsList/SectionImageAndItemsList.tsx
// component=SectionImageAndItemsList
import figma from 'figma';
const instance = figma.selectedInstance;

const imageAlign = instance.getEnum('Image', { Left: 'left', Right: 'right' });
const showHeading = instance.getBoolean('Show heading');

export default {
  example: figma.code`<SectionImageAndItemsList imageAlign="${imageAlign}" showHeading={${showHeading}} />`,
  imports: ['import { SectionImageAndItemsList } from "src/components/SectionImageAndItemsList"'],
  id: 'section-image-and-items-list',
  metadata: { nestable: true },
};
