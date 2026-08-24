import type { Meta, StoryObj } from '@storybook/react';
import { CategoryIconBadge } from './CategoryIconBadge';

const meta: Meta<typeof CategoryIconBadge> = {
  title: 'Components/CategoryIconBadge',
  component: CategoryIconBadge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CategoryIconBadge>;

export const Blog: Story = {
  args: {
    icon: 'grid',
    children: 'Blog',
  },
};

export const Podcast: Story = {
  args: {
    icon: 'mic',
    children: 'Podcast',
  },
};
