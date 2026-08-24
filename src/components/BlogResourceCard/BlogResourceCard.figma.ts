// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=157-217
// source=src/components/BlogResourceCard/BlogResourceCard.tsx
// component=BlogResourceCard
import figma from 'figma';
const instance = figma.selectedInstance;

function readText(layerName: string, fallback: string): string {
  const node = instance.findText(layerName, { traverseInstances: true });
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const type = instance.getEnum('Type', { Blog: 'blog' });
const category = readText('Business Tips', 'Business Tips');
const title = readText('How to Manage Gym Memberships Like a Pro', 'How to Manage Gym Memberships Like a Pro');

export default {
  example: figma.code`<BlogResourceCard type="${type}" category="${category}" title="${title}" />`,
  imports: ['import { BlogResourceCard } from "src/components/BlogResourceCard"'],
  id: 'blog-resource-card',
  metadata: { nestable: true },
};
