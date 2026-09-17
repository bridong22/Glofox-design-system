// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=293-8
// source=src/components/NavBar/NavBar.tsx
// component=NavBar
import figma from 'figma';
const instance = figma.selectedInstance;

const layout = instance.getEnum('Layout', { Desktop: 'desktop', Mobile: 'mobile', Tablet: 'tablet' });

// "Theme" and "Scroll" only exist on the Desktop half of the variant set —
// Figma has no Mobile+Dark or Mobile+Scroll combination, so NavBar ignores
// `theme` on mobile/tablet and doesn't take a `scroll` prop at all: "Scrolled"
// is a live scroll-driven interaction state (a scroll listener toggling a CSS
// attribute), not something a consumer sets, so there's nothing to read here.
const theme = layout === 'desktop' ? instance.getEnum('Theme', { Light: 'light', Dark: 'dark' }) : undefined;

// "Menu" exists on both the Mobile and Tablet halves of the variant set
// (Closed/Open) — 2026-09-17: Tablet only has a Closed example in Figma, but
// the property itself is present on that variant combination too.
const menuOpen = layout !== 'desktop' ? instance.getBoolean('Menu') : undefined;

// The nav links and the trailing "Get Free Demo" Button are fixed content
// baked into every variant of this component, not exposed as instance
// properties, so they aren't extracted here.

export default {
  example: figma.code`<NavBar layout="${layout}"${theme ? ` theme="${theme}"` : ''}${
    menuOpen !== undefined ? ` defaultMenuOpen={${menuOpen}}` : ''
  } />`,
  imports: ['import { NavBar } from "src/components/NavBar"'],
  id: 'nav-bar',
  metadata: { nestable: true },
};
