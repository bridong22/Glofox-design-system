// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=142-16
// source=src/components/ComparisonTable/ComparisonTable.tsx
// component=ComparisonTable
import figma from 'figma';

// ComparisonTable takes `columns` (string[]) and `rows` (array of
// { label, values }) props with no single-property Figma correspondence —
// the nested Table Header Cell / Table Cell instances are driven entirely by
// these arrays. This is a representative static example with the arrays
// inlined.

export default {
  example: figma.code`<ComparisonTable columns={['Free', 'Pro']} rows={[{ label: 'Unlimited bookings', values: [{ text: 'No' }, { text: 'Yes', highlighted: true }] }]} />`,
  imports: ['import { ComparisonTable } from "src/components/ComparisonTable"'],
  id: 'comparison-table',
  metadata: { nestable: true },
};
