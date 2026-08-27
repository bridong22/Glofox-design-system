// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=397-3024
// source=src/components/ReviewTag/ReviewTag.tsx
// component=ReviewTag
import figma from 'figma';
const instance = figma.selectedInstance;

const mode = instance.getEnum('Type', { DarkMode: 'dark', LightMode: 'light' });

// Figma's Type variant is a static stand-in for two frozen example states
// (a 4.5-star rating with 465 reviews), not real instance properties —
// ReviewTag is actually driven by rating/reviewCount props computed from
// real review data at render time. Use the example's own numbers as
// representative literals here.
export default {
  example: figma.code`<ReviewTag mode="${mode}" rating={4.5} reviewCount={465} />`,
  imports: ['import { ReviewTag } from "src/components/ReviewTag"'],
  id: 'review-tag',
  metadata: { nestable: true },
};
