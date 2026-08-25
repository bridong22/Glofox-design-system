// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=245-2022
// source=src/components/TocSidebar/TocSidebar.tsx
// component=TocSidebar
import figma from 'figma';
const instance = figma.selectedInstance;

function readText(layerName: string, fallback: string, opts?: { traverseInstances?: boolean }): string {
  const node = instance.findText(layerName, opts);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const title = readText('In this guide', 'In this guide');
const subscribeTitle = readText("The Studio Owner's Playbook", "The Studio Owner's Playbook");
const subscribeSubtitle = readText('Monthly. No spam.', 'Monthly. No spam.');

// The TOC list items are plain text layers, not a repeatable/array Figma
// property, so this example hardcodes the three items visible in this
// instance rather than trying to enumerate an arbitrary-length list.
const item1 = readText('What does it cost to open?', 'What does it cost to open?');
const item2 = readText('Reformer & equipment costs', 'Reformer & equipment costs');
const item3 = readText('Frequently asked questions', 'Frequently asked questions');

// The nested Button's label layer keeps its default name ("Get Free Demo")
// regardless of this instance's override text ("Subscribe").
const ctaLabel = readText('Get Free Demo', 'Subscribe', { traverseInstances: true });

export default {
  example: figma.code`<TocSidebar title="${title}" items={[{ label: "${item1}" }, { label: "${item2}" }, { label: "${item3}" }]} subscribeTitle="${subscribeTitle}" subscribeSubtitle="${subscribeSubtitle}" ctaLabel="${ctaLabel}" />`,
  imports: ['import { TocSidebar } from "src/components/TocSidebar"'],
  id: 'toc-sidebar',
  metadata: { nestable: true },
};
