import type { Meta, StoryObj } from '@storybook/react';
import { CarouselArrow } from './CarouselArrow';

const meta: Meta<typeof CarouselArrow> = {
  title: 'Components/CarouselArrow',
  component: CarouselArrow,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CarouselArrow>;

export const Prev: Story = {
  args: {
    direction: 'prev',
  },
};

export const Next: Story = {
  args: {
    direction: 'next',
  },
};

export const Disabled: Story = {
  args: {
    direction: 'prev',
    disabled: true,
  },
};
