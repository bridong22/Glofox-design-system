import type { Meta, StoryObj } from '@storybook/react';
import { AvatarBadge } from './AvatarBadge';

const meta: Meta<typeof AvatarBadge> = {
  title: 'Components/AvatarBadge',
  component: AvatarBadge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AvatarBadge>;

export const Initials: Story = {
  args: {
    initials: 'KO',
  },
};

export const Image: Story = {
  args: {
    src: 'https://picsum.photos/id/64/56/56',
    alt: "komo studio's logo",
  },
};
