// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=245-2047
// source=src/components/EndCtaTestimonial/EndCtaTestimonial.tsx
// component=EndCtaTestimonial
import figma from 'figma';
const instance = figma.selectedInstance;

function readText(layerName: string, fallback: string, opts?: { traverseInstances?: boolean }): string {
  const node = instance.findText(layerName, opts);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const title = readText('Ready to grow your fitness business?', 'Ready to grow your fitness business?');

// The quote layer includes the literal wrapping quote marks; strip them so
// the `quote` prop holds plain text and EndCtaTestimonial re-adds the marks.
const rawQuote = readText(
  '"Glofox helped us launch in 90 days and hit break-even by month 14."',
  '"Glofox helped us launch in 90 days and hit break-even by month 14."',
);
const quote = rawQuote.replace(/^["“]|["”]$/g, '');

// The attribution layer includes a leading "— " dash baked into the same
// text node; EndCtaTestimonial renders that dash itself.
const rawAttribution = readText(
  '— Jordan Wells, Owner, Reform Studio',
  '— Jordan Wells, Owner, Reform Studio',
);
const dashPrefix = '— ';
const attribution = rawAttribution.startsWith(dashPrefix) ? rawAttribution.slice(dashPrefix.length) : rawAttribution;

// The nested Button's label layer keeps its default name ("Get Free Demo").
const ctaLabel = readText('Get Free Demo', 'Get Free Demo', { traverseInstances: true });

export default {
  example: figma.code`<EndCtaTestimonial title="${title}" quote="${quote}" attribution="${attribution}" ctaLabel="${ctaLabel}" />`,
  imports: ['import { EndCtaTestimonial } from "src/components/EndCtaTestimonial"'],
  id: 'end-cta-testimonial',
  metadata: { nestable: true },
};
