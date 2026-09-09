// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=304-1070
// source=src/components/Select/Select.tsx
// component=Select
import figma from 'figma';

// This node has one static text property (placeholder text "Business type" +
// a chevron-down icon) plus the 2026-09-09 `Show title`/`Title` properties
// shared with Input. There's no configurable options list on the instance,
// so the codebase component generalizes this into a real native <select>
// with an `options` list, matching how BreadcrumbTrail expands its
// hardcoded example into an `items` array.
const instance = figma.selectedInstance;
const showTitle = instance.getBoolean('Show title');
const title = instance.getString('Title');

export default {
  example: figma.code`<Select placeholder="Business type" showTitle={${showTitle}} title="${title}" options={["Gym", "Fitness Studio", "Yoga", "Pilates", "PT Studio", "Boxing Studio", "Martial Arts"]} />`,
  imports: ['import { Select } from "src/components/Select"'],
  id: 'select',
  metadata: { nestable: true },
};
