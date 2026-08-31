import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const items = [
  { category: 'Experience', title: 'The Best Gym Management Software 2026, Reviewed & Compared' },
  { category: 'Studio', title: 'How Reform Studio Hit Break-Even in 14 Months' },
  { category: 'Gym', title: 'Growing a Multi-Location Gym Brand with Glofox' },
  { category: 'Guides', title: 'Class-Led Fitness: A Buyer’s Guide' },
  { category: 'Experience', title: 'Independent Studios: Launch Playbook' },
];

export const Default: Story = {
  args: {
    items,
  },
};

export const SingleItem: Story = {
  args: {
    items: [items[0]],
  },
};
