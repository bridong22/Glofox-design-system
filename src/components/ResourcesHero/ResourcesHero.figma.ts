// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=158-193
// source=src/components/ResourcesHero/ResourcesHero.tsx
// component=ResourcesHero
import figma from 'figma';
const instance = figma.selectedInstance;

const heading = instance.findText('Glofox Resources').textContent;

// `tabs` is a string[] prop with no single-property Figma correspondence —
// every nested Filter Tab instance shares the same placeholder "Filter
// label" text in this node, so this is a representative static example.

export default {
  example: figma.code`<ResourcesHero heading="${heading}" tabs={['All', 'Blog', 'Case Studies']} activeTab="All" />`,
  imports: ['import { ResourcesHero } from "src/components/ResourcesHero"'],
  id: 'resources-hero',
  metadata: { nestable: true },
};
