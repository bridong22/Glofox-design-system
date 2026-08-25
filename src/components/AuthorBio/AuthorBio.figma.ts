// url=https://www.figma.com/design/uQ9lsXJuQx9CVTdkJTVtCc/Glofox-Web-Design-System?node-id=245-2038
// source=src/components/AuthorBio/AuthorBio.tsx
// component=AuthorBio
import figma from 'figma';
const instance = figma.selectedInstance;

function readText(layerName: string, fallback: string, opts?: { traverseInstances?: boolean }): string {
  const node = instance.findText(layerName, opts);
  return node && node.type === 'TEXT' ? node.textContent : fallback;
}

// The nested Avatar Badge's initials text layer keeps its default name
// ("MS") regardless of the override characters used in this instance.
const avatarInitials = readText('MS', 'MS', { traverseInstances: true });
const name = readText('Maeve Sullivan', 'Maeve Sullivan');

// The role text layer includes a leading "· " separator baked into the
// same text node as the role copy; AuthorBio renders that separator itself
// so the `role` prop only carries the role text.
const rawRole = readText(
  '· Studio Operations Lead, ABC Glofox',
  '· Studio Operations Lead, ABC Glofox',
);
const rolePrefix = '· ';
const role = rawRole.startsWith(rolePrefix) ? rawRole.slice(rolePrefix.length) : rawRole;

const bio = readText(
  'Maeve spent seven years running boutique studio operations before joining ABC Glofox, where she works with studio owners on launch planning and retention. Connect on LinkedIn.',
  'Maeve spent seven years running boutique studio operations before joining ABC Glofox, where she works with studio owners on launch planning and retention. Connect on LinkedIn.',
);

export default {
  example: figma.code`<AuthorBio avatarInitials="${avatarInitials}" name="${name}" role="${role}" bio="${bio}" />`,
  imports: ['import { AuthorBio } from "src/components/AuthorBio"'],
  id: 'author-bio',
  metadata: { nestable: true },
};
