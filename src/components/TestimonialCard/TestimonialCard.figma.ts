// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=1214-171
// source=src/components/TestimonialCard/TestimonialCard.tsx
// component=TestimonialCard
import figma from 'figma';
const instance = figma.selectedInstance;

function readText(layerName: string, fallback: string): string {
  const node = instance.findText(layerName);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const quote = readText(
  '"Glofox helped us cut admin time in half and grow membership 30% year over year. The custom quote gave us clear expectations from day one."',
  '"Glofox helped us cut admin time in half and grow membership 30% year over year. The custom quote gave us clear expectations from day one."',
);
const authorName = readText('Russ Harrison', 'Russ Harrison');
const authorRole = readText('Owner, Spartans Boxing Club', 'Owner, Spartans Boxing Club');

// Rating is fixed at 5 filled stars in this node — not exposed as an
// instance property, so nothing to extract there. "Verified Owner" is
// likewise static text in the master, not a per-instance field.

export default {
  example: figma.code`<TestimonialCard quote="${quote}" authorName="${authorName}" authorRole="${authorRole}" />`,
  imports: ['import { TestimonialCard } from "src/components/TestimonialCard"'],
  id: 'testimonial-card',
  metadata: { nestable: true },
};
