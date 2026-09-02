// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=272-36
// source=src/components/Hero/Hero.tsx
// component=Hero
import figma from 'figma';
const instance = figma.selectedInstance;

const smallTitle = instance.getString('SmallTitle');
const headline = instance.getString('Headline');
const subheadline = instance.getString('Subheadline');
const background = instance.getEnum('Background', { Solid: 'solid', Image: 'image', Video: 'video' });
const content = instance.getEnum('Content', { CTAOnly: 'cta-only', TwoColumn: 'two-column' });

// Content=CTAOnly's nested Button, and Content=TwoColumn's nested Badge
// eyebrow/Checklist Items/CTA-helper-text/image, are not exposed as
// top-level component properties — Hero hardcodes their defaults
// internally, so there is nothing further to extract for this example.

export default {
  example: figma.code`<Hero background="${background}" content="${content}" smallTitle="${smallTitle}" headline="${headline}" subheadline="${subheadline}" />`,
  imports: ['import { Hero } from "src/components/Hero"'],
  id: 'hero',
  metadata: { nestable: true },
};
