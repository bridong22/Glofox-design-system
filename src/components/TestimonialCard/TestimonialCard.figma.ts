// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=44-2
// source=src/components/TestimonialCard/TestimonialCard.tsx
// component=TestimonialCard
import figma from 'figma';
const instance = figma.selectedInstance;

const quote = instance.getString('Quote');
const name = instance.getString('Name');
const role = instance.getString('Role');

export default {
  example: figma.code`<TestimonialCard quote="${quote}" name="${name}" role="${role}" />`,
  imports: ['import { TestimonialCard } from "src/components/TestimonialCard"'],
  id: 'testimonial-card',
  metadata: { nestable: true },
};
