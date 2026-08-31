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

const subtitle = readText(
  'See how Glofox runs your studio, gym or club in one platform',
  'See how Glofox runs your studio, gym or club in one platform',
);

// The nested Button's label layer keeps its default name ("Get Free Demo").
const ctaLabel = readText('Get Free Demo', 'Get Free Demo', { traverseInstances: true });

export default {
  example: figma.code`<EndCtaTestimonial title="${title}" subtitle="${subtitle}" ctaLabel="${ctaLabel}" />`,
  imports: ['import { EndCtaTestimonial } from "src/components/EndCtaTestimonial"'],
  id: 'end-cta-testimonial',
  metadata: { nestable: true },
};
