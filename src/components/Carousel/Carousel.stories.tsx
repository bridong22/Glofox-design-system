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
  { alt: 'Studio owner using Glofox' },
  { alt: 'Gym brand dashboard' },
  { alt: 'Growing fitness business' },
  { alt: 'Class-led session' },
  { alt: 'Independent studio' },
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
