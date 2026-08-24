// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=157-245
// source=src/components/SectionHeaderWithLink/SectionHeaderWithLink.tsx
// component=SectionHeaderWithLink
import figma from 'figma';
const instance = figma.selectedInstance;

// Title is a plain text layer (not an exposed component property).
let title = 'Blog';
const titleNode = instance.findText('Blog');
if (titleNode && titleNode.type === 'TEXT') {
  title = titleNode.textContent;
}

// SectionHeaderWithLink composes LinkArrow internally (it is not forwarded
// as a prop), so per Code Connect guidance we don't call the nested
// instance's executeTemplate() here. The visible link text lives inside the
// nested Link Arrow instance's own layers, so we reach across that instance
// boundary just to read its text content for the `linkLabel` string prop.
let linkLabel = 'See All';
const linkLabelNode = instance.findText('See All', { traverseInstances: true });
if (linkLabelNode && linkLabelNode.type === 'TEXT') {
  linkLabel = linkLabelNode.textContent;
}

export default {
  example: figma.code`<SectionHeaderWithLink title="${title}" linkLabel="${linkLabel}" />`,
  imports: ['import { SectionHeaderWithLink } from "src/components/SectionHeaderWithLink"'],
  id: 'section-header-with-link',
  metadata: { nestable: true },
};
