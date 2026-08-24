import type { Meta, StoryObj } from '@storybook/react';
import { ResourceCardGrid } from './ResourceCardGrid';

const meta: Meta<typeof ResourceCardGrid> = {
  title: 'Components/ResourceCardGrid',
  component: ResourceCardGrid,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ResourceCardGrid>;

export const Default: Story = {
  args: {
    title: 'Blog',
    linkLabel: 'See All',
    href: '#',
    cards: [
      { title: 'How to Manage Gym Memberships Like a Pro', category: 'Business Tips', href: '#' },
      { title: 'How to Manage Gym Memberships Like a Pro', category: 'Business Tips', href: '#' },
      { title: 'How to Manage Gym Memberships Like a Pro', category: 'Business Tips', href: '#' },
    ],
  },
};
