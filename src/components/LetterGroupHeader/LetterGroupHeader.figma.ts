// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=1449-14
// source=src/components/LetterGroupHeader/LetterGroupHeader.tsx
// component=LetterGroupHeader
import figma from 'figma';
const instance = figma.selectedInstance;

function readText(layerName: string, fallback: string): string {
  const node = instance.findText(layerName);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const letter = readText('A', 'A');

export default {
  example: figma.code`<LetterGroupHeader letter="${letter}" />`,
  imports: ['import { LetterGroupHeader } from "src/components/LetterGroupHeader"'],
  id: 'letter-group-header',
  metadata: { nestable: true },
};
