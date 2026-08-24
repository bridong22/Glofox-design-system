import type { Meta, StoryObj } from '@storybook/react';
import { BlogResourceCard } from './BlogResourceCard';

const meta: Meta<typeof BlogResourceCard> = {
  title: 'Components/BlogResourceCard',
  component: BlogResourceCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BlogResourceCard>;

export const Default: Story = {
  args: {
    type: 'blog',
    category: 'Business Tips',
    title: 'How to Manage Gym Memberships Like a Pro',
    href: '#',
  },
};
