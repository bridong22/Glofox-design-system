import type { Meta, StoryObj } from '@storybook/react';
import { CarouselTag } from './CarouselTag';

const meta: Meta<typeof CarouselTag> = {
  title: 'Components/CarouselTag',
  component: CarouselTag,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CarouselTag>;

export const Default: Story = {};

export const BookingIncrease: Story = {
  args: {
    score: '32%',
    description: 'Increase in online bookings',
  },
};
