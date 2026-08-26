// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=337-41
// source=src/components/Pagination/Pagination.tsx
// component=Pagination
import figma from 'figma';
const instance = figma.selectedInstance;

// Figma's Position variant is a static stand-in for three frozen example
// states (First/Middle/Last), not a real prop on the component — Pagination
// is driven by currentPage/totalPages/onPageChange instead, and the
// sliding 3-number window + arrow visibility are derived from that page
// math at render time. Map each static example to a representative
// currentPage/totalPages pair that reproduces the same visual: page 1 of 9
// for First, page 5 of 9 for Middle, page 9 of 9 for Last.
const position = instance.getEnum('Position', { First: 'first', Middle: 'middle', Last: 'last' });

const examplesByPosition: Record<string, { currentPage: number; totalPages: number }> = {
  first: { currentPage: 1, totalPages: 9 },
  middle: { currentPage: 5, totalPages: 9 },
  last: { currentPage: 9, totalPages: 9 },
};

const { currentPage, totalPages } = examplesByPosition[position ?? 'first'] ?? examplesByPosition.first;

export default {
  example: figma.code`<Pagination currentPage={${currentPage}} totalPages={${totalPages}} />`,
  imports: ['import { Pagination } from "src/components/Pagination"'],
  id: 'pagination',
  metadata: { nestable: true },
};
