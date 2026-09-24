// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=1313-2840
// source=src/components/HighlightSection/HighlightSection.tsx
// component=HighlightSection
import figma from 'figma';

// This node ("Component 1", Property 1=Highlight Section, 1316:2344) has no
// exposed top-level text/enum properties of its own — its Badge label and
// HighlightItem list are nested instance content, not instance properties —
// so the example uses the component's own defaults.

export default {
  example: figma.code`<HighlightSection />`,
  imports: ['import { HighlightSection } from "src/components/HighlightSection"'],
  id: 'highlight-section',
  metadata: { nestable: true },
};
