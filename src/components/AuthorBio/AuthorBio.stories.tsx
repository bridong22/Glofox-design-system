import type { Meta, StoryObj } from '@storybook/react';
import { AuthorBio } from './AuthorBio';

const meta: Meta<typeof AuthorBio> = {
  title: 'Components/AuthorBio',
  component: AuthorBio,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof AuthorBio>;

export const Default: Story = {};

export const CustomAuthor: Story = {
  args: {
    avatarInitials: 'JW',
    name: 'Jordan Wells',
    role: 'Owner, Reform Studio',
    bio: 'Jordan opened Reform Studio in 2023 and writes about the operational side of running a boutique fitness business.',
  },
};
