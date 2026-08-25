// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=246-24
// source=src/components/NewsletterCapture/NewsletterCapture.tsx
// component=NewsletterCapture
import figma from 'figma';
const instance = figma.selectedInstance;

function readText(layerName: string, fallback: string, opts?: { traverseInstances?: boolean }): string {
  const node = instance.findText(layerName, opts);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const title = readText("The Studio Owner's Playbook", "The Studio Owner's Playbook");
const subtitle = readText('Monthly. Straight from the Glofox team.', 'Monthly. Straight from the Glofox team.');

// The nested Button's label layer keeps its default name ("Get Free Demo")
// regardless of the override characters used in this instance ("Subscribe").
const ctaLabel = readText('Get Free Demo', 'Subscribe', { traverseInstances: true });

export default {
  example: figma.code`<NewsletterCapture title="${title}" subtitle="${subtitle}" ctaLabel="${ctaLabel}" />`,
  imports: ['import { NewsletterCapture } from "src/components/NewsletterCapture"'],
  id: 'newsletter-capture',
  metadata: { nestable: true },
};
