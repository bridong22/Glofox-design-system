// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=293-8
// source=src/components/NavBar/NavBar.tsx
// component=NavBar
import figma from 'figma';
const instance = figma.selectedInstance;

const layout = instance.getEnum('Layout', { Desktop: 'desktop', Mobile: 'mobile' });

// "Theme" and "Scroll" only exist on the Desktop half of the variant set —
// Figma has no Mobile+Dark or Mobile+Scroll combination, so NavBar ignores
// `theme` on mobile and doesn't take a `scroll` prop at all: "Scrolled" is a
// live scroll-driven interaction state (a scroll listener toggling a CSS
// attribute), not something a consumer sets, so there's nothing to read here.
const theme = layout === 'desktop' ? instance.getEnum('Theme', { Light: 'light', Dark: 'dark' }) : undefined;

// "Menu" only exists on the Mobile half of the variant set (Closed/Open).
const menuOpen = layout === 'mobile' ? instance.getBoolean('Menu') : undefined;

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
