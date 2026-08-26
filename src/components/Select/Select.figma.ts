// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=304-1070
// source=src/components/Select/Select.tsx
// component=Select
import figma from 'figma';

// The Figma component has no variant properties — it's a single static
// example (placeholder text "Business type" + a chevron-down icon) rather
// than an instance with configurable props, so there is nothing to read off
// the instance. The codebase component generalizes this into a real native
// <select> with an `options` list, matching how BreadcrumbTrail expands its
// hardcoded example into an `items` array.

export default {
  example: figma.code`<Select placeholder="Business type" options={["Gym", "Fitness Studio", "Yoga", "Pilates", "PT Studio", "Boxing Studio", "Martial Arts"]} />`,
  imports: ['import { Select } from "src/components/Select"'],
  id: 'select',
  metadata: { nestable: true },
};
