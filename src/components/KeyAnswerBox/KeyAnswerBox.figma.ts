// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=245-12
// source=src/components/KeyAnswerBox/KeyAnswerBox.tsx
// component=KeyAnswerBox
import figma from 'figma';
const instance = figma.selectedInstance;

function readText(layerName: string, fallback: string, opts?: { traverseInstances?: boolean }): string {
  const node = instance.findText(layerName, opts);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const fullAnswerFallback =
  'The short answer: opening a boutique Pilates studio typically costs between $85,000 and $220,000, driven mostly by reformer equipment and buildout. Most owners recoup their startup costs within 18–24 months at a 65%+ member retention rate.';
const fullAnswer = readText(fullAnswerFallback, fullAnswerFallback);

// "The short answer:" and the rest of the sentence are a single merged text
// layer in Figma (mixed bold/regular runs within one node), but
// KeyAnswerBox exposes them as separate `lead`/`body` props so the lead-in
// can be reused with different copy — split the merged text back apart here.
const leadPrefix = 'The short answer:';
const lead = leadPrefix;
const body = fullAnswer.startsWith(`${leadPrefix} `) ? fullAnswer.slice(leadPrefix.length + 1) : fullAnswer;

export default {
  example: figma.code`<KeyAnswerBox lead="${lead}" body="${body}" />`,
  imports: ['import { KeyAnswerBox } from "src/components/KeyAnswerBox"'],
  id: 'key-answer-box',
  metadata: { nestable: true },
};
