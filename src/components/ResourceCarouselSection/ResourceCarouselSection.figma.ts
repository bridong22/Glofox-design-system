// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=158-305
// source=src/components/ResourceCarouselSection/ResourceCarouselSection.tsx
// component=ResourceCarouselSection
import figma from 'figma';
const instance = figma.selectedInstance;

function readText(layerName: string, fallback: string): string {
  const node = instance.findText(layerName, { traverseInstances: true });
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const title = readText('Blog', 'Blog');
const linkLabel = readText('See All', 'See All');

// `cards` is an array of { image, category, title, href } objects with no
// single-property Figma correspondence, and the trailing CarouselControls
// (progress track + prev/next arrows) is entirely internal to this
// component — its progress and handlers are computed from `cards` and
// internal pagination state, not passed in as props. This is a
// representative static example with the array inlined.

export default {
  example: figma.code`<ResourceCarouselSection title="${title}" linkLabel="${linkLabel}" cards={[{ category: 'Podcast', title: 'Phil Graham: The Magic of a Growth Mindset' }, { category: 'Business Tips', title: 'How to Manage Gym Memberships Like a Pro' }, { category: 'Business Tips', title: 'How to Manage Gym Memberships Like a Pro' }]} />`,
  imports: ['import { ResourceCarouselSection } from "src/components/ResourceCarouselSection"'],
  id: 'resource-carousel-section',
  metadata: { nestable: true },
};
