// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=158-249
// source=src/components/ResourceCardGrid/ResourceCardGrid.tsx
// component=ResourceCardGrid
import figma from 'figma';
const instance = figma.selectedInstance;

function readText(layerName: string, fallback: string): string {
  const node = instance.findText(layerName, { traverseInstances: true });
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const title = readText('Blog', 'Blog');
const linkLabel = readText('See All', 'See All');

// `cards` is an array of { image, category, title, href } objects with no
// single-property Figma correspondence — every nested ResourceCard instance
// shows the same placeholder content in this node, so this is a
// representative static example with the array inlined.

export default {
  example: figma.code`<ResourceCardGrid title="${title}" linkLabel="${linkLabel}" cards={[{ category: 'Business Tips', title: 'How to Manage Gym Memberships Like a Pro' }, { category: 'Business Tips', title: 'How to Manage Gym Memberships Like a Pro' }, { category: 'Business Tips', title: 'How to Manage Gym Memberships Like a Pro' }]} />`,
  imports: ['import { ResourceCardGrid } from "src/components/ResourceCardGrid"'],
  id: 'resource-card-grid',
  metadata: { nestable: true },
};
