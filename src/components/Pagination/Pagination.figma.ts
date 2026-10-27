// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=1747-1417
// source=src/components/Pagination/Pagination.tsx
// component=Pagination
import figma from 'figma';
const instance = figma.selectedInstance;

// 2026-10-27: Figma rebuilt this component (new node 1747:1417, superseding
// the old 337:41 Position=First/Middle/Last mock) as a 12-item static
// enumeration (current 1-12) x Layout (Full/Compact) rather than real
// currentPage/totalPages props. Mapped the same way as before — each static
// example reproduces the same visual via real page math — against a fixed
// totalPages of 12 (the largest example in the set) rather than reusing the
// old totalPages of 9.
const current = instance.getEnum('current', {
  '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6,
  '7': 7, '8': 8, '9': 9, '10': 10, '11': 11, '12': 12,
});
const layout = instance.getEnum('layout', { Full: 'full', Compact: 'compact' });

export default {
  example: figma.code`<Pagination currentPage={${current ?? 1}} totalPages={12} layout="${layout ?? 'full'}" />`,
  imports: ['import { Pagination } from "src/components/Pagination"'],
  id: 'pagination',
  metadata: { nestable: true },
};
