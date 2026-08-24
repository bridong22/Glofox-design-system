// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=44-11
// source=src/components/NavBar/NavBar.tsx
// component=NavBar
import figma from 'figma';
const instance = figma.selectedInstance;

// NavBar has no Figma component properties: the nav links and the trailing
// "Get Free Demo" Button are fixed content baked into the component, and the
// `theme` prop is not backed by a Figma property (this node is the light-theme
// variant; 139:158 is the folded dark-theme variant of the same code component).

export default {
  example: figma.code`<NavBar />`,
  imports: ['import { NavBar } from "src/components/NavBar"'],
  id: 'nav-bar',
  metadata: { nestable: true },
};
