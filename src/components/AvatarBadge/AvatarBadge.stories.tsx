import type { Meta, StoryObj } from '@storybook/react';
import { AvatarBadge } from './AvatarBadge';

const meta: Meta<typeof AvatarBadge> = {
  title: 'Components/AvatarBadge',
  component: AvatarBadge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AvatarBadge>;

export const Logo: Story = {
  args: {
    type: 'logo',
  },
};

export const Initials: Story = {
  args: {
    type: 'initials',
    initials: 'MS',
  },
};

export const Image: Story = {
  args: {
    src: 'https://picsum.photos/id/64/56/56',
    alt: "komo studio's logo",
  },
};
