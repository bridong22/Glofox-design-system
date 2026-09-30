// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=1449-17
// source=src/components/TermEntry/TermEntry.tsx
// component=TermEntry
import figma from 'figma';
const instance = figma.selectedInstance;

function readText(layerName: string, fallback: string): string {
  const node = instance.findText(layerName);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const term = readText('Term Name', 'Term Name');
const definition = readText(
  'One to two sentence placeholder definition of this glossary term, written in plain language for a first-time reader.',
  'One to two sentence placeholder definition of this glossary term, written in plain language for a first-time reader.',
);

export default {
  example: figma.code`<TermEntry term="${term}" definition="${definition}" />`,
  imports: ['import { TermEntry } from "src/components/TermEntry"'],
  id: 'term-entry',
  metadata: { nestable: true },
};
