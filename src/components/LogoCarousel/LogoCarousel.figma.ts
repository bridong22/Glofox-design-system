// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=2188-820
// source=src/components/LogoCarousel/LogoCarousel.tsx
// component=LogoCarousel
import figma from 'figma';
const instance = figma.selectedInstance;

const showTitle = instance.getBoolean('Show title');
const enableCarousel = instance.getBoolean('Enable carousel');

function readText(layerName: string, fallback: string): string {
  const node = instance.findText(layerName);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const title = readText('Trusted by top brands around the world', 'Trusted by top brands around the world');

export default {
  example: figma.code`<LogoCarousel showTitle={${showTitle}} title="${title}" enableCarousel={${enableCarousel}} />`,
  imports: ['import { LogoCarousel } from "src/components/LogoCarousel"'],
  id: 'logo-carousel',
  metadata: { nestable: true },
};
