// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=240-15
// source=src/components/BreadcrumbTrail/BreadcrumbTrail.tsx
// component=BreadcrumbTrail
import figma from 'figma';

// The Figma component hardcodes a two-crumb example ("Blog" as a link,
// "Business Tips" as the bold current page) rather than exposing a list
// property, so there is nothing to read off the instance — the codebase
// component generalizes this into an `items` array instead.

export default {
  example: figma.code`<BreadcrumbTrail items={[{ label: "Blog", href: "#" }, { label: "Business Tips" }]} />`,
  imports: ['import { BreadcrumbTrail } from "src/components/BreadcrumbTrail"'],
  id: 'breadcrumb-trail',
  metadata: { nestable: true },
};
