// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=1832-5529
// source=src/components/PersonCard/PersonCard.tsx
// component=PersonCard
import figma from 'figma';
const instance = figma.selectedInstance;

function readText(layerName: string, fallback: string, opts?: { traverseInstances?: boolean }): string {
  const node = instance.findText(layerName, opts);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

const name = readText('Person Name', 'Person Name');
const role = readText('Job title, company relationship', 'Job title, company relationship');
const showIntro = instance.getBoolean('Show intro');
const intro = readText('One-line intro goes here.', 'One-line intro goes here.');
const showLink = instance.getBoolean('Show link');
const linkLabel = readText('Read More', 'Read More', { traverseInstances: true });

export default {
  example: figma.code`<PersonCard name="${name}" role="${role}" showIntro={${showIntro}} intro="${intro}" showLink={${showLink}} linkLabel="${linkLabel}" />`,
  imports: ['import { PersonCard } from "src/components/PersonCard"'],
  id: 'person-card',
  metadata: { nestable: true },
};
