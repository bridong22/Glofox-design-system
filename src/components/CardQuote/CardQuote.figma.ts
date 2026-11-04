// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=2189-2508
// source=src/components/CardQuote/CardQuote.tsx
// component=CardQuote
import figma from 'figma';
const instance = figma.selectedInstance;

const showLogo = instance.getBoolean('Show logo');
const showHeadshot = instance.getBoolean('Show headshot');

function readText(layerName: string, fallback: string): string {
  const node = instance.findText(layerName);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const quote = readText(
  '"Glofox gave us back hours every week and our members love the app."',
  '"Glofox gave us back hours every week and our members love the app."',
);
const name = readText('Alex Morgan', 'Alex Morgan');
const titleCompany = readText('Owner, Studio Name', 'Owner, Studio Name');

export default {
  example: figma.code`<CardQuote showLogo={${showLogo}} quote="${quote}" showHeadshot={${showHeadshot}} name="${name}" titleCompany="${titleCompany}" />`,
  imports: ['import { CardQuote } from "src/components/CardQuote"'],
  id: 'card-quote',
  metadata: { nestable: true },
};
