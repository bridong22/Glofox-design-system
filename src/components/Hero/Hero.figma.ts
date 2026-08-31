// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=272-36
// source=src/components/Hero/Hero.tsx
// component=Hero
import figma from 'figma';
const instance = figma.selectedInstance;

const smallTitle = instance.getString('SmallTitle');
const headline = instance.getString('Headline');
const subheadline = instance.getString('Subheadline');
const background = instance.getEnum('Background', { Solid: 'solid', Image: 'image', Video: 'video' });

// Content=CTAOnly is now the only variant (the With Form variant was
// removed from Figma) — the nested Button is not exposed as a HeroProp,
// Hero hardcodes the "Get Free Demo" button internally, so there is
// nothing to extract from it for this example.

export default {
  example: figma.code`<Hero background="${background}" smallTitle="${smallTitle}" headline="${headline}" subheadline="${subheadline}" />`,
  imports: ['import { Hero } from "src/components/Hero"'],
  id: 'hero',
  metadata: { nestable: true },
};
