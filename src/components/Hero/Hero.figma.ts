// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=272-36
// source=src/components/Hero/Hero.tsx
// component=Hero
import figma from 'figma';
const instance = figma.selectedInstance;

const smallTitle = instance.getString('SmallTitle');
const headline = instance.getString('Headline');
const subheadline = instance.getString('Subheadline');
const background = instance.getEnum('Background', { Solid: 'solid', Image: 'image', Video: 'video' });
const content = instance.getEnum('Content', { 'With Form': 'with-form', 'CTA Only': 'cta-only' });

// The nested Input and Button instances are not exposed as HeroProps —
// Hero hardcodes the email Input (placeholder "Work email") and the
// "Get Free Demo" submit Button internally — so there is nothing to
// extract from them for this example.

export default {
  example: figma.code`<Hero background="${background}" content="${content}" smallTitle="${smallTitle}" headline="${headline}" subheadline="${subheadline}" />`,
  imports: ['import { Hero } from "src/components/Hero"'],
  id: 'hero',
  metadata: { nestable: true },
};
