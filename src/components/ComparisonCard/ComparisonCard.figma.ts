// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=260-870
// source=src/components/ComparisonCard/ComparisonCard.tsx
// component=ComparisonCard
import figma from 'figma';
const instance = figma.selectedInstance;

const type = instance.getEnum('Type', { Large: 'large', Small: 'small' });

function readText(layerName: string, fallback: string, opts?: { traverseInstances?: boolean }): string {
  const node = instance.findText(layerName, opts);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const title = readText(
  type === 'small' ? 'Best Fitness Studio Software for 2026' : 'ABC Glofox',
  type === 'small' ? 'Best Fitness Studio Software for 2026' : 'ABC Glofox',
);
const description = readText(
  'Glofox keeps your members inside your brand at every touchpoint — booking, payments, and communication all live in one app.',
  'Glofox keeps your members inside your brand at every touchpoint — booking, payments, and communication all live in one app.',
);

// The Small variant's "Read More" affordance is a nested Button instance
// (Variant=Ghost, Size=Small) rather than a Large-style description, so its
// label is read from that nested instance instead.
const linkLabel = readText('Read More', 'Read More', { traverseInstances: true });

const extraProps = type === 'small' ? ` linkLabel="${linkLabel}"` : ` description="${description}"`;

export default {
  example: figma.code`<ComparisonCard type="${type}" title="${title}"${extraProps} />`,
  imports: ['import { ComparisonCard } from "src/components/ComparisonCard"'],
  id: 'comparison-card',
  metadata: { nestable: true },
};
